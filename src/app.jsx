import React from 'react';
import _ from 'lodash';
import $ from 'jquery';
import 'form-serializer';

import '../styles/index.scss';

import { getForm } from './services/formService';

import Select from './components/select';
import Textbox from './components/textbox';
export default class App extends React.Component {
  
  constructor(props) {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderField(field) {
    let comp = Textbox;
    switch(field.type.toLowerCase()) {
      case 'select':
        comp = Select;
        break;
      default:
        comp = Textbox;
        break;
    }
    return React.createElement(comp, {field: field, key: field.key});
  }

  renderFields(fields) {
    const fieldSet = _.chain(fields)
    .sortBy(['order'])
    .map((field) => {
      return this.renderField(field);
    })
    .value();
    return (
      <div>{fieldSet}</div>
    );
  }

  objectifyForm(form) {
    return $(form).serializeObject();
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.objectifyForm(e.currentTarget))
    return false;
  }

  render() {
    const form = getForm(1);
    const fields = this.renderFields(form.fields);
    return (
      <form id="main-form" onSubmit={this.handleSubmit} >
        {fields}
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}
