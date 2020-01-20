import React from 'react'

const Account = (props) => {

  return (
    <div>
      <li key={props.account.id}>{props.account.name} - {props.account.balance}</li>
    </div>
  )

}

export default Account
