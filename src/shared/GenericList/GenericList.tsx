import React from 'react';

interface IItem {
    value: string;
    id: string;
}

interface IMyListProps {
    list: IItem[]
}

export function MyList({list}: IMyListProps) {
    return (
        <ul>
            {list.map((item:IItem,index: number)=>(
                <li key={item.id}>{item.value} ({item.id})</li>
            ))}
        </ul>
    )
};
