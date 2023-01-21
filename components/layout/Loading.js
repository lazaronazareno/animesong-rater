import React from 'react'
import Layout from './Layout'

const Loading = () => {
  return (
    <>
      <Layout>
        <div className='spinner'>
          <div className='bounce1' />
          <div className='bounce2' />
          <div className='bounce3' />
        </div>
      </Layout>
    </>
  )
}

export default Loading
