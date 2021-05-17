import {Panel} from '../Components'
import {connect} from 'react-redux'



const Panels = ({items}) => items.map((item, index) => <Panel key={index} {...item}/>);


export default  connect(({panels}) => panels)(Panels)