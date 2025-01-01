import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Timeline = () => {
  const timelineData = [
    {
      title: "Senior Developer",
      company: "Tech Corp",
      date: "2021 - Present",
      description: "Leading development team in creating innovative solutions.",
      icon: FaBriefcase,
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions",
      date: "2019 - 2021",
      description: "Developed and maintained multiple client projects.",
      icon: FaBriefcase,
    },
    {
      title: "Computer Science Degree",
      company: "University of Technology",
      date: "2015 - 2019",
      description: "Bachelor's degree in Computer Science",
      icon: FaGraduationCap,
    },
    {
      title: "High School (12th)",
      company: "Delhi Public School",
      date: "2014 - 2015",
      description: "Completed Higher Secondary Education with focus on Science and Mathematics",
      icon: FaGraduationCap,
    },
    {
      title: "Secondary School (10th)",
      company: "Delhi Public School",
      date: "2012 - 2013",
      description: "Completed Secondary Education with distinction",
      icon: FaGraduationCap,
    },
  ];

  return (
    <section id="journey" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          My Journey
        </h2>
        
        <VerticalTimeline>
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
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
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};