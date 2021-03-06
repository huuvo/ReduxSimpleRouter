import React, { Component } from  'react';
import { Field, reduxForm } from 'redux-form';
class PostsNew extends Component {

  renderField (field) {
    const {meta: {touched,error }} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-group" type="text"
          {...field.input}
          />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
  const { handleSubmit } = this.props;

    return (
    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
      <Field
          label="Title For Post"
          name="title"
          component={this.renderField}
      />
      <Field
          label="Categories"
          name="categories"
          component={this.renderField}
      />
      <Field
          label="Post Content"
          name="content"
          component={this.renderField}
      />

      <button type="submit" className="btn btn-danger">Submit</button>
    </form>
    );
  }
}

function validate(values) {

  const error = {};

  if (!values.title) {
    error.title = "Enter a title"
  }
  if (!values.categories) {
    error.categories = "Enter some categories"
  }
  if (!values.content) {
    error.content = "Enter some content "

  }


  return error;
}

export default reduxForm({
  validate,
  form : 'PostsNewForm'
})(PostsNew);
