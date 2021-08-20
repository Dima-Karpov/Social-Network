import React, { ChangeEvent, useEffect, useState } from "react";


type ProfileStatuWithHooksPropsType = {
    status: string
    updateStatus: (status: string) => void
};

export const ProfileStatuWithHooks: React.FC<ProfileStatuWithHooksPropsType> = props => {
    const {
        status,
        updateStatus
    } = props;

    const [editMode, setEditMode] = useState(false);
    const [newStatus, setStatus] = useState(status);

    useEffect (() => {
        setStatus(status)
    }, [status]);

    const activeteEditMode = () => {
        setEditMode(true);
    };
    const deActiveteEditMode = () => {
        setEditMode(false);
        updateStatus(newStatus);
    };
    const onStatusChange = (e: any) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div>
            {!editMode &&
                <div>
                    <span style={{color: 'white'}} onDoubleClick={activeteEditMode} >
                        {status || '1234____1234'}
                    </span>
                </div>
            }
            {editMode &&
                <div>
                    <input 
                    onChange={onStatusChange}
                    autoFocus={true} 
                    onBlur={deActiveteEditMode} 
                    value={newStatus} 
                    />
                </div>
            }
        </div>
    )
};