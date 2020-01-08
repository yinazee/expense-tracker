import React from 'react'

class AccountInput extends React.Component {

  state = {
    name: '',
    balance: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form>
          <label>Checking Account Name:</label>
          <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
          <br/>
          <label>Checking Account Balance:</label>
          <input type="text" placeholder="Balance" name="balance" onChange={this.handleChange}/>
        </form>
      </div>
    )
  }
}


export default AccountInput
