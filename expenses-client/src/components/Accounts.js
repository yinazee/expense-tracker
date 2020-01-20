import React from 'react'
import Account from './Account'

const Accounts = (props) => {


    return (
      <div>
         {props.accounts.map(account =>
           <li key={account.id}><Account account={account}/></li> )}

      </div>
    )

  }




export default Accounts
