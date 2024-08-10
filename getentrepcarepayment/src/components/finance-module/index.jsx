import {
  Container,
  SubModuleLeftImg,
  SubModuleRightImg,
  Details,
  CtaContainer,
  Wrapper,
  SubModuleLeftNew,
  SubModuleRightNew,
  DetailsNew,
} from "./index.styled";
import { Marginer } from "../../globalStyles";
import WealthCreationImg from "../../assets/wealth-creation.jpeg";
import GetFinancialGoalsImg from "../../assets/get-financial-goals.png";
import BusinessRescueImg from "../../assets/GetBusinessRescue.jpeg";
import FinancialRecoveryImg from "../../assets/FinancialRecovery.jpeg";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";

const FinanceMastery = ({ setModalOpen, setFormType, setFormHeader }) => {
  const handlePayment = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/create-payment",
        {
          amount: "50",
          purpose: "Test Payment",
          buyer_name: "machel jordan",
          email: "jordanM@gmail.com",
          phone: "9999999999",
        }
      );
      // console.log(response.data);

      if (response.data && response.data.longurl) {
        window.location.href = response.data.longurl;
      }
    } catch (error) {
      console.error("Payment Error:", error);
    }
  };
  return (
    <Container id="finance">
      <Marginer className="current-container">
        <h1>1. Financial Mastery</h1>
        <Wrapper className="wrapper">
          <SubModuleLeftNew imgUrl={WealthCreationImg}>
            <div className="head">
              <ol>
                <li className="no-style">
                  Entrepreneurs often neglect wealth creation due to the daily
                  grind and numerous stressors they face. Deeply ingrained
                  beliefs influenced by their community, caste, religion,
                  economic background, multi-generational financial management,
                  and childhood experiences further hinder and distort the
                  development of a wealth mindset. While focusing on innovation
                  and impact, they frequently overlook the importance of wealth
                  preparation. Balancing personal skill development, team
                  leadership, and client management etc. can also contribute to
                  this oversight. However, financial abundance is an
                  entrepreneur's greatest asset, benefiting both themselves and
                  those around them. Take the first step towards achieving it.
                </li>
              </ol>
            </div>
            <div className="left">
              <div className="image-container"></div>
            </div>
            <div className="right">
              <h1>Get Wealth Creation Mindset</h1>
              <DetailsNew>
                <label>
                  <p>Duration:</p>
                  <span>3 months i.e. 12 one-hour workouts, one per week</span>
                </label>

                <label>
                  <p>Psychological Tools:</p>
                  <span>Vision Board & Visualisation</span>
                </label>

                <label>
                  <p>Educational Tools:</p>
                  <span>
                    Personalised Book & Podcast analysis & Case study with
                    expert
                  </span>
                </label>
                <label>
                  <p>Strategic Tools:</p>
                  <span>
                    SMART goals framework, Establish Support system i.e. Finding
                    a long term financial mentor and partnering with like-minded
                    peers to stay accountable
                  </span>
                </label>
                <label>
                  <p>Relational Tools:</p>
                  <span>2 sessions with you and your life partner</span>
                </label>
                <label>
                  <p>Technological Tools:</p>
                  <span>
                    Financial calculator, Investment analysis tools, Data
                    Analytical tools
                  </span>
                </label>
                <label>
                  <p>Experts Engaged:</p>
                  <span>
                    Experienced Wealth coach who have witnessed their clients
                    building wealth and manages & builds their own wealth
                    successfully
                  </span>
                </label>
                <label>
                  <p>Price:</p>
                  <span>3K INR per workout (Pay and book a slot)</span>
                </label>
              </DetailsNew>
              <CtaContainer>
                <button onClick={handlePayment}>buy now</button>
                <button
                  onClick={() => {
                    setFormType("buy-for-myself");
                    setModalOpen(true);
                    setFormHeader({
                      module: "FinancialMastery",
                      subModule: "GetWealthCreationMindset",
                    });
                  }}
                >
                  Buy for myself
                </button>
                <button
                  onClick={() => {
                    setFormType("gift-for-friend");
                    setModalOpen(true);
                    setFormHeader({
                      module: "FinancialMastery",
                      subModule: "GetWealthCreationMindset",
                    });
                  }}
                >
                  Gift or Sponsor a friend
                </button>
                <button type="button" disabled>
                  Request Aid (Corporate CSR funded)
                </button>
              </CtaContainer>
            </div>
          </SubModuleLeftNew>

          <SubModuleRightNew imgUrl={GetFinancialGoalsImg}>
            <div className="head">
              <ol>
                <li className="no-style">
                  Have you set personal financial goals, or have you overlooked
                  their importance? Are your goals realistic without harming
                  your health and well-being? Do you have the resources needed
                  to achieve these goals, and if not, do you know what's missing
                  and how to get it? Do you track failures and review your
                  progress regularly? Has anyone reviewed your financial goals
                  to help you reflect on their relevance? Are you someone who
                  sets big goals but crumbles under pressure of achieving them?
                  Has anyone in your family or social circle modeled the journey
                  of setting and achieving financial goals?
                  <br></br>
                  <br></br>
                  Prudent Entrepreneurs set personal financial goals to ensure
                  their long-term financial security and stability. While
                  focusing on growing their business, it is easy to overlook
                  personal finances, which can lead to significant risks if the
                  business faces challenges or family faces emergencies. By
                  setting personal financial goals, entrepreneurs can create a
                  safety net, save for retirement, and plan social mobility &
                  financial freedom. This balanced approach not only safeguards
                  their personal well-being but also allows them to make more
                  strategic business decisions without the stress of personal
                  financial insecurity. In essence, prioritizing personal
                  financial goals helps entrepreneurs build a strong foundation
                  for both their personal and professional lives. Take the first
                  step towards financial Prudence.
                </li>
              </ol>
            </div>
            <div className="left">
              <h1>Get Personal Money Goals Blueprint</h1>
              <DetailsNew>
                <label>
                  <p>Duration:</p>
                  <span>4 weeks i.e. 4 one-hour workouts, one per week</span>
                </label>

                <label>
                  <p>Behavioral Tools:</p>
                  <span>
                    Setting up incentive system for motivation, Financial
                    Diaries to identify triggers for poor habits
                  </span>
                </label>

                <label>
                  <p>Educational Tools:</p>
                  <span>
                    Personal Finance audit, Case study on Entrepreneurs
                    Financial Pitfalls
                  </span>
                </label>
                <label>
                  <p>Social Tools:</p>
                  <span>
                    Find a supportive friend or family member who can encourage
                    you and help keep you on track
                  </span>
                </label>
                <label>
                  <p>Relational Tools:</p>
                  <span>
                    Assess risk of your and your spouse’s financial behaviour
                  </span>
                </label>
                <label>
                  <p>Technological Tools:</p>
                  <span>
                    Excel sheet, Cash flow analysis tool, Scenario planning tool
                  </span>
                </label>
                <label>
                  <p>Experts Engaged:</p>
                  <span>
                    Certified Financial Planner, Behavioral Finance Specialist,
                    Financial Counsellor
                  </span>
                </label>
                <label>
                  <p>Price:</p>
                  <span>25K INR package price</span>
                </label>
              </DetailsNew>
              <CtaContainer>
                <button
                  onClick={() => {
                    setFormType("buy-for-myself");
                    setModalOpen(true);
                    setFormHeader({
                      module: "FinancialMastery",
                      subModule: "GetPersonalMoneyGoalsBluePrint",
                    });
                  }}
                >
                  Buy for myself
                </button>
                <button
                  onClick={() => {
                    setFormType("gift-for-friend");
                    setModalOpen(true);
                    setFormHeader({
                      module: "FinancialMastery",
                      subModule: "GetPersonalMoneyGoalsBluePrint",
                    });
                  }}
                >
                  Gift or Sponsor a friend
                </button>
                <button type="button" disabled>
                  Request Aid (Corporate CSR funded)
                </button>
              </CtaContainer>
            </div>
            <div className="right">
              <div className="image-container"></div>
            </div>
          </SubModuleRightNew>

          <SubModuleLeftNew imgUrl={FinancialRecoveryImg}>
            <div className="head">
              <ol>
                <li className="no-style">
                  No one wants to fall into a debt cycle or suffer business
                  losses, but it can happen to anyone due to inexperience,
                  unexpected events, bad timing, or miscalculations. Business
                  life is unpredictable and uncertain with so many highs and
                  lows. For many, it could be challenging to bounce back and
                  regain their confidence after a financial hit or
                  mismanagement.
                  <br></br>
                  <br></br>
                  Recovering from business debt and losses is not a solitary
                  journey. It can be achieved more quickly and efficiently with
                  support, ensuring you don't carry unprocessed baggage that
                  limits your ability to take bold decisions in later parts of
                  life. Partner with an experienced Entrepreneur who went
                  through and came out of a similar journey to craft a clear
                  roadmap for regaining financial stability and peace of mind.
                  You can identify & break patterns and blockages related to
                  losing money.
                </li>
              </ol>
            </div>
            <div className="left">
              <div className="image-container"></div>
            </div>
            <div className="right">
              <h1>Get Past Debts, Loans & Losses</h1>
              <DetailsNew>
                <label>
                  <p>Duration:</p>
                  <span>
                    1.5 month i.e. 6 one-hour work out sessions, one per week
                  </span>
                </label>
                <label>
                  <p>Psychological Tools:</p>
                  <span>
                    Finding Emotional triggers around financial decisions,
                    Cognitive restructuring tool to handle the shame & guilt
                    surrounding it
                  </span>
                </label>
                <label>
                  <p>Educational Tools:</p>
                  <span>Recovery Seminar or Financial recovery courses</span>
                </label>
                <label>
                  <p>Strategic Tools:</p>
                  <span>
                    Reflective practice rather than seeing it as a failure.
                  </span>
                </label>
                <label>
                  <p>Social Tools:</p>
                  <span>
                    Search and surround yourself with peers and mentors who will
                    bring you out of it rather than bury you in it.
                  </span>
                </label>
                <label>
                  <p>Emotional Tools:</p>
                  <span>
                    Financial Resilience training interconnected with Self
                    awareness & EQ training.
                  </span>
                </label>
                <label>
                  <p>Technological Tools:</p>
                  <span>Debt management tool and forecasting tool.</span>
                </label>
                <label>
                  <p>Experts Engaged:</p>
                  <span>
                    Counsellor specialised in financial recovery, Experienced
                    Entrepreneur
                  </span>
                </label>
                <label>
                  <p>Price:</p>
                  <span>2K INR per workout (Pay and book a slot)</span>
                </label>
              </DetailsNew>
              <CtaContainer>
                <button
                  onClick={() => {
                    setFormType("buy-for-myself");
                    setModalOpen(true);
                    setFormHeader({
                      module: "FinancialMastery",
                      subModule: "GetPastDebtsLoansLosses",
                    });
                  }}
                >
                  Buy for myself
                </button>
                <button
                  onClick={() => {
                    setFormType("gift-for-friend");
                    setModalOpen(true);
                    setFormHeader({
                      module: "FinancialMastery",
                      subModule: "GetPastDebtsLoansLosses",
                    });
                  }}
                >
                  Gift or Sponsor a friend
                </button>
                <button type="button" disabled>
                  Request Aid (Corporate CSR funded)
                </button>
              </CtaContainer>
            </div>
          </SubModuleLeftNew>

          <SubModuleRightNew imgUrl={BusinessRescueImg}>
            <div className="head">
              <ol>
                <li className="no-style">
                  If things aren't going well, do you want to sell your company,
                  get acquired, merge with some other entity, pause operations
                  for 2 years or brainstorm others options in a safe,
                  confidential space with experienced support? We aim to address
                  the issue of India's startup graveyard. Closing a company
                  should be the last resort. Often, leaders struggle to find the
                  right solutions during high-stress periods because they lack
                  access to the right networks and resources.
                </li>
              </ol>
            </div>
            <div className="left">
              <h1>Get Business rescue</h1>
              <DetailsNew>
                <label>
                  <p>Duration:</p>
                  <span>3 one-hour work out sessions, one per week</span>
                </label>

                <label>
                  <p>Behavioral Tools:</p>
                  <span>
                    CBT to challenge any negative thought pattern on taking this
                    decision.
                  </span>
                </label>

                <label>
                  <p>Educational Tools:</p>
                  <span>
                    Exit Strategy workshop, Business Continuity course, Business
                    Survival guide.
                  </span>
                </label>
                <label>
                  <p>Strategic Tools:</p>
                  <span>SWOT analysis, Pros & Cons list.</span>
                </label>

                <label>
                  <p>Social Tools:</p>
                  <span>
                    Strategising and executing how to leverage Professional
                    Networks.
                  </span>
                </label>
                <label>
                  <p>Emotional Tools:</p>
                  <span>Emotional Intelligence and Adaptability testing.</span>
                </label>
                <label>
                  <p>Technological Tools:</p>
                  <span>
                    Digital Non Disclosure agreement for privacy and safety.
                  </span>
                </label>
                <label>
                  <p>Experts Engaged:</p>
                  <span>
                    Therapeutic and cognitive support to gain perspective.
                  </span>
                </label>
                <label>
                  <p>Price:</p>
                  <span>10K INR per workout (Pay and book a slot)</span>
                </label>
              </DetailsNew>
              <CtaContainer>
                <button
                  onClick={() => {
                    setFormType("buy-for-myself");
                    setModalOpen(true);
                    setFormHeader({
                      module: "FinancialMastery",
                      subModule: "GetBusinessRescue",
                    });
                  }}
                >
                  Buy for myself
                </button>
                <button
                  onClick={() => {
                    setFormType("gift-for-friend");
                    setModalOpen(true);
                    setFormHeader({
                      module: "FinancialMastery",
                      subModule: "GetBusinessRescue",
                    });
                  }}
                >
                  Gift or Sponsor a friend
                </button>
                <button type="button" disabled>
                  Request Aid (Corporate CSR funded)
                </button>
              </CtaContainer>
            </div>
            <div className="right">
              <div className="image-container"></div>
            </div>
          </SubModuleRightNew>
          {/* </Swiper> */}
        </Wrapper>
      </Marginer>
    </Container>
  );
};

export default FinanceMastery;
