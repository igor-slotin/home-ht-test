import React, { Component } from 'react';
import { observer } from 'mobx-react'

import Label from '../../components/Label';
import Input from '../../components/InputField';
import Form from '../../components/Form'
import Store, { Tabs } from '../../../../store/CollectedDataStore';

@observer
export default class FullNameTabView extends Component {
  render() {
    return (
      <Form>
        <Label>
          Put your full name
        </Label>
        <Input type="text" 
          name="fullName" 
          value={Store.fullName} 
          onChange={Store.handleParamChanged(Tabs.fullName)}/>
      </Form>
    )
  }
}