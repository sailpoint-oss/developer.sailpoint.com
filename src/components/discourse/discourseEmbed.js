import React, { useEffect } from 'react';

const DiscourseEmbed = ({ discourseEmbedUrl }) => {
  useEffect(() => {
    const discourseUrl = 'https://devstage.sailpoint.com/';
    const embedUrl = `http://localhost:4201`;

    // Set up Discourse Embed
    window.DiscourseEmbed = { discourseUrl, topicId: 31033, showComments: false };

    // Create and append meta tag for discourse username
    const metaTag = document.createElement('meta');
    metaTag.name = 'discourse-username';
    metaTag.content = 'darrell.thobe';
    metaTag.referrer = 'no-referrer-when-downgrade'; // Prevents the browser from sending the referrer header when navigating to another page from the current page
    document.head.appendChild(metaTag);

    // Create and append Discourse embed script
    const scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.async = true;
    scriptTag.src = `${discourseUrl}plugins/sailpoint-embed/javascripts/embed.js`;
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