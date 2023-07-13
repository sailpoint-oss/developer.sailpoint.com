import React from 'react';

export default function Video({children, source})  {
return (
 <iframe 
    style={{
      width: '100%',
      aspectRatio: '16/9',
    }}
    src={source}
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; 
    autoplay; 
    clipboard-write; 
    encrypted-media; 
    gyroscope; 
    picture-in-picture; 
    web-share" 
    allowfullscreen
 ></iframe>
)
}