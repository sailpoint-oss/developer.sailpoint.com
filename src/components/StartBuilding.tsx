import React from 'react';
import {Card, CardContent, CardHeader} from '@site/src/components/ui/card';
import {useColorMode} from '@docusaurus/theme-common';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faArrowProgress,
  faCubesStacked,
  faPenField,
  faSignsPost,
  faNetworkWired,
  faGearComplexCode,
} from '@fortawesome/pro-duotone-svg-icons';

export default function StartBuilding() {
  const {colorMode, setColorMode} = useColorMode();

  const cards = [
    {
      title: 'Workflows',
      description: 'Create custom workflows to automate identity processes',
      link: 'https://documentation.sailpoint.com/saas/help/workflows/workflow-basics.html',
      icon: (
        <FontAwesomeIcon
          icon={faArrowProgress}
          style={{marginRight: '0.5em'}}
          color={colorMode === 'dark' ? '#7ecfee' : '#0033a1'}
          size="5x"
        />
      ),
    },
    {
      title: 'Custom Forms',
      description: 'Create custom forms to collect and display identity data',
      link: 'https://documentation.sailpoint.com/saas/help/forms/index.html',
      icon: (
        <FontAwesomeIcon
          icon={faPenField}
          style={{marginRight: '0.5em'}}
          color={colorMode === 'dark' ? '#7ecfee' : '#0033a1'}
          size="5x"
        />
      ),
    },
    {
      title: 'Rules',
      description: 'Create custom rules to enforce identity policies',
      link: '/idn/docs/rules',
      icon: (
        <FontAwesomeIcon
          icon={faSignsPost}
          style={{marginRight: '0.5em'}}
          color={colorMode === 'dark' ? '#7ecfee' : '#0033a1'}
          size="5x"
        />
      ),
    },
    {
      title: 'Transforms',
      description: 'Create custom transforms to manipulate identity data',
      link: '/idn/docs/transforms',
      icon: (
        <FontAwesomeIcon
          icon={faCubesStacked}
          style={{marginRight: '0.5em'}}
          color={colorMode === 'dark' ? '#7ecfee' : '#0033a1'}
          size="5x"
        />
      ),
    },
    {
      title: 'SAAS Connectivity',
      description: 'Connect to SAAS applications to manage identity',
      link: '/idn/docs/saas-connectivity',
      icon: (
        <FontAwesomeIcon
          icon={faNetworkWired}
          style={{marginRight: '0.5em'}}
          color={colorMode === 'dark' ? '#7ecfee' : '#0033a1'}
          size="5x"
        />
      ),
    },
    {
      title: 'Event Triggers',
      description:
        'Create custom event triggers to automate identity processes',
      link: '/idn/docs/event-triggers',
      icon: (
        <FontAwesomeIcon
          icon={faGearComplexCode}
          style={{marginRight: '0.5em'}}
          color={colorMode === 'dark' ? '#7ecfee' : '#0033a1'}
          size="5x"
        />
      ),
    },
  ];

  return (
    <div className="pt-8 pb-16">
      <h2 className="text-center pb-2 text-4xl">Launch into development now</h2>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {cards.map((card, index) => (
          <Card
            key={index}
            className="animate-border p-1 hover:scale-[101%] rounded-md bg-background hover:bg-gradient-radial dark:from-[#7ecfee] dark:via-[#3ca6fa] dark:to-[#0071CE] from-[#0033A1] from-40% via-[#004FB5] via-65% to-[#0071CE] to-100% bg-[length:400%400%] flex">
            <a
              href={card.link}
              className="hover:no-underline block hover:text-card-foreground text-card-foreground rounded-xl bg-card p-4 font-bold grow">
              <CardHeader className="flex flex-row justify-between">
                <h3 className="my-auto text-2xl">{card.title}</h3>

                {card.icon}
              </CardHeader>

              <CardContent>
                <p className="text-md">{card.description}</p>
              </CardContent>
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
}
