import React from "react"


const people = [
    {
        name: 'Siddharth Ponnapalli',
        role: 'UI / UX Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        id:1,
    },
    {
        name: 'Mahijendra B',
        role: 'Front-End Developer',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        id:2,
    }
]

export default function Example() {
    return (

            <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 ">
                <div className="space-y-8 sm:space-y-12 flex justify-center">
                    <ul className="mx-auto grid grid-cols-2 gap-x-8 md:gap-x-6 lg:max-w-5xl">
                        {people.map((person, index) => (
                            <li key={person.name}>
                                <div className="space-y-4">
                                    <div className="mx-auto rounded-full">Designed</div>
                                    <div className="space-y-2">
                                        <div className="text-xs font-medium lg:text-sm font-nunito">
                                            <h3 className="text-gray-400 font-nunito text-xl tracking-wide">{person.name}</h3>
                                            <p className="text-gray-400 font-nunito text-xs lg:text-sm tracking-wider ">{person.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

    )
}
