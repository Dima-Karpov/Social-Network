import React, { ChangeEvent, useState } from "react";


type ProfileStatuWithHooksPropsType = {
    status: string
    updateStatus: (status: string) => void
};

export const ProfileStatuWithHooks: React.FC<ProfileStatuWithHooksPropsType> = props => {
    const {
        status,
        updateStatus
    } = props;

    const [editMode, setEditMode] = useState(false)

    return (

        <div>

            {!editMode &&
                <div>
                    <span >
                        {status || '1234____1234'} 
                    </span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true}  />
                </div>
            }
        </div>
    )

};