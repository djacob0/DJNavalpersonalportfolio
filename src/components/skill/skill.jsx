import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineHtml5 } from "react-icons/ai"
import { FaNodeJs, FaReact } from "react-icons/fa"
import { SiDocker, SiRedux, SiTypescript } from "react-icons/si"
import { SiMysql, SiRubygems, SiMicrosoftsqlserver, SiRubyonrails, SiRuby, SiExpress, SiBabel, SiNextdotjs, SiBootstrap, SiGit, SiTailwindcss} from "react-icons/si";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io"
import './skill.css';

const Skill = () => {
  return (
    <>
      <section id="skill">
        <h5>The Skills I Have</h5>
        <h2>My Skills</h2>
        <div className="container skill__container">
          <div className="skill__frontend">
            <h3>My Tech-Stack</h3>
            <div className="skill__content">
            <article className="skill__details">
                <SiRuby className="skill__details-icon" />
                <h4>Ruby</h4>
              </article>
              <article className="skill__details">
                <FaNodeJs className="skill__details-icon" />
                <h4>Node Js</h4>
              </article>
              <article className="skill__details">
                <SiMicrosoftsqlserver className="skill__details-icon" />
                <h4>MS SQL Server</h4>
              </article>
              <article className="skill__details">
                <SiRubyonrails className="skill__details-icon" />
                <h4>Ruby on Rails</h4>
              </article>
              <article className="skill__details">
                <AiOutlineHtml5 className="skill__details-icon" />
                <h4>HTML</h4>
              </article>
              <article className="skill__details">
                <IoLogoCss3 className="skill__details-icon" />
                <h4>CSS</h4>
              </article>
              <article className="skill__details">
                <IoLogoJavascript className="skill__details-icon" />
                <h4>JavaScript</h4>
              </article>
              <article className="skill__details">
                <SiTypescript className="skill__details-icon" />
                <h4>Typescript</h4>
              </article>
              <article className="skill__details">
                <FaReact className="skill__details-icon" />
                <h4>React</h4>
              </article>
              <article className="skill__details">
                <SiExpress className="skill__details-icon" />
                <h4>Express JS</h4>
              </article>
              <article className="skill__details">
                <SiTailwindcss className="skill__details-icon" />
                <h4>Tailwind</h4>
              </article>
              <article className="skill__details">
                <SiBabel className="skill__details-icon" />
                <h4>Babel</h4>
              </article>
              <article className="skill__details">
                <SiRubygems className="skill__details-icon" />
                <h4>Ruby Gem</h4>
              </article>
              <article className="skill__details">
                <SiDocker className="skill__details-icon" />
                <h4>Docker</h4>
              </article>
              <article className="skill__details">
                <SiGit className="skill__details-icon" />
                <h4>Git</h4>
              </article>
              <article className="skill__details">
                <BsGithub className="skill__details-icon" />
                <h4>GitHub</h4>
              </article>
              <article className="skill__details">
                <SiMysql className="skill__details-icon" />
                <h4>MySQL</h4>
              </article>
              <article className="skill__details">
                <SiRedux className="skill__details-icon" />
                <h4>Redux</h4>
              </article>
              <article className="skill__details">
                <SiBootstrap className="skill__details-icon" />
                <h4>Bootstrap</h4>
              </article>
              <article className="skill__details">
                <SiNextdotjs className="skill__details-icon" />
                <h4>Next JS</h4>
              </article>
            </div>
          </div>
          {/* <div className="skill__backend">
          <h3>Back-end Development</h3>
          <div className="skill__content">
          <article className="skill__details">
              <FaNodeJs className="skill__details-icon" />
              <h4>Node Js</h4>
            </article>
            <article className="skill__details">
              <BsGithub className="skill__details-icon" />
              <h4>Git/GitHub</h4>
            </article>
          </div>
        </div> */}

        </div>
      </section>
    </>

  )
}

export default Skill