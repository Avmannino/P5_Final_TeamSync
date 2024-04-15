import React from 'react';
import ReactDOM from 'react-dom';
import './Accordion.css';


import { Accordion, Placeholder } from 'rsuite';

const PriceAccordion = () => (
  <Accordion>
    <Accordion.Panel header="Advanced Analytics">
    Access to comprehensive statistics and analytics tools for in-depth performance analysis.
                                Customizable dashboards and reports to track team and player progress over time.
    </Accordion.Panel>
    
    <Accordion.Panel header="Player Performance Tracking">
    Individual player performance tracking, including key metrics such as goals scored, assists, tackles, etc.
                                Integration with wearable devices for real-time monitoring of player fitness and health data.
    </Accordion.Panel>
    <Accordion.Panel header="Customizable Training Programs">
    Ability to create and customize training programs tailored to the team's specific needs and goals.
                                Access to expert coaching resources and drills designed by professional trainers.
    </Accordion.Panel>
    <Accordion.Panel header="Video Analysis">
    Integration with video analysis tools for reviewing game footage and analyzing player movements and tactics.
                                Drawing tools and annotations for highlighting key moments and strategies.
    </Accordion.Panel>
    <Accordion.Panel header="Recruiting and Scouting Tools">
    Tools for scouting and recruiting new talent, including player databases, scouting reports, and contact management features.
                                Integration with recruiting platforms and services for broader reach and exposure.
    </Accordion.Panel>
    <Accordion.Panel header="Team Communication and Collaboration">
    Enhanced communication features, such as team-wide messaging, group chat, and announcement broadcasting.
                                Collaboration tools for sharing documents, game plans, and strategy materials securely within the team.
    </Accordion.Panel>
    <Accordion.Panel header="Custom Branding and White Labeling">
    Option for custom branding and white labeling of the app with the team's logo, colors, and branding elements.
                                Ability to remove all references to the app's parent company for a fully branded experience.
    </Accordion.Panel>
    <Accordion.Panel header="Priority Support and Detailed Account Manager">
    Priority customer support with dedicated account managers for personalized assistance and troubleshooting.
                                Guaranteed response times and priority access to new features and updates.
    </Accordion.Panel>
  </Accordion>
);

export default PriceAccordion;