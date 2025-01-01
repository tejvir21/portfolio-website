import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const TimelineElement = ({ item }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{
      background: 'rgba(255, 255, 255, 0.05)',
      color: '#fff',
      boxShadow: '0 0 20px rgba(0, 242, 254, 0.1)',
    }}
    contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.05)' }}
    date={item.date}
    iconStyle={{
      background: 'var(--accent-blue)',
      color: '#fff',
    }}
    icon={<item.icon />}
  >
    <h3 className="text-xl font-bold">{item.title}</h3>
    <h4 className="text-[var(--accent-blue)]">{item.company}</h4>
    <p className="text-gray-300">{item.description}</p>
  </VerticalTimelineElement>
);

export default TimelineElement;