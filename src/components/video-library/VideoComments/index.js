import React, {useEffect} from 'react';

const DiscourseEmbed = ({discourseEmbedUrl}) => {
  useEffect(() => {
    window.DiscourseEmbed = {
      discourseUrl: 'https://developer.identitysoon.com/discuss/',
      discourseEmbedUrl: 'https://d1vrqvoe9hgpx0.cloudfront.net/videos/' + discourseEmbedUrl,
      // topicId: 627,
    };

    const meta = document.createElement('meta');
    meta.name = 'discourse-username';
    meta.content = 'Darrell-Thobe';
    document.getElementsByTagName('head')[0].appendChild(meta);

    const d = document.createElement('script');
    d.type = 'text/javascript';
    d.async = true;
    d.src = window.DiscourseEmbed.discourseUrl + 'javascripts/embed.js';

    const container = document.getElementById('discourse-comments');
    if (container) {
      container.appendChild(d);
    }

    var iframe = document.getElementById('discourse-embed-frame');
    if (iframe && iframe.contentWindow && iframe.contentWindow.document) {
      var style = document.createElement('style');
      style.textContent = 'html { padding: 2% }';
      iframe.contentWindow.document.head.appendChild(style);
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
