import Image from "@/component/Image";
import { getWorks } from "@/lib/data";
import { FaGithub } from "react-icons/fa";

const Work = async () => {
    const works = await getWorks();
    return (
        <div className="bg-black p-10 text-base leading-8">
            <h2 className="text-[#1fb7fc] pb-5 text-2xl">My Work</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {works.map((work) => (
                    <div key={work?._id} className="relative group overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm">
                        <a href={work?.link} target="_blank" rel="noopener noreferrer">
                            <div className="relative w-full h-64 bg-gray-200">
                                <Image
                                    src={work?.image}
                                    alt={work?.alt}
                                    className="object-cover w-full h-full"
                                    layout="fill" // Ensures image fills container
                                />
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-gray-600 text-xl font-semibold mb-2">{work?.name}</h2>
                                    {work?.gitHub && (
                                        <a
                                            href={work?.gitHub}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#1fb7fc] hover:text-blue-600 transition-colors duration-300"
                                        >
                                            <FaGithub className="text-3xl" />
                                        </a>
                                    )}
                                </div>
                                <p className="text-gray-600 mb-4">{work?.description}</p>
                                <p className="text-sm text-gray-500 mb-4">Technologies: {work?.stack.join(", ")}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work;