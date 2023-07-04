// Import images
import Image1 from '../images/shekon-1.png';
import Image2 from '../images/shekon-2.png';
import Image3 from '../images/shekon-3.png';
import Image4 from '../images/shekon-4.png';
import Image5 from '../images/shekon-5.png';
import Image6 from '../images/shekon-6.png';

import bmDrawing from '../images/Projects/biomimicry/biomimicry-drawing.png';
import bmBm from '../images/Projects/biomimicry/bm-bm.png';
import bmFlow from '../images/Projects/biomimicry/bm-flow.jpg';
import bmGrid from '../images/Projects/biomimicry/bm-grid.png';
import bmMap from '../images/Projects/biomimicry/bm-map.png';
import bmMapping from '../images/Projects/biomimicry/bm-mapping.jpg';

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
import meetingDiscussionImg from "../images/Projects/welight/meeting-discussingBP.png";

export const BiomimicryProjectData = {
    name: 'biomimicry',
    ProjectHeader: {
        title: 'Biomimicry Maze',
        publishDate: 'Sep 21, 2022',
        tags: 'Graphic Design',
    },
    ProjectImages: [
        {
            id: 1,
            title: 'Kabul Project Management UI',
            img: bmDrawing,
        },
        {
            id: 2,
            title: 'Kabul Project Management UI',
            img: bmBm,
        },
        {
            id: 3,
            title: 'Kabul Project Management UI',
            img: bmFlow,
        },
        {
            id: 4,
            title: 'Kabul Project Management UI',
            img: bmGrid,
        },
        {
            id: 5,
            title: 'Kabul Project Management UI',
            img: bmMap,
        },
        {
            id: 6,
            title: 'Kabul Project Management UI',
            img: bmMapping,
        },
    ],
    ProjectInfo: {
        ClientHeading: 'About Client',
        CompanyInfo: [
            {
                id: 1,
                title: 'Name',
                details: 'Cape Cod Museum Of Natural History'
            },
            {
                id: 2,
                title: 'Services',
                details: 'Exhibition Design',
            },
            // {
            //     id: 3,
            //     title: 'Preview Video',
            //     details: 'https://youtu.be/T1MG7LQY81g',
            // },
            // {
            //     id: 4,
            //     title: 'Other VR Demo Video',
            //     details: 'https://youtube.com/shorts/oXG8qh6X67I?feature=share',
            // },
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
                    'Adobe Creative Suite',
                    'C#',
                ],
            },
        ],
        ProjectDetailsHeading: 'Challenge',
        ProjectDetails: [
            {
                id: 1,
                details:
                    <>The exhibition site is the Marshview room at the Cape Cod Museum of Natural History. From there, students will expand their design concepts and scope by intervening within the museum’s spaces and collections and beyond, inviting the visitors to go outside the museum—to the salt marsh and Wing’s Island—and explore and learn from the immediate
                        nature themselves. </>
            },
            {
                id: 2.1,
                details:
                    <div className={"w-full grid grid-cols-2"}>
                        <ClickableImage
                            src={bmMap} alt={"logo options"}
                            className={"max-w-md max-h-lg object-contain px-6 pt-6"}
                            style={{
                                maxHeight: "300px"
                            }}/>
                        <div className={"flex flex-col px-6"}>
                            <div style={{flex:1}} />
                            <div className={"font-thin text-sm"}></div>
                            <p className={"font-thin text-sm py-2"}>
                                Serving the museum’s mission: to inspire appreciation, understanding, and stewardship of our natural environment and wildlife through discovery and learning, as well</p>
                        </div>
                    </div>,
            },
            {
                id: 3,
                details:
                    <>As delivering the key message: Nature is the pathway to science and invention, the exhibition will also conceive answers to these questions—Can this exhibition design itself be an example of biomimicry? Can this exhibition extend its narrative to larger conversations around climate change and function as a call for action? Can this exhibition engage with and support the local community of Cape Cod and bring lasting impacts on environmental awareness and education?</>
            },
            {
                id: 4,
                details:
                    <div className={"w-full grid grid-cols-2"}>
                        <ClickableImage
                            src={bmGrid} alt={"logo options"}
                            className={"max-w-md max-h-lg object-contain px-6 pt-6"}
                            style={{
                                maxHeight: "300px"
                            }}/>
                        {/*<div className={"flex flex-col px-6"}>*/}
                        {/*    <div style={{flex:1}} />*/}
                        {/*    <div className={"font-thin text-sm"}></div>*/}
                        {/*    <p className={"font-thin text-sm py-2"}>*/}
                        {/*        Serving the museum’s mission: to inspire appreciation, understanding, and stewardship of our natural environment and wildlife through discovery and learning, as well</p>*/}
                        {/*</div>*/}
                    </div>,
            },
            {
                id: 5,
                details:
                    <div className={"w-full grid grid-cols-2"}>
                        <ClickableImage
                            isLarge={true}
                            src={bmBm} alt={"logo options"}
                            className={"max-w-md max-h-lg object-contain px-6 pt-6"}
                            style={{
                                maxHeight: "300px"
                            }}/>
                        <div className={"flex flex-col px-6"}>
                            <div style={{flex:1}} />
                            <div className={"font-thin text-sm"}>Winner Judgment Mechanism</div>
                            <p className={"font-thin text-sm py-2"}>
                                Game rules must be simple and concise. Who will be the winner and why is this player the winner?</p>
                        </div>
                    </div>,
            },
            {
                id: 6,
                details:
                    <>In a marathon, the first person to cross the finish line is the champion;  In chess, the first player to eliminate the opponent’s king is the winner; In Monopoly, when someone goes bankrupt, the player with the most assets wins.  In the new design, the strategy adopted  by the designers is a points  system. When the game reaches a  certain time, the staff will calculate  the score of each player. The person  with the highest score at the  end wins a prize. Plus, games have  to be diverse. Therefore, players  will not get bored. In other words,  after completing a game, the player  is interested in returning to the field  to play again.</>
            },
            {
                id: 7,
                details:
                    <div className={"w-full grid grid-cols-2"}>
                        <ClickableImage
                            isLarge={true}
                            src={bmFlow} alt={"logo options"}
                            className={"max-w-md max-h-lg object-contain px-6 pt-6"}
                            style={{
                                maxHeight: "300px"
                            }}/>
                        <div className={"flex flex-col px-6"}>
                            <div style={{flex:1}} />
                            <div className={"font-thin text-sm"}>the flow of the game</div>
                            <p className={"font-thin text-sm py-2"}>
                                Game rules must be simple and concise. Who will be the winner and why is this player the winner?</p>
                        </div>
                    </div>,
            },
            {
                id: 8,
                details:
                    <>The course of the game is very similar to orienteering. Orienteering is a sport with the help of a compass, a map, and checkpoints. The sport can be played in wilderness, woods and urban environments. The athlete needs to find each check-in point along the route on the map, and the athlete has to mark the corresponding mark on his card to prevent cheating. How to combine the game rules of orienteering with bionics? The designer’s intention is to let players experience the bionic research process in the process of the game. The study of biomimicry is very complex. The research steps can be roughly divided into 6 steps. </>
            },
            {
                id: 9,
                details:
                    <div className={"w-full grid grid-cols-2"}>
                        <ClickableImage
                            isLarge={true}
                            src={bmDrawing} alt={"logo options"}
                            className={"max-w-md max-h-lg object-contain px-6 pt-6"}
                            style={{
                                maxHeight: "300px"
                            }}/>
                        <div className={"flex flex-col px-6"}>
                            <div style={{flex:1}} />
                            <div className={"font-thin text-sm"}></div>
                            <p className={"font-thin text-sm py-2"}>
                                However, in order to simplify the flow of the game, the collection is divided into three steps, the challenge, biological model, and the production. </p>
                        </div>
                    </div>,
            },
            {
                id: 10,
                details:
                    <>In detail, the challenge means the problems or questions that we meet with in daily life. The biological model refers to the plants and the animals in the natural environment. Finally, the production is actually the invention from the companies or the institutes. In the actual game, it is also divided into 3 parts. These 3 parts and the research process are slightly different. This is done to simplify the game. Players need to get the card with the product written on it first. The player then needs to find the corresponding product, explanation, and flora and fauna in turn. After players find explanations, animals and plants, they need to record the corresponding codes. Finally, the player enters the code in the final terminal to calculate the score. </>
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
