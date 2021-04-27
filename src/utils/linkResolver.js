const linkResolver = doc => {
  if (doc.type === 'page') return `/${doc.uid}`
  if (doc.type === 'blog_category') return `/blog/category/${doc.uid}`
  if (doc.type === 'blog_list') return `/blog/`
  if (doc.type === 'blog_post') return `/blog/${doc.uid}`
  if (doc.type === 'pricing_page') return `/pricing/`

  return '/'
}

module.exports = linkResolver
