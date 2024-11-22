import React from 'react'

const Title = ({title , text}) => {
  return (
    <section className='text-center'>
     <h1 className='text-3xl font-medium  font-mono '> {title} </h1>
      <p className='text-md text-slate-500'> {text}</p>
    </section>
  )
}

export default Title
