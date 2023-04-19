// Import images
import Image1 from '../images/gd-1.png';
import Image2 from '../images/gd-2.png';
import Image3 from '../images/gd-3.png';
import Image4 from '../images/gd-4.png';
import Image5 from '../images/gd-5.png';
import Image6 from '../images/gd-6.png';

import WeLightImage1 from '../images/WeLight.png';

// Import icons
import {
    FiFacebook,
    FiInstagram,
    FiLinkedin,
    FiTwitter,
    FiYoutube,
} from 'react-icons/fi';

export const GDProjectData = {
    name: 'gd',
    ProjectHeader: {
        title: 'Graphic Design Collection',
        publishDate: 'Mar 1, 2023',
        tags: 'Graphic Design',
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
                details: 'Graphic Design Collection'
            },
            {
                id: 2,
                title: 'Services',
                details: 'Graphic Design',
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
                    'Photoshop',
                    'Illustrator',
                    'InDesign',
                    'JavaScript',
                ],
            },
        ],
        ProjectDetailsHeading: 'Projects',
        ProjectDetails: [
            {
                id: 1,
                details:
                    <>RISD Banner<br />Every new school year begins with many international students coming to RISD. The office will create beautiful banners to welcome these students and congratulate them on coming</>
            },
            {
                id: 2,
                details:
                    <>RISD ISSA Data Visualization<br />Each year there are countless international students coming to RISD. ISSA produces intuitive visualizations based on reliable and solid data.It is hoped that with the help of data visualization tools, students and their parents can better understand the situation of the school.</>,
            },
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
                img: Image5,
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
