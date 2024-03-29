import React from 'react'
import Timeline from '../../components/Timeline/Timeline'
import "./Projects.css"


function Projects() {
    return (
        <div className="projects-div">
            <div className='projects-timeline-div'>
                <Timeline
                    name="CompileAbhi"
                    link="/compileAbhi"
                    from="April 2022"
                    description="Hackathon - My team got selected for VMware Campus
                    Ambassador Program Virtual Hackathon Finals, we developed this online c++ compiler and editor in two days time. 
                    I worked on the frontend."
                />
                <Timeline
                    name="Zura Ventures"
                    link="/zura"
                    from="January 2022"
                    description="Internship - Involved in the Research and Development of a lot of
                    features for the multiple apps for the company. Developing SaaS :-)"
                />
                <Timeline
                    name="CoReS"
                    link="/cores"
                    from="August 2021"
                    description="This is mock course registration portal which we designed and built as a college project. I worked on the backend team."
                />
                <Timeline
                    name="My Covid"
                    link="/mycovid"
                    from="August 2021"
                    description="Internship - This is a portal that connects hospital, patients and their relatives. I redesigned and implemented complete UI of the website. I also managed to decrease loc by 40%"
                />
                <Timeline
                    name="DSA Solutions"
                    link="/dsasolutions"
                    from="April 2021"
                    description="Find solutions to various DSA questions posted by fellow programmers or post yours to gain some points."
                />
                <Timeline
                    name="Online Shop"
                    link="/onlineshop"
                    from="November 2020"
                    description="A simple eCommerce platform built on MERN stack."
                    last="true"
                />
            </div>
        </div>
    )
}

export default Projects
