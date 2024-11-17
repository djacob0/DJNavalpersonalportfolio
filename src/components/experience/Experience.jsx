import React from 'react';
import './experience.css';

const Experience = () => {
  return (
    <>
      <section id="experience">
        <h5>Work experience I have</h5>
        <h2>Professional Experience and Freelance</h2>
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Payroll PH & ESS4</h3>
            <p>Payroll PH is the one-stop destination for cutting-edge Payroll Software in the Philippines,
              ensuring accuracy, efficiency, and streamlined payroll processing. PPH is another reliable provider of cloud-based HR and payroll software solutions.
              It is known for its comprehensive tools that streamline and automate HR processes. Dedicated to efficient, accurate, and secure payroll management, simplifies workforce management for businesses of all sizes.</p>
            <h4>Responsibilities as a Full-Stack Developer :</h4>
            <p>1. Test and debug web applications, and resolve issues that arise
              during development.
            <br />
              2. Develop detailed test cases that cover various scenarios,
              including positive and negative test cases. Ensure that each
              test case is well-written and easily understandable to ensure
              accuracy and efficiency.
            <br />
              3. Run performance tests using appropriate tools and techniques
              to measure the performance of the application. This includes
              monitoring the Performance , Accessibility, and best practices.
            <br />
              4. Implement performance optimization techniques to improve
              the performance of the application. This includes optimizing
              database queries, refactoring code, reduce the image size.
            <br />
              5. Enhance and coordinate with Project Managers and Support
              for better user experience. this includes organizing reports
              and other tickets investigation related to performance optimization.
            </p>
          </div>
          <br></br>
        </div>
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Freelance</h3>
            <p>In collaboration with a client referred by a trusted professional network, 
              I entered into a Non-Disclosure Agreement (NDA) to provide specialized services over a 12-month period. This engagement required a high degree of confidentiality, trust, and 
              discretion, ensuring that sensitive information and proprietary data were fully protected throughout the course of the project.</p>
            <h4>Responsibilities :</h4>
            <p>In my role, I collaborated closely with UI/UX designers to translate wireframes and design prototypes into fully functional, high-quality code. 
              I am well-versed in optimizing front-end performance, enhancing page load times, and ensuring cross-browser compatibility. 
              I also prioritize accessibility and usability, ensuring that applications are easy to navigate and inclusive for all users.
            <br />
            </p>
          </div>
        </div>
      </section>
     
    </>

  )
}

export default Experience