'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ProjectsPage() {

    const [activeVideo, setActiveVideo] = useState(null)

    const videos = [
        {
            id: 'v1',
            title: 'Danza y Costura',
            category: (
                <>
                    Danza y Costura <br />
                    Filmmaker: Marianfilmmaker <br />
                    Designer: Emiliosalinasatelier <br />
                    MUA: Jose Sande Makeup
                </>
            ),
            src: '/dancervedio1.mp4'
        },

        { id: 'v2', title: 'Dutch National Opera', category: 'Königskinder', src: '/dancervedio2.mp4' },

        { id: 'v3', title: 'The Cave', category: 'By Mariekedeweert', src: '/dancervedio3.mp4' }

    ]

    const bottomVideos = [

        { id: 'v4', title: 'Cartier', category: 'casting and movement direction oneness entertainment', src: '/dancervedio4.mp4' },

        {
            id: 'v5',
            title: 'Notion of Time',
            category: (
                <>
                    by Golgota Productions <br />
                    Videographer: Léonard C. Héliot
                </>
            ),
            src: '/dancervedio5.mp4'
        },

        {
            id: 'v6',
            title: 'Danza y Costura',
            category: (
                <>
                    Filmmaker: Marianfilmmaker <br />
                    Designer: Emiliosalinasatelier <br />
                    MUA: Jose Sande Makeup <br />
                    Collaboration with OCCO Art Gallery
                </>
            ),
            src: '/dancervedio6.mp4'
        },

        {
            id: 'v7',
            title: 'In between',
            category: 'In Between is an experimental film shot in Jerusalem during my stay in Israel, where I was constantly questioned about the joys of daily life and the fears that often remain unspoken.',
            src: '/dancervedio7.mp4'
        },

        {
            id: 'v8',
            title: 'Valentino Fall-winter 25/2',
            category: 'Subtext not given',
            src: '/dancervedio8.mp4'
        }
    ]

    return (

        <main className="min-h-screen bg-[#1a1a1a] pt-40 pb-24 px-6 lg:px-12">

            <div className="max-w-[1350px] mx-auto">

                {/* HEADER */}

                <div className="text-center mb-24">

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white text-5xl md:text-6xl font-bold tracking-tight mb-6"
                        style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                    >
                        Choreography & Dancer
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light"
                    >
                        Through her association CIELA, Lotte Aimée develops her own choreographic projects and long-term artistic research, with the support of the Centre National de la Danse and La Ménagerie de Verre in Paris. Alongside these projects, she also performs as a dancer in other artistic collaborations.
                    </motion.p>

                </div>

                {/* GRID */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">

                    {videos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group cursor-pointer"
                        >

                            <div
                                className="relative w-full overflow-hidden rounded-sm cursor-pointer"
                                onClick={() => setActiveVideo(activeVideo === video.id ? null : video.id)}
                            >

                                <video
                                    src={video.src}
                                    className="w-full h-auto"
                                    autoPlay
                                    loop
                                    playsInline
                                    muted={activeVideo !== video.id}
                                />

                            </div>

                            <div className="text-center space-y-2 mt-8">

                                <h3
                                    className="text-white text-2xl font-bold tracking-tight"
                                    style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                                >
                                    {video.title}
                                </h3>

                                <p className="text-gray-500 text-sm font-medium">
                                    {video.category}
                                </p>

                            </div>

                        </motion.div>
                    ))}

                    {bottomVideos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group cursor-pointer"
                        >

                            <div
                                className="relative w-full overflow-hidden rounded-sm cursor-pointer"
                                onClick={() => setActiveVideo(activeVideo === video.id ? null : video.id)}
                            >

                                <video
                                    src={video.src}
                                    className="w-full h-auto"
                                    autoPlay
                                    loop
                                    playsInline
                                    muted={activeVideo !== video.id}
                                />

                            </div>

                            <div className="text-center space-y-2 mt-8">

                                <h3
                                    className="text-white text-2xl font-bold tracking-tight"
                                    style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                                >
                                    {video.title}
                                </h3>

                                <p className="text-gray-500 text-sm font-medium">
                                    {video.category}
                                </p>

                            </div>

                        </motion.div>
                    ))}

                </div>

            </div>

        </main>

    )

}