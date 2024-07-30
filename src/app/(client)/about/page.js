import Image from "@/component/Image";
const About = () => {
    return (
        <div className="bg-black p-10 text-base leading-8">
            <h2 className="text-[#1fb7fc] pb-5 text-2xl">About Me</h2>
            <div className="flex">
                <p className="sm:basis-1/2">Since beginning my journey as a freelance developer nearly 2+ years ago, I’ve done remote work, and collaborated with talented people to create web products for both business and consumer use. I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, features, animations, and coding interactive layouts. I also have full-stack developer experience with popular open-source CMS and other technologies like (WordPress, React MongoDB, Express, Node).
                </p>
                <div className="sm:basis-1/2 sm:block sm:relative sm:h-20 sm:w-20 hidden">
                    {/* <Image src="b2cujqxjuta4zazeg0nl" css="object-cover w-full h-full" alt={"animation image"} /> */}
                    <img className="absolute h-[400px]" src="https://res.cloudinary.com/dmzodhnzn/image/upload/v1721847550/b2cujqxjuta4zazeg0nl.gif" />
                </div>
            </div>
        </div>
    )
}


export default About;