import React from 'react'
import Account from './Account'

const Accounts = (props) => {


    return (
      <div>
      <li key={account.id}>
       <Link to={`/accounts/${account.id}`}>{account.name} - ${account.balance}</Link>
     </li> )}

      </div>
    )

  }




export default Accounts
