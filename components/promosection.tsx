"use client";
import Image from "next/image"
import img2 from "@/public/img/img2.webp"
import Link from "next/link"
import { motion } from "framer-motion" 

export default function PromoSection() {
    return (
        <div className="bg-[#214a55] lg:gap-10 overflow-x-hidden py-16 px-4 lg:py-0 lg:px-0">
            <div className="flex items-center justify-between">

                {/* Image Section */}
                <motion.div
                    className="w-2/5 lg:block hidden"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <Image
                        alt="img2"
                        src={img2}
                        className="object-cover"
                    />
                </motion.div>

                {/* Text Section */}
                <motion.div
                    className="space-y-2 text-white text-center lg:px-16 lg:w-3/5"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <motion.h1
                        className="lg:text-xl mb-4 lg:mb-0"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        LUXURIOUS AND ELEGANT
                    </motion.h1>

                    <motion.h1
                        className="font-cormorant font-semibold text-6xl"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Elevate Your Essence with Timeless Scents
                    </motion.h1>

                    <motion.p
                        className="lg:text-xs mt-4 lg:mt-0"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        viewport={{ once: true }}
                    >
                        Discover premium fragrances crafted to define your unique personality and leave a lasting impression.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        viewport={{ once: true }}
                    >
                        <Link href="https://linktr.ee/velureperfume">
                            <button className="bg-white text-[#214a55] px-6 py-2 mt-6 rounded-sm cursor-pointer hover:bg-white/90 transition">
                                <span className="flex items-center">
                                    <p className="me-2 font-normal">Claim Voucher</p>
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
                </motion.div>
            </div>
        </div>
    )
}
