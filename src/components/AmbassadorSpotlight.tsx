import React, {useEffect, useState} from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@site/src/components/ui/carousel';
import {Card, CardContent} from '@site/src/components/ui/card';
import AutoScroll from 'embla-carousel-auto-scroll';
import axios from 'axios';
import {shuffleArray} from '../util/util';
import {checkImage} from '../services/DiscourseService';
import {useColorMode} from '@docusaurus/theme-common';

export default function AmbassadorSpotlight() {
  let [ambassadors, setAmbassadors] = useState<any>();
  const {colorMode, setColorMode} = useColorMode();

  useEffect(() => {
    axios
      .get('https://developer.sailpoint.com/discuss/leaderboard/14.json')
      .then((response) => {
        console.log(response.data);
        setAmbassadors(response.data);
      });
  }, []);

  return (
    <div className="pt-4 pb-12 mb-12 bg-gradient-to-r dark:from-[#0071CE]  dark:via-[#004FB5] via-65% dark:to-[#0033A1] from-[#0033A1] from-40% via-[#004FB5] via-65% to-[#0071CE] to-100%">
      <h2 style={{color: 'white'}} className="text-center m-0 text-4xl pt-8 pb-20">
        Meet our Ambassadors
      </h2>
      
      <Carousel
        opts={{loop: true, dragFree: true}}
        plugins={[
          AutoScroll({stopOnInteraction: false, stopOnMouseEnter: true}),
        ]}
        className="flex justify-center items-center z-0">
        <CarouselContent className="p-2">
          {ambassadors &&
            shuffleArray(ambassadors.users).map((ambassador) => {
              if (
                checkImage(
                  `${ambassador.avatar_template.replace('{size}', '144')}`,
                ) &&
                !ambassador.avatar_template.includes('/v4/letter')
              )
                return (
                  <div key={ambassador.id} className="">
                    <CarouselItem className="">
                      <Card className="shadow-xl w-[250px] h-[280px] hover:scale-[104%] transition-transform ease-in-out animate-border p-1 rounded-md bg-background hover:bg-gradient-radial dark:from-[#7ecfee] dark:via-[#3ca6fa] dark:to-[#0071CE] from-[#0033A1] from-40% via-[#004FB5] via-65% to-[#0071CE] to-100% bg-[length:400%400%] flex">
                        <a
                          href={`https://developer.sailpoint.com/discuss/u/${ambassador.username}/summary`}
                          key={ambassador.id}
                          className="hover:no-underline block hover:text-card-foreground text-card-foreground rounded-xl bg-card font-bold grow">
                          <CardContent>
                            <div className="grid place-content-center p-4">
                              <img
                                className="rounded-full h-[160px] w-[160px]"
                                src={`https://sea1.discourse-cdn.com/sailpoint${ambassador.avatar_template.replace(
                                  '{size}',
                                  '144',
                                )}`}
                                alt={ambassador.username}
                              />
                            </div>
                            <p className="text-center text-lg font-semibold my-0">
                              {ambassador.name}
                            </p>
                          </CardContent>
                        </a>
                      </Card>
                    </CarouselItem>
                  </div>
                );
            })}
        </CarouselContent>
      </Carousel>
      <div className='pt-20 flex flex-row justify-center'>
        <a
          style={{backgroundColor: '#cc27b0', color: 'white'}}
          className="font-semibold text-white h-12 text-center text-lg block w-80 px-8 pb-10 py-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-[5px] dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline dark:focus:ring-blue-800"
          href="https://developer.sailpoint.com/discuss/t/announcing-the-developer-community-ambassador-program/10634">
          Become an Ambassador
        </a>
      </div>
    </div>
  );
}
