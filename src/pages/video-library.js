import React from 'react';
import Layout from '@theme/Layout';
import VideoCard from '../components/video-library/VideoCard';
import VideoCards from '../components/video-library/VideoCards'
export default function VideoLibrary() {
    return ( 
       <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
    <main>
    <div>
        <VideoCards/>
    </div>
    
    </main>
  </Layout>)
}