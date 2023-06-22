// Import images
import Image1 from '../images/ide-01.png';
import Image2 from '../images/ide-02.png';
import Image3 from '../images/ide-03.png';
import Image4 from '../images/ide-04.png';
import Image5 from '../images/ide-05.png';
import Image6 from '../images/ide-06.png';
import getToken from '../images/Projects/thesis/getToken.png';
import menuApp from '../images/Projects/thesis/menuApp.jpg';
import menuApp2 from '../images/Projects/thesis/menuApp2.jpg';
import menuApp3 from '../images/Projects/thesis/menuApp3.jpg';
import rg01 from '../images/Projects/thesis/rg-01.png';
import rg02 from '../images/Projects/thesis/rg-02.png';
import rg03 from '../images/Projects/thesis/rg-03.png';
import rg04 from '../images/Projects/thesis/rg-04.png';
import rg05 from '../images/Projects/thesis/rg-05.png';
import rgAnalysis from '../images/Projects/thesis/rg-analysis.png';
import rgAnalysis2 from '../images/Projects/thesis/rg-analysis-02.png';
import rgAnalysis3 from '../images/Projects/thesis/rg-analysis-03.png';
import test01 from '../images/Projects/thesis/test-01.png';
import test02 from '../images/Projects/thesis/test-02.png';
import test03 from '../images/Projects/thesis/test-03.png';

import OSBCover from "../images/OSB-1.png";
import EcoHomeCover from "../images/EcoHomeCover.png";
// import WeLightImage1 from '../images/WeLight.png';
import CheckLiveWebBtn from "../components/projects/CheckLiveWebBtn";
import notionImg1 from "../images/Projects/welight/notion1.jpg";

const thesisAppUrl = 'https://thesis-app-kkx8.vercel.app/';
const thesisScreenTableUrl = 'https://thesis-screen-table-react.vercel.app/';
const liveVideoUrl = 'https://youtu.be/q8MaGWrrcKg';


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
                details: thesisAppUrl,
            },
            {
            	id: 4,
            	title: 'Website',
            	details: thesisScreenTableUrl,
            },
            {
                id: 5,
                title: 'Website',
                details: liveVideoUrl,
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
                id: 1.1,
                details:
                    <div className={"w-full flex flex-row"}>
                        <img src={menuApp} alt={"feedback"}
                             className={"max-w-md max-h-lg cover px-6 pt-6"}
                             style={{maxWidth: "450px"}}
                             loading={"lazy"}
                        />
                        <div className={"flex flex-col px-3"}>
                            <div style={{flex:1}} />
                            <div className={"font-thin text-sm"}>Interactive Menu</div>
                            <p className={"font-thin text-sm py-2"}>
                                Players can operate a shopping cart to roam around a city map.
                            </p>
                        </div>
                    </div>,
            },
            {
                id: 1.2,
                details:
                    <div className={"w-full flex flex-row"}>
                        <img src={menuApp2} alt={"feedback"}
                             className={"max-w-md max-h-lg cover px-6 pt-6"}
                             style={{maxWidth: "450px"}}
                             loading={"lazy"}
                        />
                        <div className={"flex flex-col px-3"}>
                            <div style={{flex:1}} />
                            <div className={"font-thin text-sm"}></div>
                            <p className={"font-thin text-sm py-2"}>
                                <CheckLiveWebBtn LIVE_URL={thesisAppUrl} value={"Menu App"}/>
                            </p>
                        </div>
                    </div>,
            },
            {
                id: 1.3,
                details:
                    <div className={"w-full flex flex-row"}>
                        <img src={menuApp3} alt={"feedback"}
                             className={"max-w-md max-h-lg contain px-6 pt-6"}
                             style={{maxWidth: "450px"}}
                             loading={"lazy"}
                        />
                        <div className={"flex flex-col px-3"}>
                            <div style={{flex:1}} />
                            <div className={"font-thin text-sm"}></div>
                            <p className={"font-thin text-sm py-2"}>
                                (Developing) Store and send data to Firebase.
                            </p>
                        </div>
                    </div>,
            },
            {
                id: 2,
                details:
                    'The proposed transformation for P.F. Chang’s includes several steps. Firstly, the entry area will be enhanced to express dining visions, incorporating video footage of people enjoying the food and the cooking process. Secondly, a blend of physical dining and virtual digital interaction, including screen tables and digital menus, offers an immersive environment. Visitors can observe their surroundings transform to evoke the atmosphere and aesthetics of Shanghai. ',
            },
            {
                id: 2.1,
                details:
                    <div className={"w-full flex flex-row"}>
                        <img src={rgAnalysis} alt={"feedback"}
                             className={"max-w-md max-h-lg cover px-6 pt-6"}
                             style={{maxWidth: "450px"}}
                             loading={"lazy"}
                        />
                        <div className={"flex flex-col px-3"}>
                            <div style={{flex:1}} />
                            <div className={"font-thin text-sm"}>Firebase Backend</div>
                            <p className={"font-thin text-sm py-2"}>
                                The activity of the screen table can be viewed in Firebase Console.Additionally, since web development technology is adopted in this project, some user actions in the app can be recorded in the backend database, such as login time and game duration. This aids in the study of user data. Simultaneously, because of the backend database, the data captured each time by the user can vary, achieving personalized settings for different users.
                            </p>
                        </div>
                    </div>,
            },
            {
                id: 2.5,
                details:
                'The screen table and digital elements change color to stimulate diners’ appetites with visual cues, and the surrounding lighting is adapted using a REST API embedded into the online menu as food is served. Furthermore, customers can interact with the table to learn about the ingredients of the food served, promoting food knowledge.'
            },
            {
                id: 2.6,
                details:
                    <div className={"w-full flex flex-row"}>
                        <img src={rg02} alt={"feedback"}
                             className={"max-w-md max-h-lg cover px-6 pt-6"}
                             style={{maxWidth: "450px"}}
                             loading={"lazy"}
                        />
                        <div className={"flex flex-col px-3"}>
                            <div style={{flex:1}} />
                            <div className={"font-thin text-sm"}>Screen Table</div>
                            <p className={"font-thin text-sm py-2"}>
                                <CheckLiveWebBtn LIVE_URL={thesisScreenTableUrl} value={"Screen Table"}/>

                            </p>
                        </div>
                    </div>,
            },
            {
                id: 2.7,
                details:
                    <div className={"w-full flex flex-row"}>
                        <img src={rg03} alt={"feedback"}
                             className={"max-w-md max-h-lg cover px-6 pt-6"}
                             style={{maxWidth: "450px"}}
                             loading={"lazy"}
                        />
                        <div className={"flex flex-col px-3"}>
                            <div style={{flex:1}} />
                            <div className={"font-thin text-sm"}></div>
                            <p className={"font-thin text-sm py-2"}>
                                A web game simulating the touchable screen table. The player can move the ingredient to the pot and view the color changes in the pot. In traditional Asian medicine, there is a concept of "overheating. Each ingredient has its specific properties.

                            </p>
                        </div>
                    </div>,
            },
            {
                id: 2.8,
                details:
                    <div className={"w-full flex flex-row"}>
                        <img src={rg05} alt={"feedback"}
                             className={"max-w-md max-h-lg cover px-6 pt-6"}
                             style={{maxWidth: "450px"}}
                             loading={"lazy"}
                        />
                        <div className={"flex flex-col px-3"}>
                            <div style={{flex:1}} />
                            <div className={"font-thin text-sm"}></div>
                            <p className={"font-thin text-sm py-2"}>
                                A touch-sensitive tabletop is also part of this design. When food is served, the tabletop changes color to stimulate the appetites of the diners.</p>
                        </div>
                    </div>,
            },
            {
                id: 3,
                details:
                    'Leveraging Firebase, a back-end database technology offered by Google, this thesis examines user involvement within the metaverse and potential implications for the future of physical commerce at P.F. Chang’s in Providence Place Mall. The findings contribute to a deeper understanding of how virtual business interventions can reshape the commercial landscape. The results suggest that integrating mixed reality technologies can create more engaging and personalized cultural immersions for consumers, thus transforming the traditional restaurant into an immersive Shanghai cultural engagement.',
            },
            {
                id: 3.1,
                details:
                    <div className={"w-full flex flex-row gap-2"}>
                        <img src={test01} alt={"feedback"}
                             className={"max-w-md max-h-lg cover px-2 pt-6"}
                             style={{maxWidth: "150px"}}
                             loading={"lazy"}
                        />
                        <img src={test02} alt={"feedback"}
                             className={"max-w-md max-h-lg cover px-2 pt-6"}
                             style={{maxWidth: "150px"}}
                             loading={"lazy"}
                        />
                        <img src={test03} alt={"feedback"}
                             className={"max-w-md max-h-lg cover px-2 pt-6"}
                             style={{maxWidth: "150px"}}
                             loading={"lazy"}
                        />
                        <div className={"flex flex-col px-3"}>
                            <div style={{flex:1}} />
                            <div className={"font-thin text-sm"}></div>
                            <p className={"font-thin text-sm py-2"}>
                                With the help of RESTFUL API, the surrounding light can be changed according to the app experience. The color of the screen table also changes to stimulate the appetite of the diners.
                            </p>
                            <CheckLiveWebBtn LIVE_URL={"https://youtube.com/shorts/C4hlPSmVja4"} value={"Testing Demo"}/>
                        </div>
                    </div>,
            },
            // {
            //     id: 4,
            //     details:
            //         'In our design approach, we avoided using fancy elements and instead focused on creating a clean and simple aesthetic that reflects the brand\'s commitment to nature.',
            // },
            {
                id:100,
                details:
                <div className={"flex flex-row gap-4"}>
                    <CheckLiveWebBtn LIVE_URL={thesisAppUrl} value={"Menu App"}/>
                    <CheckLiveWebBtn LIVE_URL={thesisScreenTableUrl} value={"Screen Table"}/>
                    <CheckLiveWebBtn LIVE_URL={liveVideoUrl} value={"Preview Video"}/>
                </div>
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
