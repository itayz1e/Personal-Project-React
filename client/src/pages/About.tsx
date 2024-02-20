import NavBar from "../components/NavBar";
import "../style/about.scss";
import useLoading from "../hooks/useLoading";
import { BallTriangle } from "react-loader-spinner";
import { Link } from "react-router-dom";

const About = () => {
  const { isLoading } = useLoading();

  return (
    <>
      <NavBar />
      {isLoading ? (
        <div className="loadigContainer ">
          {" "}
          <BallTriangle
            margin-left="50"
            height="580"
            width="580"
            color="lightblue"
            ariaLabel="loading"
          />
        </div>
      ) : (
        <div id="resume">
          <div className="left-column">
            <div className="substrate" key="profile">
              <h2>My Profile</h2>
              <img
                className="profilepic"
                src="../../public/me.png"
                alt="Profile image"
              />
              <ul className="main-info-list">
                <li>
                  Name<span>Itay Amosi</span>
                  <div className="floatlimit"></div>
                </li>
                <li>
                  Email<span>Itayz1e.fullstack@gmail.com</span>
                  <div className="floatlimit"></div>
                </li>
                <li>
                  Github
                  <span>
                    <Link
                      className="datails"
                      style={{ color: "red" }}
                      to={
                        "https://github.com/itayz1e?tab=overview&from=2023-12-01&to=2023-12-11"
                      }
                    >
                      Itayz1e
                    </Link>
                  </span>
                  <div className="floatlimit"></div>
                </li>
                <li>
                  Linkedin
                  <span>
                    <Link
                      className="datails"
                      style={{ color: "red" }}
                      to={"https://www.linkedin.com/in/itay-amosi-6a24b5287/"}
                    >
                      Linkedin
                    </Link>
                  </span>
                  <div className="floatlimit"></div>
                </li>
              </ul>
              <div className="paper-clip"></div>
            </div>
            <div className="substrate" key="history">
              <h2>Professional Experience</h2>
              <div className="left-blue">
                <div className="time-period-left-blue"></div>
                <h3>
                  <span className="time-period-right-blue">2023 - Now</span>
                </h3>
                <h4>Singularico, Full stack Developer, Tel Aviv</h4>
                <p>
                  I play a key role as a full stack web developer in a dynamic
                  startup company. Collaborated with cross-functional team to
                  ensure seamless integration of front-end components.
                  <br />
                  <mark>•Toolset used:</mark> JavaScript , Typescript , Next.js
                  , Node.js, MUI , MongoDB
                </p>
                <div className="time-period-left-blue"></div>
                <h3>
                  <span className="time-period-right-blue">2023</span>
                </h3>
                <h4>NINA, Full stack Developer, Tel Aviv</h4>
                <p>
                  I developed comprehensive software solutions encompassing both
                  front-end and back-end components for Nina Company, resulting
                  in a notable 70% reduction in information retrieval time,
                  thereby enhancing the efficacy of their product offerings. My
                  contributions played a pivotal role in fostering the company's
                  overarching success.
                  <br />
                  <mark>• Toolset used:</mark> JavaScript , Typescript , React ,
                  BitBucket , Heroku , AWS, Node.js , Scss
                </p>
                <div className="time-period-left-blue"></div>
                <h3>
                  <span className="time-period-right-blue">
                    Mar 2016 - Oct 2023
                  </span>
                </h3>
                <h4>Freelance, Founder & CEO | </h4>
                <p>
                  •As the proprietor of a low-voltage communications enterprise,
                  I have steadfastly adhered to a stringent regimen while
                  showcasing expertise across various domains, encompassing
                  inventory optimization, strategic marketing, and financial
                  stewardship. My endeavors in the realm of communication,
                  coupled with a nuanced comprehension of network intricacies
                  and adept data analysis, have also fortified my role as a
                  software developer, amplifying the prospects for academic and
                  professional accomplishments whilst delivering unparalleled
                  customer service.
                </p>
                <div className="time-period-left-blue"></div>
                <h3>
                  <span className="time-period-right-blue">
                    Nov 2014 - Mar 2016
                  </span>
                </h3>
                <h4>To Go, Sales Manager, Jerusalem</h4>
                <p>
                  • After completing my military service, I entered sales as a
                  Deputy Manager and swiftly rose to Manager at a smaller store.
                  Within a year, I managed operations at a flagship location,
                  earning Manager of the Year for notable success. Our store led
                  in manager satisfaction, reflecting my unwavering commitment
                  to excellence. Skills Node.js JavaScript TypeScript SQL
                  MongoDB Aws React Bitbucket React Native socket.io firebase
                  Docker kubernetes Next.js Languages Hebrew English Hobbies
                  DIY, Gaming, Books • As a manager, I excelled in talent
                  acquisition, optimizing team performance and ensuring
                  effective resource management. Given the opportunity, I
                  successfully launched a new store, earning another Manager of
                  the Year accolade for my pivotal role in its inception. • In
                  summary, my journey from soldier to esteemed manager has been
                  marked by rapid advancement, notable achievements, and a
                  consistent ability to inspire and deliver exceptional results.
                </p>
              </div>
            </div>
          </div>
          <div className="right-column">
            <div className="substrate gradient-blue font-blue" key="about-me">
              <h2>About Me</h2>
              <h3>Hay, I'm Itay Amosi . . .</h3>
              <div className="p">
                As a software developer with experience from two companies in
                full-stack development, I am deeply passionate about
                problem-solving, writing clean code, and working efficiently
                under pressure and time management. My experience in sales
                management and owning a business as a freelancer has equipped me
                to excel in ambiguous scenarios where I prioritise both user
                happiness and affected outcomes.
              </div>
            </div>

            <div className="substrate" key="progress">
              <h2>My Resume</h2>
              <a href="../../public/Itay-Amosi-FlowCV-Resume-20240220-1.pdf" download>Download My Resume</a>  
            </div>
          </div>

          <div className="floatlimit"></div>
        </div>
      )}
    </>
  );
};

export default About;
