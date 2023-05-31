// Import images
import Image1 from '../images/ide-01.png';
import Image2 from '../images/ide-02.png';
import Image3 from '../images/ide-03.png';
import Image4 from '../images/ide-04.png';
import Image5 from '../images/ide-05.png';
import Image6 from '../images/ide-06.png';

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

export const ScreenTableProjectData = {
    name: 'Interactive Architecture',
    ProjectHeader: {
        title: 'Interactive Dining Experience',
        publishDate: 'Jun 1, 2023',
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
        ClientHeading: 'Design Thesis Project',
        CompanyInfo: [
            {
                id: 1,
                title: 'Name',
                details: 'Interactive Dining Experience'
            },
            {
                id: 2,
                title: 'Services',
                details: 'UI / Frontend',
            },
            {
                id: 3,
                title: 'Website',
                details: 'https://thesis-app-kkx8.vercel.app/',
            },
            {
            	id: 4,
            	title: 'Website',
            	details: 'https://thesis-screen-table-react.vercel.app/',
            },
            {
                id: 5,
                title: 'Website',
                details: 'https://youtu.be/q8MaGWrrcKg',
            },
        ],
        // ObjectivesHeading: 'Objective',
        // ObjectivesDetails:
        //     'A team of design students from the Rhode Island School of Design (RISD) is collaborating with a chemistry professor from the University of Rhode Island to create a new brand. In this UI/UX design project, our team aims to deliver a comprehensive digital experience that captures the essence of the professor\'s brand and effectively communicates it to its target audience.',
        Technologies: [
            {
                title: 'Tools & Technologies',
                techs: [
                    'React',
                    'MobX',
                ],
            },
        ],
        ProjectDetailsHeading: 'Challenge',
        ProjectDetails: [
            {
                id: 1,
                details:
                    "Traditional mall-based restaurants, such as P.F. Chang’s in the Providence Place Mall, have primarily focused on site-based dining and bar services. However, the food provided by this chain restaurant often lacks depth, and customers seldom learn the story behind the dishes. This thesis explores the integration of mixed reality technology within the physical environment of P.F. Chang’s, an American Chinese restaurant chain with over 300 locations, aiming to transform it into an authentic Shanghai food culture experience. This experience combines virtual and physical stimuli to evoke various periods of Chinese history, providing a unique encounter for customers."
            },
            {
                id: 2,
                details:
                    'The proposed transformation for P.F. Chang’s includes several steps. Firstly, the entry area will be enhanced to express dining visions, incorporating video footage of people enjoying the food and the cooking process. Secondly, a blend of physical dining and virtual digital interaction, including screen tables and digital menus, offers an immersive environment. Visitors can observe their surroundings transform to evoke the atmosphere and aesthetics of Shanghai. The screen table and digital elements change color to stimulate diners’ appetites with visual cues, and the surrounding lighting is adapted using a REST API embedded into the online menu as food is served. Furthermore, customers can interact with the table to learn about the ingredients of the food served, promoting food knowledge.',
            },
            {
                id: 3,
                details:
                    'Leveraging Firebase, a back-end database technology offered by Google, this thesis examines user involvement within the metaverse and potential implications for the future of physical commerce at P.F. Chang’s in Providence Place Mall. The findings contribute to a deeper understanding of how virtual business interventions can reshape the commercial landscape. The results suggest that integrating mixed reality technologies can create more engaging and personalized cultural immersions for consumers, thus transforming the traditional restaurant into an immersive Shanghai cultural engagement.',
            },
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
