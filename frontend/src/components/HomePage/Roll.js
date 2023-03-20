import React from 'react';
import { Anchor, Row, Col } from 'antd';

const Roll = () => {

  return(
    <Row>
    <Col span={16}>
      <div id="part-1" style={{ height: '55vh', background: 'rgba(255,0,0)' }} />
      <div id="part-2" style={{ height: '55vh', background: 'rgba(0,255,0)' }} />
      <div id="part-3" style={{ height: '55vh', background: 'rgba(0,0,255)' }} />
    </Col>
    <Col span={8}>
      <Anchor
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: 'Part 2',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: 'Part 2',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: 'Part 3',
          },
        ]}
      />
    </Col>
  </Row>
  )
}

export default Roll;