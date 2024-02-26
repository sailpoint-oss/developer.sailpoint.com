import {Card, CardContent} from '@site/src/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@site/src/components/ui/carousel';
import React, {useEffect} from 'react';

import type {CarouselApi} from '@site/src/components/ui/carousel';
import 'atropos/css';

export default function HomepageCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [mouseOver, setMouseOver] = React.useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    let interval = setInterval(() => {
      if (mouseOver) return;
      //   if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
      //     api.scrollTo(0);
      //   } else {
      api.scrollNext();
      //   }
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [mouseOver, api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{loop: true}}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      className="flex justify-center items-center px-6 py-32 h-[100px] overflow-hidden z-0">
      <CarouselContent>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">
                  Join the discussion on our{' '}
                  <a
                    className="text-[#0188f7]"
                    href="https://developer.sailpoint.com/discuss/">
                    developer forum
                  </a>
                </span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold text-center">
                  Take a look at the workflows, tools, and connectors <br />{' '}
                  from the community in the{' '}
                  <a className="text-[#0188f7]" href="/colab/">
                    CoLab
                  </a>
                </span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      {/* <CarouselPrevious className="flex justify-center items-center w-16 ml-16 bg-transparent border-none text-3xl" />
      <CarouselNext className="flex justify-center items-center w-16 mr-16 bg-transparent border-none text-3xl" /> */}
    </Carousel>
  );
}
