import * as FaIcons from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { getUser } from "@/lib/data";

const Home = async () => {
    const [userData] = await getUser();
    return (
        <div className="bg-black p-10 text-base leading-8">
            <div className="flex">
                <div className="sm:basis-1/2">
                    <h2 className="text-base flex items-center gap-x-1"> <FaIcons.FaReact className="motion-safe:animate-spin" /> {userData?.dev} Developer</h2>
                    <h2 className="text-2xl">Hello, I'm</h2>
                    <h2 className="text-[#1fb7fc] text-2xl">{userData?.user}</h2>
                    <p className="py-4">{userData?.about}
                        Front-End Developer with hands-on experience designing, developing, and implementing applications and solutions using a range of technologies and programming languages. Seeking to leverage broad development experience and hands-on technical expertise in a challenging role as a Full-stack Developer.
                    </p>
                </div>
                <div className="sm:basis-1/2 sm:flex sm:justify-around sm:items-center sm:flex-wrap hidden">
                    <FaIcons.FaHtml5 className="animate-bounce text-4xl hover:text-5xl cursor-pointer" />
                    <FaIcons.FaCss3 className="animate-bounce text-4xl hover:text-5xl cursor-pointer" />
                    <FaIcons.FaJsSquare className="animate-bounce text-4xl hover:text-5xl cursor-pointer" />
                    <FaIcons.FaNode className="animate-bounce text-4xl hover:text-5xl cursor-pointer" />
                    <FaIcons.FaReact className="animate-bounce text-4xl hover:text-5xl cursor-pointer" />
                    <FaIcons.FaGit className="animate-bounce text-4xl hover:text-5xl cursor-pointer" />
                    <FaIcons.FaGithub className="animate-bounce text-4xl hover:text-5xl cursor-pointer" />
                    <FaIcons.FaBootstrap className="animate-bounce text-4xl hover:text-5xl cursor-pointer" />
                    {/* <FaIcons.FaDocker className="animate-bounce text-4xl hover:text-5xl cursor-pointer" /> */}
                    <RiNextjsFill className="animate-bounce text-4xl hover:text-5xl cursor-pointer" />
                </div>
            </div>
            <div className="flex flex-wrap gap-2">
                <a href={userData?.resume} className="hover:drop-shadow shadow-red flex items-center gap-x-1 border-2 border-[#1fb7fc] text-[#1fb7fc] px-4 rounded-full"> <FaIcons.FaDownload className="fill-[#1fb7fc]" />Resume</a>
                <a href={`tel:+91${userData?.phone}`} className="flex items-center gap-x-1  border-2 border-[#1fb7fc] text-[#1fb7fc] px-4 rounded-full"><FaIcons.FaPhone className="fill-[#1fb7fc]" />{userData?.phone}</a>
                <a href="mailto:brown11369@gmail.com" className="flex items-center gap-x-1  border-2 border-[#1fb7fc] text-[#1fb7fc] px-4 rounded-full"><FaIcons.FaEnvelope className="fill-[#1fb7fc]" />Brown11369@gmail.com</a>
            </div>
        </div>
    )
}

export default Home;