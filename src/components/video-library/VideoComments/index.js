import React, {useEffect} from 'react';

const DiscourseEmbed = ({discourseEmbedUrl}) => {
  useEffect(() => {
    const discourseUrl = 'https://developer.identitysoon.com/discuss/';
    const embedUrl = `https://d1vrqvoe9hgpx0.cloudfront.net/videos/${discourseEmbedUrl}/index.html`;

    // Set up Discourse Embed
    window.DiscourseEmbed = {
      discourseUrl,
      discourseEmbedUrl: embedUrl,
      className: 'EMBEDDED_BODY',
    };

    // Create and append meta tag for discourse username

    const metaTag = document.createElement('meta');
    metaTag.name = 'discourse-username';
    metaTag.content = 'Darrell-Thobe'; // Replace with your Discourse username
    metaTag.setAttribute('discourse-embed-url', embedUrl); // Add attribute to meta tag for Discourse Embed URL
    metaTag.setAttribute('discourse-embed-class-name', 'EMBEDDED_BODY'); // Add attribute to meta tag for Discourse Embed class name (optional)
    metaTag.setAttribute('discourse-embed-title', 'SailPoint Developer Community'); // Add attribute to meta tag for Discourse Embed title (optional)
    metaTag.setAttribute('discourse-embed-description', 'The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.'); // Add attribute to meta tag for Discourse Embed description (optional)
    metaTag.setAttribute('discourse-embed-color', '#00A2E8'); // Add attribute to meta tag for Discourse Embed color (optional)
    document.getElementsByTagName('head')[0].appendChild(metaTag); // Append to head to avoid duplicating if component re-renders
    

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

  return (
    <>
      <meta name="discourse-username" content="Darrell-Thobe" />
      <meta name="discourse-embed-url" content={discourseEmbedUrl} />
      <div id="discourse-comments"></div>
    </>
  ); // Container for the Discourse comments
};

export default DiscourseEmbed;
