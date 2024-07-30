import Image from "@/component/Image";
import { getUser } from "@/lib/data";
async function Skills() {
    const [userData] = await getUser();
    console.log(userData?.pageImage)
    return (
        <div className="bg-black p-10 text-base leading-8">
            <h2 className="text-[#1fb7fc] pb-5 text-2xl">Skills andExperience</h2>
            <div className="flex">
                <p className="sm:basis-1/2">{userData?.skills}</p>
                <div className="sm:basis-1/2 sm:block sm:relative sm:h-20 sm:w-20 hidden">
                    <Image src={userData?.pageImage} css="object-cover w-full h-full" alt={"animation image"} />
                </div>
            </div>
        </div>
    )
}


export default Skills;