import React, { useEffect } from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import { useSiteMetadata } from '../hooks'
import { Helmet } from 'react-helmet/es/Helmet'

const BlogPostTemplate = ({ data, pageContext }) => {
  const { title: siteTitle } = useSiteMetadata()
  const post = data.markdownRemark
  const { previous, next } = pageContext

  useEffect(() => {
    const deckdeckgoHighlightCodeLoader = require('@deckdeckgo/highlight-code/dist/loader')
    deckdeckgoHighlightCodeLoader.defineCustomElements(window).catch(e => {
      console.log(e)
    })
  })

  return (
    <Layout
      title={`${post.frontmatter.title} | ${siteTitle}`}
      description={post.excerpt}
    >
      <Helmet>
        <script type="application/ld+json">
          {`{
            "@context": "http://schema.org",
            "@type": "WebPage",
            "name": "${post.frontmatter.title} | ${siteTitle}",
            "url": "${'https://arisemyson.com' + post.fields.slug}",
            "description": "${post.excerpt}"
          }`}
        </script>
      </Helmet>
      <div className={'content'}>
        <div className={'section-title'}>Blog Post</div>
        <article className={'h-entry'}>
          <h1 className={'p-name'}>{post.frontmatter.title}</h1>
          <div className={'meta'}>
            <span className={'dt-published'}>{post.frontmatter.date}</span> |  
            ~ {post.timeToRead} min read
          </div>
          <div
            className={'e-content'}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <div
            style={{
              display: 'none',
            }}
          >
            <a href={'https://arisemysoncom/'} className={'p-author h-card'}>
              arise my son
            </a>
            <p className={'p-summary'}>{post.excerpt}</p>
            <p className={'u-url'}>{'https://arisemyson.com' + post.fields.slug}</p>
          </div>
        </article>

        <hr />

        <div className={'socialize'}>
          <form
            id="comment-form"
            method="get"
            action="https://quill.p3k.io/"
            target="_blank"
          >
            <input type="hidden" name="dontask" value="1" />
            <input type="hidden" name="me" value="https://commentpara.de/" />
            <input
              type="hidden"
              name="reply"
              value={'https://arisemyson.com' + post.fields.slug}
            />
          </form>
          <a
            className={'button button-outline button-small'}
            target="_blank"
            href={`https://twitter.com/intent/tweet/?text=My%20thoughts%20on%20${'https://arisemyson.com' +
              post.fields.slug}`}
          >
            Tweet this post{' '}
          </a>
          <input
            form="comment-form"
            className={'button button-outline button-small'}
            type="submit"
            value="Write a comment"
          />{' '}
        </div>

        <hr />

        <div className={'prev-next'}>
          {previous && (
            <span>
              <strong>{'⏪'}</strong>{' '}
              <Link to={previous.fields.slug} rel="prev">
                {previous.frontmatter.title}
              </Link>
            </span>
          )}
          <br />
          {next && (
            <span>
              <strong>{'⏩'}</strong>{' '}
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title}
              </Link>{' '}
            </span>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        categories
        tags
      }
      fields {
        slug
      }
    }
  }
`
