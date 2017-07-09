import React from 'react';

export default class Select extends React.Component {
    
    render() {
        const field = this.props.field;
        const options = _.map(field.options, (opt)=>{
            return (<option key={`${field.key}${opt.value}`} value={opt.value}>{opt.text}</option>)
        });
        return  <div className="form-group">
            <label>{this.props.field.label}</label>
          <select name={field.key} className='form-control'>{options}</select>
          </div>
    }
}