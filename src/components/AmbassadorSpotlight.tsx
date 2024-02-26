import React, {useEffect, useState} from 'react';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@site/src/components/ui/carousel';
import {Card, CardContent} from '@site/src/components/ui/card';
import AutoScroll from 'embla-carousel-auto-scroll';
import axios from 'axios';
import useBaseUrl from '@docusaurus/useBaseUrl';

function addCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function shuffle(array) {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

export default function AmbassadorSpotlight() {
  let [ambassadors, setAmbassadors] = useState();

  useEffect(() => {
    axios
      .get('https://developer.sailpoint.com/discuss/leaderboard/14.json')
      .then((response) => {
        console.log(response.data);
        setAmbassadors(response.data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center pb-2">Meet our Ambassadors</h2>
      <Carousel
        opts={{loop: true, dragFree: true}}
        plugins={[
          AutoScroll({stopOnInteraction: false, stopOnMouseEnter: true}),
        ]}
        className="flex justify-center items-center z-0">
        <CarouselContent>
          {ambassadors &&
            shuffle(ambassadors.users).map((ambassador) => (
              <div key={ambassador.id} className="">
                <CarouselItem className="">
                  <a
                    href={`https://developer.sailpoint.com/discuss/u/${ambassador.username}/summary`}
                    key={ambassador.id}
                    className="hover:!no-underline">
                    <Card className="shadow-xl w-[250px] h-[280px]">
                      <CardContent>
                        <div className="grid place-content-center p-4">
                          <img
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src =
                                '/ambassador/AmbassadorBadge-Pink-Hex.png';
                            }}
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
                    </Card>
                  </a>
                </CarouselItem>
              </div>
            ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
