import { JSX, SVGProps } from "react"
import Image from "next/image"

import logo from "@/public/svg/logo.svg"
import Link from "next/link"

import mastercard from "@/public/svg/mastercard.svg"
import visa from "@/public/svg/visa.svg"
import qris from "@/public/svg/QRIS_logo.svg"
import bca from "@/public/svg/bca.svg"

const navigation = {
    solutions: [
        { name: 'Marketplace', href: 'https://linktr.ee/velureperfume' },
        { name: 'WhatsApp', href: 'https://wa.me/6282184267456' },
        { name: 'Instagram', href: 'https://www.instagram.com/velureperfume' },
    ],
    company: [
        { name: 'Home', href: '/' },
        { name: 'Features', href: '#features' },
        { name: 'Parfume', href: '#product' },
        { name: 'Testimonial', href: '#testimonial' },
    ],
    social: [
        {
            name: 'Shopee',
            href: 'https://shopee.co.id/kayakoe',
            icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100" height="100" viewBox="0 0 50 50" {...props}>
                    <path d="M 25 1 C 19.672869 1 15.604123 5.9531422 15.166016 12 L 5.0585938 12 C 3.9235937 12 2.999376 12.980995 3.0625 14.113281 L 4.7871094 44.285156 C 4.9365844 46.922145 7.1369035 49 9.7773438 49 L 40.222656 49 C 42.863851 49 45.063433 46.921831 45.212891 44.285156 L 46.9375 14.115234 C 47.002643 12.982141 46.076406 12 44.941406 12 L 34.833984 12 C 34.395877 5.9531422 30.327131 1 25 1 z M 25 3 C 29.036936 3 32.408924 6.8867916 32.835938 12 L 17.164062 12 C 17.591075 6.8867916 20.963064 3 25 3 z M 25.080078 18 C 28.920078 18 31.799062 20.060938 32.039062 20.210938 L 31.009766 21.880859 C 30.759766 21.710859 30.310625 21.439844 30.140625 21.339844 C 29.120625 20.789844 27.240078 19.970703 25.080078 19.970703 C 21.830078 19.970703 19.480469 21.77 19.480469 24.25 C 19.480469 26.72 21.660234 27.699766 25.240234 29.009766 C 28.870234 30.329766 32.970703 31.829609 32.970703 36.599609 C 32.970703 40.189609 29.430156 43.009766 24.910156 43.009766 C 20.920156 43.009766 17.640078 40.560156 16.830078 39.910156 L 17.939453 38.259766 C 17.969453 38.289766 21.160156 41.029297 24.910156 41.029297 C 28.270156 41.029297 31 39.039609 31 36.599609 C 31 33.439609 28.570547 32.319375 24.560547 30.859375 C 21.260547 29.649375 17.509766 28.28 17.509766 24.25 C 17.509766 20.69 20.760078 18 25.080078 18 z"></path>
                </svg>
            ),
        },
        {
            name: 'Tokopedia',
            href: 'https://tokopedia.link/n41oZe9hXVb',
            icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="currentColor" {...props}>
                    <path d="M35.3212 10.4031C34.7873 5.11562 30.3823 1 25.0238 1C19.6749 1 15.2699 5.07813 14.6597 10.3375L17.4343 10.5531C17.9301 6.75625 21.1146 3.82188 25.0048 3.82188C28.8949 3.82188 32.1176 6.80312 32.5276 10.6469L35.3212 10.4031ZM44.3124 9.79375C41.2613 9.79375 38.2198 9.63438 35.1782 9.89688L32.4036 10.1406C29.9342 10.3563 27.2263 10.975 25.0048 12.1C22.6402 10.8906 20.2184 10.2438 17.5773 10.0375L14.8027 9.82188C11.7516 9.57813 8.71964 9.78437 5.66856 9.78437H4V49H32.0699C39.7358 49 46 42.6531 46 34.8906V9.79375H44.3124ZM7.76617 26.3125C7.76617 21.7563 11.4179 18.0531 15.9183 18.0531C20.4186 18.0531 24.0704 21.7469 24.0704 26.3125C24.0704 30.8688 20.4186 34.5719 15.9183 34.5719C11.4084 34.5719 7.76617 30.8688 7.76617 26.3125ZM24.9857 39.1375C23.7748 37.8344 22.5639 36.5406 21.353 35.2469C22.1158 33.9156 23.5555 33.25 24.9857 33.2594C26.4159 33.2594 27.8556 33.9156 28.6184 35.2469C27.4075 36.5406 26.1966 37.8344 24.9857 39.1375ZM34.0531 34.5719C29.5528 34.5719 25.901 30.8781 25.901 26.3125C25.901 21.7563 29.5528 18.0531 34.0531 18.0531C38.5535 18.0531 42.2052 21.7469 42.2052 26.3125C42.2052 30.8688 38.5535 34.5719 34.0531 34.5719ZM16.9385 21.1844C19.8465 21.1844 22.2016 23.575 22.2016 26.5094C22.2016 29.4531 19.8465 31.8437 16.9385 31.8437C14.0304 31.8437 11.6754 29.4531 11.6754 26.5094C11.6754 25.525 11.9423 24.6063 12.4 23.8188C12.7719 24.7563 13.6872 25.4219 14.7551 25.4219C16.1566 25.4219 17.2913 24.2781 17.2913 22.8531C17.2913 22.2156 17.0624 21.6344 16.681 21.1844H16.9385ZM33.0329 21.1844C35.941 21.1844 38.296 23.575 38.296 26.5094C38.296 29.4531 35.941 31.8437 33.0329 31.8437C30.1249 31.8437 27.7698 29.4531 27.7698 26.5094C27.7698 25.525 28.0272 24.6063 28.4849 23.8188C28.8663 24.7563 29.7721 25.4219 30.84 25.4219C32.2415 25.4219 33.3762 24.2781 33.3762 22.8531C33.3762 22.2156 33.1473 21.6344 32.7659 21.1844H33.0329Z" />
                </svg>
            ),
        },
        {
            name: 'WhatsApp',
            href: 'https://wa.me/6282184267456',
            icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="currentColor" {...props}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M37.0152 33.3604C36.497 34.8271 34.4373 36.0405 32.7947 36.3953C31.6703 36.6341 30.2039 36.8229 25.2632 34.7755C19.7141 32.4765 12.0085 24.2871 12.0085 18.8374C12.0085 16.063 13.6081 12.8325 16.4053 12.8325C17.7512 12.8325 18.0479 12.8587 18.4908 13.9211C19.0089 15.1728 20.2731 18.2567 20.4236 18.5728C21.045 19.8696 19.7915 20.6288 18.882 21.7579C18.5918 22.0977 18.2629 22.4652 18.6305 23.0975C18.996 23.7169 20.2602 25.7772 22.1178 27.4311C24.5172 29.5688 26.4629 30.2513 27.1596 30.5416C27.6777 30.7567 28.2969 30.7066 28.6753 30.3023C29.1548 29.784 29.7503 28.924 30.3566 28.0767C30.7844 27.4702 31.3284 27.3945 31.8982 27.6095C32.283 27.7429 37.1742 30.0144 37.3806 30.3779C37.5333 30.6424 37.5333 31.8936 37.0152 33.3604ZM24.5043 3H24.4935C12.6406 3 3 12.6435 3 24.5C3 29.2013 4.51577 33.563 7.09362 37.1008L4.41471 45.0898L12.6772 42.4496C16.0763 44.6992 20.1333 46 24.5043 46C36.3572 46 46 36.3565 46 24.5C46 12.6435 36.3572 3 24.5043 3Z" />
                </svg>
            ),
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/velureperfume',
            icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" x="0px" y="0px" width="100" height="100" viewBox="0 0 28 28" {...props}>
                    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                </svg>
            ),
        },
    ]
}

export default function FooterSection() {
    return (
        <footer className="bg-white">
            <div className="lg:mx-auto lg:max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-20">
                <div className="lg:flex">
                    <div className="lg:w-2/5">
                        <div className="space-y-8">
                            <Link href={"/"}>
                                <Image
                                    alt=""
                                    src={logo}
                                    className="h-8 w-auto block lg:mb-8 mb-6"
                                />
                            </Link>
                            <p className="text-sm/6 text-balance text-gray-600">
                                Elegant and alluring, our perfume captivates with its blend of unique notes, leaving a lasting impression.
                            </p>
                            <div className="flex gap-x-6 items-center">
                                {navigation.social.map((item) => (
                                    <a key={item.name} href={item.href} className="text-gray-600 hover:text-gray-800">
                                        <span className="sr-only">{item.name}</span>
                                        <item.icon aria-hidden="true" className="lg:h-7 lg:w-7 h-9 w-9" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-3/5">
                        <div className="lg:grid lg:grid-cols-3 mt-10 lg:mt-0 grid grid-cols-2">
                            <div className="">
                                <h3 className="text-sm/6 font-semibold text-gray-900">Solutions</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm/6 text-gray-600 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="">
                                <h3 className="text-sm/6 font-semibold text-gray-900">Company</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm/6 text-gray-600 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-span-2 lg:col-span-1 mt-6 lg:mt-0">
                                <h3 className="text-sm/6 font-semibold text-gray-900">We Accept</h3>
                                <div className="flex gap-x-1 items-center mt-6">
                                    <Image
                                        src={visa}
                                        alt=""
                                        className="w-12"
                                    />
                                    <Image
                                        src={mastercard}
                                        alt=""
                                        className="w-12"
                                    />
                                    <Image
                                        src={qris}
                                        alt=""
                                        className="w-12"
                                    />
                                    <Image
                                        src={bca}
                                        alt=""
                                        className="w-12"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-10">
                    <p className="text-sm/6 text-gray-600">&copy;{new Date().getFullYear()} Velure Parfume. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
