// Import images
import Image1 from '../images/shekon-1.png';
import Image2 from '../images/shekon-2.png';
import Image3 from '../images/shekon-3.png';
import Image4 from '../images/shekon-4.png';
import Image5 from '../images/shekon-5.png';
import Image6 from '../images/shekon-6.png';

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
import CheckLiveWebBtn from "../components/projects/CheckLiveWebBtn";

export const ShekonProjectData = {
    name: 'Shekon',
    ProjectHeader: {
        title: 'Shekon',
        publishDate: 'Feb 21, 2023',
        tags: 'XR Application',
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
        ClientHeading: 'About Client',
        CompanyInfo: [
            {
                id: 1,
                title: 'Name',
                details: 'Shé:kon'
            },
            {
                id: 2,
                title: 'Services',
                details: 'XR Application',
            },
            {
            	id: 3,
            	title: 'Preview Video',
            	details: 'https://youtu.be/T1MG7LQY81g',
            },
            {
                id: 4,
                title: 'Other VR Demo Video',
                details: 'https://youtube.com/shorts/oXG8qh6X67I?feature=share',
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
                    'Unity Android',
                    'C#',
                ],
            },
        ],
        ProjectDetailsHeading: 'Challenge',
        ProjectDetails: [
            {
                id: 1,
                details:
                    "Shé:kon is a virtual reality project that I developed for the RISD Museum, with the goal of creating an immersive and educational experience that highlights the indigenous culture of Rhode Island."
            },

            {
                id: 2,
                details:
                    <div className={"w-full grid grid-cols-2"}>
                        <iframe width={"100%"} height="315" src="https://www.youtube.com/embed/T1MG7LQY81g"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                        <div className={"flex flex-col px-3"}>
                            <div style={{flex:1}} />
                            <div className={"font-thin text-sm"}>VR Experience</div>
                            <p className={"font-thin text-sm py-2"}>
                                The video of the user experience, which showcases the interaction and engagement with the project, was recorded using Oculus glasses. </p>
                            <CheckLiveWebBtn LIVE_URL={"https://drive.google.com/file/d/1Fe2M8_tum28ZDnUSZ8xmlKkXofCSrdJl/view?usp=sharing"} value={"Download apk file here"} />
                        </div>
                    </div>,
            },
            {
                id: 4,
                details:
                    ' The project uses VR technology to bring the vibrant indigenous history and culture of Rhode Island to life, offering users an opportunity to learn and engage with this heritage in an interactive, immersive manner. By utilizing Oculus glasses for the VR experience, "Shé:kon" not only provides an educational tool but also a unique cultural exploration that goes beyond traditional museum exhibits.',
            },
            {
                id: 5.9,
                details:
                <h1 className={"font-bold text-xl"}>other demo work</h1>
            },
            {
                id: 6,
                details:
                    <div className={"w-full grid grid-cols-2"}>
                        <iframe width={"100%"} height="594" src="https://www.youtube.com/embed/oXG8qh6X67I"
                                title="FPS VR AugA3" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                        <div className={"flex flex-col px-3"}>
                            <div style={{flex:1}} />
                            <div className={"font-thin text-sm"}>VR Shooting Range</div>
                            <p className={"font-thin text-sm py-2"}>
                                In the project "FPS-VR-AugA3," I explored the development of a Unity-based First-Person Shooter (FPS) game set in a virtual reality (VR) environment. The game capitalizes on Unity's powerful VR integration capabilities to provide a compelling, immersive experience. As part of this development process, I also utilized third-party assets, demonstrating Unity's vast ecosystem and the ease with which developers can incorporate external resources into their projects for enhanced efficiency and creativity.</p>
                            <CheckLiveWebBtn LIVE_URL={"https://github.com/designasabaker/fpshopping"} value={"All code's open source in GH"} />
                        </div>
                    </div>,
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
