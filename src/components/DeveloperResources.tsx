import React from 'react';
import {Card, CardContent, CardHeader} from '@site/src/components/ui/card';
import {useColorMode} from '@docusaurus/theme-common';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faTerminal,
  faCode,
  faBriefcase,
  faFileInvoice,
} from '@fortawesome/pro-duotone-svg-icons';

export default function DeveloperResources() {
  const {colorMode, setColorMode} = useColorMode();
  const iconSize = '4x';

  const cards = [
    {
      title: 'API Documentation',
      description:
        'Comprehensive documentation for the Identity Security Cloud APIs.',
      link: '/docs/api',
      icon: (
        <FontAwesomeIcon
          icon={faFileInvoice}
          style={{marginRight: '0.5em'}}
          color={colorMode === 'dark' ? '#7ecfee' : '#0033a1'}
          size={iconSize}
        />
      ),
    },
    {
      title: 'CLI',
      description:
        'Terminal based tool for interaction with ISC.',
      link: '/idn/tools/cli',
      icon: (
        <FontAwesomeIcon
          icon={faTerminal}
          style={{marginRight: '0.5em'}}
          color={colorMode === 'dark' ? '#7ecfee' : '#0033a1'}
          size={iconSize}
        />
      ),
    },
    {
      title: 'SDKs',
      description:
        'Streamlined development in your language of choice.',
      link: '/idn/tools/sdk',
      icon: (
        <FontAwesomeIcon
          icon={faCode}
          style={{marginRight: '0.5em'}}
          color={colorMode === 'dark' ? '#7ecfee' : '#0033a1'}
          size={iconSize}
        />
      ),
    },
    {
      title: 'Rule Development Kit',
      description:
        "Rule development made quick and easy.",
      link: '/idn/tools/rule-development-kit',
      icon: (
        <FontAwesomeIcon
          icon={faBriefcase}
          style={{marginRight: '0.5em'}}
          color={colorMode === 'dark' ? '#7ecfee' : '#0033a1'}
          size={iconSize}
        />
      ),
    },
  ];

  return (
    <div className="py-8">
      <h2 className="text-center pb-2 text-4xl">Developer Resources</h2>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-3 justify-center">
        {cards.map((card, index) => (
          <div className="hover:scale-[101%] transition-all duration-200 flex">
            <Card
              key={index}
              className="animate-border p-1 rounded-md bg-background hover:bg-gradient-radial dark:from-[#7ecfee] dark:via-[#3ca6fa] dark:to-[#0071CE] from-[#0033A1] from-40% via-[#004FB5] via-65% to-[#0071CE] to-100% bg-[length:400%400%] grow">
              <a
                href={card.link}
                className="hover:no-underline block hover:text-card-foreground text-card-foreground rounded-xl bg-card p-4 font-bold grow">
                <CardHeader className="flex flex-row justify-between">
                  <h3 className="text-2xl">{card.title}</h3>
                  {card.icon}
                </CardHeader>

                <CardContent>
                  <p className="text-md">{card.description}</p>
                </CardContent>
              </a>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
