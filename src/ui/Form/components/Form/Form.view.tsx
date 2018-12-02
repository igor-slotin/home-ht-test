import React, { Component } from 'react'
import { observer } from 'mobx-react';

import Store from '../../../../store/CollectedDataStore'

import { 
  Form,
  Button
 } from './Form.style'

 @observer
export default class FormView extends Component {
  render() {
    const { children } = this.props;

    return (
      <Form onSubmit={Store.setNextTab} action="javascript:void(0);">
        {children}
        <Button type="submit">{Store.isLastStep ? 'Submit params': 'Next step'}</Button>
      </Form>)
  }
}