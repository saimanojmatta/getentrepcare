import { Container, ClientCardContainer, ClientCard, CtaContainer } from "./index.styled";
import { Marginer } from "../../globalStyles";
import VcImg from "../../assets/Vc.jpeg"
import IncubatorImg from "../../assets/Incubators.jpeg"
import ClgTimeFounderImg from "../../assets/ClgTimeFounder.jpeg"
import SoloFounderImg from "../../assets/SoloFounder.jpeg"

const OurClients = ({ setFormType, setModalOpen }) => {
  return (
    <Container>
      <Marginer className="current-container">
        {/* <h1>Clients who partner with us for their portfolio companies</h1> */}
        <h1>Who are you?</h1>
        <ClientCardContainer>
          <ClientCard imgUrl={VcImg}>
            <div>
              <h2>Venture </h2>
              <h2>Capitalists</h2>
            </div>
          </ClientCard>
          <ClientCard imgUrl={IncubatorImg}>
            <div>
              <h2>Incubators</h2>
              <h2>& Accelerators</h2>
            </div>
          </ClientCard>
          <ClientCard imgUrl={ClgTimeFounderImg}>
            <div className="student">
              <h2>Student led</h2>
              <h2>Entrepreneurship Cells</h2>
            </div>
          </ClientCard>
          <ClientCard imgUrl={SoloFounderImg}>
            <div>
              <h2>Business Trusts</h2>
              <h2>& Foundations</h2>
            </div>
          </ClientCard>
        </ClientCardContainer>

        {/* <ClientCardContainer>
          <h2></h2>
        </ClientCardContainer> */}
        <CtaContainer>
          <button
            onClick={() => {
              setFormType("b2b-partnership");
              setModalOpen(true);
            }}
          >
            Explore B2B Partnership
          </button>{" "}
          <h1>for your Portfolio companies</h1>
        </CtaContainer>
      </Marginer>
    </Container>
  );
};

export default OurClients;
