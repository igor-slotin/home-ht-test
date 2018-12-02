import React, { Component } from 'react';
import { observer } from 'mobx-react'

import Label from '../../components/Label';
import Input from '../../components/InputField';
import Form from '../../components/Form'
import Store, { Tabs } from '../../../../store/CollectedDataStore';

@observer
export default class Email extends Component {
  render() {
    return (
      <Form>
        <Label>
          Put your email
        </Label>
        <Input type="email" 
          name="email" 
          value={Store.email} 
          onChange={Store.handleParamChanged(Tabs.email)}/>
      </Form>
    )
  }
}