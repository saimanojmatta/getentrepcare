import { Fragment } from "react";
import { Container } from "./index.styled";
import Announcement from "../announcement";
import NavBar from "../nav";

import { Marginer } from "../../globalStyles";
import { Widget } from "@typeform/embed-react";

const DiagnosticTest = () => {
  return (
    <Fragment>
      <Announcement />
      <Marginer>
        <NavBar />
      </Marginer>
      <Container>
      <Widget id="izJEPGgk" style={{ width: "100%" }} className="my-form" />
      </Container>
    </Fragment>
  );
};

export default DiagnosticTest;
