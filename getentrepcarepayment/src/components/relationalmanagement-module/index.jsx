import { Container, SubModuleLeftImg, SubModuleRightImg, Details, CtaContainer, Wrapper, SubModuleLeftNew, SubModuleRightNew, DetailsNew } from "./index.styled"
import { Marginer } from '../../globalStyles'
import CofounderSelectionImg from '../../assets/GetCofounderSelection.webp'
import GetAccountablityPartnerImg from "../../assets/GetAccountablityPartner.jpeg"
import GetConflictResolutionImg from "../../assets/GetConflictResolution.jpeg"
import GetEmotionalRecoveryImg from "../../assets/GetEmotionalRecovery.webp"

const RelationalManagement = ({ setModalOpen, setFormType, setFormHeader }) => {
    return <Container>
        <Marginer className="current-container">
            <h1>3. Relational Management</h1>
            <Wrapper className="wrapper">  

            <SubModuleLeftNew imgUrl={CofounderSelectionImg}>
                <div className="head">
                    <ol>
                        <li className="no-style">
                            A senior Entrepreneur and an Entrepreneurial Psychologist will aid entrepreneurs navigate the
                        process of selecting a cofounder. This includes assessing skills, compatibility, competency
                        assessments and shared vision evaluation.
                        </li>
                    </ol>
                </div>

                <div className="left">
                    <div className="image-container"></div>
                </div>
                <div className="right">
                    <h1>Get Cofounder Ready</h1>
                    <DetailsNew>
                        <label>
                            <p>Time Period:</p>
                            <span>
                                7 days
                            </span>
                        </label>
                        <label>
                        <p>Tools:</p>
                            <span>
                                tool1, tool2 and tool3
                            </span>
                        </label>
                        <label>
                        <p>Framework:</p>
                            <span>
                                Framework1, Framework2 and Framework3
                            </span>
                        </label>
                        <label>
                        <p>Specialists:</p>
                            <span>
                                Specialists1 and Specialists2
                            </span>
                        </label>
                        <label>
                        <p>Price:</p>
                            <span>
                                Rs.6999
                            </span>
                        </label>
                    </DetailsNew>
                    <CtaContainer>
                        <button
                            onClick={() => {
                                setFormType("buy-for-myself");
                                setModalOpen(true);
                                setFormHeader(
                                {
                                    "module": "RelationalManagement",
                                    "subModule": "GetCofounderReady"
                                }
                                )
                            }}                           
                        >
                            Buy for myself
                        </button>
                        <button
                            onClick={() => {
                                setFormType("gift-for-friend");
                                setModalOpen(true);
                                setFormHeader(
                                {
                                    "module": "RelationalManagement",
                                    "subModule": "GetCofounderReady"
                                }
                                )
                            }}                        
                        >
                            Gift or Sponsor a friend
                        </button>
                        <button>
                            Request Aid (Corporate CSR funded)
                        </button>
                    </CtaContainer>
                </div>
            </SubModuleLeftNew>

            <SubModuleRightNew imgUrl={GetAccountablityPartnerImg}>
                <div className="head">
                    <ol>
                        <li className="no-style">
                            After the selection, to navigate future uncertainties & mitigate risk we brainstorm with your team
                        to proactively draft agreements to define cofounders' roles, responsibilities, expectation
                        agreement and exit conditions with clarity and mutual understanding. We continuously adjust
                        and evolve these agreements to adapt to changes and evolution.                        </li>
                    </ol>
                </div>

                <div className="left">
                    <h1>Get Accountability Partner</h1>
                    <ol>
                        <li className="no-style"></li>
                    </ol>
                    <DetailsNew>
                        <label>
                            <p>Time Period:</p>
                            <span>
                                7 days
                            </span>
                        </label>
                        <label>
                        <p>Tools:</p>
                            <span>
                                tool1, tool2 and tool3
                            </span>
                        </label>
                        <label>
                        <p>Framework:</p>
                            <span>
                                Framework1, Framework2 and Framework3
                            </span>
                        </label>
                        <label>
                        <p>Specialists:</p>
                            <span>
                                Specialists1 and Specialists2
                            </span>
                        </label>
                        <label>
                        <p>Price:</p>
                            <span>
                                Rs.6999
                            </span>
                        </label>
                    </DetailsNew>
                    <CtaContainer>
                        <button
                            onClick={() => {
                                setFormType("buy-for-myself");
                                setModalOpen(true);
                                setFormHeader(
                                {
                                    "module": "RelationalManagement",
                                    "subModule": "GetAccountabilityPartner"
                                }
                                )
                            }}                        
                        >
                            Buy for myself
                        </button>
                        <button
                            onClick={() => {
                                setFormType("gift-for-friend");
                                setModalOpen(true);
                                setFormHeader(
                                {
                                    "module": "RelationalManagement",
                                    "subModule": "GetAccountabilityPartner"
                                }
                                )
                            }}                             
                        >
                            Gift or Sponsor a friend
                        </button>
                        <button>
                            Request Aid (Corporate CSR funded)
                        </button>
                    </CtaContainer>
                </div>
                <div className="right">
                    <div className="image-container"></div>
                </div>
            </SubModuleRightNew>

            <SubModuleLeftNew imgUrl={GetConflictResolutionImg}>
                <div className="head">
                    <ol>
                        <li className="no-style">
                            Workshops and consulting services focused on resolving conflicts among cofounders. The
                        growth of the company is directly proportional to the working chemistry between the founders.
                        Design and execute personalised strategies for constructive dialogue, mediation techniques, and
                        creating a harmonious work environment.
                        </li>
                    </ol>
                </div>

                <div className="left">
                    <div className="image-container"></div>
                </div>
                <div className="right">
                    <h1>Get Conflict Resolution</h1>
                    <DetailsNew>
                        <label>
                            <p>Time Period:</p>
                            <span>
                                7 days
                            </span>
                        </label>
                        <label>
                        <p>Tools:</p>
                            <span>
                                tool1, tool2 and tool3
                            </span>
                        </label>
                        <label>
                        <p>Framework:</p>
                            <span>
                                Framework1, Framework2 and Framework3
                            </span>
                        </label>
                        <label>
                        <p>Specialists:</p>
                            <span>
                                Specialists1 and Specialists2
                            </span>
                        </label>
                        <label>
                        <p>Price:</p>
                            <span>
                                Rs.6999
                            </span>
                        </label>
                    </DetailsNew>
                    <CtaContainer>
                        <button
                            onClick={() => {
                                setFormType("buy-for-myself");
                                setModalOpen(true);
                                setFormHeader(
                                {
                                    "module": "RelationalManagement",
                                    "subModule": "GetConflictResolution"
                                }
                                )
                            }}                           
                        >
                            Buy for myself
                        </button>
                        <button
                            onClick={() => {
                                setFormType("gift-for-friend");
                                setModalOpen(true);
                                setFormHeader(
                                {
                                    "module": "RelationalManagement",
                                    "subModule": "GetConflictResolution"
                                }
                                )
                            }}                             
                        >
                            Gift or Sponsor a friend
                        </button>
                        <button>
                            Request Aid (Corporate CSR funded)
                        </button>
                    </CtaContainer>
                </div>
            </SubModuleLeftNew>

            <SubModuleRightImg imgUrl={GetEmotionalRecoveryImg}>
                <div className="left">
                    <h1>Get through Emotional Transitions</h1>
                    <ol>
                        <li className="no-style">Designed to help founders cope with the loss of a cofounder due to departure, death, or breach
                        of trust. Focuses on process of emotions, team reintegration, and moving forward positively. If
                        not dealt properly, this pattern could repeat in future. Grief, anger needs to be process else they
                        reduce the quality of life that you are experiencing.</li>
                    </ol>
                    <Details>
                        <label>
                            <p>Time Period:</p>
                            <span>
                                7 days
                            </span>
                        </label>
                        <label>
                        <p>Tools:</p>
                            <span>
                                tool1, tool2 and tool3
                            </span>
                        </label>
                        <label>
                        <p>Framework:</p>
                            <span>
                                Framework1, Framework2 and Framework3
                            </span>
                        </label>
                        <label>
                        <p>Specialists:</p>
                            <span>
                                Specialists1 and Specialists2
                            </span>
                        </label>
                        <label>
                        <p>Price:</p>
                            <span>
                                Rs.6999
                            </span>
                        </label>
                    </Details>
                    <CtaContainer>
                        <button
                            onClick={() => {
                                setFormType("buy-for-myself");
                                setModalOpen(true);
                                setFormHeader(
                                {
                                    "module": "RelationalManagement",
                                    "subModule": "GetThroughEmotionalTransitions"
                                }
                                )
                            }}                           
                        >
                            Buy for myself
                        </button>
                        <button
                            onClick={() => {
                                setFormType("gift-for-friend");
                                setModalOpen(true);
                                setFormHeader(
                                {
                                    "module": "RelationalManagement",
                                    "subModule": "GetThroughEmotionalTransitions"
                                }
                                )
                            }}                           
                        >
                            Gift or Sponsor a friend
                        </button>
                        <button>
                            Request Aid (Corporate CSR funded)
                        </button>
                    </CtaContainer>
                </div>
                <div className="right">
                    <div className="image-container"></div>
                </div>
            </SubModuleRightImg>
            </Wrapper>
        </Marginer>
    </Container>
}

export default RelationalManagement