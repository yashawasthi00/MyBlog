import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Card from './Card';

const Container = () => {
    const query=useStaticQuery(graphql`
    query MyQuery {
        allAirtable {
          nodes {
            data {
              Description
              yearOfRelease
              Title
              image {
                url
              }
            }
          }
        }
      }
    `);
    const data=query.allAirtable.nodes;
    
  return (
    <div style={{marginBottom:"20px",display:"flex" ,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        {data.map((blog,key)=>{
            return <Card blog={blog} key={key}/>
        })}
    </div>
  )
}

export default Container

