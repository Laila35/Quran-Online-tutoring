import { Container } from "../shared/Container"; 
import ContactForm from "../ContactForm";

export default function HomePage({ hero }) {
  return (
    <Container className="py-6 sm:py-16 flex flex-col gap-16">
      {hero.map((section, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        > 
          <div className="space-y-10">
            <h1 className="text-2xl sm:text-4xl font-semibold">
              {section.title.split(" ")
                .slice(0, -1)
                .join(" ")}{" "}
              <span className="text-primary">
                {section.title.split(" ").slice(-1)}
              </span>
            </h1>
            <p className="max-w-lg">{section.description[0].text}</p>  
          </div> 
          <div className="flex sm:justify-end justify-center">
           <ContactForm/>
          </div>
        </div>
      ))}
    </Container>
  );
}
