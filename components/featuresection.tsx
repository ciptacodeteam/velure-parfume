import { Box, PackageCheck, Users } from "lucide-react";

export default function FeaturedSection() {
    return (
        <>
            <section id="features" className="scroll-mt-12">
                <div className="bg-[#214a55] lg:py-16 py-12">
                    <div className="lg:max-w-7xl lg:mx-auto mx-4">
                        <div className="lg:flex items-center gap-30">
                            <div className="lg:w-1/2 mb-10 lg:mb-0">
                                <div>
                                    <h1 className="lg:text-sm text-white mb-2 text-center lg:text-left text-xl font-bold lg:font-normal">HIGHEST STANDARS</h1>
                                    <p className="text-white lg:text-lg text-center font-normal lg:text-left">From premium quality and elegant designs to meticulous attention to detail in every product, we are committed to delivering the very best to meet your needs and exceed your expectations.</p>
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="lg:flex lg:grid-cols-3 lg:gap-4 lg:ustify-between space-y-12 lg:space-y-0">
                                    <div className="w-full">
                                        <div className="flex flex-col justify-center items-center">
                                            <Box
                                                color="white"
                                                strokeWidth={1.5}
                                                className="mb-2 lg:h-16 lg:w-16 h-24 w-24"
                                            />
                                            <h1 className="text-white lg:text-sm text-base">Full-Service Production</h1>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="flex flex-col justify-center items-center">
                                            <Users
                                                color="white"
                                                strokeWidth={1.5}
                                                className="mb-2 lg:h-16 lg:w-16 h-24 w-24"
                                            />
                                            <h1 className="text-white lg:text-sm text-base">Customer-First Approach</h1>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="flex flex-col justify-center items-center">
                                            <PackageCheck
                                                color="white"
                                                strokeWidth={1.5}
                                                className="mb-2 lg:h-16 lg:w-16 h-24 w-24"
                                            />
                                            <h1 className="text-white lg:text-sm text-base">High Quality Parfume</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}