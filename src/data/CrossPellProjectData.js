import ctp01 from '../images/Projects/CrossPell/ctp-01.jpg';
import ctpCtrl01 from '../images/Projects/CrossPell/ctp-ctrl-01.jpg';
import ctpCtrl02 from '../images/Projects/CrossPell/ctp-ctrl-02.jpg';
import ctpMenu01 from '../images/Projects/CrossPell/ctp-menu-01.jpg';
import ctpMenu02 from '../images/Projects/CrossPell/ctp-menu-02.jpg';
import ctpCodeFlow from '../images/Projects/CrossPell/ctp-code-flow.jpg';
import ctpCodeFlowHr from '../images/Projects/CrossPell/ctp-code-flow-hr.png';
import ctpExhi01 from '../images/Projects/CrossPell/ctp-exhi-01.jpg';
import ctpExhi02 from '../images/Projects/CrossPell/ctp-exhi-02.jpg';

import OSBCover from "../images/OSB-1.png";
import EcoHomeCover from "../images/EcoHomeCover.png";
import ClickableImage from "../components/projects/ClickableImage";
import notionImg1 from "../images/Projects/welight/notion1.jpg";

export const CrossPellProjectData = {
    name: 'crosspell',
    ProjectHeader: {
        title: 'Cross the Pell Bridge',
        publishDate: 'Feb 21, 2023',
        tags: 'XR Application',
    },
    ProjectImages: [
        {
            id: 1,
            title: 'Kabul Project Management UI',
            img: ctp01,
        },
        {
            id: 2,
            title: 'Kabul Project Management UI',
            img: ctpMenu01,
        },
        {
            id: 3,
            title: 'Kabul Project Management UI',
            img: ctpMenu02,
        },
        {
            id: 4,
            title: 'Kabul Project Management UI',
            img: ctpExhi01,
        },
        {
            id: 5,
            title: 'Kabul Project Management UI',
            img: ctpExhi02,
        },
        {
            id: 6,
            title: 'Kabul Project Management UI',
            img: ctpCodeFlowHr,
        },
    ],
    ProjectInfo: {
        ClientHeading: 'About',
        CompanyInfo: [
            {
                id: 1,
                title: 'Name',
                details: 'Cross the Pell Bridge',
            },
            {
                id: 2,
                title: 'Services',
                details: 'XR Application',
            },
            {
                id: 3,
                title: 'Preview Video',
                details: 'https://youtu.be/tSzuSx4Bs_o',
            },
            {
                id: 4,
                title: 'Github Repo',
                details: 'https://github.com/designasabaker/pellunityscript',
            },
            // {
            // 	id: 4,
            // 	title: 'Phone',
            // 	details: '555 8888 888',
            // },
        ],
        // ObjectivesHeading: 'Objective',
        // ObjectivesDetails:
        //     'A team of design students from the Rhode Island School of Design (RISD) is collaborating with a chemistry professor from the University of Rhode Island to create a new brand. In this UI/UX design project, our team aims to deliver a comprehensive digital experience that captures the essence of the professor\'s brand and effectively communicates it to its target audience.',
        Technologies: [
            {
                title: 'Tools & Technologies',
                techs: [
                    'Unity',
                    'C#',
                    'Figma',
                ],
            },
        ],
        ProjectDetailsHeading: 'Challenge',
        ProjectDetails: [
            {
                id: 1,
                details:
                <>
                    On December 2nd, 3rd, and 4th, 2022, Bike Newport and the Rhode Island School of Design (RISD)’s Department of Interior Architecture together hosted “Crossing the Pell” at the historic Old Colony House in Newport, RI. Using the magic of virtual and augmented reality, visitors experienced biking and walking across the Pell Bridge through four creative RISD student design concepts. <br /><br />
                    More than 450 participants, ages 3 to 93, were transported inside these inspiring visions, where they virtually walked and pedaled 2.1 miles across the iconic Claiborne Pell Bridge, the longest suspension bridge in New England.<br />
                    <small className={"text-sm"}>https://bikenewportri.org/risd-crossing-the-pell/</small>
                </>
            },
            {
                id: 2,
                details:
                <>
                    <div className={"w-full grid grid-cols-2"}>
                        <div className={"flex flex-row gap-2"}>
                            <ClickableImage
                                src={ctp01} alt={"feedback"}
                                className={"max-w-md max-h-lg object-contain px-6 pt-6"}
                                style={{maxWidth: "450px"}}/>
                            <ClickableImage
                                src={ctpCtrl01} alt={"feedback"}
                                className={"max-w-md max-h-lg object-contain px-6 pt-6"}
                                style={{maxWidth: "450px"}}/>
                            <ClickableImage
                                src={ctpCtrl02} alt={"feedback"}
                                className={"max-w-md max-h-lg object-contain px-6 pt-6"}
                                style={{maxWidth: "450px"}}/>
                        </div>
                        <div className={"flex flex-col px-3"}>
                            <div style={{flex:1}} />
                            <div className={"font-thin text-sm"}>Challenge I</div>
                            <p className={"font-thin text-sm py-2"}>A menu is developed to enable the user, wearing a headset, to switch scenes or adjust the headset's position using only two buttons.
                            </p>
                        </div>
                    </div>
                </>
            },
            {
                id: 3,
                details:
                    <div>
                        <h1 className={"font-bold"}>CHALLENGING INPUT MANAGEMENT</h1>
                        <p>TWO CONTROLLERS ARE FIXED&nbsp;&nbsp;&nbsp;=>&nbsp;&nbsp; NO RAYCASTING IN THE GAME</p>
                        <div>
                            <p>Only 2 triggers are used =></p>
                        </div>
                        <div className={"w-full flex flex-row justify-end"}>
                            <div className={"px-3"}>
                                <p>Left Trigger:</p>
                                <p>&nbsp;</p>
                                <p>Right Trigger:</p>
                            </div>
                            <div className={"px-3"}>
                                <p>Call the menu</p>
                                <p>Click the selected button</p>
                                <p>Switch to the next button</p>
                            </div>
                        </div>
                    </div>
            },
            {   id: 4,
                details:
                    <div className={"w-full grid grid-cols-2"}>
                        <div className={"flex flex-row gap-2"}>
                            <ClickableImage
                                src={ctpMenu01} alt={"feedback"}
                                className={"max-w-md max-h-lg object-contain px-6 pt-6"}
                                style={{maxWidth: "450px"}}/>
                            <ClickableImage
                                src={ctpMenu02} alt={"feedback"}
                                className={"max-w-md max-h-lg object-contain px-6 pt-6"}
                                style={{maxWidth: "450px"}}/>
                        </div>
                        <div className={"flex flex-col px-3"}>
                            <div style={{flex:1}} />
                            <div className={"font-thin text-sm"}></div>
                            <p className={"font-thin text-sm py-2"}>The menu is designed to be simple and intuitive. The user can easily navigate through the menu and select the desired option.
                            </p>
                        </div>
                    </div>
            },
            {   id: 5,
                details:
                    <div className={''}>
                        <ClickableImage
                            isLarge={true}
                            src={ctpCodeFlowHr} alt={"code"}
                            className={"max-w-md max-h-lg object-contain px-6 pt-6"}
                            style={{maxWidth: "450px"}}/>
                    </div>
            },
            {
                id: 5.5,
                details:
                    <>
                        In the original usage scheme, I aimed to confirm button presses by pressing two buttons simultaneously. I achieved control over the game by setting timestamps.<br />
                    </>
            },
            {   id: 6,
                details:
                    <div className={'w-full grid grid-cols-2'}>
                        <iframe style={{width: '100%',height: 315}} src="https://www.youtube.com/embed/AxZvCH3xsNs"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
            },
        ],
        SocialSharingHeading: '',
        SocialSharing: [
            // {
            // 	id: 1,
            // 	name: 'Twitter',
            // 	icon: <FiTwitter />,
            // 	url: 'https://twitter.com/realstoman',
            // },
            // {
            // 	id: 2,
            // 	name: 'Instagram',
            // 	icon: <FiInstagram />,
            // 	url: 'https://instagram.com/realstoman',
            // },
            // {
            // 	id: 3,
            // 	name: 'Facebook',
            // 	icon: <FiFacebook />,
            // 	url: 'https://facebook.com/',
            // },
            // {
            // 	id: 4,
            // 	name: 'LinkedIn',
            // 	icon: <FiLinkedin />,
            // 	url: 'https://linkedin.com/',
            // },
            // {
            // 	id: 5,
            // 	name: 'Youtube',
            // 	icon: <FiYoutube />,
            // 	url: 'https://www.youtube.com/c/StomanStudio',
            // },
        ],
    },
    RelatedProject: {
        title: 'Related Projects',
        Projects: [
            {
                id: 'r1',
                name: 'OSB',
                title: 'OSB Website',
                img: OSBCover,
            },
            {
                id: 'r2',
                name:'EcoHome',
                title: 'EcoHome',
                img: EcoHomeCover,
            },
            // {
            // 	id: 3,
            // 	title: 'UI Design',
            // 	img: Image6,
            // },
            // {
            // 	id: 4,
            // 	title: 'Kabul Mobile App UI',
            // 	img: Image3,
            // },
        ],
    },
};
