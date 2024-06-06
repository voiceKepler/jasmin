import React from 'react'

function BlogImgCard({imgUrl, title, paragraph}) {
  return (
    <div className='w-50'>
      <div>
        <img src={imgUrl} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{paragraph}</p>
    </div>
  )
}

export default BlogImgCard