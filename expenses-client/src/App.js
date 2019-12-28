import React from 'react';


class App extends React.Component {

  // )
// .then(resp => resp.json())
// .then(data => console.log(data))

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/accounts', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(data => console.log(data))

  }
  render() {
      return (
        <div className="App">
            App
        </div>
      );
    }
  }


export default App;
