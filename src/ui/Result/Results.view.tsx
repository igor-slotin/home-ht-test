import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { isEmpty } from 'lodash';

import UIStore from './uiStore';
import { Button } from '../../commonComponents/Button';
import { 
  Container,
  ContentWrapper,
  ListItem,
  ButtonWrapper
} from './Results.style'

@observer
export default class ResultsView extends Component {
  componentDidMount() {
    UIStore.loadData();
  }

  renderContent = () => {
    return (
      <div>
        <ButtonWrapper>
          <Button onClick={UIStore.startCollectData}>Go to data form</Button>
        </ButtonWrapper>
        {!isEmpty(UIStore.collectedInfo) && (
          <ul>
            <ListItem>Full name: {UIStore.collectedInfo.fullName}</ListItem>
            <ListItem>Email: {UIStore.collectedInfo.email}</ListItem>
            <ListItem>Phone number: {UIStore.collectedInfo.phoneNumber}</ListItem>
            <ListItem>Salary: {UIStore.collectedInfo.selectedSalary.value}</ListItem>
          </ul>
        )}
      </div>
    )
  }
  render() {
    return (
      <Container>
        <ContentWrapper>
          {UIStore.isLoaded ? this.renderContent() : (
            <Progress type="circle" percent={UIStore.loadingProgress} />
          )}
          
        </ContentWrapper>
      </Container>);
  }
}