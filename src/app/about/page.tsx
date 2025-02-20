const About = async () => {
    await new Promise((resolve)=>{
        setTimeout(() => {
            resolve("initial delay...")
        }, 2000);
    })
    
    return (
        <div className='text-center w-full flex items-center justify-center flex-col min-h-screen  p-4'>
            <h1 className='text-4xl font-bold mb-4'>About Us</h1>
            <p className='text-lg mb-6'>
            Welcome to our website! We are dedicated to providing the best service possible.
            </p>
            <h2 className='text-3xl font-semibold mb-3'>Our Mission</h2>
            <p className='text-lg mb-6'>
            Our mission is to deliver high-quality products that bring value to our customers.
            </p>
            <h2 className='text-3xl font-semibold mb-3'>Our Team</h2>
            <p className='text-lg'>
            We have a diverse team of professionals who are passionate about what they do.
            </p>
        </div>
    );
}

export default About;