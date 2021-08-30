import Image from "next/image";
import Typewriter from 'typewriter-effect';

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[300px] lg:h-[400px] xl:h-[400px] 2xl:h-[500px]">
            <Image
                className=""
                src="https://links.papareact.com/0fm"
                layout="fill"
                objectFit="cover"
            />

            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg ">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Not sure where to go?')
                            .pauseFor(1000)
                            .typeString(' Perfect.')
                            .pauseFor(1000)
                            .start();
                        }}
                        options={{
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 10,
                        }}
                    />
                </p>
                <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">I'm Flexible</button>
            </div>
        </div>
    )
}

export default Banner