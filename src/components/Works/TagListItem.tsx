import type { FC } from 'react';

type Props = {
    tag: Tag
}

const TagListItem: FC<Props> = ({ tag: { name, color } }) => {

    return (
        <div className={`${color} text-sm italic`}>
            #{name}  
        </div>
    );
};

export default TagListItem;