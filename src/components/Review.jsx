import React from 'react'

const Review = ({ reviews, rating }) => {
    return (
        <section className="bg-white py-8 antialiased  md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="flex items-center gap-2">
                    <h2 className="text-3xl font-semibold text-gray-800 ">Reviews</h2>
                    <div className="mt-2 flex items-center gap-2 sm:mt-0">
                        <div className="flex items-center gap-0.5">
                            {
                                Array.from({ length: rating }, (_, index) => (
                                    <svg className="h-4 w-4 text-yellow-400" key={index} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                ))
                            }
                        </div>
                        <p className="text-sm font-medium leading-none text-gray-500 ">({rating})</p>
                        <a href="#" className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline"> {reviews?.length} Reviews </a>
                    </div>
                </div>

                <div className="my-6 gap-8 sm:flex sm:items-start md:my-8">
                    <div className="shrink-0 space-y-4">
                        <p className="text-2xl font-semibold leading-none text-gray-900">{rating} out of 5</p>
                        <button type="button" data-modal-target="review-modal" data-modal-toggle="review-modal" className="mb-2 me-2 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 ">Write a review</button>
                    </div>
                </div>

                <div className="mt-6 divide-y divide-gray-200 ">
                    {
                        reviews.length && reviews.map((review, index) => (
                            <div className="gap-3 pb-6 sm:flex sm:items-start" key={index}>
                                <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
                                    <div className="flex items-center gap-0.5">
                                        {
                                            Array.from({ length: review.rating }, (_, index) => (
                                                <svg className="h-4 w-4 text-yellow-400" key={index} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                                </svg>
                                            ))
                                        }
                                    </div>

                                    <div className="space-y-0.5">
                                        <p className="text-base font-semibold text-gray-900">{review.reviewerName}</p>
                                        <p className="text-sm font-normal text-gray-500 ">{review?.date}</p>
                                    </div>
                                </div>
                                <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
                                    <p className="text-base font-normal text-gray-500 ">{review.comment}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Review