import React from 'react'
// import {Redirect} from 'react-router-dom'
// import AccountEdit from './AccountEdit'

// import TransactionsContainer from '../containers/TransactionsContainer'

const Account = (props) => {

  console.log("props:", props.account)
  // let account = props.accounts[props.match.params.id - 1]


  console.log("account:", account)
  return (

    <div>
      <h2>
        {account ? account.name : null} - {account ? account.balance : null}
      </h2>

      <h4>Edit Account</h4>

    </div>
  )


}

export default Account
