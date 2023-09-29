import type { FC } from 'react';

type Props = {
    testimonial: Testimonial
}

const FeedbackCard: FC<Props> = ({ testimonial: { company, designation, image, name, testimonial } }) => {

    return (
        <div className='xs:w-[320px] w-full h-full bg-black-200 rounded-3xl p-10'>
            <div className='text-5xl font-black sm:text-7xl'>
                "
            </div>           
            <p className='text-base tracking-wider text-white'>
                {testimonial}
            </p>
            <div className='flex items-center justify-between mt-7'>
                <div className='flex flex-col gap-y-1'>
                    <p className='font-bold'>
                        @{name}
                    </p>
                    <p className='text-secondary'>
                        {designation} of {company}
                    </p>
                </div>
                <img src={image} alt={name} className='object-cover w-12 h-12 border-[3px] border-white rounded-full' />
            </div>      
        </div>     
    );
}

export default FeedbackCard;