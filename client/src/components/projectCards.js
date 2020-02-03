import React from "react";

import { CardGroup, Card, Button } from "react-bootstrap";
import testamentImg from "./images/portfolio_images/testament1.png";
import greenprintImg from "./images/portfolio_images/greenprint1.png";
import fstbrkImg from "./images/portfolio_images/fstbrk1.png";
import reactWeather from "./images/portfolio_images/reactUWeather1.png";
import vice from "./images/portfolio_images/21vice1.png";
import nbaStat from "./images/portfolio_images/nbaStat1.png";
// import myDay from "./images/portfolio_images/nbaStat1.png";

const projectCards = () => (
  <div>
    <div>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src={testamentImg}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%",
              marginTop: "10px"
            }}
          />
          <Card.Body>
            <Card.Title>Testament</Card.Title>
            <Card.Text style={{ padding: "10px" }}>
              MERN Stack digital prayer journal and daily devotional
              application.
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: "transparent" }}>
            <a
              href="https://github.com/Iankimble/h_tmt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                style={{
                  width: "120px",
                  margin: "10px",
                  backgroundColor: "#006666",
                  border: "none"
                }}
              >
                Github
              </Button>
            </a>
            <a
              href="https://testament1.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                style={{
                  width: "120px",
                  margin: "10px",
                  backgroundColor: "#006666",
                  border: "none"
                }}
              >
                Application
              </Button>
            </a>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={greenprintImg}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%",
              marginTop: "10px"
            }}
          />
          <Card.Body>
            <Card.Title>GreenPrint</Card.Title>
            <Card.Text style={{ padding: "10px" }}>
              MERN Stack budget calculator and financial literacy resource
              application.
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: "transparent" }}>
            <a
              href="https://github.com/Iankimble/h_gp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                style={{
                  width: "120px",
                  margin: "10px",
                  backgroundColor: "#006666",
                  border: "none"
                }}
              >
                Github
              </Button>
            </a>
            <a
              href="https://greenprint.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                style={{
                  width: "120px",
                  margin: "10px",
                  backgroundColor: "#006666",
                  border: "none"
                }}
              >
                Application
              </Button>
            </a>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={nbaStat}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%",
              marginTop: "10px"
            }}
          />
          <Card.Body>
            <Card.Title>NBA Stats</Card.Title>
            <Card.Text style={{ padding: "10px" }}>
              React front-end react application that uses the Ball Don't Lie API
              in conjunction with the Programmable Web API to retrieve NBA
              player stats and images.
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: "transparent" }}>
            <a
              href="https://github.com/Iankimble/nba-stat-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                style={{
                  width: "120px",
                  margin: "10px",
                  backgroundColor: "#006666",
                  border: "none"
                }}
              >
                Github
              </Button>
            </a>
            <a
              href="https://iankimble.github.io/nba-stat-react/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                style={{
                  width: "120px",
                  margin: "10px",
                  backgroundColor: "#006666",
                  border: "none"
                }}
              >
                Application
              </Button>
            </a>
          </Card.Footer>
        </Card>

        {/* <Card>
          <Card.Img
            variant="top"
            src={fstbrkImg}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%",
              marginTop: "10px"
            }}
          />
          <Card.Body>
            <Card.Title>My Day</Card.Title>
            <Card.Text style={{ padding: "10px" }}>
              MERN stack weekly planner application.
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: "transparent" }}>
            <a
              href="https://greenprint.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                style={{
                  width: "120px",
                  margin: "10px",
                  backgroundColor: "#006666",
                  border: "none"
                }}
              >
                Github
              </Button>
            </a>
            <a
              href="https://greenprint.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                style={{
                  width: "120px",
                  margin: "10px",
                  backgroundColor: "#006666",
                  border: "none"
                }}
              >
                Application
              </Button>
            </a>
          </Card.Footer>
        </Card> */}
      </CardGroup>
    </div>
    <div>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src={fstbrkImg}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%",
              marginTop: "10px"
            }}
          />
          <Card.Body>
            <Card.Title>Fst Brk</Card.Title>
            <Card.Text style={{ padding: "10px" }}>
              basketball themed rock-paper-scissors game built with HTML, CSS,
              and JavaScript.
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: "transparent" }}>
            <a
              href="https://github.com/Iankimble/fstbrk-1.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                style={{
                  width: "120px",
                  margin: "10px",
                  backgroundColor: "#006666",
                  border: "none"
                }}
              >
                Github
              </Button>
            </a>
            <a
              href="https://iankimble.github.io/fstbrk-1.5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                style={{
                  width: "120px",
                  margin: "10px",
                  backgroundColor: "#006666",
                  border: "none"
                }}
              >
                Application
              </Button>
            </a>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={reactWeather}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%",
              marginTop: "10px"
            }}
          />
          <Card.Body>
            <Card.Title>React-U-Weather</Card.Title>
            <Card.Text style={{ padding: "10px" }}>
              React front-end application using the Open Weather API and the
              Giphy API simultaneously to convey the "feel" of the weather for
              the day.
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: "transparent" }}>
            <a
              href="https://github.com/Iankimble/reactuweather-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                style={{
                  width: "120px",
                  margin: "10px",
                  backgroundColor: "#006666",
                  border: "none"
                }}
              >
                Github
              </Button>
            </a>
            <a
              href="https://iankimble.github.io/reactuweather-react/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                style={{
                  width: "120px",
                  margin: "10px",
                  backgroundColor: "#006666",
                  border: "none"
                }}
              >
                Application
              </Button>
            </a>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={vice}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%",
              marginTop: "10px"
            }}
          />
          <Card.Body>
            <Card.Title>21 Vice</Card.Title>
            <Card.Text style={{ padding: "10px" }}>
              MERN stack multi-player 80s themed black jack game.
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: "transparent" }}>
            <a
              href="https://github.com/FlSHBONES/21VICE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                style={{
                  width: "120px",
                  margin: "10px",
                  backgroundColor: "#006666",
                  border: "none"
                }}
              >
                Github
              </Button>
            </a>
            <a
              href="https://twenty-one-dice.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                style={{
                  width: "120px",
                  margin: "10px",
                  backgroundColor: "#006666",
                  border: "none"
                }}
              >
                Application
              </Button>
            </a>
          </Card.Footer>
        </Card>
        {/* <Card>
          <Card.Img
            variant="top"
            src={nbaStat}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%",
              marginTop: "10px"
            }}
          />
          <Card.Body>
            <Card.Title>NBA Stats</Card.Title>
            <Card.Text style={{ padding: "10px" }}>
              React front-end react application that uses the Ball Don't Lie API
              in conjunction with the Programmable Web API to retrieve NBA
              player stats and images.
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: "transparent" }}>
            <a
              href="https://github.com/Iankimble/nba-stat-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                style={{
                  width: "120px",
                  margin: "10px",
                  backgroundColor: "#006666",
                  border: "none"
                }}
              >
                Github
              </Button>
            </a>
            <a
              href="https://iankimble.github.io/nba-stat-react/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                style={{
                  width: "120px",
                  margin: "10px",
                  backgroundColor: "#006666",
                  border: "none"
                }}
              >
                Application
              </Button>
            </a>
          </Card.Footer>
        </Card> */}
      </CardGroup>
    </div>
  </div>
);

export default projectCards;
