"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { Product, products } from "@/lib/product";
import ProductQuickView from "@/components/productquickview";
import { motion } from "framer-motion";

export default function FeaturedProducts() {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const handleOpenModal = (product: Product) => {
        setSelectedProduct(product);
        setOpen(true);
    };

    return (
        <motion.section
            className="lg:max-w-7xl lg:mx-auto mb-20 mx-4 lg:mt-20 mt-16 scroll-mt-24"
            id="product"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }} // ✅ animasi hanya sekali saat pertama scroll
        >
            <motion.div
                className="flex justify-between items-center mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <h2 className="lg:text-3xl text-2xl font-cormorant font-semibold text-[#BB7D32]">
                    Our Featured Products
                </h2>
                <div className="hidden lg:block">
                    <button
                        className={`swiper-button-prev-custom font-bold cursor-pointer me-3 ${isBeginning
                            ? "text-gray-400 cursor-not-allowed"
                            : "text-[#214a55]"
                            }`}
                    >
                        ←
                    </button>
                    <button
                        className={`swiper-button-next-custom font-bold cursor-pointer ${isEnd
                            ? "text-gray-400 cursor-not-allowed"
                            : "text-[#214a55]"
                            }`}
                    >
                        →
                    </button>
                </div>
            </motion.div>

            <section className="hidden lg:block">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation={{
                        nextEl: ".swiper-button-next-custom",
                        prevEl: ".swiper-button-prev-custom",
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1.5 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    onSlideChange={(swiper) => {
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    onReachBeginning={() => setIsBeginning(true)}
                    onReachEnd={() => setIsEnd(true)}
                >
                    {products.map((product, i) => (
                        <SwiperSlide key={product.id}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <div
                                    onClick={() => handleOpenModal(product)}
                                    className="bg-gray-100 aspect-[4/5] relative rounded-md overflow-hidden cursor-pointer"
                                >
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <div>
                                        <p className="text-sm">{product.name}</p>
                                        <p className="font-semibold">
                                            Rp{product.price.toLocaleString("id-ID")}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => handleOpenModal(product)}
                                        className="me-2 cursor-pointer"
                                    >
                                        <ShoppingBag size={22} strokeWidth={1.5} />
                                    </button>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* mobile view */}
            <section className="lg:hidden">
                <div className="grid grid-cols-2 gap-4">
                    {products.map((product, i) => (
                        <SwiperSlide key={product.id}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <div
                                    onClick={() => handleOpenModal(product)}
                                    className="bg-gray-100 aspect-[4/5] relative rounded-md overflow-hidden cursor-pointer"
                                >
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <div>
                                        <p className="text-sm">{product.name}</p>
                                        <p className="font-semibold">
                                            Rp{product.price.toLocaleString("id-ID")}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => handleOpenModal(product)}
                                        className="me-2 cursor-pointer"
                                    >
                                        <ShoppingBag size={22} strokeWidth={1.5} />
                                    </button>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </div>
            </section>

            {/* Modal Quick View */}
            <ProductQuickView
                open={open}
                setOpen={setOpen}
                product={selectedProduct}
            />
        </motion.section>
    );
}
