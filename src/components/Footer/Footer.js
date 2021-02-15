import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

const Footer = () => {
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          site {
            buildTime(formatString: "DD/MM/YYYY")
            year: buildTime(formatString: "YYYY")
          }
        }
      `}
      render={data => (
        <footer className={'center'}>
          &copy; {data.site.year} <Link to="/"> - arise my son</Link>
          <br></br>
        </footer>
      )}
    />
  )
}

export default Footer
