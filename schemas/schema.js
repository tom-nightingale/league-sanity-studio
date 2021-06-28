import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import singleHompage from './singleHomepage'
import singleContact from './singleContact'
import services from './services'
import projects from './projects'
import posts from './posts'

export default createSchema({
  name: 'default',
  
  types: schemaTypes.concat([
    singleHompage,
    services,
    projects,
    posts,
    singleContact,
  ]),
})
