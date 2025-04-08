import React, { useEffect } from 'react';

// Define the props interface
interface DiscourseEmbedProps {
  discourseEmbedUrl: string;
  topicId: number;
}

const DiscourseEmbed: React.FC<DiscourseEmbedProps> = ({ discourseEmbedUrl, topicId }) => {
  useEffect(() => {
    const discourseUrl = 'https://developer.sailpoint.com/discuss/';
    const embedUrl = `https://d1vrqvoe9hgpx0.cloudfront.net/videos/${discourseEmbedUrl}/index.html`;

    // Ensure window.DiscourseEmbed is properly typed
    (window as any).DiscourseEmbed = {
      discourseUrl,
      topicId,
      className: 'EMBEDDED_BODY',
    };

    // Create and append meta tag for discourse username
    const metaTag = document.createElement('meta');
    metaTag.name = 'discourse-username';
    metaTag.content = 'Darrell'; // Replace with your Discourse username
    metaTag.setAttribute('discourse-embed-url', embedUrl);
    metaTag.setAttribute('discourse-embed-class-name', 'EMBEDDED_BODY');
    metaTag.setAttribute('discourse-embed-title', 'SailPoint Developer Community');
    metaTag.setAttribute(
      'discourse-embed-description',
      'The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.'
    );
    metaTag.setAttribute('discourse-embed-color', '#00A2E8');
    document.head.appendChild(metaTag);

    // Create and append Discourse embed script
    const scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.async = true;
    scriptTag.src = `${discourseUrl}javascripts/embed.js`;
    document.body.appendChild(scriptTag);

    // Cleanup on component unmount
    return () => {
      scriptTag.remove();
      if (metaTag.parentNode) {
        metaTag.parentNode.removeChild(metaTag);
      }
    };
  }, [discourseEmbedUrl, topicId]); // Added topicId as dependency to ensure reactivity

  return (
    <>
      <meta name="discourse-username" content="Darrell-Thobe" />
      <meta name="discourse-embed-url" content={discourseEmbedUrl} />
      <div style={{ display: 'flex', paddingBottom: '2%' }} id="discourse-comments"></div>
    </>
  );
};

export default DiscourseEmbed;
