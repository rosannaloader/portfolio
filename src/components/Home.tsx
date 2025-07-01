import type { FC } from 'react';
import '../index.css';
import '../css/home.css';
import profile from '../assets/profile.jpeg';
import HomeButton from './HomeButton';
import { useNavigate } from 'react-router-dom';
import cv from '../assets/cv.pdf';

const Home: FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2">
          <img 
            src={profile} 
            className="profile-picture"
          />
        </div>

        <div className="w-full">
          <section className="mb-8">
            <h1 className="text-6xl font-bold mb-4">Rosie Loader</h1>
            <h2 className="text-2xl font-semibold mb-4">A Bit About Me</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                I'm Rosie and I am a resourceful and hard-working team player, with a creative approach to problem solving and concept formation. I graduated from the University of Nottingham with a BA Liberal Arts with Psychology degree in 2023.
              </p>
              <p className="text-gray-700">
                During this time I worked as the marketing manager for the Nottingham New Theatre which sparked my enthusiasm for all things marketing.
              </p>
              <p className="text-gray-700">
                I'm currently working as a Business and Marketing graduate at the leading, high-tech company, Renishaw. I am using my skills to generate leads while also continuing to develop my marketing expertise.
              </p>
            </div>
          </section>

          <nav className="flex flex-row gap-4">
            <HomeButton title="CV" className='hover:shadow-lg hover:shadow-pink-200/50 transition-all duration-1000 hover:-translate-y-1' color="#FFC0CB" onClick={() => window.open(cv)} />
            <HomeButton title="PORTFOLIO" className='hover:shadow-lg hover:shadow-green-200/50 transition-all duration-1000 hover:-translate-y-1' color="#709255" onClick={() => navigate('/portfolio')} />
            <HomeButton title="CONTACT" className='hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-1000 hover:-translate-y-1' color="#077187" onClick={() => navigate('/contact')} />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Home; 