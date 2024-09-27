import Image from 'next/image'
import React from 'react'

const skills = [
    {
        alt: "golang",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
    },
    {
        alt: "nodejs",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
    },
    {
        alt: "react",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
    },
    {
        alt: "postgre",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
    },
    {
        alt: "mongodb",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
    },
    {
        alt: "redis",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original-wordmark.svg"
    },
    {
        alt: "kafka",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original-wordmark.svg"
    },
    {
        alt: "docker",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg"
    },
    {
        alt: "google cloud",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg"
    },
    {
        alt: "aws",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
    },

]
const SkillSection = () => {
    return (
        <section id='skills'>
            <div className='py-8 sm:py-16'>
                <h2 className="text-center text-4xl font-bold text-textPrimary mt-4 mb-8 md:mb-12">
                    Skills
                </h2>

                <div className='grid grid-cols-2 sm:grid-cols-5 gap-3 justify-items-center content-center'>
                    {
                        skills.map((e) => (
                            // eslint-disable-next-line react/jsx-key
                            <div className=' h-full w-full '>
                                <div className='flex items-center justify-center rounded-lg border-gray-200 border-1 h-full w-full mx-auto'>
                                    <Image className='w-3/5 h-3/5 max-w-full max-h-full md:grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-110' width={0} height={0} alt={e.alt} src={e.img} />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default SkillSection