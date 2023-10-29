import React from 'react'

const Input = ({id, label, ...props}) => {
    console.log('props', props)
  return (
    <div style={{margin: '1rem 0'}}>
        <label htmlFor={id}>{label}</label>
        <input id={id} type="text" {...props} />
    </div>
  )
}

export default Input