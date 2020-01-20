import React from 'react'
import Account from './Account'

const Accounts = (props) => {


    return (
      <div>
         {props.accounts.map(account =>
          <Account account={account}/> )}

      </div>
    )

  }




export default Accounts
