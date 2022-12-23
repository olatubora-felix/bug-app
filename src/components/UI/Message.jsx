import React from 'react'

const Message = ({ text, className }) => {
  return (
    <div className="mx-auto container my-4 text-2xl">
      <h1 className={className}>{text}</h1>
    </div>
  )
}

export default Message
