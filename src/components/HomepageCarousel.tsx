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
    <div style={{zIndex: 50}} className='bg-gradient-to-r dark:from-[#0071CE]  dark:via-[#004FB5] via-65% dark:to-[#0033A1] from-[#0033A1] from-40% via-[#004FB5] via-65% to-[#0071CE] to-100%'>

   
    <Carousel
      setApi={setApi}
      opts={{loop: true}}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      className="flex justify-center items-center px-6 pt-16 pb-20 h-[100px] overflow-hidden z-0 bg-gradient-to-r dark:from-[#0071CE]  dark:via-[#004FB5] via-65% dark:to-[#0033A1] from-[#0033A1] from-40% via-[#004FB5] via-65% to-[#0071CE] to-100%">
      <CarouselContent>
        <CarouselItem>
          <div className="bg-gradient-to-r dark:from-[#0071CE]  dark:via-[#004FB5] via-65% dark:to-[#0033A1] from-[#0033A1] from-40% via-[#004FB5] via-65% to-[#0071CE] to-100% flex aspect-square items-center justify-center">
            <span style={{color: 'white'}} className="text-3xl font-semibold text-center">
              Join the discussion on our{' '}
              <a
                className="text-[#0188f7]"
                href="https://developer.sailpoint.com/discuss/">
                developer forum
              </a>
            </span>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div  className="bg-gradient-to-r dark:from-[#0071CE]  dark:via-[#004FB5] via-65% dark:to-[#0033A1] from-[#0033A1] from-40% via-[#004FB5] via-65% to-[#0071CE] to-100% flex aspect-square items-center justify-center ">
            <span style={{color: 'white'}} className="text-3xl font-semibold text-center">
              Take a look at the workflows, tools, and connectors <br /> from
              the community in the{' '}
              <a className="text-[#0188f7]" href="/colab/">
                CoLab
              </a>
            </span>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="bg-gradient-to-r dark:from-[#0071CE]  dark:via-[#004FB5] via-65% dark:to-[#0033A1] from-[#0033A1] from-40% via-[#004FB5] via-65% to-[#0071CE] to-100% flex aspect-square items-center justify-center">
            <span style={{color: 'white'}} className="text-3xl font-semibold text-center">
              Checkout what{' '}
              <a
                className="text-[#0188f7]"
                href="https://developer.sailpoint.com/discuss/c/community/events/76">
                events
              </a>
              {' '}are happenging in the community
            </span>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="bg-gradient-to-r dark:from-[#0071CE]  dark:via-[#004FB5] via-65% dark:to-[#0033A1] from-[#0033A1] from-40% via-[#004FB5] via-65% to-[#0071CE] to-100% flex aspect-square items-center justify-center">
            <span style={{color: 'white'}} className="text-3xl font-semibold text-center">
              Learn about {' '}
              <a
                className="text-[#0188f7]"
                href="https://developer.sailpoint.com/discuss/t/announcing-sailpoints-developer-days-2024/19918">
                Developer Days
              </a>
              
            </span>
          </div>
        </CarouselItem>

      </CarouselContent>
    </Carousel>
    </div>
  );
}
