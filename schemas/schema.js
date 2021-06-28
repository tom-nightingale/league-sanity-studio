import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import singleHompage from './singleHomepage'
import services from './services'
import projects from './projects'
import posts from './posts'
import reviews from './reviews'

export default createSchema({
  name: 'default',
  
  types: schemaTypes.concat([
    singleHompage,
    services,
    projects,
    posts,
    reviews
  ]),
})
