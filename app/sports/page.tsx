import React from "react";

export default function SportsPage() {
    const races = [
        {
            name: "Marathon Amsterdam",
            date: "Oct 20, 2024",
            distance: "42.2 km",
            time: "2:56:56",
            description: "My first marathon! Sub 3 hours achieved.",
            details: [
                { label: "Distance", value: "42.6 km" },
                { label: "Time", value: "2h 57m 02s" },
                { label: "Elevation", value: "69 m" },
            ],
            type: "Run",
        },
        {
            name: "Halve Marathon Breda",
            date: "Oct 6, 2024",
            distance: "21.1 km",
            time: "1:24:56",
            description: "Personal Record despite some cramps.",
            details: [
                { label: "Distance", value: "21.2 km" },
                { label: "Time", value: "1h 24m 55s" },
                { label: "Elevation", value: "62 m" },
            ],
            type: "Run",
        },
        {
            name: "Zevenheuvelenloop",
            date: "Nov 17, 2024",
            distance: "15 km",
            time: "57:17",
            description: "Full gas de heuvels af, epic PR!",
            details: [
                { label: "Distance", value: "15.0 km" },
                { label: "Time", value: "57m 17s" },
                { label: "Elevation", value: "124 m" },
            ],
            type: "Run",
        },
        {
            name: "1/4 Triathlon",
            date: "June 29, 2025",
            distance: "1/4 Triathlon",
            time: "2:35:00",
            description: "Swim, Bike, Run! 39th out of 280.",
            details: [
                { label: "Swim (1.8km)", value: "32m 01s" },
                { label: "Bike + Trans", value: "~1h 20m" },
                { label: "Run (10.2km)", value: "42m 13s" },
            ],
            type: "Triathlon",
        },
    ];

    return (
        <main className="flex flex-col items-center p-6 md:p-24 min-h-screen">
            <div className="font-extrabold text-4xl dark:text-white text-black mb-12 text-center">
                <h1>Sports & Personal Bests</h1>
                <h2 className="mt-2 text-xl font-semibold tracking-tight opacity-70">
                    Pushing limits on the road and in the water.
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                {races.map((race, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-neutral-700"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                        <div className="p-8">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mb-2">
                                        {race.type}
                                    </span>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        {race.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {race.date}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-purple-600">
                                        {race.time}
                                    </p>
                                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                        Official Time
                                    </p>
                                </div>
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                                "{race.description}"
                            </p>

                            <div className="grid grid-cols-3 gap-4 border-t border-gray-100 dark:border-neutral-700 pt-4">
                                {race.details.map((detail, i) => (
                                    <div key={i} className="text-center">
                                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                                            {detail.label}
                                        </p>
                                        <p className="font-semibold text-gray-900 dark:text-white">
                                            {detail.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
