import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Raymond Garcia</strong>, a lover of the front end, who doesn't neglect the back end.{' '}
          <a href="https://www.linkedin.com/in/raymond-garcia-703083b2/">
            Add me on Linkedin
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
