import { observable, computed, action } from 'mobx'
import FullNameTab from '../ui/Form/tabs/FullName';
import EmailTab from '../ui/Form/tabs/Email';
import PhoneNumberTab from '../ui/Form/tabs/PhoneNumber';
import SalaryView from '../ui/Form/tabs/Salary';
import { Router } from '../../routes'

export enum Tabs {
  fullName = 0,
  email = 1,
  phoneNumber = 2,
  salary = 3
}

const tabsMap = {
  [Tabs.fullName]: {
    component: FullNameTab,
    stepNumber: 0,
    storeKey: 'fullName'
  },
  [Tabs.email]: {
    component: EmailTab,
    stepNumber: 1,
    storeKey: 'email'
  },
  [Tabs.phoneNumber]: {
    component: PhoneNumberTab,
    stepNumber: 2,
    storeKey: 'phoneNumber'
  },
  [Tabs.salary]: {
    component: SalaryView,
    stepNumber: 3,
    storeKey: 'salary'
  }
}

const options = [
  {
    key: '0',
    value: '0 - 1.000'
  }, {
    key: '1',
    value: '1.000 - 2.000'
  }, {
    key: '2',
    value: '2.000 - 3.000'
  }, {
    key: '3',
    value: '3.000 - 4.000'
  }, {
    key: '4',
    value: 'Mehr als 4.000'
  }
]

export class CollectedDataStore {
  @observable
  fullName: string = '';

  @observable
  email: string = ''

  @observable
  phoneNumber: string = ''

  @observable
  salaryOptions = options;

  @observable
  selectedSalary = '0'

  @observable
  step: Tabs = Tabs.fullName;

  @observable
  isLastStep: boolean = false;

  @observable
  isSubmited: boolean = false;

  @computed
  get currentTab() {
    return tabsMap[this.step]
  }

  @computed
  get progress() {
    if (this.isLastStep && this.isSubmited) {
      return 100;
    }
    return (this.currentTab.stepNumber / this.totalSteps) * 100
  }

  private totalSteps = 4;
  
  @action
  setNextTab = () => {
    if (this.isLastStep) {
      this.submitData();
      return;
    }
    const key = tabsMap[this.step].storeKey
    if (this[key] !== '') {
      this.step = this.step + 1;
      this.isLastStep = this.step === (this.totalSteps - 1);
    }
  }

  @action
  setSelectedSalary = (salary) => {
    this.selectedSalary = salary;
  }

  @action
  submitData = async () => {
    this.isSubmited = true;
    setTimeout(async () => {
      await Router.pushRoute('/result');
    }, 200)
  }
  
  @action
  handleParamChanged = (field: Tabs) => (event) => {
    const key = tabsMap[field].storeKey
    this[key] = event.target.value;
  }

  @action
  resetStep = () => {
    this.isLastStep = false;
    this.isSubmited = false;
    this.step = Tabs.fullName;
  }
}

const store = new CollectedDataStore();

export default store;