import React from 'react';
import { Col, Row } from 'antd';

const App: React.FC = () => {
  return (
    <div>
      <Row>
        <Col span={12}>
          <h1 style={{margin: '20px'}}>
          Teerachod Sangjunsiriporn
          </h1>
          <h1 style={{margin: '20px'}}>
          ID Discord: 549784712894218250
          </h1>
        </Col>
        <Col span={12} style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }} >
          <img src="https://images.pexels.com/photos/3257811/pexels-photo-3257811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Cute cat"
            width="500"
            height="600"
          />

        </Col>
      </Row>

    </div>
  );
};

export default App;