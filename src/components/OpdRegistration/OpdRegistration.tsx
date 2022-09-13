import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const OpdRegistration = () => {
    return (
        <div style={{ backgroundColor: '#e3e1dc' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: "5px" }} >
                <Typography style={{ fontSize: 24, backgroundColor: 'white', paddingLeft: 30, paddingRight: 30, borderRadius: 5 , maxHeight: 30}} variant="h5" >
                    SEARCH PATIENT
                </Typography>
                <form action="">
                    <Typography variant="h6" sx={{ textDecoration: 'underline' }} >
                        OPD Registration Details
                    </Typography>
                    {/* date field  */}
                    <div style={{ display: 'flex',justifyContent: 'space-between', alignItems: 'center' }}>
                        <label htmlFor="date">Date<span style={{ color: 'red' }}>*</span></label>
                        <TextField
                            type='date'
                            name='date' sx={{ width: 300 }}
                            hiddenLabel
                            placeholder='Enter Occupation' size="small"
                        />
                    </div>
                    {/* consultant field */}
                    <div style={{ display: 'flex',justifyContent: 'space-between', alignItems: 'center' }}>
                        <label htmlFor="consultant">Consultant<span style={{ color: 'red' }}>*</span></label>
                        <TextField
                            type='text'
                            name='consultant' sx={{ width: 300}}
                            hiddenLabel
                            placeholder='Enter Occupation' size="small"
                        />
                    </div>
                    {/* Referred by field */}
                    <div style={{ display: 'flex',justifyContent: 'space-between', alignItems: 'center' }}>
                        <label htmlFor="referredBy">Referred By<span style={{ color: 'red' }}>*</span></label>
                        <TextField
                            type='text'
                            name='referredBy' sx={{ width: 300 }}
                            hiddenLabel
                            placeholder='Enter referred by' 
                            size="small"
                        />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default OpdRegistration;