import React, { useState } from 'react';
import Tab from './tab';

const tabContent = [
   {
      title: 'Fundacjom',
      content: `W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.`,
      description: [
         {
            name: 'Organizacja “Lorem Ipsum 1”',
            mission:
               'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            things: 'Egestas, sed, tempus'
         },
         {
            name: 'Organizacja “Lorem Ipsum 1”',
            mission:
               'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            things: 'Egestas, sed, tempus'
         },
         {
            name: 'Organizacja “Lorem Ipsum 1”',
            mission:
               'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            things: 'Egestas, sed, tempus'
         },
         {
            name: 'Organizacja “Lorem Ipsum 1”',
            mission:
               'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            things: 'Egestas, sed, tempus'
         },
         {
            name: 'Organizacja “Lorem Ipsum 1”',
            mission:
               'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            things: 'Egestas, sed, tempus'
         },
         {
            name: 'Organizacja “Lorem Ipsum 1”',
            mission:
               'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            things: 'Egestas, sed, tempus'
         }
      ]
   },
   {
      title: 'Organizacjom pozarządowym',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.`,
      description: [{
         name: 'Organizacja “Lorem Ipsum 1”',
         mission:
            'Quis varius quam quisque id diam vel quam elementum pulvinar.',
         things: 'Egestas, sed, tempus'
      }]
   },
   {
      title: 'Lokalnym zbiórkom',
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam laborum
      accusamus, vitae neque eveniet praesentium asperiores doloribus eos
      sapiente modi facere, recusandae, fuga soluta possimus!`,
      description: [{
         name: 'Organizacja “Lorem Ipsum 1”',
         mission:
            'Quis varius quam quisque id diam vel quam elementum pulvinar.',
         things: 'Egestas, sed, tempus'
      }]
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
