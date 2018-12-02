import React, { Component } from 'react';
import { observer } from 'mobx-react'
import { RadioGroup, RadioButton } from 'react-radio-buttons';

import Label from '../../components/Label';
import Form from '../../components/Form'
import Store, { Tabs } from '../../../../store/CollectedDataStore';
import { 
  Group, 
  Container,
  Button
} from './Cost.style'

@observer
export default class Email extends Component {
  render() {
    return (
      <Form>
        <Container>
          <Label>
              Choose Cost
          </Label>
          <Group onChange={ Store.setSelectedCost } value={Store.selectedCost}>
            {Store.costOptions.map(item => (
              <Button key={item.key} value={item.key}>
                {item.value}
            </Button>
            ))}
          </Group>
        </Container>
      </Form>
    )
  }
}