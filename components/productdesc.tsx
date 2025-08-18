"use client";
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion" // ✅ animasi
import img1 from "@/public/img/img1.webp"

export default function ProductDesc() {
    return (
        <section className="lg:max-w-7xl overflow-x-hidden lg:mx-auto lg:px-4 mx-4 lg:mb-24 mb-16 lg:mt-24 mt-16 grid grid-cols-1 md:grid-cols-2 lg:gap-12 items-center">
            {/* Text Section */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="font-cormorant lg:text-5xl text-4xl font-semibold lg:w-2/3 text-[#BB7D32]">
                    The Essence of Timeless Elegance
                </h2>
                <motion.p
                    className="mt-4 text-gray-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Velure is crafted to embody everlasting sophistication, delivering a luxurious fragrance that captivates from the very first note. Each spray reveals confidence, charm, and a lasting impression that lingers beautifully.
                </motion.p>
                <motion.p
                    className="mt-4 text-gray-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    Designed for the modern soul, Velure combines elegance and individuality in every drop. Its unique fragrance becomes a personal statement, reflecting your true essence with sophistication and style.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                >
                    <Link href="https://linktr.ee/velureperfume">
                        <button className="bg-[#214a55] hover:bg-[#214a55]/90 transition px-6 py-2 mt-8 rounded-sm cursor-pointer">
                            <span className="flex items-center">
                                <p className="me-2 text-white">Shop Now</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="size-3.5 text-white"
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

            {/* Image Section */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
            >
                <Image
                    alt=""
                    src={img1}
                    className="object-cover rounded-lg h-72 md:h-96 mt-8 lg:mt-0"
                />
            </motion.div>
        </section>
    )
}
