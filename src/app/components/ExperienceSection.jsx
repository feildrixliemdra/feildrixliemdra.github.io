import React from 'react'
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";


const efisheryJobDesc = [
    'Migrate old database from CouchDB to Postgre',
    'Create new service that consume core customer data changes from other service with Rabbitmq',
    'Collaborate wit Product Manager to develop and maintain existing or new feature related to Kabayan submission'
]

const ralaliBigAgentJobDesc = [
    'Responsible for reliability and performance of API services',
    'Develop and fixing bug in agent core legacy API',
    'Develop Learning in app feature service that focus on learning system',
    'Develop Questionnaire service that focus on manage questionnaire feature',
    'Develop Query service that focus on improving response time for GET request',
    'Integrate new Digital Goods Service'
]

const ralaliDigitalGoodsJobDesc = [
    'Create technical documentation for new service',
    'Contribute to designing system architecture',
    'Develop Digital Product service that focus on product management',
    'Develop Digital Aggregator service',
    'Develop Bulk Digital service',
    'Integrate Ralali marketplace with new digital goods platform'
]

const ExperienceSection = () => {
    return (

        <section id="experience">
            <div className='py-8 sm:py-16'>
                <h2 className="text-center text-4xl font-bold text-textPrimary mt-4 mb-8 md:mb-12">
                    Working Experience
                </h2>

                <div className='flex items-center'>
                    <ol className="overflow-hidden space-y-8 mx-auto ">
                        <li
                            className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-slate-600 after:inline-block after:absolute after:-bottom-11 after:left-4 lg:after:left-5">
                            <div className="flex items-start font-medium w-full">
                                <span
                                    className="w-8 h-8 flex-shrink-0 aspect-square bg-slate-800 border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
                                    2
                                </span>
                                <div className="block">
                                    <h4 className="font-semibold  text-textPrimary">Efishery</h4>
                                    <p className="text-base lg:text-sm text-textSecondary-600 md:max-w-lg mb-4 ">2022 - Present</p>
                                    <p className="text-base lg:text-md text-textSecondary-600 max-w-lg mb-4">
                                        <span className='font-semibold'>Fund Submission Team:</span> <br />
                                        Responsible to process and validate Efishery Kabayan (Loan) submission data from farmer
                                        <br />
                                    </p>

                                    <p className="text-base lg:text-md text-textSecondary-600 max-w-lg">
                                        {
                                            efisheryJobDesc.map((e) => (
                                                // eslint-disable-next-line react/jsx-key
                                                <span className='flex items-start gap-1'>
                                                    <ChevronDoubleRightIcon className="shrink-0 h-3 w-3 mt-[6px]" />
                                                    {e}
                                                </span>
                                            ))
                                        }
                                    </p>

                                </div>
                            </div>
                        </li>
                        <li
                            className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-slate-600 after:inline-block after:absolute after:-bottom-11 after:left-4 lg:after:left-5">
                            <div className="flex items-start font-medium w-full">
                                <span
                                    className="w-8 h-8 aspect-square bg-slate-50 border-2 border-slate-600 rounded-full flex justify-center items-center flex-shrink-0 mr-3 text-sm text-slate-600  lg:w-10 lg:h-10">
                                    1
                                </span>
                                <div className="block">
                                    <h4 className="font-semibold text-textPrimary">Ralali</h4>
                                    <p className="text-base lg:text-sm text-textSecondary-600 max-w-lg mb-4 ">2019 - 2022</p>

                                    <p className="text-base lg:text-md text-textSecondary-600 max-w-lg mb-4">
                                        <span className='font-semibold'>BIG Agent Team: </span> <br />
                                        Focus on developing backend feature for BIG Agent Mobile Apps and Admin Dashboard.
                                        <br />
                                    </p>
                                    <p className="text-base lg:text-md text-textSecondary-600 max-w-lg">
                                        {
                                            ralaliBigAgentJobDesc.map((e) => (
                                                // eslint-disable-next-line react/jsx-key
                                                <span span className='flex  items-start  gap-1' >
                                                    <ChevronDoubleRightIcon className="shrink-0 h-3 w-3 mt-[6px]" />
                                                    {e}
                                                </span>
                                            ))
                                        }

                                    </p>


                                    <br />
                                    <br />
                                    <p className="font-semibold lg:text-md text-textSecondary-600 max-w-lg">
                                        Digital Goods Team:
                                    </p>
                                    <p className="text-base lg:text-md text-textSecondary-600 max-w-lg">
                                        Improve legacy service by building new Digital Goods Aggregator Project based on Aggregator Pattern and Event Driven Architecture.
                                    </p>
                                    <br />
                                    <p className="text-base lg:text-md text-textSecondary-600 max-w-lg">
                                        {
                                            ralaliDigitalGoodsJobDesc.map((e) => (
                                                // eslint-disable-next-line react/jsx-key
                                                <span className='flex items-start gap-1'>
                                                    <ChevronDoubleRightIcon className="shrink-0 h-3 w-3 mt-[6px]" />
                                                    {e}
                                                </span>
                                            ))
                                        }
                                    </p>

                                </div>
                            </div>
                        </li>
                        <li className="relative flex-1 ">
                            <a className="flex items-start font-medium w-full  ">
                                <span
                                    className="w-8 h-8 bg-gray-50 border-2 relative border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-10 lg:h-10"></span>
                            </a>
                        </li>
                    </ol>

                </div>
            </div>
        </section >
    )
}

export default ExperienceSection