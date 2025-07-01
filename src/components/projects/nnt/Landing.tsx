import PortfolioCard from '../../PortfolioCard';
import nnt7 from '../../../assets/projects/nnt/nnt7.jpeg';
import nnt8 from '../../../assets/projects/nnt/nnt8.png';
import { useNavigate } from 'react-router-dom';

// Sample portfolio data - you can replace this with your actual data
const portfolioItems = [
    {
        title: "Main Social Content",
        description: "",
        imageUrl: nnt7,
        link: "/projects/nnt/main-social-content",
    },
    {
        title: "TikToks",
        description: "",
        imageUrl: nnt8,
        link: "/projects/nnt/tiktoks",
    },
    // Add more portfolio items here when you have real content and images
];

function NNTLanding() {
    const navigate = useNavigate();
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl mb-12 font-bold text-center mb-6 text-gray-800">
                Nottingham New Theatre
            </h1>
            <button
                onClick={() => navigate(-1)}
                style={{
                    top: '20px',
                    marginLeft: '-2px',
                    marginBottom: '24px',
                    padding: '8px 16px',
                    backgroundColor: '#FFC0CB',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500'
                }}
                className='hover:shadow-lg hover:shadow-pink-200/50 transition-all duration-1000 hover:-translate-y-1'
            >
                ← Back
            </button>
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

export default NNTLanding;