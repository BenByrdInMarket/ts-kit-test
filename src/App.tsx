import React from 'react';
import { Carousel, Card, Button, Switch, Slider } from '@inmarket/inmarkit/dist/src';

function App() {
  return (
    <div>
      <Button>Hello</Button>
      <Switch />
      <Slider />
      <Carousel itemsPerPage={3}>
        <Card
          color="dark"
          secondaryValue="Increase in impressions"
          style={{
            width: '174px'
          }}
          value="50%"
        />
        <Card
          color="dark"
          secondaryValue="Increase in impressions"
          style={{
            width: '174px'
          }}
          value="50%"
        />
        <Card
          color="dark"
          secondaryValue="Increase in impressions"
          style={{
            width: '174px'
          }}
          value="50%"
        />
      </Carousel>
    </div>
  );
}

export default App;
