import React from 'react'
import { Link } from '../../../components/Link/Link'

export const BlogFeedPagination = ({ prev, next }) => (
  <div>
    {prev && <Link to={`/blog/${prev !== 1 ? prev : ''}`}>Prev</Link>}
    {next && <Link to={`/blog/${next}`}>Next</Link>}
  </div>
)
