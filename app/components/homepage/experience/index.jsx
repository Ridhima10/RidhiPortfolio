import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import experience from "/public/lottie/code.json";
import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";
import { BsGithub } from "react-icons/bs";

function Experience() {
  return (
    <div
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        width={1572}
        height={792}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {experiences.map((experience) => (
              <GlowCard
                key={experience.id}
                identifier={`experience-${experience.id}`}
              >
                <div className="p-3 relative">
                  {/* <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      /> */}
                  <div className="flex justify-center">
                    {/* <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {experience.duration}
                        </p> */}
                  </div>
                  <div className="flex lg:items-center gap-x-8 px-3 py-5  flex-start flex-col md:flex md:flex-row">
                    <div className="text-violet-500   transition-all pb-2 duration-300 hover:scale-125">
                      <BsPersonWorkspace size={36} />
                    </div>
                    <div>
                      <p className="sm:text-center md:text-start text-sm md:text-lg mb-2 font-medium uppercase text-violet-600">
                        {experience.title}
                      </p>
                      <p className="lg:text-lg sm:text-base sm:text-center md:text-start capitalize my-1 text-pink-100 font-bold">
                        {experience.company}
                      </p>
                      <p className="text-sm sm:text-base sm:text-center md:text-start mb-2">
                        {experience.desc}
                      </p>
                      <p className="flex ">
                        Check it on:
                        {experience.github.map((link, index) => (
                          <Link
                            key={index}
                            href={link}
                            target="_blank"
                            className="transition-all sm:text-center md:text-start text-white hover:scale-125 rounded-full duration-300 bg-gradient-to-r from-violet-600 to-pink-600 ms-2"
                          >
                            <BsGithub size={30} />
                          </Link>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
