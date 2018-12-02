import React, { Component } from 'react';
import { observer } from 'mobx-react'

import Store from '../../store/CollectedDataStore';

import { 
  Container,
  ContentWrapper,
  ProgressBar
} from './BasicForm.style'


@observer
export default class BasicFormView extends Component {
  componentDidMount() {
    Store.resetStep();
  }
  renderCurrentTab = () => {
    const CurrentTab = Store.currentTab.component;
    return CurrentTab && <CurrentTab />
  }
  render () {
    return (
      <Container>
        <ProgressBar percent={Store.progress} />
        <ContentWrapper>
          {this.renderCurrentTab()}
        </ContentWrapper>
      </Container>
    )
  }
}