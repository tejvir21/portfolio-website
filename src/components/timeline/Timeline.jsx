import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TIMELINE_DATA } from '../../utils/constants/timeline';
import TimelineElement from './TimelineElement';
import Section from '../common/Section';

const Timeline = () => {
  return (
    <Section id="journey" title="My Journey">
      <VerticalTimeline>
        {TIMELINE_DATA.map((item, index) => (
          <TimelineElement key={index} item={item} />
        ))}
      </VerticalTimeline>
    </Section>
  );
};

export default Timeline;