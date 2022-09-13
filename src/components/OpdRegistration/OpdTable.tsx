import React from 'react';
import * as Yup from "yup";
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import Typography from '@mui/material/Typography';
const OpdTable = () => {

    interface Values {
        date: string;
        consultant: string;
        referred_by: string;
        services: [
            {
                name: string;
                quantity: number;
                rate: number;
                remark: string;
            }
        ]
    }

    const fieldSchema = Yup.object().shape({
        date: Yup.string().required("Date is Required"),
        consultant: Yup.string().required("Consultant Name is Required"),
        services: Yup.array().of(
            Yup.object().shape({
                name: Yup.string().required("Name is Required"),
                quantity: Yup.number()
                .min(1, "Quantity must be greater than 0")
                .max(100, "Quantity must be less than 100")
                .required("Quantity is Required"),
                rate: Yup.number()
                .min(1, "Rate must be greater than 0")
                .max(100, "Rate must be less than 100")
                .required("Rate is Required"),
            })
        )

    });

    const initialValues: Values = {
        date: '',
        consultant: '',
        referred_by: '',
        services: [
            {
                name: '',
                rate: 0,
                quantity: 0,
                remark: '',
            }
        ]
    }
    return (
        <div>
            <div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={fieldSchema}
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
                                        <Field
                                            type='date'
                                            name={`date`}
                                            sx={{ width: 300 }}
                                            placeholder='Enter Occupation' size="small"
                                        />
                                    </div>
                                    <span style={{ color: 'red' }}><ErrorMessage name={`date`} /></span>
                                    {/* consultant field */}
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 5 }}>
                                        <label style={{ width: 100 }} htmlFor="consultation">Consultant</label>
                                        <Field
                                            name={`consultant`}
                                            sx={{ width: 400 }}
                                            size="small"
                                            as="select">
                                            <option  >Select Consultant</option>
                                            <option defaultValue="dk vatsal" >DK VATSAL</option>
                                            <option value='Dr Z S Meharwal'>Dr Z S Meharwal</option>
                                            <option value='Dr. Sandeep Vaishya'>Dr. Sandeep VaishyaDK OKAL</option>
                                        </Field>
                                    </div>
                                    <span style={{ color: 'red' }}><ErrorMessage name={`consultant`} /></span>
                                    {/* Referred by field */}
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 5 }}>
                                        <label style={{ width: 100 }} htmlFor="referredBy">Referred By</label>
                                        <Field
                                            type='text'
                                            name={`referred_by`}
                                            sx={{ width: 500 }}
                                            placeholder='Enter referred by'
                                            size="small"
                                        />
                                    </div>
                                    <span style={{ color: 'red' }}><ErrorMessage name={`referred_by`} /></span>


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
                                                        <td> <Field style={{ width: 400, backgroundColor: 'transparent', padding: 2, border: '2px solid gray', borderRadius: 5 }} placeholder='Enter Name' name={`services.${index}.name`} />
                                                        <span style={{ color: 'red' }}><ErrorMessage name={`services.${index}.name`} /></span>
                                                        </td>

                                                        <td>  <Field style={{ width: 100, backgroundColor: 'transparent', padding: 2, border: '2px solid gray', borderRadius: 5 }} placeholder='Enter Rate' type='number' name={`services.${index}.rate`} />
                                                        <span style={{ color: 'red' }}><ErrorMessage name={`services.${index}.rate`} /></span>
                                                            
                                                        </td>
                                                        <td>  <Field style={{ width: 100, backgroundColor: 'transparent', padding: 2, border: '2px solid gray', borderRadius: 5 }} placeholder='Enter Quantity' type='number' name={`services.${index}.quantity`} />

                                                        <span style={{ color: 'red' }}><ErrorMessage name={`services.${index}.quantity`} /></span></td>
                                                        <td>   </td>
                                                        <td>   </td>
                                                        <td></td>

                                                        <td>  <Field style={{ width: 100, backgroundColor: 'transparent', padding: 2, border: '2px solid gray', borderRadius: 5 }} placeholder='Enter Remark' name={`services.${index}.remark`} /></td>


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