export const calculateReadTime = slices => {
  let articleContent = ''

  slices.map(item => {
    if (item.slice_type !== 'text') return
    articleContent += `${articleContent} ${item.primary.content.text}`
  })

  return Math.ceil(articleContent.split(' ').length / 180)
}
