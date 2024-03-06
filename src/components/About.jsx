import React from 'react';
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';
import PropTypes from 'prop-types';



const ServiceCard = ({ index, title, icon }) => (



      <Tilt className='xs:w-full sm:w-[250px]'>
      <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card justify-items-center'>

      <div options={{max: 45, scale: 1, speed: 450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h[280px] flex justify-evenly items-center flex-col'>
      
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
      
      </motion.div>
    </Tilt>
);

  ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};




const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary text-center uppercase tracking-wider">Introduction</p>

        <h2 className={styles.sectionHeadText}>Overview.</h2>
      
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-0 text-secondary text-center text[17px] max-w-3x1 leading-[30px]'>
        Highly motivated and dedicated Junior Programmer with a passion for leveraging technology to optimize business processes.<br />
        With more than a decade of working experience in the financial services industry, I have honed my problem-solving skills,<br />
        attention to detail, and ability to thrive under pressure.
        <br />
        I am seeking to transition into a long-term career as a programmer to further pursue my love for creating innovative solutions<br/>
        that enhance operational efficiency.<br />
        <br />
        Troughout my tenure, I observed the transformative power of technology in streamlining operations and improving customer experiences.<br/>
        Inspired by these advancements, I proactively pursued self-education in programming languages, tools, and frameworks,<br />
        enabling me to gain a solid foundation in software development.<br />
        I am committed to continuously improving my skills and staying abreast of industry advancements.<br />
        I am excited to leverage my knowledge and contribute to the success of an organization as a skilled and professional programmer.
      </motion.p>
      <div className='mt-5 flex mb-5 flex-wrap gap-5 justify-center items-center '>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    
    </>
  )
}

export default SectionWrapper (About, "about")