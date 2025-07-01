import PhotoGrid from '../PhotoGrid';
import VideoGrid from '../VideoGrid';
import s1 from '../../../assets/projects/stuff/s1.jpeg';
import s2 from '../../../assets/projects/stuff/s2.jpeg';
import s3 from '../../../assets/projects/stuff/s3.jpeg';
import s4 from '../../../assets/projects/stuff/s4.jpeg';
import s5 from '../../../assets/projects/stuff/s5.jpeg';
import s6 from '../../../assets/projects/stuff/s6.jpeg';
import vid1 from '../../../assets/projects/stuff/vid/vid1.mov';
import vid2 from '../../../assets/projects/stuff/vid/vid2.mov';


function Stuff() {
    // Photos array
    const photos = [
        {
            src: s1,
            alt: 'StuFF project image 1'
        },
        {
            src: s2,
            alt: 'StuFF project image 2'
        },
        {
            src: s3,
            alt: 'StuFF project image 3'
        },
        {
            src: s4,
            alt: 'StuFF project image 4'
        },
        {
            src: s5,
            alt: 'StuFF project image 5'
        },
        {
            src: s6,
            alt: 'StuFF project image 6'
        },
    ];

    // Videos array
    const videos = [
        {
            src: vid1,
            alt: 'StuFF project video 1'
        },
        {
            src: vid2,
            alt: 'StuFF project video 2'
        },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ 
                marginBottom: '24px',
                fontSize: '2.5rem',
                fontWeight: 'bold',
                textAlign: 'center'
            }}>
                StuFF
            </h1>
            
            {/* Photos Section */}
            <div style={{ marginBottom: '40px' }}>
                <h2 style={{ 
                    marginBottom: '20px',
                    fontSize: '1.8rem',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    Photos
                </h2>
                <PhotoGrid 
                    photos={photos} 
                    gap={12}
                    minWidth={250}
                    maxColumns={3}
                />
            </div>

            {/* Videos Section */}
            <div>
                <h2 style={{ 
                    marginBottom: '20px',
                    fontSize: '1.8rem',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    Videos
                </h2>
                <VideoGrid 
                    videos={videos} 
                    gap={12}
                    minWidth={250}
                    maxColumns={3}
                />
            </div>
        </div>
    );
}

export default Stuff;