import React from 'react'

import Button from '../Button'

const Topbar = props => {
  const { buttonName } = props

  return (
    <>
      <p>Topbar</p>
      <Button name={buttonName} />
    </>
  )
}

export default Topbar