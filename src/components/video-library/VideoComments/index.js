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

    let metaTag = document.querySelector('meta[name="discourse-username"]');
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.name = 'discourse-username';
      document.getElementsByTagName('head')[0].appendChild(metaTag); // Append to head to avoid duplicating if component re-renders
    }
    metaTag.content = 'Darrell-Thobe';

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
