import type { FC } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

type Props = {
    index: number;
    project: Project
}

const ProjectCard: FC<Props> = ({ index, project: { description, image, name, source_code_link, tags } }) => {

    return (
        <motion.div variants={fadeIn('right', 'spring', index * 0.5, 0.75)}>
            test
        </motion.div>
    );
};

export default ProjectCard;