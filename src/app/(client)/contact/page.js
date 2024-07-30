import ContactForm from "@/component/client/ContactForm";
import { getUser } from "@/lib/data";

async function Contact(){
    const [userData] = await getUser();
    return (
        <div className="bg-black p-10 text-base leading-8 text-white">
            <h2 className="text-[#1fb7fc] pb-5 text-2xl">Contact Me</h2>
            <div className="flex flex-col lg:flex-row">
                <p className="lg:basis-1/2 basis-full mb-6 lg:mb-0 lg:pr-6">{userData?.contact}</p>
                <ContactForm/>
            </div>
        </div>
    )
}


export default Contact;