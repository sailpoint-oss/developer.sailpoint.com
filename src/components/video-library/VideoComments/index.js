import React, {useEffect} from 'react';

const DiscourseEmbed = () => {
  useEffect(() => {
    // window.DiscourseEmbed = {
    //   discourseUrl: 'https://developer.sailpoint.com/discuss/',
    //   topicId: 22376,
    // };

     window.DiscourseEmbed = {
      discourseUrl: 'https://developer.identitysoon.com/discuss',
      topicId: 627,
    };

    const d = document.createElement('script');
    d.type = 'text/javascript';
    d.async = true;
    d.src = window.DiscourseEmbed.discourseUrl + 'javascripts/embed.js';

    const container = document.getElementById('discourse-comments');
    if (container) {
      container.appendChild(d);
    }

    return () => {
      // Clean up the script when the component unmounts
      if (container && d && d.parentNode) {
        container.removeChild(d);
      }
    };
  }, []);

  return <div id="discourse-comments"></div>;
};

export default DiscourseEmbed;
