import type { FC } from 'react';
import { BallCanvas } from '../../features/canvas';

type Props = {
    tech: Technology
}

const TechBallListItem: FC<Props> = ({ tech }) => {

    return (
        <div className='w-28 h-28'>
            <BallCanvas tech={tech} />
        </div>
    );
};

export default TechBallListItem;