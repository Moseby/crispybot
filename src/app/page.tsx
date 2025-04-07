import Image from "next/image";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";
import { FaShieldHeart } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";

export default function Home() {
  return (
    <div className="mx-auto">
      <div className="container grid grid-cols-2 mx-auto align-center my-4 place-items-center">
        <div className="lg:mx-24">
          <h2 className="text-3xl text-orange-300">Welcome to the bots</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tempor purus, lobortis viverra augue. Phasellus ultrices ex ac molestie hendrerit. Proin in magna congue, vulputate diam et, sollicitudin elit. Donec vel ante nisl. Nam ac nulla quam. Sed aliquam malesuada blandit. Phasellus sit amet tellus aliquam, finibus ipsum a, rhoncus massa.</p>
        </div>
        <div className="my-4">
          <Image
            src="/img/dude.png"
            alt="Dude image"
            width="200"
            height="500"
            className="cursor-pointer"
          />
        </div>
      </div>

      
        <div id="tjanster" className="pt-12">
          <div className="container mx-auto px-0 xl:px-36">
            <div className="w-full p-2 items-center mb-16">
              <div className="text-center mb-4">
                <h2 className="text-white text-2xl uppercase border-b">What we offer</h2>
              </div>
              <div className="text-left flex-col gap-4 md:grid grid-cols-2 pt-8">
                <div className="relative group mb-4 p-4">
                  <div className="p-4">
                    <div>
                      <FaPlayCircle size={50} className="fill-orange-400" />
                    </div>
                    <div>
                      <h3 className="pt-3 text-orange-500">
                        Easy to use
                      </h3>
                      <p className="pt-3 text-gray-200">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tempor purus, lobortis viverra augue. Phasellus ultrices ex ac molestie hendrerit. Proin in magna congue, vulputate diam et, sollicitudin elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative group mb-4 p-4">
                  <div className="p-4">
                    <div>
                      <FaShieldHeart size={50} className="fill-orange-400" />
                    </div>
                    <div>
                      <h3 className="pt-3 text-orange-500">
                        Secure
                      </h3>
                      <p className="pt-3 text-gray-200">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tempor purus, lobortis viverra augue. Phasellus ultrices ex ac molestie hendrerit. Proin in magna congue, vulputate diam et, sollicitudin elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative group mb-4 p-4">
                  <div className="p-4">
                    <div>
                      <FaRegSmile size={50} className="fill-orange-400" />
                    </div>
                    <div>
                      <h3 className="pt-3 text-orange-500">
                        Funny
                      </h3>
                      <p className="pt-3 text-gray-200">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tempor purus, lobortis viverra augue. Phasellus ultrices ex ac molestie hendrerit. Proin in magna congue, vulputate diam et, sollicitudin elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative group mb-4 p-4">
                  <div className="p-4">
                    <div>
                      <FaRobot size={50} className="fill-orange-400" />
                    </div>
                    <div>
                      <h3 className="pt-3 text-orange-500">
                        I like big bots
                      </h3>
                      <p className="pt-3 text-gray-200">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tempor purus, lobortis viverra augue. Phasellus ultrices ex ac molestie hendrerit. Proin in magna congue, vulputate diam et, sollicitudin elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}
