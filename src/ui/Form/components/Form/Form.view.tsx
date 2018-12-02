import React, { Component } from 'react'
import { observer } from 'mobx-react';

import { CollectedDataStore } from '../../../../store/CollectedDataStore'
import { Button } from '../../../../commonComponents/Button';

import { 
  Form,
 } from './Form.style'

 interface IProps {
   store: CollectedDataStore
 }

 @observer
export default class FormView extends Component<IProps> {
  render() {
    const { children, store } = this.props;
    return (
      <Form onSubmit={store.setNextTab} action="javascript:void(0);">
        {children}
        <Button type="submit">{store.isLastStep ? 'Submit params': 'Next step'}</Button>
      </Form>)
  }
}