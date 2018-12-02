import React, { Component } from 'react';
import { observer } from 'mobx-react'

import Label from '../../components/Label';
import Input from '../../components/InputField';
import Form from '../../components/Form'
import Store, { Tabs } from '../../../../store/CollectedDataStore';

@observer
export default class PhoneNumberTabView extends Component {
  render() {
    return (
      <Form>
        <Label>
          Put your phone number
        </Label>
        <Input type="tel" 
          name="phoneNumber" 
          value={Store.phoneNumber} 
          onChange={Store.handleParamChanged(Tabs.phoneNumber)}/>
      </Form>
    )
  }
}