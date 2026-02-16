'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <main className="bg-white min-h-screen w-full">
            {/* Add padding-top to account for the absolute navbar */}
            <section className="pt-36 pb-24 px-6 lg:px-12 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto w-full">

                    {/* Intro Section */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="mb-20 max-w-4xl"
                    >
                        <motion.span
                            variants={fadeInUp}
                            className="text-sm font-bold tracking-[0.2em] text-black uppercase mb-4 block"
                        >
                            About
                        </motion.span>
                        <motion.h2
                            variants={fadeInUp}
                            className="text-4xl md:text-6xl font-medium leading-[1.1] mb-8 text-[#191919]"
                            style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                        >
                            Lotte Aimée de Weert
                        </motion.h2>
                        <motion.div variants={fadeInUp} className="space-y-6 text-[#797c7f] text-lg leading-relaxed font-light">
                            <p>
                                Born in 1996 in the Netherlands, Lotte Aimée de Weert embarked on her artistic journey at the prestigious ArtEZ University of the Arts in Arnhem. Seeking to broaden her horizons and refine her craft, she moved to Paris, a city that would become the crucible for her evolving artistic identity. There, she immersed herself in a rigorous study of classical ballet, contemporary dance, and the Graham technique, building a technical foundation that is both robust and versatile. This period of intense training was not merely physical but intellectual, fostering a deep appreciation for the history and evolution of movement.
                            </p>
                            <p>
                                Her education did not stop at movement. Recognizing the intricate link between physical expression and emotional truth, she expanded her interpretative range through the study of Method Acting with Jack Waltzer, a lifetime member of the Actors Studio in New York. This dual foundation—merging rigorous physicality with profound dramatic depth—has shaped her distinctive presence, allowing her to inhabit characters and concepts with a rare intensity. It allows her to approach dance not just as a series of steps, but as a continuous, living monologue of the body.
                            </p>
                            <p>
                                Her career has since blossomed into a dynamic exploration of performance, leading her to stages and screens alike. She cultivates a refined sensitivity to the camera's gaze and the stage's demand, constantly exploring the dialogue between dance, theatre, and visual arts to create moments of resonant beauty. whether in the intimacy of a studio or the grandeur of a theatre, her work remains grounded in a relentless pursuit of honest expression.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="w-full h-[1px] bg-gray-200 mb-20 origin-left"
                    />

                    {/* Biography & Language Section */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-20"
                    >
                        {/* Biography */}
                        <motion.div variants={fadeInUp}>
                            <h3
                                className="text-3xl font-medium mb-6 text-[#191919]"
                                style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                            >
                                Her Biography
                            </h3>
                            <div className="space-y-6 text-[#797c7f] text-lg leading-relaxed font-light">
                                <p>
                                    Rooted in the grounded pragmatism of her Dutch origins and artistically sculpted by the poetic nuances of Paris, Lotte Aimée de Weert possesses a cosmopolitan perspective that informs every aspect of her work. She has developed a movement language that seamlessly bridges physical intensity with emotional precision, creating work that is felt as much as it is seen. Her approach is holistic, informed by theatrical depth, cinematic awareness, and an unyielding commitment to technical clarity.
                                </p>
                                <p>
                                    A versatile chameleon of a performer, she navigates the worlds of dance, theatre, and high fashion with equal grace. She has graced shows, performances, and exclusive presentations for major fashion houses including Valentino, Cartier, Hermès, and Flora Miranda. These experiences have not only expanded her portfolio but have further sharpened her understanding of presence, image construction, and the subtle art of narrative embodiment within the constraints of high-stakes visual environments. She understands that in these spaces, the body becomes a vessel for the brand's story, requiring a precision and elegance that she effortlessly delivers.
                                </p>
                                <p>
                                    Furthermore, her ability to adapt to different artistic directions while maintaining her unique signature has made her a trusted collaborator for directors and photographers. She brings a proactive creative energy to every project, offering solutions and interpretations that elevate the initial concept.
                                </p>
                            </div>
                        </motion.div>

                        {/* Choreographic Language */}
                        <motion.div variants={fadeInUp}>
                            <h3
                                className="text-3xl font-medium mb-6 text-[#191919]"
                                style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                            >
                                Her Choreographic Language
                            </h3>
                            <div className="space-y-6 text-[#797c7f] text-lg leading-relaxed font-light">
                                <p>
                                    Her choreographic research is a deep dive into the primal relationship between body, space, and storytelling. It travels fluidly from the introspection of intimate solos to the complex dynamics of collaborative stage works. At the core of her practice is a relentless search for authenticity—she seeks the tension that exists before movement resolves, the embodied truth that emerges when the performer strips away affectation.
                                </p>
                                <p>
                                    She employs a vocabulary that is both sculptural and fluid, often using the body to carve space in unexpected ways. Her work invites the audience to witness an unfolding internal dialogue, made visible through precise gesture and committed action. It is a language of resilience and vulnerability, demanding both the performer and the viewer to be fully present in the moment. She is particularly interested in the "in-between" moments—the transitions, the pauses, the stillness that speaks louder than motion.
                                </p>
                                <p>
                                    Technical precision is paramount in her work, yet it never overshadows the emotional core. She believes that technique should serve the expression, acting as the invisible framework that supports the raw, human story being told. This balance results in performances that are visually stunning yet deeply moving.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="w-full h-[1px] bg-gray-200 mb-20 origin-left"
                    />

                    {/* Creations & Projects Section */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24"
                    >
                        {/* Her Creations */}
                        <motion.div variants={fadeInUp}>
                            <h3
                                className="text-3xl font-medium mb-6 text-[#191919]"
                                style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                            >
                                Her Creations
                            </h3>
                            <div className="space-y-6 text-[#797c7f] text-lg leading-relaxed font-light">
                                <p>
                                    Through her association CIE.LA, Lotte develops her own choreographic projects and pursues long-term artistic research. Her work has garnered specialized support from prestigious institutions such as the Centre National de la Danse and La Ménagerie de Verre in Paris. These residencies and supports act as incubators for her vision, allowing her to experiment with form and content in a protected, creative environment.
                                </p>
                                <p>
                                    Her creations often blur the lines between performance art and traditional dance, creating immersive environments where the physical and the psychological intersect. By prioritizing the "felt experience," she constructs pieces that resonate on a visceral level, inviting audiences to question their own perceptions of the body in motion. Each piece is a unique ecosystem, governed by its own internal logic and aesthetic rules.
                                </p>
                                <p>
                                    Whether creating a solo piece that explores themes of isolation and identity, or a large-scale group work investigating collective memory, her directorial voice remains consistent: clear, provocative, and deeply human.
                                </p>
                            </div>
                        </motion.div>

                        {/* Multidisciplinary Projects */}
                        <motion.div variants={fadeInUp}>
                            <h3
                                className="text-3xl font-medium mb-6 text-[#191919]"
                                style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                            >
                                Multidisciplinary Projects
                            </h3>
                            <div className="space-y-6 text-[#797c7f] text-lg leading-relaxed font-light">
                                <p>
                                    A multifaceted creator, Lotte works interchangeably as choreographer, performer, and conceptual collaborator. She thrives in the intersection of disciplines, drawing on cinema, fashion, and visual art to explore varied formats. Her portfolio ranges from experimental short films and site-specific performances to full-scale stage productions and video installations. She sees no hierarchy between these forms, only different avenues for expression.
                                </p>
                                <p>
                                    Today, she continues to work as an independent artist, collaborating on diverse dance and theatre productions while developing her own original repertoire. Her ability to translate abstract concepts into tangible physical realities makes her a sought-after collaborator for projects that demand a sophisticated and layered understanding of the human form.
                                </p>
                                <p>
                                    Her openness to collaboration extends beyond the arts; she is constantly seeking dialogue with other fields, believing that true innovation lies at the boundaries of what is known. This curiosity drives her to constantly evolve, ensuring her work remains fresh, relevant, and engaging.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </section>
        </main>
    );
}
