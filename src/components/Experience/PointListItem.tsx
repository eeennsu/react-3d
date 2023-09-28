import type { FC } from 'react';

type Props = {
    point: string;
}

const PointListItem: FC<Props> = ({ point }) => {

    return (
        <li className='text-white-100 pl-1 tracking-wider text-[16px]'>
            {point}
        </li>
    );
};

export default PointListItem;