import { StarIcon } from '@heroicons/react/20/solid'

const reviews = [
    {
        id: 1,
        rating: 5,
        content: `
     Velure has completely changed how I view perfumes! Its luxurious and long-lasting scent keeps me feeling confident all day.
    `,
        author: 'Mark Edwards',
        avatarSrc:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 2,
        rating: 4,
        content: `
     I absolutely love Velure's unique fragrance. It's not just a scent but an elegant and classy statement. So many friends ask me what perfume I'm wearing!
    `,
        author: 'Blake Reid',
        avatarSrc:
            'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
    },
    {
        id: 3,
        rating: 5,
        content: `
      Velure is the perfect choice for those seeking a captivating and exclusive aroma. I' incredibly satisfied with the quality and will definitely purchase it again.
    `,
        author: 'Ben Russel',
        avatarSrc:
            'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function ReviewSection() {
    return (
        <div className="lg:max-w-7xl lg:mx-auto mx-4 mb-20">
            <div>
                <h2 id="reviews-heading" className="sr-only text-black">
                    Reviews
                </h2>

                <div className='flex flex-col justify-center items-center lg:mb-12 mb-6'>
                    <h1 className='font-cormorant lg:text-5xl text-4xl font-bold mb-4 text-[#BB7D32]'>What They Love In Our Products</h1>
                    <p className='lg:w-1/3 lg:text-center lg:text-sm text-gray-500'>we are committed to delivering the very best to meet your needs and exceed your expectations.</p>
                </div>

                <div className="lg:grid lg:grid-cols-3 lg:gap-6 space-y-4 lg:space-y-0">
                    {reviews.map((review) => (
                        <div key={review.id} className="flex flex-col sm:flex-row border border-gray-200 rounded-lg p-8">
                            <div className="order-2 mt-6 sm:mt-0 sm:ml-12">
                                <p className="sr-only">{review.rating} out of 5 stars</p>

                                <div
                                    dangerouslySetInnerHTML={{ __html: review.content }}
                                    className="space-y-6 text-sm text-gray-600"
                                />
                            </div>

                            <div className="order-1 flex items-center sm:flex-col sm:items-start">
                                <img alt={`${review.author}.`} src={review.avatarSrc} className="size-12 rounded-full" />

                                <div className="ml-4 sm:mt-4 sm:ml-0">
                                    <p className="text-sm font-medium text-gray-900">{review.author}</p>
                                    <div className="mt-2 flex items-center">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                aria-hidden="true"
                                                className={classNames(
                                                    review.rating > rating ? 'text-yellow-500' : 'text-gray-200',
                                                    'size-5 shrink-0',
                                                )}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
