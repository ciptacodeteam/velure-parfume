"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <div className="relative lg:h-[700px] h-[500px] w-full">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                preload="auto"
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source src="/img/herosection.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10"></div>

            {/* Content */}
            <div className="relative flex flex-col justify-center items-center h-full text-center text-white">

                {/* Subheading */}
                <motion.h1
                    className="font-cormorant font-medium lg:text-2xl text-lg"
                    initial={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.5, ease: "easeOut"}}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    LUXURIOUS AND ELEGANT
                </motion.h1>

                {/* Main Heading */}
                <motion.h1
                    className="font-cormorant lg:text-8xl text-5xl font-semibold lg:mt-4 mt-2"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                >
                    INDULGED IN LUXURIOUS
                </motion.h1>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                >
                    <Link href="https://linktr.ee/velureperfume">
                        <button className="bg-[#214a55] text-white px-6 py-2 mt-6 rounded-sm cursor-pointer hover:bg-[#214a55]/90 transition">
                            <span className="flex items-center">
                                <p className="me-2">Shop Now</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="size-3.5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                    />
                                </svg>
                            </span>
                        </button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
