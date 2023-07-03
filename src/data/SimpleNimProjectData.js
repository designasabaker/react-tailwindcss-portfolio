// Import images
import Image1 from '../images/SimpleNim-1.png';
import Image2 from '../images/SimpleNim-2.png';
// import Image3 from '../images/SimpleNim-3.png';
// import Image4 from '../images/SimpleNim-4.png';
// import Image5 from '../images/SimpleNim-5.png';
import Image6 from '../images/SimpleNim-code.png';
import chaseImg from '../images/nim/chase.png';
import connectImg from '../images/nim/connect.png';

import WeLightImage1 from '../images/WeLight.png';

// Import icons
import {
    FiFacebook,
    FiInstagram,
    FiLinkedin,
    FiTwitter,
    FiYoutube,
} from 'react-icons/fi';
import OSBCover from "../images/OSB-1.png";
import EcoHomeCover from "../images/EcoHomeCover.png";
import ClickableImage from "../components/projects/ClickableImage";
import notionImg3 from "../images/Projects/welight/notion3.jpg";
import Image4 from "../images/EcoHome-4.png";
import CheckLiveWebBtn from "../components/projects/CheckLiveWebBtn";

export const SimpleNimProjectData = {
    name: 'SimpleNim',
    ProjectHeader: {
        title: 'SimpleNim & Connect4 AI & Chase',
        publishDate: 'Jun 21, 2023',
        tags: 'Web Game',
    },
    ProjectImages: [
        {
            id: 1,
            title: 'Kabul Project Management UI',
            img: Image1,
        },
        {
            id: 2,
            title: 'Kabul Project Management UI',
            img: Image2,
        },
        {
            id: 3,
            title: 'Kabul Project Management UI',
            img: chaseImg,
        },
        {
            id: 4,
            title: 'Kabul Project Management UI',
            img: connectImg,
        },
        // {
        //     id: 5,
        //     title: 'Kabul Project Management UI',
        //     img: Image5,
        // },
        {
            id: 6,
            title: 'Kabul Project Management UI',
            img: Image6,
        },
    ],
    ProjectInfo: {
        ClientHeading: 'About',
        CompanyInfo: [
            {
                id: 1,
                title: 'Name',
                details: 'Simple Nim'
            },
            {
                id: 2,
                title: 'Services',
                details: 'UI Design & Frontend Development',
            },
            {
            	id: 3,
            	title: 'Website',
            	details: 'https://designasabaker.github.io/Nim/',
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
                    'HTML',
                    'CSS',
                    'JavaScript',
                    'Matter.js',
                ],
            },
        ],
        ProjectDetailsHeading: 'Challenge',
        ProjectDetails: [
            {
                id: 0.1,
                details:
                    <div className={"w-full grid grid-cols-2"}>
                        <ClickableImage
                            src={Image1} alt={"user story A"}
                            className={"max-w-md max-h-lg object-contain px-6 pt-6"}
                            style={{
                                maxHeight: "300px"
                            }}/>
                        <div className={"flex flex-col px-6"}>
                            <div style={{flex:1}} />
                            <div className={"font-thin text-md"}>Nim</div>
                            <p className={"font-thin text-sm py-2"}>Nim is a web game that I developed as part of a CS project at Brown University. The game allows two players to compete against each other, using strategy and logic to outsmart their opponent.</p>
                            <a className={"font-thin text-sm py-2"} target={"_blank"} href={"https://github.com/designasabaker/Nim/tree/matter"}>Check source code here :)</a>
                            <CheckLiveWebBtn LIVE_URL={"https://designasabaker.github.io/Nim/"} value={"PLAY!"} />
                        </div>
                    </div>,
            },
            {
                id: 1,
                details:
                    "The initial codebase for the project was written in ReasonML, a functional programming language that allows for more accessible, safe, and simple code. This choice showcases the practical application of ReasonML in web game development, blending the fields of computer science, strategy, and logic in a real-world scenario."
            },
            {
                id: 9,
                details:
                    <div className={"w-full grid grid-cols-2"}>
                        <iframe width={"100%"} height={300} src="https://www.youtube.com/embed/Q2q96ESaSaU"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                        <div className={"flex flex-col px-3"}>
                            <div style={{flex:1}} />
                            <div className={"font-thin text-sm"}>Connect 4: Human vs. Human </div>
                            <p className={"font-thin text-sm py-2"}>
                                Despite being a console game, it implements a basic user interface using two colors to distinguish between the players' pieces. This game showcases the real-world application of functional programming in creating interactive, state-managed applications like games, providing an insightful perspective into how ReasonML can be used in practical scenarios.                            </p>
                        </div>
                    </div>,
            },
            {
                id:10,
                details:
                <>Connect 4: Human vs. Human" is a console game developed using ReasonML, a functional programming language that extends OCaml and was developed by Facebook. The game emulates the classic two-player game Connect 4, where players take turns dropping colored discs into a grid, with the goal of being the first to connect four discs in a row, whether vertically, horizontally, or diagonally.</>
            }
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
