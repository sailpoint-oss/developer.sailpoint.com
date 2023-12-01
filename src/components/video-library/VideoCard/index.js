import React from 'react';


export default function VideoCard({
    thubnail,
    title,
    body
  }) {
  return (
  <section>
    <a>
        <img src={thubnail}></img>
    </a>

    <section>
        <h5>{title}</h5>
        <p>{body}</p>
    </section>

  </section>
  );
}
