// Import images
import Image1 from '../images/carpet-1.png';
import Image2 from '../images/carpet-2.png';
import Image3 from '../images/carpet-3.png';
import Image4 from '../images/carpet-4.png';
import Image5 from '../images/carpet-5.png';
import Image6 from '../images/carpet-6.png';

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

export const CarpetProjectData = {
    name: 'Carpet',
    ProjectHeader: {
        title: 'Carpet',
        publishDate: 'Jun 21, 2023',
        tags: '3D Design',
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
            img: Image3,
        },
        {
            id: 4,
            title: 'Kabul Project Management UI',
            img: Image4,
        },
        {
            id: 5,
            title: 'Kabul Project Management UI',
            img: Image5,
        },
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
                details: 'Carpet'
            },
            {
                id: 2,
                title: 'Services',
                details: '3D Design',
            },
            // {
            // 	id: 3,
            // 	title: 'Website',
            // 	details: 'https://company.com',
            // },
            // {
            // 	id: 4,
            // 	title: 'Phone',
            // 	details: '555 8888 888',
            // },
        ],
        ObjectivesHeading: 'Objective',
        ObjectivesDetails:
            'A team of design students from the Rhode Island School of Design (RISD) is collaborating with a chemistry professor from the University of Rhode Island to create a new brand. In this UI/UX design project, our team aims to deliver a comprehensive digital experience that captures the essence of the professor\'s brand and effectively communicates it to its target audience.',		Technologies: [
            {
                title: 'Tools & Technologies',
                techs: [
                    'Rhino3D',
                    'Grasshopper',
                ],
            },
        ],
        ProjectDetailsHeading: 'Challenge',
        ProjectDetails: [
            {
                id: 1,
                details:
                    "The old roof is low qualifed. Therefore, it has to be moved. To solve the space shortage, a box was inserted into the atrium. In order not to block the sunshine, the new box is located right on the top of the conference room."
            },
            {
                id: 2,
                details:
                    'The whole roof system is meant to be inserted into the atrium. The overall system consists of structure, water proof, sun shade, drainage and exhibiton funciton. From the structure perspective, a double-truss net is very practical, since the gap between the two corridors is about 24 meters. Otherwise, the middle of the net is weakest, and no doubt should it be strengthened.',
            },
            {
                id: 3,
                details:
                    'From the beginning form anysis, the use of two twisted surfaces have been determined. In other words, the pattern, which has structural meaning, comes from thin trangles, thick triangles, classic and bionic. The final bionic idea comes from the fact that the system is located between two corridors. This idea renders the feeling that the system is connecting the two old buildings.',
            },
            {
                id: 4,
                details:
                    'Increase the usable area by 130 square meters. A 17m*8m large plate located 5.4m above the entrance of the lecture hall. Relatively compatible scale 5.4m height. And does not interfere with the sight communication of the entire space . Strive for the truss to be simple and transparent, and the internal space is bright and pleasant . The newly rebuilt roof truss is lower than the roof of the fourth floor of the Red Building, keeping a low profile to the old building. The roof of the roof truss is closed for lighting, sheltering from rain, and keeping warm. Viewed from the section, the twisted frame is connected with the original building’s stepped space.',
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
