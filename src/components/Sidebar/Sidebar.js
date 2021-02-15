import React, { useEffect, useState } from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import IcEmail from '../../assets/svg/mail.inline.svg'
import IcTwitter from '../../assets/svg/twitter.inline.svg'
import IcLinkedin from '../../assets/svg/linkedin.inline.svg'
import IcGithub from '../../assets/svg/github.inline.svg'
import IcKeybase from '../../assets/svg/keybase.inline.svg'

const Sidebar = ({ data }) => {
  let websiteTheme

  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme
  }

  const [theme, setTheme] = useState(websiteTheme)

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => {
      setTheme(window.__theme)
    }
  }, [])

  return (
    <div className="sidebar center">
      <div className={'h-card'}>
        <StaticQuery
          query={graphql`
            query {
              profilePic: file(relativePath: { eq: "profile-pic.png" }) {
                childImageSharp {
                  fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          `}
          render={data => (
            <Link to={'/'}>
              <Img
                fluid={data['profilePic'].childImageSharp.fluid}
                alt={`arise my son`}
                className={'avatar'}
                placeholderClassName={'u-photo'}
              />
            </Link>
          )}
        />
        <hr />
        <a href="/" className={'p-name u-url'}>
          <h1>
            <small>arise my son</small>
          </h1>
        </a>
        <p className={'p-note text-center'}>
          👋 arise my son is a blog about Christian manhood. Learn more <Link to="/about/">here</Link>.
        </p>
        <nav>
        <ul>
            <li>
              <Link to="/categories/husband/">#husband</Link>
            </li>
            <li>
              <Link to="/categories/father/">#father</Link>
            </li>
            <li>
              <Link to="/categories/church/">#church</Link>
            </li>
            <li>
              <Link to="/categories/business/">#business</Link>
            </li>                        
          </ul>
        </nav>
        <div className={'social'}>
          <a href="https://twitter.com/zakaryrandall" title={'tweet me'} rel={'me'}>
            <IcTwitter aria-labelledby={'title'} />
          </a>
          <a
            href="https://www.linkedin.com/in/zak-randall/"
            title={'connect with me on linkedin'}
            rel={'me'}
          >
            <IcLinkedin aria-labelledby={'title'} />
          </a>
          <a
            href="https://github.com/thePuntiff"
            title={'follow me on github'}
            rel={'me'}
          >
            <IcGithub aria-labelledby={'title'} />
          </a>
          <a
            href="mailto:zarandall@gmail.com"
            title={'email arise my son'}
            rel={'me'}
            className={'u-email'}
          >
            <IcEmail aria-labelledby={'title'} />
          </a>
        </div>
      </div>
      <div className={'theme-switcher'}>
        <label htmlFor={'themeId'}>
          theme
          <br />
          <select
            id="themeId"
            value={theme}
            onChange={e => window.__setPreferredTheme(e.target.value)}
          >
            <option value="light">light</option>
            <option value="dark">dark</option>
            <option value="gruv-light">gruv-light</option>
            <option value="gruv-dark">gruv-dark</option>
          </select>
        </label>
      </div>
      <hr />
    </div>
  )
}

export default Sidebar
