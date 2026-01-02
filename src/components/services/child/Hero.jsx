import { Container } from "../../shared/Container";
import ContactForm from "../../ContactForm";


export default function ChildHero(heroo) { 
    const hero = [
    {
        heading: heroo.heroo[0]?.title || "Default Heading",
        description:
            heroo.heroo[0].description[0].text||"Every Qur’an journey begins with the basics.",

    },
];
    return (
        <Container className="py-6 sm:py-16 flex flex-col gap-16">
            {hero.map((section, index) => (
                <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 "
                >
                    {/* Left Side */}
                    <div className="sm:space-y-12 space-y-2">
                        <h1 className="text-2xl sm:text-4xl font-semibold mt-4">
                            {section.heading.split(" ")
                                .slice(0, -1)
                                .join(" ")}{" "}
                            <span className="text-primary ">
                                {section.heading.split(" ").slice(-1)}
                            </span>
                        </h1>
                        <p className="text-justify">{section.description}</p>

                    </div>

                    {/* Right Side - Image */}
                    <div className="flex sm:justify-end justify-center">
                        <ContactForm />
                    </div>
                </div>
            ))}
        </Container>
    );
}
