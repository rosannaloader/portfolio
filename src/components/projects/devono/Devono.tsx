import PhotoGrid from '../PhotoGrid';
import s1 from '../../../assets/projects/devono/d1.png';
import s2 from '../../../assets/projects/devono/d2.png';
import s3 from '../../../assets/projects/devono/d3.png';
import s4 from '../../../assets/projects/devono/d4.png';
import s5 from '../../../assets/projects/devono/d5.png';
import s6 from '../../../assets/projects/devono/d6.png';
import s7 from '../../../assets/projects/devono/d7.png';
import s8 from '../../../assets/projects/devono/d8.png';

function Devono() {
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
        {
            src: s7,
            alt: 'Random placeholder image 7'
        },
        {
            src: s8,
            alt: 'Random placeholder image 8'
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
                Devono
            </h1>
            <p style={{ 
                marginBottom: '24px',
                fontSize: '1rem',
                fontWeight: 'normal',
                textAlign: 'center'
            }}>
                Tasked to turn the blog post ‘serviced vs. managed offices: which is best for your business?’ into a social media post.
                Followed brand guidelines.
            </p>
            <PhotoGrid 
                photos={photos} 
                gap={24}
                minWidth={300}
                maxColumns={3}
            />
        </div>
    );
}

export default Devono;