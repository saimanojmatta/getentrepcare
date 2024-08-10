import React from "react"
import { Container, Overlay, Content, Cta, Button } from "./index.styled"
import { Marginer } from "../../globalStyles"
// import { Widget } from '@typeform/embed-react'

const Banner = ({ setFormType, setModalOpen }) => {
  return (
    <Container>
      <Overlay>
        {/* <p className="yellow-text">Simplifying Entrepreneur's Life</p> */}
        <Marginer className="current-container">
          {/* <p className="yellow-text">Simplifying Entrepreneur's Life</p> */}
          <Content>
            <p className="yellow-text">Simplifying Entrepreneur's Life</p>

            <Cta>
              <Button
                onClick={() => {
                  setFormType("psychoanalytic-assessment");
                  setModalOpen(true);
                }}
              >
                Entrepreneurial Psychoanalytic Assessment ™
              </Button>
            </Cta>

            <h1>
              <div>
                <span>Get</span>
                <span className="primary">
                  EntrepCare <span className="tm">&#8482;</span>
                </span>
                {/* <div>=</div> Diagnostic & Predictive AI <div>+</div> Human Specialist <div>+</div> Dynamic Assesments</h1> */}
                = Diagnostic & Predictive AI + Human Specialist + Dynamic
                Assesments
              </div>
            </h1>
            {/* <button>Explore B2B Partnership</button> */}
          </Content>

          {/* <Content>
                    <p className="bold">AI + Human Specialist + Dynamic Assesments</p>
                </Content> */}
        </Marginer>
      </Overlay>
      {/* <Widget id="izJEPGgk" style={{ width: '50%' }} className="my-form" /> */}
    </Container>
  );
};

export default Banner