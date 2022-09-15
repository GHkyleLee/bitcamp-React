import React from 'react';

const MemberRowItem = ({row, i, onDelete}) => {
    return (
        <tr>
            <td>{i+1}</td>
            <td>{row.name}</td>
            <td>{row.id}</td>
            <td>{row.hp}</td>
            <td>{row.email}</td>
            <td>
                <button type='button' className='btn btn-danger btn-sm' onClick={() => {
                    onDelete(row.num)
                }}>회원삭제</button>
            </td>
        </tr>
    );
};

export default MemberRowItem;