import React from 'react';
import { Panel, Placeholder, Row, Col } from 'rsuite';
import 'rsuite/dist/rsuite.min.css'; // Ensure you import RSuite styles

const Card = (props) => (
  <Panel {...props} bordered header="Card title">
    
  </Panel>
);

const DashCard = () => (
  <Row>
    <Col md={6} sm={12}>
      <Card />
    </Col>
    <Col md={6} sm={12}>
      <Card />
    </Col>
    <Col md={6} sm={12}>
      <Card />
    </Col>
    <Col md={6} sm={12}>
      <Card />
    </Col>
  </Row>
);

export default DashCard; // Use this line if creating a single component file
