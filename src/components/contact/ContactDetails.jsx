import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const contacts = [
	{
		id: 1,
		name: '180 Friendship St, Rhode Island, USA',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: <>yihao_xu@brown.edu&nbsp;&nbsp;&nbsp;yxu13@alumni.risd.edu</>,
		icon: <FiMail />,
	},
	{
		id: 3,
		name: ' xuyihao342@gmail.com',
		icon: <FiMail />,
	},
];

const ContactDetails = () => {
	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Contact details
				</h2>
				<ul className="font-general-regular">
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
								{contact.icon}
							</i>
							<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
								{contact.name}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ContactDetails;
