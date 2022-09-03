import React from 'react';
import Tab from './tab';

const tabContent = [
   {
      title: 'Fundacjom',
      content: `W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.`,
      description: [
         {
            name: 'Fundacja “Dbam o Zdrowie”',
            mission:
               'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
            things: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
         },
         {
            name: 'Fundacja “Dla dzieci”',
            mission: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
            things: 'ubrania, meble, zabawki'
         },
         {
            name: 'Fundacja “Bez domu”',
            mission:
               'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
            things: 'ubrania, jedzenie, ciepłe koce'
         },
         {
            name: 'Organizacja “Lorem Ipsum 4”',
            mission:
               'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            things: 'Egestas, sed, tempus'
         },
         {
            name: 'Organizacja “Lorem Ipsum 5”',
            mission:
               'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            things: 'Egestas, sed, tempus'
         },
         {
            name: 'Organizacja “Lorem Ipsum 6”',
            mission:
               'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            things: 'Egestas, sed, tempus'
         },
         {
            name: 'Organizacja “Lorem Ipsum 7”',
            mission:
               'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            things: 'Egestas, sed, tempus'
         },
         {
            name: 'Organizacja “Lorem Ipsum 8”',
            mission:
               'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            things: 'Egestas, sed, tempus'
         },
         {
            name: 'Organizacja “Lorem Ipsum 9”',
            mission:
               'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            things: 'Egestas, sed, tempus'
         }
      ]
   },
   {
      title: 'Organizacjom pozarządowym',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.`,
      description: [
         {
            name: 'Organizacja “Lorem Ipsum 1”',
            mission:
               'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            things: 'Egestas, sed, tempus'
         },
         {
            name: 'Organizacja “Lorem Ipsum 2”',
            mission:
               'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            things: 'Egestas, sed, tempus'
         },
         {
            name: 'Organizacja “Lorem Ipsum 3”',
            mission:
               'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            things: 'Egestas, sed, tempus'
         },
         {
            name: 'Organizacja “Lorem Ipsum 4”',
            mission:
               'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            things: 'Egestas, sed, tempus'
         },
         {
            name: 'Organizacja “Lorem Ipsum 5”',
            mission:
               'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            things: 'Egestas, sed, tempus'
         },
         {
            name: 'Organizacja “Lorem Ipsum 6”',
            mission:
               'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            things: 'Egestas, sed, tempus'
         }
      ]
   },
   {
      title: 'Lokalnym zbiórkom',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.`,
      description: [
         {
            name: 'Organizacja “Lorem Ipsum 1”',
            mission:
               'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            things: 'Egestas, sed, tempus'
         },
         {
            name: 'Organizacja “Lorem Ipsum 2”',
            mission:
               'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            things: 'Egestas, sed, tempus'
         },
         {
            name: 'Organizacja “Lorem Ipsum 3”',
            mission:
               'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            things: 'Egestas, sed, tempus'
         }
      ]
   }
];
const SimpleTabs = () => {
   return (
      <Tab active={0}>
         {tabContent.map((tab, i) => (
            <Tab.TabPane key={`Tab-${i}`} tab={tab.title}>
               {tab.content}
               {JSON.stringify(tab.description)}
            </Tab.TabPane>
         ))}
      </Tab>
   );
};
export default SimpleTabs;
