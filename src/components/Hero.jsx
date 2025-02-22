import HeroImg from '../assets/coffee2.png'
const Hero = () => {
    return (
        <div className="min-h-[70vh] bg-brandDark flex justify-center items-center text-white">
            <div className="container pb-8 sm:pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                            We Serve the richest
                            <span className="text-primary font-cursive"> Coffee</span> in the city
                        </h1>
                        <div>
                            <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                                Coffee And Code
                            </button>
                        </div>
                    </div>

                    <div className=" flex justify-center items-center relative order-1 sm:order-2 ">
                        <img
                            src={HeroImg}
                            alt=""
                            className='w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin'
                        />
                        <div
                            className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute top-10 left-10"
                        >
                            <h1 className="text-white">Hey Coder</h1>
                        </div>
                        <div
                            className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute bottom-10 right-10"
                        >
                            <h1 className="text-white">Best Coffee</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero