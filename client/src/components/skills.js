import React from "react";

import { CardGroup, Card } from "react-bootstrap";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiNodejsSmall,
  DiMongodb,
  DiReact,
  DiWordpress
} from "react-icons/di";

import gatsbyImg from "./images/skill_images/gatsby-icon.png";

const skillCards = () => (
  <div>
    <div>
      <CardGroup>
        <Card>
          <DiHtml5
            color="#DE4E25"
            size="6em"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%"
            }}
          />
          <Card.Body>
            <Card.Title>HTML</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <DiCss3
            size="6em"
            color="#3596D0"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%"
            }}
          />
          <Card.Body>
            <Card.Title>CSS</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <DiJavascript1
            size="6em"
            color="F0D91D"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%"
            }}
          />
          <Card.Body>
            <Card.Title>JavaScript</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <DiNodejsSmall
            size="6em"
            color="8CC03C"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%"
            }}
          />
          <Card.Body>
            <Card.Title>Node</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
    <div>
      <CardGroup>
        <Card>
          <Card.Body>
            <DiMongodb
              size="6em"
              color="63A953"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "50%"
              }}
            />
            <Card.Title>MongoDB</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <DiReact
            size="6em"
            color="5ED4F4"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%"
            }}
          />
          <Card.Body>
            <Card.Title>React</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={gatsbyImg}
            size="4em"
            style={{
              display: "block",
              marginTop: "4px",
              marginLeft: "auto",
              marginRight: "auto",
              width: "75px",
              height: "75px"
            }}
          />
          <Card.Body>
            <Card.Title>Gatsby</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <DiWordpress
            size="6em"
            color="207297"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%"
            }}
          />
          <Card.Body>
            <Card.Title>Wordpress</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  </div>
);

export default skillCards;
