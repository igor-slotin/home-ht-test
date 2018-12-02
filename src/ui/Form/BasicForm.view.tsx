import React, { Component } from 'react';
import { observer } from 'mobx-react'

import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

import Store from '../../store/CollectedDataStore';

import { 
  Container,
  ContentWrapper
} from './BasicForm.style'


@observer
export default class BasicFormView extends Component {
  renderCurrentTab = () => {
    const CurrentTab = Store.currentTab.component;
    return CurrentTab && <CurrentTab />
  }
  render () {
    return (
      <Container>
        <Progress percent={Store.progress} />
        <ContentWrapper>
          {this.renderCurrentTab()}
        </ContentWrapper>
      </Container>
    )
  }
}