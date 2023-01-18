import React from 'react'
import "./card.css"
const Card = (blog, key) => {

  return (
    <div className='card'>
        <img src={blog.blog.data.image[0].url}/>
        <h1 style={{margin:"5px 0"}}>{blog.blog.data.Title}</h1>
        <div><strong>Release Date : </strong><i style={{margin:"5px 0"}}>{blog.blog.data.yearOfRelease}</i></div>
        
        <p style={{margin:"5px 0"}}>{blog.blog.data.Description}</p>
    </div>
  )
}

export default Card