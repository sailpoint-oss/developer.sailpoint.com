import React from 'react';

interface VideoProps {
  children?: React.ReactNode;
  source: string;
  container?: 'youtube' | 'vidyard';
}

const Video: React.FC<VideoProps> = ({ children, source, container = 'youtube' }) => {
  let html = (
    <iframe
      style={{
        width: '100%',
        aspectRatio: '16/9',
      }}
      src={source}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );

  if (container === 'vidyard') {
    html = (
      <iframe
        className="vidyard_iframe"
        style={{
          width: '100%',
          aspectRatio: '16/9',
        }}
        title="Authoring - Create New Sheets"
        src={source}
        scrolling="no"
        frameBorder="0"
        allowTransparency={true}
        allowFullScreen
      ></iframe>
    );
  }

  return <>{html}</>;
};

export default Video;
