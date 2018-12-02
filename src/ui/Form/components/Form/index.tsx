import FormView from './Form.view'
import Store from '../../../../store/CollectedDataStore'

export default (props) => (<FormView { ...props } store={Store}/>)