import { observable, runInAction, action, computed } from 'mobx';
import { find } from 'lodash';

import { Router } from '../../../routes';
import DataStore from '../../store/CollectedDataStore';

class ResultUIStore {
  @observable
  isLoaded: boolean = false;

  @observable
  loadingProgress: number = 0;

  timerId: any;

  @computed
  get collectedInfo() {
    if (DataStore.isSubmited) {
      return {
        fullName: DataStore.fullName,
        email: DataStore.email,
        phoneNumber: DataStore.phoneNumber,
        selectedCost: find(DataStore.costOptions, {key: DataStore.selectedCost})
      }
    }
    return {};
  }

  @action
  startCollectData = async () => {
    this.isLoaded = false;
    this.loadingProgress = 0;
    await Router.pushRoute('/');
  }

  @action
  loadData = () => {
    this.timerId = setInterval(() => {
      if (this.loadingProgress < 100) {
        runInAction(() => {
          this.loadingProgress += 10;
        });
      } else {
        this.isLoaded = true;
        if (this.timerId) {
          clearInterval(this.timerId);
        }
      }
    }, 100)
  }
}

const store = new ResultUIStore();
export default store;