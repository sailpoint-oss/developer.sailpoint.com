import React, { useEffect } from 'react';

const DiscourseEmbed = ({ discourseEmbedUrl }) => {
  useEffect(() => {
    const discourseUrl = 'https://developer.identitysoon.com/discuss/';
    const embedUrl = `https://d1vrqvoe9hgpx0.cloudfront.net/videos/${discourseEmbedUrl}`;

    // Set up Discourse Embed
    window.DiscourseEmbed = { discourseUrl, discourseEmbedUrl: embedUrl };

    // Create and append meta tag for discourse username
    const metaTag = document.createElement('meta');
    metaTag.name = 'discourse-username';
    metaTag.content = 'Darrell-Thobe';
    document.head.appendChild(metaTag);

    // Create and append Discourse embed script
    const scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.async = true;
    scriptTag.src = `${discourseUrl}javascripts/embed.js`;
    document.body.appendChild(scriptTag); // Append to body to avoid duplicating if component re-renders

    // Cleanup on component unmount
    return () => {
      scriptTag.remove(); // Remove script tag
      if (metaTag.parentNode) {
        metaTag.parentNode.removeChild(metaTag); // Remove meta tag if it has been appended
      }
    };
  }, [discourseEmbedUrl]); // Effect dependency array includes discourseEmbedUrl

  return <div id="discourse-comments"></div>; // Container for the Discourse comments
};

export default DiscourseEmbed;