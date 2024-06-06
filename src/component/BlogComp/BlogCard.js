import React from 'react'

function BlogCard({title, paragraph, blogLink}) {
  return (
    <div className='w-50'>
      <h3>{title}</h3>
      <p>{paragraph}</p>
      <a className='color-red underline-none' href={blogLink}>Read More</a>
    </div>
  )
}

export default BlogCard