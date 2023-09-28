import type { FC } from 'react';
import { VerticalTimelineElement, VerticalTimeline } from 'react-vertical-timeline-component';
import PointListItem from './PointListItem';

interface Props{
    experience: Experience;
}

const ExperienceCard: FC<Props> = ({ experience: { company_name, date, icon, iconBg, points, title } }) => {

    return (
        <VerticalTimelineElement 
            contentStyle={{
                background: '#1d1836', color:'#fff' 
            }}
            contentArrowStyle={{
                borderRight: '7px solid #232631'
            }}
            dateClassName='w-full text-center mt-4 sm:mt-8 sm:text-right'
            date={date}
            iconStyle={{
                background: iconBg
            }}
            icon={
                <div className='flex items-center justify-center w-full h-full'>
                    <img src={icon} alt={company_name} className='w-[80%] h-[80%] object-contain'/>
                </div>
            }
        >
            <div className='flex flex-col'>
                <h3 className='text-white text-[25px] font-semibold'>
                    {title}
                </h3>
                <p>
                    {company_name}
                </p>
                <ul className='mt-5 ml-5 space-y-2 list-disc'>
                    {
                        points.map((point) => (
                            <PointListItem key={point} point={point}/>
                        ))
                    }
                </ul>
            </div>
        </VerticalTimelineElement>
    );
};

export default ExperienceCard;