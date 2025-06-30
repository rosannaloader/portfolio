import PhotoGrid from '../PhotoGrid';
import nnt1 from '../../../assets/projects/nnt/nnt1.jpeg';
import nnt2 from '../../../assets/projects/nnt/nnt2.jpeg';
import nnt3 from '../../../assets/projects/nnt/nnt3.jpeg';
import nnt4 from '../../../assets/projects/nnt/nnt4.jpeg';
import nnt5 from '../../../assets/projects/nnt/nnt5.jpeg';
import nnt6 from '../../../assets/projects/nnt/nnt6.jpeg';
import nnt7 from '../../../assets/projects/nnt/nnt7.jpeg';

function NNTMainSocialContent() {
    // Sample photos array with placeholder images from Lorem Picsum with varied sizes
    const photos = [
        {
            src: nnt1,
            alt: 'Random placeholder image 1'
        },
        {
            src: nnt2,
            alt: 'Random placeholder image 2'
        },
        {
            src: nnt3,
            alt: 'Random placeholder image 3'
        },
        {
            src: nnt4,
            alt: 'Random placeholder image 4'
        },
        {
            src: nnt5,
            alt: 'Random placeholder image 5'
        },
        {
            src: nnt6,
            alt: 'Random placeholder image 6'
        },
        {
            src: nnt7,
            alt: 'Random placeholder image 7'
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
                Nottingham New Theatre - Main Social Content
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

export default NNTMainSocialContent;