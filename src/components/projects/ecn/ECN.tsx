import PhotoGrid from '../PhotoGrid';
import s1 from '../../../assets/projects/ecn/n1.png';
import s2 from '../../../assets/projects/ecn/n2.png';
import s3 from '../../../assets/projects/ecn/n3.png';
import s4 from '../../../assets/projects/ecn/n4.png';
import s5 from '../../../assets/projects/ecn/n5.png';
function ECN() {
    
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
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ 
                marginBottom: '24px',
                fontSize: '2.5rem',
                fontWeight: 'bold',
                textAlign: 'center'
            }}>
                Early Careers Network
            </h1>
            <p style={{ 
                marginBottom: '24px',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                textAlign: 'center'
            }}>
                Newsletter
            </p>
            <p style={{ 
                marginBottom: '24px',
                fontSize: '1rem',
                fontWeight: 'normal',
                textAlign: 'center'
            }}>
                Part of my current role includes being the communication officer for the early careers network. I publish a monthly newsletter to the cohort detailing the internal and external social events.
            </p>
            <PhotoGrid 
                photos={photos} 
                gap={12}
                minWidth={250}
                maxColumns={2}
            />
        </div>
    );
}

export default ECN;