import Image from "@/component/Image";
import { getUser } from "@/lib/data";
const About =async () => {
    const [userData] = await getUser();
    return (
        <div className="bg-black p-10 text-base leading-8">
            <h2 className="text-[#1fb7fc] pb-5 text-2xl">About Me</h2>
            <div className="flex">
                <p className="sm:basis-1/2">{userData?.about}</p>
                <div className="sm:basis-1/2 sm:block sm:relative sm:h-20 sm:w-20 hidden">
                    <Image src={userData?.pageImage} css="object-cover w-full h-full" alt={"animation image"} />
                </div>
            </div>
        </div>
    )
}


export default About;