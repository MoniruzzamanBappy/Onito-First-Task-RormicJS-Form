import React from 'react';

import { Formik, Form, Field, FieldArray } from 'formik';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
const OpdTable = () => {

    
    return (
        <div>
            <div>
                <Formik
                    initialValues={{
                        date: '',
                        consultant: '',
                        referred_by: '',
                        services: [
                            {
                                name: '',
                                rate: '',
                                quantity: '',
                                remark: '',
                            }
                        ]
                    }}
                    onSubmit={values =>
                        alert(JSON.stringify(values, null, 2))
                    }
                    render={({ values }) => (
                        <Form>
                            <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: "5px" }} >
                                <Typography style={{ fontSize: 24, backgroundColor: 'white', paddingLeft: 30, paddingRight: 30, borderRadius: 5, maxHeight: 30 }} variant="h5" >
                                    SEARCH PATIENT
                                </Typography>
                                <div>
                                    <Typography variant="h6" sx={{ textDecoration: 'underline' }} >
                                        OPD Registration Details
                                    </Typography>
                                    {/* date field  */}
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 5 }}>
                                        <label style={{ width: 100 }} htmlFor="date">Date<span style={{ color: 'red' }}>*</span></label>
                                        <TextField
                                            type='date'
                                            name={`date`}
                                            sx={{ width: 300 }}
                                            hiddenLabel
                                            placeholder='Enter Occupation' size="small"
                                        />
                                    </div>
                                    {/* consultant field */}
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 5 }}>
                                        <label style={{ width: 100 }} htmlFor="consultation">Consultant</label>
                                        <Select
                                            name={`consultant`}
                                            sx={{ width: 400 }}
                                            size="small"
                                            displayEmpty>
                                            <MenuItem defaultValue="dk vatsal" >DK VATSAL</MenuItem>
                                            <MenuItem value='Dr Z S Meharwal'>Dr Z S Meharwal</MenuItem>
                                            <MenuItem value='Dr. Sandeep Vaishya'>Dr. Sandeep VaishyaDK OKAL</MenuItem>
                                            <MenuItem value='Dr IPS Oberoi'>Dr IPS Oberoi</MenuItem>
                                            <MenuItem value='Dr Y K Mishra '>Dr Y K Mishra </MenuItem>
                                        </Select>
                                    </div>
                                    {/* Referred by field */}
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 5 }}>
                                        <label style={{ width: 100 }} htmlFor="referredBy">Referred By</label>
                                        <TextField
                                            type='text'
                                            name={`referred_by`}
                                            sx={{ width: 500 }}
                                            hiddenLabel
                                            placeholder='Enter referred by'
                                            size="small"
                                        />
                                    </div>


                                </div>

                            </div>
                            <div style={{ display: 'flex', justifyContent: 'end', fontWeight: 700, fontSize: 19, width: '75%', margin: 'auto' }}>
                                <p>Grand Total: Rs. 00.00</p>
                            </div>

                            <FieldArray name="services">
                                {({ insert, remove, push }) => (
                                    <div>
                                        <table style={{ width: '75%', margin: 'auto' }}>
                                            <tr style={{ backgroundColor: '#f27650' }}>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Rate(Rs.)</th>
                                                <th>Qty</th>
                                                <th>Unit</th>
                                                <th>Discount</th>
                                                <th>Total</th>
                                                <th>Remark</th>
                                                <th>Add</th>
                                                <th>Remove</th>
                                            </tr>
                                            {values.services && values.services.length > 0 ? (
                                                values.services.map((detail: any, index: any) => (
                                                    <tr key={index}>
                                                        <td> {index + 1}</td>
                                                        <td> <Field style={{ width: 400, backgroundColor: 'transparent', padding: 2, border: '2px solid gray', borderRadius: 5 }} placeholder='Enter Name' name={`name.${index}`} /></td>

                                                        <td>  <Field style={{ width: 100, backgroundColor: 'transparent', padding: 2, border: '2px solid gray', borderRadius: 5 }} placeholder='Enter Rate' name={`rate.${index}`} /></td>
                                                        <td>  <Field style={{ width: 100, backgroundColor: 'transparent', padding: 2, border: '2px solid gray', borderRadius: 5 }} placeholder='Enter Quantity' name={`quantity.${index}`} /> </td>
                                                        <td>   </td>
                                                        <td>   </td>
                                                        <td></td>

                                                        <td>  <Field style={{ width: 100, backgroundColor: 'transparent', padding: 2, border: '2px solid gray', borderRadius: 5 }} placeholder='Enter Remark' name={`remark.${index}`} /></td>


                                                        <td>
                                                            <button
                                                                type="button"
                                                                className="secondary"
                                                                onClick={() => push({ name: '', rate: '', quantity: '', remark: '' })}
                                                            >
                                                                <img width={30} src="https://i.ibb.co/9sddPZN/icons8-add-48.png" alt="" />
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button
                                                                type="button"
                                                                className="secondary"
                                                                onClick={() => remove(index)}
                                                            >
                                                                 <img width={30} src="https://i.ibb.co/wcVqJ49/icons8-remove-48.png" alt="" />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (

                                                <button
                                                    type="button"
                                                    className="secondary"
                                                    onClick={() => push({ name: '', rate: '', quantity: '', remark: '' })}
                                                >
                                                    <img width={30} src="https://i.ibb.co/9sddPZN/icons8-add-48.png" alt="" />
                                                </button>
                                            )}

                                            <div>
                                                <button style={{ marginTop: 12 }} type="submit">Submit</button>
                                            </div>

                                        </table>
                                    </div>

                                )}

                            </FieldArray>

                        </Form>
                    )}
                />
            </div>
        </div>
    );
};

export default OpdTable;