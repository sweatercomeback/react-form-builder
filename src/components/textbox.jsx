import React from 'react';

export default class Textbox extends React.Component {
    render() {
        const field = this.props.field;
        return  <div className='form-group' >
            <label>{field.label}</label>
            <input className='form-control' id={field.key} name={field.key} type='text' />
          </div>
    }
}