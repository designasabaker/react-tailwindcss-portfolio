// Import images
import Image1 from '../images/FPS-1.png';
import Image2 from '../images/FPS-2.png';
import Image3 from '../images/FPS-3.png';
import Image4 from '../images/FPS-4.png';
import Image5 from '../images/FPS-5.png';
import Image6 from '../images/FPS-6.png';

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

export const FPShoppingProjectData = {
    name: 'FPShopping',
    ProjectHeader: {
        title: 'First Person Shopping - Thesis Under Development',
        publishDate: 'Jun 21, 2023',
        tags: 'UI / Frontend',
    },
    ProjectImages: [
        {
            id: 1,
            title: 'Kabul Project Management UI',
            img: Image1,
        },
        // {
        //     id: 2,
        //     title: 'Kabul Project Management UI',
        //     img: Image2,
        // },
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
        // {
        //     id: 6,
        //     title: 'Kabul Project Management UI',
        //     img: Image6,
        // },
    ],
    ProjectInfo: {
        ClientHeading: 'About',
        CompanyInfo: [
            {
                id: 1,
                title: 'Name',
                details: 'First Person Shopping'
            },
            {
                id: 2,
                title: 'Services',
                details: 'UI Design & Frontend Development',
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
        ObjectivesHeading: '',
        ObjectivesDetails:
            '',
        Technologies: [
            {
                title: 'Tools & Technologies',
                techs: [
                    'Unity',
                    'C#',
                ],
            },
        ],
        ProjectDetailsHeading: 'Abstract',
        ProjectDetails: [
            {
                id: 1,
                details:
                    "Traditional mall-based restaurants, such as P.F. Chang's in Providence Mall, have primarily focused on providing dining and bar services. Meanwhile, the current online shopping experience, despite its convenience, often leaves consumers longing for a more intuitive and immersive experience. This thesis explores the integration of mixed reality technology within the built environment of P.F. Chang's, with the aim of upgrading it into a Shanghai cultural experience area that combines both virtual and physical realms for a unique encounter."
            },
            {
                id: 2,
                details:
                    'The proposed transformation for P.F. Chang\'s consists of several key steps. Firstly, it involves partially exposing the kitchen to allow visitors to observe and appreciate the handcrafted culinary process inspired by Shanghai cuisine. Secondly, the introduction of a virtual 3D experience offers an immersive environment, enabling visitors to witness their surroundings transform to evoke the atmosphere and aesthetics of Shanghai. Thirdly, integrating shopping and product customization within the virtual space, as well as placing curated products related to Shanghai culture in the physical space, creates a distinctive time-travel experience for patrons. Lastly, the implementation of a metaverse-based feedback system allows for the collection of valuable insights to benefit restaurant owners.',
            },
            {
                id: 3,
                details:
                    'By examining user experiences within the metaverse and the potential implications for the future of physical commerce at P.F. Chang\'s in Providence Mall, this thesis contributes to a deeper understanding of how virtual business interventions can reshape the commercial landscape. The findings suggest that the integration of mixed reality technologies can foster more engaging, personalized, and sustainable cultural experiences for consumers, transforming the traditional restaurant into an immersive Shanghai cultural experience area.\n',
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
