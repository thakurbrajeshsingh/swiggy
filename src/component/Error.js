import React from 'react'
import {useRouteError} from "react-router-dom"

const Error = () => {
    const err = useRouteError()
  return (
    <div>Error {err}</div>
    
  )
}

export default Error