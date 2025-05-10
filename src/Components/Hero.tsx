function Hero(){
    return(
        <section className="h-screen flex items-center justify-center text-center bg-gradient-to-br from-blue-100 to-white px-4 pt-32">
      <div className="max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-blue-950">
          We Craft Digital Experiences That Elevate Brands
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          From strategy to execution, we build stunning websites and impactful brands.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-orange-500 transition duration-300"
        >
          Work with us
        </a>
      </div>
    </section>
    );

}
export default Hero