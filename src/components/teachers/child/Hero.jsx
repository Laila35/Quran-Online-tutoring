import React from 'react' 
import ContactForm from '../../ContactForm'
const TecherHero = ({ teacher }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-16  sm:py-12 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> 
                <div>
                    <h1 className="text-2xl sm:text-4xl font-semibold">
                        {teacher.title.split(' ').slice(0, -1).join(' ')}{' '}
                        <span className="text-primary">{teacher.title.split(' ').slice(-1)}</span>
                    </h1> 
                    <p className="mt-4 text-gray-700 text-lg">{teacher.description}</p>
                </div>  
                <div className="w-full justify-center flex sm:justify-end">
                    <ContactForm/>
                </div>
            </div>
        </div>
    )
}

export default TecherHero
