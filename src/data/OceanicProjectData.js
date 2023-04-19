// Import images
import Image1 from '../images/oceanic-1.png';
import Image2 from '../images/oceanic-2.png';
import Image3 from '../images/oceanic-3.png';
import Image4 from '../images/oceanic-4.png';
import Image5 from '../images/oceanic-5.png';
import Image6 from '../images/oceanic-6.png';

import WeLightImage1 from '../images/WeLight.png';


// Import icons
import {
    FiFacebook,
    FiInstagram,
    FiLinkedin,
    FiTwitter,
    FiYoutube,
} from 'react-icons/fi';
import EcoHomeCover from "../images/EcoHomeCover.png";

export const OceanicProjectData = {
    name: 'Oceanic',
    ProjectHeader: {
        title: 'Oceanic',
        publishDate: 'Jun 21, 2022',
        tags: 'UI / Frontend',
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
                details: 'Oceanic'
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
            'I would like to experience a 3D volume that invokes the essence of the ocean while also feeling natural and vibrant.',
        Technologies: [
            {
                title: 'Tools & Technologies',
                techs: [
                    'Rhino3D',
                    'Grasshopper',
                    '3D-Printing',
                ],
            },
        ],
        ProjectDetailsHeading: 'Challenge',
        ProjectDetails: [
            {
                id: 1,
                details:
                    "I used a graphic coding platform called Grasshopper to transform 3D objects. However, 3D printing can be challenging because it requires a strong and solid structure. After multiple failures, including issues with the 3D printing material and the need to redesign the intersection parts,I was finally able to create a 3D printed form that had an organic feel to it."
            },
            // {
            //     id: 2,
            //     details:
            //         'By incorporating this local element into the brand\'s identity, Ocean State Bioactives is closely linked to the state and its natural resources. In this UI/UX design project, we aim to showcase the brand\'s connection to Rhode Island through a visually engaging and user-friendly digital experience.',
            // },
            // {
            //     id: 3,
            //     details:
            //         'Our goal is to create a visually engaging and user-friendly website that showcases the brand\'s advanced ingredients and its connection to Rhode Island, ultimately attracting the attention of business partners in the cosmetics industry.',
            // },
            // {
            //     id: 4,
            //     details:
            //         'In our design approach, we avoided using fancy elements and instead focused on creating a clean and simple aesthetic that reflects the brand\'s commitment to nature.',
            // },
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
                name:'WeLight',
                title: 'WeLight Tech',
                img: WeLightImage1,
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
