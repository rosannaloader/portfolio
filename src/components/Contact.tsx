function Contact() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
                Contact
            </h1>
            <p className="text-center text-gray-600 mb-12">
                Please feel free to contact me via email or LinkedIn!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <a href="mailto:rosannaloader@gmail.com">
                <div className="animated-circle p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Email</h2>
                    <p className="text-gray-800">rosie.loader@renishaw.com</p>
                </div>
                </a>
                <a href="https://www.linkedin.com/in/rosie-loader-42400a246/" target="_blank" rel="noopener noreferrer">
                <div className="animated-circle p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">LinkedIn</h2>
                    <p className="text-black">Rosie Loader</p>
                </div>
                </a>
            </div>
        </div>
    )
}

export default Contact;