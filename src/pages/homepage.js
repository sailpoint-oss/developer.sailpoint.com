import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageGettingStarted from '@site/src/components/homepage/HomepageGettingStarted';
import HomepageBasics from '../components/homepage/HomepageBasics';
import HomepageTrainingGuides from '../components/homepage/HomepageTrainingGuides';
import HomepageDiscuss from '../components/homepage/HomepageDiscuss';
import HomepageTeam from '../components/homepage/HomepageTeam';
import { Card, CardContent } from "@site/src/components/ui/card"
import {Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,} from '@site/src/components/ui/carousel';

import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
      <Carousel className="flex justify-center items-center p-6">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
            <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">Welcome to The SailPoint Developer Forums</span>
        
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious  className="flex justify-center items-center w-16 ml-16 bg-transparent border-none text-7xl"/>
      <CarouselNext className="flex justify-center items-center w-16 mr-16 bg-transparent border-none text-7xl"/>
    </Carousel>
      </main>
    </Layout>
  );
}
