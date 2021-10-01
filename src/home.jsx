import React from "react";
import { Container, Carousel, Card, CardGroup, Button } from "react-bootstrap";
import myPhoto from "./images/photo.jpg";
import html from "./images/html.png";
import css from "./images/css.png";
import javascript from "./images/javascript.png";
import react from "./images/react.png";
import node from "./images/nodejs.png";
import firebase from "./images/firebase.png";
import sql from "./images/sql.png";
import mongodb from "./images/mongodb.png";
import java from "./images/java.png";
import c from "./images/c.png";
import github from "./images/github.png";
import jira from "./images/jira.png";
import Excel from "./images/excel.png";
import camera from "./images/camera.png";
import file from "./images/file.png";
import linkedin from "./images/linkedin.png";
import insta from "./images/insta.png";
function home(props) {
  let outer_div;
  {
    props.active
      ? (outer_div = {
          minHeight: "100vh",
          maxWidth: "95vw",
          marginLeft: "280px",
        })
      : (outer_div = {
          minHeight: "100vh",
          maxWidth: "95vw",
          marginLeft: "80px",
        });
  }

  return (
    <>
      <div className="outer-div" style={outer_div}>
        <Container
          style={{ height: "60vh", maxWidth: "100%", padding: 0, zIndex: -100 }}
        >
          <Carousel variant="light" fade>
            <Carousel.Item>
              <img
                style={{ height: "60vh" }}
                className="d-block w-100"
                src="https://i.pinimg.com/originals/41/82/a9/4182a9dd330c6442c4a1fbc78274d838.png"
                alt="First slide"
              />
              <Carousel.Caption>
                <h6 style={{ fontWeight: "lighter" }}>Hey! I AM</h6>
                <h3>ANKUR JINDAL</h3>
                <p>I Like Web Development</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                style={{ height: "60vh" }}
                className="d-block w-100"
                src="https://wallpaperaccess.com/full/2906282.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h6>Hey! I AM</h6>
                <h3>ANKUR JINDAL</h3>
                <p>I Like Coding.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: "60vh" }}
                className="d-block w-100"
                src="https://wallpaperaccess.com/full/5620130.jpg"
                alt="Thied-slide"
              />
              <Carousel.Caption>
                <h6>Hey! I AM</h6>
                <h3>ANKUR JINDAL</h3>
                <p>I Like Travelling</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>

        <Container>
          <div
            className="text-center mt-4 pt-3"
            style={{ maxWidth: 400, margin: "auto" }}
          >
            <h1>About Me</h1>
            <hr />
          </div>

          <h2 className="text-center mt-4 py-4" style={{ fontSize: 35 }}>
            I like working with new Tools and Technologies.
          </h2>
          <CardGroup className="p-3">
            <Card>
              <Card.Img src={myPhoto} />
            </Card>

            <Card bg="dark" text="white" className=" pt-4">
              <Card.Header className="text-center" style={{ fontSize: 50 }}>
                Ankur Jindal
              </Card.Header>

              <Card.Body>
                <Card.Text>
                  <div
                    className="text-div text-center"
                    style={{
                      textAlign: "start",
                      fontSize: 25,
                      paddingLeft: 40,
                    }}
                  >
                    <div
                      className="text1 col-12 mt-3"
                      style={{ display: "flex", textAlign: "start" }}
                    >
                      <div className="left col-3">Email :</div>
                      <div className="right col-9">
                        jindalankur634@gmail.com
                      </div>
                    </div>
                    <div
                      className="text1 col-12 mt-3"
                      style={{ display: "flex", textAlign: "start" }}
                    >
                      <div className="left col-3">Phone :</div>
                      <div className="right col-9">(+91)9996012037</div>
                    </div>
                    <div
                      className="text1 col-12 mt-3"
                      style={{ display: "flex", textAlign: "start" }}
                    >
                      <div className="left col-3">Country :</div>
                      <div className="right col-9">India</div>
                    </div>
                    <div
                      className="text1 col-12 mt-3"
                      style={{ display: "flex", textAlign: "start" }}
                    >
                      <div className="left col-3">City :</div>
                      <div className="right col-9">New Delhi</div>
                    </div>
                  </div>
                  <div className="download-btn mt-5 text-center ">
                    <a
                      href="
https://drive.google.com/u/0/uc?id=1epaCyL4F9GfnPR-p-sZu8lILgX0YXfiV&export=download"
                    >
                      <Button
                        variant="outline-light"
                        // style={{ minWidth: "350px" }}
                      >
                        Download CV
                      </Button>
                    </a>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>

        <Container className="my-5 p-0">
          <div
            className="text-center mb-3"
            style={{ margin: "auto", width: 500 }}
          >
            <h2 style={{ fontSize: 50 }}>Education</h2>
            <hr />
          </div>
        </Container>

        <Container fluid>
          <section
            className="row"
            style={{
              backgroundImage: `url(${"https://mocah.org/uploads/posts/385155-4k-wallpaper.jpg"})`,
              maxWidth: "100vw",
              minHeight: 500,
              justifyContent: "center",
              alignItem: "center",
            }}
          ></section>
        </Container>

        <Container className="mt-5" fluid>
          <div className="college" style={{ margin: "auto", width: 800 }}>
            <i style={{ fontSize: 50 }} className="bx bxs-graduation">
              {" "}
              Hindu College Of Engineering
            </i>
            <div className="details mt-4" style={{ marginLeft: 77 }}>
              <h4>Bachelor Of Technology</h4>
              <h4>Computer Science Engineering</h4>
              <h4>CGPA : 8.4 / 10.0</h4>
              <h4>Sonipat, India</h4>
              <h4>2017 - 2021</h4>
            </div>

            <hr />
          </div>

          <div className="college" style={{ margin: "auto", width: 800 }}>
            <i style={{ fontSize: 50 }} className="bx bxs-book-open">
              {" "}
              Satyanand Public School
            </i>
            <div className="details mt-4" style={{ marginLeft: 77 }}>
              <h4>High School</h4>
              <h4>Science (PCM)</h4>
              <h4>percentage - 60%</h4>
              <h4>Gohana, India</h4>
              <h4>2016 - 2017</h4>
            </div>

            <hr />
          </div>
        </Container>

        <Container className="text-center mt-5">
          <div className="skill" style={{ width: 200, margin: "auto" }}>
            <h1>Skills</h1>
            <hr />
          </div>
          <CardGroup className="text-center text-black mt-5">
            {[{ image: html }, { image: css }, { image: javascript }].map(
              (el) => (
                <Card className="m-3" style={{ border: "none" }}>
                  <Card.Img
                    style={{
                      height: "100px",
                      width: "100px",
                      alignSelf: "center",
                    }}
                    src={el.image}
                  />
                </Card>
              )
            )}
          </CardGroup>
          <CardGroup className="text-center text-black mt-5">
            {[{ image: react }, { image: node }, { image: firebase }].map(
              (el) => (
                <Card className="m-3" style={{ border: "none" }}>
                  <Card.Img
                    style={{
                      height: "100px",
                      width: "100px",
                      alignSelf: "center",
                    }}
                    src={el.image}
                  />
                </Card>
              )
            )}
          </CardGroup>
          <CardGroup className="text-center text-black mt-5">
            {[{ image: sql }, { image: mongodb }, { image: java }].map((el) => (
              <Card className="m-3" style={{ border: "none" }}>
                <Card.Img
                  style={{
                    height: "100px",
                    width: "100px",
                    alignSelf: "center",
                  }}
                  src={el.image}
                />
              </Card>
            ))}
          </CardGroup>
          <CardGroup className="text-center text-black mt-5">
            {[{ image: c }, { image: github }, { image: react }].map((el) => (
              <Card className="m-3" style={{ border: "none" }}>
                <Card.Img
                  style={{
                    height: "100px",
                    width: "100px",
                    alignSelf: "center",
                  }}
                  src={el.image}
                />
              </Card>
            ))}
          </CardGroup>
        </Container>

        <Container className="mt-4 text-center">
          <div className="skill" style={{ width: 600, margin: "auto" }}>
            <h1>Achievements</h1>
            <hr />
          </div>

          <Container className="mt-5">
            <div className="first" style={{ textAlign: "start", fontSize: 40 }}>
              <span>
                <i class="bx bx-check"></i>
              </span>
              <span className="ml-2">
                10th position in College Coding Contest.
              </span>
            </div>
            <div className="first" style={{ textAlign: "start", fontSize: 40 }}>
              <span>
                <i class="bx bx-check"></i>
              </span>
              <span>
                Secured First position in college academics in second semester.
              </span>
            </div>
          </Container>
        </Container>

        <Container className="mt-4">
          <div
            className="project text-center mt-5"
            style={{ width: 600, margin: "auto" }}
          >
            <h1>Projects</h1>
            <hr />
          </div>
          <Container className="mt-5">
            <CardGroup className="">
              {[
                {
                  theme: "dark",
                  icons: jira,
                  name: "JIRA",
                  tech: ["Javascript", "css", "html"],
                  description:
                    "A web based Application which stores the tasks with priority colors and filter tasks on their priority colors.",
                  links: [
                    {
                      name: "GitHub",
                      link: "https://github.com/ankurjindal643/projects-repo/tree/main/Jira-App",
                    },
                    {
                      name: "Website",
                      link: "https://ankurjindal643.github.io/projects-repo/Jira-App/",
                    },
                  ],
                },
                {
                  theme: "light",
                  icons: Excel,
                  name: "EXCEL",
                  tech: ["Javascript", "css", "html"],
                  description:
                    "It is a MS Excel clone with Some features of this project are  Formula EVALUATION ,CYCLE DETECTION IN FORMULA , SAVE CLEAR FUNCTIONALITY ,CELLS FORMATTING ",
                  links: [
                    {
                      name: "GitHub",
                      link: "https://github.com/ankurjindal643/projects-repo/tree/main/excel",
                    },
                    {
                      name: "Website",
                      link: "https://ankurjindal643.github.io/projects-repo/excel/",
                    },
                  ],
                },
              ].map((el, idx) => (
                <Card
                  bg={el.theme}
                  key={idx}
                  text={el.theme === "light" ? "dark" : "white"}
                  style={{ width: "18rem" }}
                  className="m-2"
                >
                  <Card.Header
                    className="text-center"
                    style={{ borderBottom: "none" }}
                  >
                    <Card.Img
                      style={{ height: "4rem", width: "5rem" }}
                      src={el.icons}
                    />
                  </Card.Header>
                  <Card.Body>
                    <Card.Title
                      className="text-center"
                      style={{ fontSize: "25px" }}
                    >
                      {el.name}
                    </Card.Title>
                    <Card.Text className="p-0">
                      <section className="text-center pt-0">
                        {el.tech.map((val, index) => (
                          <span style={{ fontSize: "25px" }}>
                            <span style={{ fontSize: "50px" }}> . </span>
                            {val}
                          </span>
                        ))}
                      </section>

                      <p>{el.description}</p>
                    </Card.Text>
                    {el.links.map((val) => (
                      <div className="button text-center">
                        <a className="m-1" href={val.link}>
                          <Button
                            variant={
                              el.theme === "dark"
                                ? "outline-light"
                                : "outline-dark"
                            }
                            style={{ minWidth: "250px" }}
                          >
                            {val.name}
                          </Button>
                        </a>
                      </div>
                    ))}
                  </Card.Body>
                </Card>
              ))}
            </CardGroup>
            <CardGroup className="">
              {[
                {
                  theme: "light",
                  icons: camera,
                  name: "CAMERA",
                  tech: ["Javascript", "css", "html"],
                  description:
                    "A web based application that allow user to Capture the Images And record The Video. User can access the photos and video in gallery also can download the and delete too.",
                  links: [
                    {
                      name: "GitHub",
                      link: "https://github.com/ankurjindal643/projects-repo/tree/main/Camera",
                    },
                  ],
                },
                {
                  theme: "dark",
                  icons: file,
                  name: "File Formatter",
                  tech: ["Javascript"],
                  description:
                    "This is local Machine Based application which can sort your files on their extension type.  And Make folder for Each different Extensions. ",
                  links: [
                    {
                      name: "GitHub",
                      link: "https://github.com/ankurjindal643/projects-repo/tree/main/fileformatter",
                    },
                    {
                      name: "Video",
                      link: "https://www.linkedin.com/posts/ankur-jindal-059b871a2_training-learning-javascript-activity-6804729160817287169-FDuA",
                    },
                  ],
                },
              ].map((el, idx) => (
                <Card
                  bg={el.theme}
                  key={idx}
                  text={el.theme === "light" ? "dark" : "white"}
                  style={{ width: "18rem" }}
                  className="m-2"
                >
                  <Card.Header
                    className="text-center"
                    style={{ borderBottom: "none" }}
                  >
                    <Card.Img
                      style={{ height: "4rem", width: "5rem" }}
                      src={el.icons}
                    />
                  </Card.Header>
                  <Card.Body>
                    <Card.Title
                      className="text-center"
                      style={{ fontSize: "25px" }}
                    >
                      {el.name}
                    </Card.Title>
                    <Card.Text className="p-0">
                      <section className="text-center pt-0">
                        {el.tech.map((val, index) => (
                          <span style={{ fontSize: "25px" }}>
                            <span style={{ fontSize: "50px" }}> . </span>
                            {val}
                          </span>
                        ))}
                      </section>

                      <p>{el.description}</p>
                    </Card.Text>
                    {el.links.map((val) => (
                      <div className="button text-center">
                        <a className="m-1" href={val.link}>
                          <Button
                            variant={
                              el.theme === "dark"
                                ? "outline-light"
                                : "outline-dark"
                            }
                            style={{ minWidth: "250px" }}
                          >
                            {val.name}
                          </Button>
                        </a>
                      </div>
                    ))}
                  </Card.Body>
                </Card>
              ))}
            </CardGroup>
            <hr style={{ border: "3px solid ", borderRadius: "6px" }} />
          </Container>
        </Container>

        <Container className="mt-5 p-0" style={{ height: 500, width: "100vw" }}>
          <Container className="text-center mt-5">
            <div style={{ width: 500, margin: "auto" }} className="contact-tag">
              <h1 className="pt-5" style={{ fontSize: "50px" }}>
                Contact Me.
              </h1>
              <hr />
            </div>
          </Container>

          <CardGroup className="mt-5">
            <Card bg="light" text="dark" className="text-center m-2">
              <Card.Title style={{ fontSize: "40px" }}>About</Card.Title>
              <Card.Body>
                <Card.Text style={{ fontSize: "30px" }}>
                  I like working with new tools and technologies
                  <h2 style={{ fontSize: "20px" }}>Social Links</h2>
                  <a href="https://github.com/ankurjindal643?tab=repositories">
                    <img
                      background="black"
                      className="m-2"
                      style={{
                        height: "4rem",
                        width: "5rem",
                        borderRadius: "50px",
                      }}
                      src={github}
                    />
                  </a>
                  <a href="https://www.linkedin.com/in/ankur-jindal-059b871a2">
                    <img
                      style={{ background: "white" }}
                      className="m-2"
                      style={{
                        height: "4rem",
                        width: "5rem",
                        borderRadius: "50px",
                      }}
                      src={linkedin}
                    />
                  </a>
                  <a href="https://www.instagram.com/ankurjindal55/">
                    <img
                      className="m-2"
                      style={{
                        height: "4rem",
                        width: "5rem",
                        borderRadius: "50px",
                      }}
                      src={insta}
                    />
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card bg="light" text="dark" className="m-3 text-center">
              <Card.Title className="p-2" style={{ fontSize: "35px" }}>
                Have A Question?
              </Card.Title>
              <hr />
              <Card.Body>
                <Card.Text>
                  <div className="contact1">
                    <span className="p-5 mt-1">
                      <i
                        style={{ fontSize: "40px" }}
                        class="bx bx-phone-call"
                      ></i>
                    </span>
                    <span style={{ fontSize: "30px" }}>(+91) 9996012037</span>
                  </div>
                  <div className="contact1">
                    <span className="p-5 mt-1">
                      <i
                        style={{ fontSize: "40px" }}
                        class="bx bx-phone-call"
                      ></i>
                    </span>
                    <span style={{ fontSize: "30px" }}>(+91) 7015345037</span>
                  </div>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <a
                  style={{ color: "black" }}
                  href="mailto:jindalankur634@gmail.com"
                  className="email"
                >
                  <i style={{ fontSize: "30px" }} class="bx bx-mail-send">
                    {" "}
                    jindalankur634@gmail.com
                  </i>
                </a>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Container>
      </div>
    </>
  );
}

export default home;
