import PortfolioCard from './PortfolioCard';
import stuff from '../assets/project_card/stuff.jpeg';
import nnt from '../assets/project_card/nt_black.png';
import devono from '../assets/project_card/devono.png';
import ecn from '../assets/project_card/ecn.png';

// Sample portfolio data - you can replace this with your actual data
const portfolioItems = [
    {
        title: "StuFF",
        description: "Vibrant and eye-catching marketing collateral for the promotion of the Student Fringe Festival; a Nottingham New Theatre event.",
        imageUrl: stuff,
        link: "/projects/stuff",
    },
    {
        title: "Devono",
        description: "Task of turning a blog post into a social media post the Devono.",
        imageUrl: devono,
        link: "/projects/devono"
    },
    {
        title: "ECN Newsletter",
        description: "Part of my current role includes being the communication officer for the early careers network. I publish a monthly newsletter to the cohort detailing the internal and external social events.",
        imageUrl: ecn,
        link: "/projects/ecn"
    },
    {
        title: "Nottingham New Theatre",
        description: "A collection of marketing collateral for the promotion of the Nottingham New Theatre; a student-run theatre company.",
        imageUrl: nnt,
        link: "/projects/nnt",
    },
    
    // Add more portfolio items here when you have real content and images
];

function Portfolio() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
                My Portfolio
            </h1>
            <p className="text-center text-gray-600 mb-12">
                Welcome to my portfolio. Here is a collection of different marketing projects I have been involved with. Please have a browse!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems.map((item, index) => (
                    <PortfolioCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        imageUrl={item.imageUrl}
                        link={item.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;