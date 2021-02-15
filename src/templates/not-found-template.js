import React from 'react'
import Layout from '../components/Layout'
import { useSiteMetadata } from '../hooks'

const NotFoundTemplate = () => {
  const { title, description } = useSiteMetadata()

  return (
    <Layout title={`Not Found - ${title}`} description={description}>
      <div className={'content'}>
        <div className={'section-title'}>404 - Not Found</div>
        <p className={'center'}>You hit a route that does not exist.</p>
        <p className={'center'}>Head back to the <a href={'/'}> home page.</a></p>
      </div>
    </Layout>
  )
}

export default NotFoundTemplate
