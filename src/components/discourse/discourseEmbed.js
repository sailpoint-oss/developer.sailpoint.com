import React, { useEffect } from 'react';

const DiscourseEmbed = ({ discourseEmbedUrl }) => {
  useEffect(() => {
    // Ensure discourseUrl is correct and ending with '/'
    const discourseUrl = 'https://devstage.sailpoint.com/';
    
    // Ensure the script source URL is correct
    const scriptSrc = `${discourseUrl}javascripts/embed.js`;

    // Set up Discourse Embed
    window.DiscourseEmbed = { discourseUrl, topicId: 31033, showComments: false };

    // Create and append meta tag for discourse username
    const metaTag = document.createElement('meta');
    metaTag.name = 'discourse-username';
    metaTag.content = 'Darrell-Thobe';
    metaTag.setAttribute('referrerpolicy', 'no-referrer-when-downgrade'); // Set referrerpolicy
    document.head.appendChild(metaTag);

    // Create and append Discourse embed script
    const scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.async = true;
    scriptTag.src = scriptSrc;
    document.body.appendChild(scriptTag); // Append to body

    // Cleanup on component unmount
    return () => {
      scriptTag.remove(); // Remove script tag
      if (metaTag.parentNode) {
        metaTag.parentNode.removeChild(metaTag); // Remove meta tag
      }
    };
  }, []); // Dependency array left empty if discourseEmbedUrl is not used

  return <div id="discourse-comments"></div>; // Container for the Discourse comments
};

export default DiscourseEmbed;
