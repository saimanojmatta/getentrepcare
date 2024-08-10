import { Fragment, useState } from "react";

import Announcement from "../announcement";
import NavBar from "../nav";
import Banner from "../banner";
import OurStory from "../ourstory";
import What from "../what";
import FinanceMastery from "../finance-module";
import ForFounder from "../forfounder-module";

import { Marginer } from "../../globalStyles";
import RelationalManagement from "../relationalmanagement-module";
import OurClients from "../clients";
import Footer from "../footer";
import ContactModal from "../contact-modal";

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formType, setFormType] = useState("");
  const [formHeader, setFormHeader] = useState({});

  return (
    <Fragment>
      {modalOpen && (
        <ContactModal setModalOpen={setModalOpen} type={formType} formHeader={formHeader} setFormHeader={setFormHeader}/>
      )}
      <Announcement />
      <Marginer>
        <NavBar />
      </Marginer>
      <Banner setModalOpen={setModalOpen} setFormType={setFormType} formHeader={formHeader} setFormHeader={setFormHeader}/>
      <OurClients setModalOpen={setModalOpen} setFormType={setFormType} formHeader={formHeader} setFormHeader={setFormHeader}/>
      {/* <OurStory /> */}
      <What />
      <FinanceMastery setModalOpen={setModalOpen} setFormType={setFormType} setFormHeader={setFormHeader}/>
      <ForFounder setModalOpen={setModalOpen} setFormType={setFormType} setFormHeader={setFormHeader}/>
      <RelationalManagement setModalOpen={setModalOpen} setFormType={setFormType} setFormHeader={setFormHeader}/>
      <Footer setModalOpen={setModalOpen} />
    </Fragment>
  );
};

export default HomePage;
