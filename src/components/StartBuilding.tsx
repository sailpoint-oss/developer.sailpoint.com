import React from 'react';
import {Card, CardContent, CardHeader} from '@site/src/components/ui/card';
import Network from '@site/static/icons/network-wired-light.svg';
import Sign from '@site/static/icons/signs-post-light.svg';
import Form from '@site/static/icons/paperclip-sharp-light.svg';
import Swap from '@site/static/icons/swap-arrows-light.svg';
import Progress from '@site/static/icons/arrow-progress-light.svg';
import Blocks from '@site/static/icons/cubes-stacked-light.svg';
import Cloud from '@site/static/icons/cloud-binary-light.svg';

export default function StartBuilding() {
  const cards = [
    {
      title: 'Workflows',
      description: 'Create custom workflows to automate identity processes',
      link: 'https://documentation.sailpoint.com/saas/help/workflows/workflow-basics.html',
      icon: Progress,
    },
    {
      title: 'Custom Forms',
      description: 'Create custom forms to collect and display identity data',
      link: 'https://documentation.sailpoint.com/saas/help/forms/index.html',
      icon: Form,
    },
    {
      title: 'Rules',
      description: 'Create custom rules to enforce identity policies',
      link: '/idn/docs/rules',
      icon: Sign,
    },
    {
      title: 'Transforms',
      description: 'Create custom transforms to manipulate identity data',
      link: '/idn/docs/transforms',
      icon: Blocks,
    },
    {
      title: 'SAAS Connectivity',
      description: 'Connect to SAAS applications to manage identity',
      link: '/idn/docs/saas-connectivity',
      icon: Network,
    },
    {
      title: 'Event Triggers',
      description:
        'Create custom event triggers to automate identity processes',
      link: '/idn/docs/event-triggers',
      icon: Cloud,
    },
  ];

  return (
    <div className="py-8">
      <h2 className="text-center pb-2 text-4xl">Start building today</h2>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {cards.map((card, index) => (
          <Card
            key={index}
            className="animate-border p-1 hover:scale-[101%] rounded-md bg-background hover:bg-gradient-radial dark:from-[#0033A1] dark:via-[#004FB5] dark:to-[#0071CE] from-aqua/0 via-aqua/60 to-aqua bg-[length:400%400%] flex">
            <a
              href={card.link}
              className="hover:no-underline block hover:text-card-foreground text-card-foreground rounded-xl bg-card p-4 font-bold grow">
              <CardHeader className="flex flex-row justify-between">
                <h3 className="my-auto">{card.title}</h3>

                {card.icon && (
                  <card.icon className="w-10  dark:fill-white my-auto" />
                )}
              </CardHeader>

              <CardContent>
                <p className="text-sm">{card.description}</p>
              </CardContent>
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
}
