import React from 'react'
import Layout from './Layout'

const Loading = () => {
  return (
    <>
      <Layout>
        <div class='spinner'>
          <div class='bounce1' />
          <div class='bounce2' />
          <div class='bounce3' />
        </div>
      </Layout>
    </>
  )
}

export default Loading
