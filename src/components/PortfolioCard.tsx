import { Link } from 'react-router-dom';

interface PortfolioCardProps {
    title: string;
    description: string;
    imageUrl?: string;
    link?: string;
}

function PortfolioCard({ title, description, imageUrl, link }: PortfolioCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 group relative aspect-square">
            {imageUrl ? (
                <img 
                    src={imageUrl} 
                    alt={title} 
                    className="w-full h-full object-cover"
                />
            ) : (
                <div className="w-full h-full animated-circle" />
            )}
            <div className="absolute inset-0 group-hover:bg-black/85 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-sm mb-4 px-4">{description}</p>
                    {link && (
                        <Link 
                            to={link}
                            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                        >
                            View Project
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PortfolioCard; 