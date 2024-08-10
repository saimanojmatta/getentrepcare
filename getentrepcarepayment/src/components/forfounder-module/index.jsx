import { Container, SubModuleLeftImg, SubModuleRightImg,  Details, CtaContainer, Wrapper, SubModuleLeftNew, SubModuleRightNew, DetailsNew } from "./index.styled"
import { Marginer } from '../../globalStyles'
import GetEvaluatedImg from '../../assets/GetEvaluated.png'
import EntrepreneurialLifestyleImg from '../../assets/EntrepreneurialLifestyle.png'
import GetToShadowImg from '../../assets/GetToShadow.jpeg'
import SolveBusinessCareImg from '../../assets/SolveBusinessCare.jpeg'
import GetFoundersVacationImg from '../../assets/GetFoundersVacation.jpeg'

const ForFounder = ({ setModalOpen, setFormType, setFormHeader }) => {
    return <Container id="#leadership">
        <Marginer className="current-container">
            <h1>2. Entrepreneurial Growth & Lifestyle</h1>
            <Wrapper className="wrapper">

            <SubModuleLeftNew imgUrl={GetEvaluatedImg}>
                <div className="head">
                    <ol>
                        <li className="no-style">
                            Why am I experiencing frequent fatigue? Why are my relationships so strained? Is it due to the challenges of my entrepreneurial journey, my personality traits, or a skill I haven’t yet acquired? Why do I struggle with anxiety while my co-founder remains calm and grounded? If these questions resonate with you and you’re seeking answers, you’re not alone. We’ve worked with founders who got diagnosed with adjustment disorders, which clarified why they were more affected by changes compared to their team members. Some founders were diagnosed with issues such as a lack of boundaries and poor assertiveness, and they wished they had identified these problems earlier and could have so much brain power, time and energy. 
                            <br></br><br></br>
                            Some serial founders work intensely for a period, only to retreat from public life during the next cycle. This pattern of high activity followed by isolation repeated itself for decades. Later in life, through our diagnosis, they learned these behaviors were indicative of manic-depressive tendencies. Had they been aware of this earlier, they could have been more mindful of the impact it had on their friends and family.
                            <br></br><br></br>
                            We've also found that some founders with high narcissism started their businesses with misguided motivations, which blinded them to their own shortcomings. Another founder scored high on dependency traits, relying excessively on mentors and advisors. She later worked to incorporate self-reliance into her developmental plan as a founder. In the manufacturing sector, one founder displayed symptoms of borderline personality disorder, leading to erratic behavior towards his blue-collar staff. He learned to manage his emotions through coaching based on our diagnosis.
                            <br></br><br></br>
                            No Entrepreneur is perfect. What matters is understanding where we fall on the spectrum and whether that position is benefiting or hindering our entrepreneurial journey. While there may not be cures for many of these conditions, there are management techniques that we often not taught us at school, at work, and even during our familial upbringing. Empower yourself with self awareness through this. 
                        </li>
                    </ol>
                </div>
                <div className="left">
                    <div className="image-container"></div>
                </div>
                <div className="right">
                    <h1>Get Diagnosed</h1>
                    <DetailsNew>
                        <label>
                            <p>Duration:</p>
                            <span>
                                2 Sessions, 1 session per week
                            </span>
                        </label>
                        
                        <label>
                            <p>Psychological Tools:</p>
                            <span>
                                Millon Clinical Multiaxial Inventory Assessment
                            </span>
                        </label>

                        <label>
                            <p>Educational Tools:</p>
                            <span>
                                Suitable workshop and seminar during that period
                            </span>
                        </label>
                        <label>
                            <p>Strategic Tools:</p>
                            <span>
                                Compliment the test results with Personality and Behavioural assessments.
                            </span>
                        </label>
                        <label>
                            <p>Social Tools:</p>
                            <span>
                                Gathering feedback from colleagues to validate the test results
                            </span>
                        </label>
                        <label>
                            <p>Emotional Tools:</p>
                            <span>
                                Mood tracker
                            </span>
                        </label>
                        <label>
                            <p>Technological Tools:</p>
                            <span>
                                Symptom and its frequency recorder
                            </span>
                        </label>
                        <label>
                            <p>Experts Engaged:</p>
                            <span>
                                Clinical Psychologist and a Senior Entrepreneur 
                            </span>
                        </label>
                        <label>
                            <p>Price:</p>
                            <span>
                                20K INR
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
                                    "module": "EntrepreneurialGrowth&Lifestyle",
                                    "subModule": "GetDiagnosed"
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
                                    "module": "EntrepreneurialGrowth&Lifestyle",
                                    "subModule": "GetDiagnosed"
                                }
                                )
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

            <SubModuleRightNew imgUrl={EntrepreneurialLifestyleImg}>
                <div className="head">
                    <ol>
                        <li className="no-style">
                            Disciplined Entrepreneurship - are you aiming for this and need support to design and ace it. It is usually the Comprehensive nature of missing life skills which hinders your discipline. Are you aware which life skills are missing or are weak and need to be strengthened. The discipline needed to sustain an entrepreneurial lifestyle is on par with the discipline followed by globally acclaimed athletes.
                        </li>
                    </ol>
                </div>
                <div className="left">
                    <h1>Get Entrepreneurial lifestyle</h1>
                    <DetailsNew>
                        <label>
                            <p>Duration:</p>
                            <span>
                                3 months, 1 hour workout per week
                            </span>
                        </label>
                        
                        <label>
                            <p>Psychological Tools:</p>
                            <span>
                                Self reflection Questionnaire, Progressive muscle relaxation.
                            </span>
                        </label>

                        <label>
                            <p>Educational Tools:</p>
                            <span>
                                Life skills inventory, Pomodoro Technique, Eisenhower Matrix.
                            </span>
                        </label>
                        <label>
                            <p>Strategic Tools:</p>
                            <span>
                                MBTI, DISC and Enneagram assessment.                        
                            </span>
                        </label>
                        <label>
                            <p>Social Tools:</p>
                            <span>
                                360 degree feedback.                            
                            </span>
                        </label>
                        <label>
                            <p>Emotional Tools:</p>
                            <span>
                                Emotional check-ins and affirmations
                            </span>
                        </label>
                        <label>
                            <p>Technological Tools:</p>
                            <span>
                                Competency gap analysis
                            </span>
                        </label>
                        <label>
                            <p>Experts Engaged:</p>
                            <span>
                                Physical Exercise and nutrition specialist, Positive Psychology Interventionist, Self care master, Sleep Hygiene expert.
                            </span>
                        </label>
                        <label>
                            <p>Price:</p>
                            <span>
                                2K INR
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
                                    "module": "EntrepreneurialGrowth&Lifestyle",
                                    "subModule": "GetEntrepreneurialLifestyle"
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
                                    "module": "EntrepreneurialGrowth&Lifestyle",
                                    "subModule": "GetEntrepreneurialLifestyle"
                                }
                                )
                            }}                        
                        >
                            Gift or Sponsor a friend
                        </button>
                        <button type="button" disabled>
                            Request Aid (Corporate CSR funded)                            onClick={() => {
                                setFormType("buy-for-myself");
                                setModalOpen(true);
                                setFormHeader(
                                {
                                    "module": "EntrepreneurialGrowth&Lifestyle",
                                    "subModule": "GetDiagnosed"
                                }
                                )
                            }}  
                        </button>
                    </CtaContainer>
                </div>
                <div className="right">
                    <div className="image-container"></div>
                </div>
            </SubModuleRightNew>

            <SubModuleLeftNew imgUrl={GetToShadowImg}>
                <div className="head">
                    <ol>
                        <li className="no-style">
                        Join a 3-day immersive experience shadowing a seasoned multi-generational entrepreneur or
                        serial founders. Witness firsthand their life skills, decision-making processes, daily management
                        techniques, and strategies for personal and professional development.
                        </li>
                    </ol>
                </div>

                <div className="left">
                    <div className="image-container"></div>
                </div>
                <div className="right">
                    <h1>Get to Shadow Seniors</h1>
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
                                    "module": "EntrepreneurialGrowth&Lifestyle",
                                    "subModule": "GetToShadowSeniors"
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
                                    "module": "EntrepreneurialGrowth&Lifestyle",
                                    "subModule": "GetToShadowSeniors"
                                }
                                )
                            }}                            
                        >
                            Gift or Sponsor a friend
                        </button>
                        <button disabled>
                            Request Aid (Corporate CSR funded)
                        </button>
                    </CtaContainer>
                </div>
            </SubModuleLeftNew>

            <SubModuleRightNew imgUrl={SolveBusinessCareImg}>
                <div className="head">
                    <ol>
                        <li className="no-style">
                            Attend a one-day workshop at the offices of founders who have successfully raised significant
                        funds and built large organizations. Collaborate in a group setting to solve a real-time business
                        case study for them. These workshops offer a unique opportunity for founders to enhance
                        competencies swiftly and effectively, without the luxury of traditional business school networking
                        and group assignments.                        
                        </li>
                    </ol>
                </div>                
                
                <div className="left">
                    <h1>Get to solve Business Case</h1>
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
                                    "module": "EntrepreneurialGrowth&Lifestyle",
                                    "subModule": "GetToSolveBusinessCase"
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
                                    "module": "EntrepreneurialGrowth&Lifestyle",
                                    "subModule": "GetToSolveBusinessCase"
                                }
                                )
                            }}                          
                        >
                            Gift or Sponsor a friend
                        </button>
                        <button disabled>
                            Request Aid (Corporate CSR funded)
                        </button>
                    </CtaContainer>
                </div>
                <div className="right">
                    <div className="image-container"></div>
                </div>
            </SubModuleRightNew>

            <SubModuleLeftNew imgUrl={GetFoundersVacationImg}>
                <div className="head">
                    <ol>
                        <li className="no-style">
                            Join a bimonthly weekend retreat with 5 to 10 founders to relax, bond, and grow. Themes include
                        AI founders, women founders, health tech founders, Series A founders, and more. Explore natural
                        settings while enhance self-awareness through diagnostic tests. Audit personal and professional
                        support systems to overcome obstacles with guidance from an Entrepreneurial Psychologist and
                        Business coach who would be part of your travel cohort. Grow as you travel, grow as you relax.
                        </li>
                    </ol>
                </div>
                <div className="left">
                    <div className="image-container"></div>
                </div>
                <div className="right">
                    <h1>Get Founder’s Vacation</h1>
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
                                    "module": "EntrepreneurialGrowth&Lifestyle",
                                    "subModule": "GetFoundersVacation"
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
                                    "module": "EntrepreneurialGrowth&Lifestyle",
                                    "subModule": "GetFoundersVacation"
                                }
                                )
                            }}                            
                        >
                            Gift or Sponsor a friend
                        </button>
                        <button disabled>
                            Request Aid (Corporate CSR funded)
                        </button>
                    </CtaContainer>
                </div>
            </SubModuleLeftNew>
            </Wrapper>
        </Marginer>
    </Container>
}

export default ForFounder