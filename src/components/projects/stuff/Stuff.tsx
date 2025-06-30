import PhotoGrid from '../PhotoGrid';
import s1 from '../../../assets/projects/stuff/s1.jpeg';
import s2 from '../../../assets/projects/stuff/s2.jpeg';
import s3 from '../../../assets/projects/stuff/s3.jpeg';
import s4 from '../../../assets/projects/stuff/s4.jpeg';
import s5 from '../../../assets/projects/stuff/s5.jpeg';
import s6 from '../../../assets/projects/stuff/s6.jpeg';

import { useNavigate } from 'react-router-dom';

function Stuff() {
    
    // Sample photos array with placeholder images from Lorem Picsum with varied sizes
    const photos = [
        {
            src: s1,
            alt: 'Random placeholder image 1'
        },
        {
            src: s2,
            alt: 'Random placeholder image 2'
        },
        {
            src: s3,
            alt: 'Random placeholder image 3'
        },
        {
            src: s4,
            alt: 'Random placeholder image 4'
        },
        {
            src: s5,
            alt: 'Random placeholder image 5'
        },
        {
            src: s6,
            alt: 'Random placeholder image 6'
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
            <PhotoGrid 
                photos={photos} 
                gap={12}
                minWidth={250}
                maxColumns={3}
            />
        </div>
    );
}

export default Stuff;