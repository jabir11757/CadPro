import { TextField } from '@mui/material';
import React from 'react';

const ImportPins = () => {
    return (
        <div>
            <div>
                <div className="card w-96 text-neutral-content shadow-2xl">
                    <div className="card-body items-center text-center">
                        <div className="card-actions justify-end">
                            <TextField style={{ textColor: 'marron' }} id="standard-basic" label="Standard" variant="standard" />
                            <button className="btn btn-ghost bg-ghost">Deny</button>
                            <button className="btn btn-active btn-ghost">Button</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImportPins;