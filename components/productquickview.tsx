'use client'

import { Product } from '@/lib/product'
import { Dialog, DialogBackdrop } from '@headlessui/react'
import { StarIcon as StarSolid, XMarkIcon } from '@heroicons/react/24/solid'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface Props {
    open: boolean
    setOpen: (value: boolean) => void
    product: Product | null
}

export default function ProductQuickView({ open, setOpen, product }: Props) {
    if (!product) return null

    const rating = 4
    const totalStars = 5

    return (
        <AnimatePresence>
            {open && (
                <Dialog open={open} onClose={setOpen} className="relative z-50">
                    {/* Backdrop */}
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-black/50"
                    />

                    {/* Wrapper */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50">
                        <motion.div
                            key="panel"
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 40, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="bg-white rounded-lg shadow-xl w-full max-w-sm lg:max-w-3xl p-4 sm:p-6 relative max-h-[90vh] overflow-y-auto"
                        >
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 p-2"
                            >
                                <XMarkIcon className="w-6 h-6" />
                            </button>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full rounded-lg object-cover"
                                />

                                <div className="flex flex-col justify-between">
                                    <div>
                                        <h2 className="text-xl sm:text-2xl font-semibold">{product.name}</h2>
                                        <p className="text-lg sm:text-xl mt-2">
                                            Rp{product.price.toLocaleString("id-ID")}
                                        </p>

                                        <div className="flex items-center mt-3">
                                            {Array.from({ length: totalStars }).map((_, i) =>
                                                i < rating ? (
                                                    <StarSolid
                                                        key={i}
                                                        className="h-5 w-5 text-yellow-500"
                                                    />
                                                ) : (
                                                    <StarSolid
                                                        key={i}
                                                        className="h-5 w-5 text-gray-200"
                                                    />
                                                )
                                            )}
                                        </div>

                                        <p className="mt-4 sm:mt-6 text-sm sm:text-base font-light text-gray-500">
                                            {product.desc}
                                        </p>
                                    </div>

                                    <Link href="">
                                        <button className="mt-6 w-full bg-[#214a55] text-white py-3 rounded-md hover:bg-[#214a55]/95">
                                            Checkout
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Dialog>
            )}
        </AnimatePresence>
    )
}
