import React from "react"
import Link from "next/link"


export default function Example() {
    return (
        <div className="relative bg-gray-50 overflow-hidden">
            <div className="relative sm:pb-12">
                <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
                    <div className="text-center">
                        <div className="text-3xl tracking-normal font-normal text-gray-900 sm:text-5xl md:text-6xl font-nunito">
                            <span className="block xl:inline text-gray-300 font-bold font-nunito tracking-wide">Go Icons</span>{' '}
                          {/*  <span className="block text-indigo-600 xl:inline">online business</span>*/}
                        </div>

                        <p className="mt-3 max-w-md mx-auto text-base text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl font-nunito ">
                            Get fully editable vector icons and social logos on your website with Go Icons
                        </p>
                        <p className="mt-3 max-w-md mx-auto text-base text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl font-nunito ">
                           The Hand-crafted Free Icons Library
                        </p>
                        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                                <div className="justify-center">
                                    <a
                                        href="https://github.com/mahijendra/goicons.git"
                                        className="button button--nina px-6 py-0 text-gray-100 hover:text-white relative block focus:outline-none border-2 rounded-full text-sm text-center font-semibold tracking-wider overflow-hidden font-nunito"
                                        data-text="Github"
                                    >
                                        <span className="align-middle">G</span>
                                        <span className="align-middle">i</span>
                                        <span className="align-middle">t</span>
                                        <span className="align-middle">h</span>
                                        <span className="align-middle">u</span>
                                        <span className="align-middle">b</span>
                                    </a>
                                </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}