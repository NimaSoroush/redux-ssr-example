import React, {Component} from 'react'
import { connect } from 'react-redux'
import Card from './card'


class App extends Component {
  render() {
    return (
       <div>
         <Card />
       </div>
    );
  }
}
 
export default connect()(App)


//export default App;
