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

export default function AmbassadorSpotlight() {
  let [ambassadors, setAmbassadors] = useState<any>();

  useEffect(() => {
    axios
      .get('https://developer.sailpoint.com/discuss/leaderboard/14.json')
      .then((response) => {
        console.log(response.data);
        setAmbassadors(response.data);
      });
  }, []);

  return (
    <div className="py-4">
      <h2 className="text-center m-0">Meet our Ambassadors</h2>
      <a
        className="text-center text-sm block pb-2"
        href="https://developer.sailpoint.com/discuss/t/announcing-the-developer-community-ambassador-program/10634">
        Become an ambassador
      </a>
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
                      <Card className="shadow-xl w-[250px] h-[280px] hover:scale-[104%] transition-transform ease-in-out animate-border p-1 rounded-md bg-background hover:bg-gradient-radial dark:from-[#0033A1] dark:via-[#004FB5] dark:to-[#0071CE] from-aqua/0 via-aqua/60 to-aqua bg-[length:400%400%] flex">
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
    </div>
  );
}
