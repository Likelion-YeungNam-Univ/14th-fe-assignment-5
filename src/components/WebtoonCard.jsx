import React from 'react'

const WebtoonCard = ({ image, title, author }) => {
    return (
        <div className='w-full'>
            <img
                src={image}
                alt={title}
                className='h-[500px] w-full rounded-md object-cover'
            />

            <h3 className='mt-3 text-lg font-bold text-black'>
                <span className='mr-1 rounded border border-red-400 px-1 text-sm text-red-500'>
                    UP
                </span>
                {title}
            </h3>

            <p className='mt-1 text-base text-black'>{author}</p>
        </div>
    )
}

export default WebtoonCard