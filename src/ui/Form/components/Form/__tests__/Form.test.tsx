import Form from '../Form.view';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import InputField from '../../InputField'
import { Button } from '../../../../../commonComponents/Button';
import { CollectedDataStore } from '../../../../../store/CollectedDataStore';

describe("Form test", () => {
  let snapshot;
  it('renders correctly', () => {
    const store = new CollectedDataStore();
    snapshot = renderer.create(
    <Form store={store}>
      <InputField/>
    </Form>)
  })

  it("Should match snapshot", () => {
    const tree = snapshot.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it ("Should have submit button", () => {
    const store = new CollectedDataStore();
    const formUi = shallow(<Form store={store}/>);
    expect(formUi.find(Button)).toHaveLength(1);
  })

  it ("Should have input element as a child button", () => {
    const store = new CollectedDataStore();
    const formUi = shallow(
    <Form store={store}>
      <InputField/>
    </Form>);
    expect(formUi.find(InputField)).toHaveLength(1);
  });

  it ('Should call set next tab action in store', () => {
    const store = new CollectedDataStore();
    const mockedFunction = jest.fn();
    store.setNextTab = mockedFunction;
    const formUi = mount(
      <Form store={store}>
        <InputField/>
      </Form>
    );
    formUi.find(Button).first().simulate('submit');
    expect(mockedFunction).toHaveBeenCalled();
  });

  it ('Button text should be "Next step"', () => {
    const store = new CollectedDataStore();
    const formUi = mount(
      <Form store={store}>
        <InputField/>
      </Form>
    );
    expect(formUi.find(Button).first().text()).toBe("Next step");
  });

  it ('Button text should be "Submit params"', () => {
    const store = new CollectedDataStore();
    store.isLastStep = true;
    const formUi = mount(
      <Form store={store}>
        <InputField/>
      </Form>
    );
    expect(formUi.find(Button).first().text()).toBe("Submit params");
  })
})