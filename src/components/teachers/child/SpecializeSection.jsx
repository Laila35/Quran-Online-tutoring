import { Container } from "../../shared/Container";
import Image from "next/image";
const SpecializeSection = ({ specialize }) => {
  return (
    <Container className="max-w-5xl mx-auto py-12 sm:py-12  font-sans">
      <h2 className="tetx-2xl sm:text-3xl font-bold mb-12 text-center ">
        {specialize.title}
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {specialize.points.map((point, index) => (
          <div
            key={index}
            className="relative border border-gray-300 rounded-lg shadow-sm p-8 w-full max-w-sm text-center pt-14"
          >
            {/* Icon overlapping the top border */}
            <Image
              src={point.icon}
              alt={`${point.title} icon`} 
              width={80}
              height={80}
              className="absolute -top-7 left-1/2 transform -translate-x-1/2 w-[4.5rem] h-[4.5rem] bg-white p-2 rounded-full border border-gray-300 shadow"
            />
            <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
            <p>{point.des}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SpecializeSection;
