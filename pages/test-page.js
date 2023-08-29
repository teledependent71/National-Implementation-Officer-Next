import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/thq-react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - National Implementation Officer</title>
          <meta
            property="og:title"
            content="test-page - National Implementation Officer"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_5k3o6d) => (
            <>
              <h1>{context_5k3o6d?.name}</h1>
            </>
          )}
          initialData={props.context5k3o6dProp}
          persistDataDuringLoading={true}
          key={props?.context5k3o6dProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  const context5k3o6dProp = await testPageResource({
    ...context?.params,
  })
  return {
    props: {
      context5k3o6dProp: context5k3o6dProp?.data?.[0],
    },
  }
}
