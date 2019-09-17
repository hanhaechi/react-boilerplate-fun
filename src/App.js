import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World.</h1>
      </div>
    )
  }
}

export default hot(module)(App)
// same as saying const hotFunc = hot(module)
// export default hotFunc(App)
