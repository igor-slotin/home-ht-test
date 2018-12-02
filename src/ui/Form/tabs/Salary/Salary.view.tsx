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
} from './Salary.style'

@observer
export default class SalaryView extends Component {
  render() {
    return (
      <Form>
        <Container>
          <Label>
              Choose Salary
          </Label>
          <Group onChange={ Store.setSelectedSalary } value={Store.selectedSalary}>
            {Store.salaryOptions.map(item => (
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