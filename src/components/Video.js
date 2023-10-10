import React from 'react';

export default function Video({ children, source, container = "youtube" }) {

  let html = <iframe
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


  if (container === "vidyard") {
    html = <iframe class="vidyard_iframe"
      style={{
        width: '100%',
        aspectRatio: '16/9',
      }}
      title="Authoring - Create New Sheets"
      src={source}
      scrolling="no" 
      frameborder="0" 
      allowtransparency="true" 
      allowfullscreen>

      </iframe>

  }

  return (
    html

  )





}