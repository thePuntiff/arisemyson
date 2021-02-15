const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // 404 - Not Found
  createPage({
    path: '/404',
    component: path.resolve('./src/templates/not-found-template.js'),
  })

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('./src/templates/blog-post-template.js')
    const pageTemplate = path.resolve('./src/templates/page-template.js')
    const categoryTemplate = path.resolve("src/templates/categories.js")

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    type
                    url
                  }
                }
              }
            }
            categoriesGroup: allMarkdownRemark(limit: 2000) {
              group(field: frontmatter___categories) {
                fieldValue
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Get all the markdown files
        const edges = result.data.allMarkdownRemark.edges

        // Generate pages
        const pages = _.filter(edges, (val, key, obj) => {
          return _.get(val, 'node.frontmatter.type') === 'page'
        })
        console.log(`pages count: ${pages.length}`)
        _.each(pages, (post, index) => {
          createPage({
            path: post.node.fields.slug,
            component: pageTemplate,
            context: {
              slug: post.node.fields.slug,
            },
          })
        })

        // Generate posts
        const posts = _.filter(edges, (val, key, obj) => {
          return _.get(val, 'node.frontmatter.type') === 'post'
        })
        console.log(`posts count: ${posts.length}`)
        _.each(posts, (post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node

          createPage({
            path: post.node.fields.slug,
            component: postTemplate,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })

        // Generate notes
        const notes = _.filter(edges, (val, key, obj) => {
          return _.get(val, 'node.frontmatter.type') === 'note'
        })
        console.log(`notes count: ${notes.length}`)
        _.each(notes, (post, index) => {
          const previous =
            index === notes.length - 1 ? null : notes[index + 1].node
          const next = index === 0 ? null : notes[index - 1].node

          createPage({
            path: post.node.fields.slug,
            component: postTemplate,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })

        // Extract tag data from query
        const categories = result.data.categoriesGroup.group

        // Make tag pages
        categories.forEach(category => {
          createPage({
            path: `/categories/${_.kebabCase(category.fieldValue)}/`,
            component: categoryTemplate,
            context: {
              category: category.fieldValue,
            },
          })
        })        

        createPage({
          path: `/notes`,
          component: path.resolve('./src/templates/note-listing-template.js'),
        })
      })
    )
  })
}

module.exports = createPages
