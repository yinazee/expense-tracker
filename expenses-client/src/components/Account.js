import React from 'react'

const Account = (props) => {

  console.log(props)

  let account = props.accounts[props.account.match.params.id]


  return (
    <div>
      <h2>
        {account ? account.name : null} - {account ? account.balance : null}
      </h2>
    </div>
  )

}

export default Account
