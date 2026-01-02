const ChecklistSection = ({ data }) => {
    return (
        <section className="max-w-3xl mx-auto my-20 px-6 font-sans">
            <h2 className="text-3xl font-extrabold mb-14 text-center text-gray-900">
                {data.title.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="text-primary">{data.title.split(' ').slice(-1)}</span>
            </h2> 
            <div className="relative">
                <div className="absolute top-0 left-0 w-1 bg-primary h-full rounded"></div>
                <ul className="space-y-4">
                    {data.points.map((point, index) => (
                        <li key={index} className="flex items-start justify-center border-b ">
                            <p className="ml-8 text-gray-800 text-lg leading-relaxed mb-2">
                                {point.des}
                            </p>
                        </li>
                    ))}
                </ul>
                <div className="absolute top-0 right-0 w-1 bg-primary h-full rounded"></div>
            </div>
        </section>
    );
};

export default ChecklistSection;
