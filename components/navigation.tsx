"use client";

import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/svg/logo.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Perfume", href: "#product" },
    { name: "Features", href: "#features" },
    { name: "Marketplace", href: "https://linktr.ee/velureperfume" },
    { name: "Testimonial", href: "#testimonial" },
    { name: "WhatsApp", href: "https://wa.me/6282184267456" },
];

export default function NavigationSection() {
    return (
        <Disclosure as="nav" className="bg-white relative z-50">
            {({ open }) => {
                // Disable scroll ketika menu terbuka
                useEffect(() => {
                    if (open) {
                        document.body.style.overflow = "hidden";
                    } else {
                        document.body.style.overflow = "";
                    }
                    // cleanup ketika komponen unmount
                    return () => {
                        document.body.style.overflow = "";
                    };
                }, [open]);

                return (
                    <>
                        {/* Navbar */}
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex h-16 items-center justify-between">
                                {/* Mobile - Logo on left */}
                                <div className="flex items-center sm:hidden">
                                    <Link href="/">
                                        <Image src={logo} alt="Logo" className="h-5 w-auto" />
                                    </Link>
                                </div>

                                {/* Desktop - Left nav */}
                                <div className="hidden sm:flex flex-1 justify-start space-x-6">
                                    {navigationLinks.slice(0, 3).map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="font-[family-name:var(--inter)] text-sm font-normal text-[#050A13] hover:text-[#BB7D32]"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>

                                {/* Desktop - Center logo */}
                                <div className="hidden sm:flex shrink-0 justify-center">
                                    <Link href="/">
                                        <Image src={logo} alt="Logo" className="h-5 w-auto" />
                                    </Link>
                                </div>

                                {/* Desktop - Right nav */}
                                <div className="hidden sm:flex flex-1 justify-end space-x-6">
                                    {navigationLinks.slice(3).map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="font-[family-name:var(--inter)] text-sm font-normal text-[#050A13] hover:text-[#BB7D32]"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>

                                {/* Mobile - Menu button */}
                                <div className="-mr-2 flex sm:hidden">
                                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-200 focus:outline-hidden focus:ring-inset z-50">
                                        <span className="sr-only">Open main menu</span>
                                        <Bars3Icon
                                            aria-hidden="true"
                                            className="block size-6 group-data-open:hidden"
                                        />
                                        <XMarkIcon
                                            aria-hidden="true"
                                            className="hidden size-6 group-data-open:block"
                                        />
                                    </DisclosureButton>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Menu Fullscreen */}
                        <AnimatePresence>
                            {open && (
                                <DisclosurePanel static className="sm:hidden fixed inset-0 z-40">
                                    {({ close }) => (
                                        <motion.div
                                            initial={{ y: "-100%" }}
                                            animate={{ y: 0 }}
                                            exit={{ y: "-100%" }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="bg-white pt-32 flex flex-col px-6 space-y-6 h-full"
                                        >
                                            {navigationLinks.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    onClick={() => close()}
                                                    className="text-2xl font-semibold text-gray-800 hover:text-[#BB7D32]"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </DisclosurePanel>
                            )}
                        </AnimatePresence>
                    </>
                );
            }}
        </Disclosure>
    );
}
