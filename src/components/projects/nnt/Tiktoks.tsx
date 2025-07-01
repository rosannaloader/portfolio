import VideoGrid from '../VideoGrid';
import vid1 from '../../../assets/projects/nnt/vids/vid1.mov';
import vid2 from '../../../assets/projects/nnt/vids/vid2.mov';
import vid3 from '../../../assets/projects/nnt/vids/vid3.mov';
import vid4 from '../../../assets/projects/nnt/vids/vid4.mov';
import vid5 from '../../../assets/projects/nnt/vids/vid5.mov';
import vid6 from '../../../assets/projects/nnt/vids/vid6.mov';
import vid7 from '../../../assets/projects/nnt/vids/vid7.mov';
import vid8 from '../../../assets/projects/nnt/vids/vid8.mov';
import { useNavigate } from 'react-router-dom';

function NNTTiktoks() {
    // Videos array with all the video files from the nnt/vids folder
    const videos = [
        {
            src: vid1,
            alt: 'Nottingham New Theatre TikTok 1'
        },
        {
            src: vid2,
            alt: 'Nottingham New Theatre TikTok 2'
        },
        {
            src: vid3,
            alt: 'Nottingham New Theatre TikTok 3'
        },
        {
            src: vid4,
            alt: 'Nottingham New Theatre TikTok 4'
        },
        {
            src: vid5,
            alt: 'Nottingham New Theatre TikTok 5'
        },
        {
            src: vid6,
            alt: 'Nottingham New Theatre TikTok 6'
        },
        {
            src: vid7,
            alt: 'Nottingham New Theatre TikTok 7'
        },
        {
            src: vid8,
            alt: 'Nottingham New Theatre TikTok 8'
        },
    ];

    const navigate = useNavigate();

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{
                marginBottom: '24px',
                fontSize: '2.5rem',
                fontWeight: 'bold',
                textAlign: 'center'
            }}>
                Nottingham New Theatre - TikToks
            </h1>
            <button
                onClick={() => navigate(-1)}
                style={{
                    top: '20px',
                    marginLeft: '12px',
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
            <VideoGrid
                videos={videos}
                gap={12}
                minWidth={250}
                maxColumns={3}
            />
        </div>
    );
}

export default NNTTiktoks;
