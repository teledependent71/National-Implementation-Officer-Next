import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/thq-react-components'
import PropTypes from 'prop-types'

import authorsPageInitialProps678dbResource from '../../resources/authors-page-initial-props-678db'

const Authors = (props) => {
  return (
    <>
      <div className="authors-container">
        <Head>
          <title>Authors - National Implementation Officer</title>
          <meta
            property="og:title"
            content="Authors - National Implementation Officer"
          />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(AuthorsEntities) => (
                  <>
                    <div className="authors-container1">
                      <h1>{AuthorsEntities?.name}</h1>
                      <span>{AuthorsEntities?.name}</span>
                      <span>{AuthorsEntities?.id}</span>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.authorsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .authors-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .authors-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Authors.defaultProps = {
  authorsEntities: [],
}

Authors.propTypes = {
  authorsEntities: PropTypes.array,
}

export default Authors

export async function getStaticProps(context) {
  const response = await authorsPageInitialProps678dbResource({
    ...context?.params,
  })
  return {
    props: {
      authorsEntities: response,
      ...response?.meta,
    },
    revalidate: 60,
  }
}
