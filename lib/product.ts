export interface Product {
    id: number;
    name: string;
    desc: string;
    price: number;
    image: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Midnight Temptation",
        desc: "A bold and captivating fragrance that blends warm spices with deep woody undertones to create an irresistible allure. Perfect for evening occasions, it leaves a lingering trail of mystery and confidence wherever you go.",
        price: 169000,
        image: "/img/MidnightTemptation.webp"
    },
    {
        id: 2,
        name: "Midnight Elegance",
        desc: "This sophisticated scent combines soft florals with subtle musk, capturing the essence of timeless grace and refined beauty. Designed for those who carry themselves with confidence, it makes every moment feel effortlessly elegant.",
        price: 140000,
        image: "/img/MidnightElegance.webp"
    },
    {
        id: 3,
        name: "Midnight Citrus",
        desc: "A refreshing burst of zesty citrus notes balanced with a smooth, clean base for a lively yet refined character. Ideal for daily wear, it energizes your spirit and keeps you feeling fresh all day long.",
        price: 140000,
        image: "/img/MidnightCitrus.webp"
    },
    {
        id: 4,
        name: "Midnight Sin",
        desc: "An intoxicating blend of smoky, oriental, and sweet accords that creates an aura of mystery and seduction. Crafted for bold souls, this fragrance turns every night into an unforgettable adventure.",
        price: 140000,
        image: "/img/MidnightSin.webp"
    },
    {
        id: 5,
        name: "Midnight Fantasy",
        desc: "A dreamy combination of fruity-floral notes with soft vanilla and musk that enchants the senses with its romantic charm. Perfect for those who dare to dream, it wraps you in a sweet and lasting embrace.",
        price: 140000,
        image: "/img/MidnightFantasy.webp"
    },
];
