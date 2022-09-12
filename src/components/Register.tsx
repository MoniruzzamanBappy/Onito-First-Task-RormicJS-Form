import { useFormik } from 'formik';
import * as Yup from "yup";
import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";

import Button from '@mui/material/Button';

const Register = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    };
    const SignUpSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Firstname is required"),

        lastName: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Lastname is required"),

        phoneNumber: Yup.string()
            .required("Phone number is required")
            .matches(
                /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
                "Invalid phone number"
            ),

        email: Yup.string().email().required("Email is required"),

        password: Yup.string()
            .required("Password is required")
            .min(6, "Password is too short - should be 6 chars minimum"),
    });

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: SignUpSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1 },
                }}
                noValidate
                autoComplete="off"
            >
                <p>Personal Details</p>
                <Grid container spacing={2} >
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Enter Name"
                            placeholder="Enter Name"
                        />
                    </Grid>
                    <Grid item xs={4}>

                        <TextField
                            required
                            id="outlined-required"
                            label="Date Of Birth or Age"
                            placeholder="Enter Date Of Birth or Age"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Sex"
                            placeholder="Enter Sex"
                        />
                    </Grid>

                </Grid>
                <Grid container spacing={2} >
                    <Grid item xs={4}>
                        <TextField

                            label="Mobile Number"
                            placeholder="Enter Mobile Number"
                        />

                    </Grid>
                    <Grid item xs={8}>

                        <FormControl sx={{ m: 1, minWidth: 220 }}>
                            <InputLabel id="demo-simple-select-helper-label">ID Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                label="ID Type"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={16}>National ID</MenuItem>
                                <MenuItem value={20}>Birth Certificate</MenuItem>
                                <MenuItem value={30}>Other</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField

                            label="ID Number"
                            placeholder="Enter ID Number"
                        />

                    </Grid>

                </Grid>
                <p>Contact Details</p>
                <Grid container spacing={2} >
                    <Grid item xs={4}>
                        <FormControl sx={{ m: 1, minWidth: 220 }}>
                            <InputLabel id="demo-simple-select-helper-label">Guardian Detail</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                label="ID Type"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={16}>Father</MenuItem>
                                <MenuItem value={20}>Mother</MenuItem>
                                <MenuItem value={30}>Other</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField

                            label="Guardian Name"
                            placeholder="Enter Guardian Name"
                        />
                    </Grid>
                    <Grid item xs={4}>

                        <TextField
                            label="Email"
                            placeholder="Enter your Email"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="Contact Number"
                            placeholder="Enter contact number"
                        />
                    </Grid>
                </Grid>
                <p>Address Details</p>
                <Grid container spacing={2} >
                    <Grid item xs={4}>

                        <TextField
                            label="Address"
                            placeholder="Enter your address"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl sx={{ m: 1, minWidth: 220 }}>
                            <InputLabel id="demo-simple-select-helper-label">State</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                label="ID Type"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem>Andhra Pradesh</MenuItem>
                                <MenuItem>Arunachal Pradesh</MenuItem>
                                <MenuItem>Assam</MenuItem>
                                <MenuItem>Bihar</MenuItem>
                                <MenuItem>Chhattisgarh</MenuItem>
                                <MenuItem>Goa</MenuItem>
                                <MenuItem>Gujarat</MenuItem>
                                <MenuItem>Haryana</MenuItem>
                                <MenuItem>Punjab</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl sx={{ m: 1, minWidth: 220 }}>
                            <InputLabel id="demo-simple-select-helper-label">City</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                label="ID Type"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem>Andhra Pradesh</MenuItem>
                                <MenuItem>Arunachal Pradesh</MenuItem>
                                <MenuItem>Assam</MenuItem>
                                <MenuItem>Bihar</MenuItem>
                                <MenuItem>Chhattisgarh</MenuItem>
                                <MenuItem>Goa</MenuItem>
                                <MenuItem>Gujarat</MenuItem>
                                <MenuItem>Haryana</MenuItem>
                                <MenuItem>Punjab</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="Country Name"
                            placeholder="Enter country name"
                        />
                    </Grid>
                </Grid>
                <p>Other Details</p>
                <Grid container spacing={2} >
                    <Grid item xs={3}>
                        <TextField

                            label="Occupation"
                            placeholder="Enter Occupation"
                        />

                    </Grid>
                    <Grid item xs={3}>
                        <FormControl sx={{ m: 1, minWidth: 220 }}>
                            <InputLabel id="demo-simple-select-helper-label">Religion</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                label="ID Type"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem>Islam</MenuItem>
                                <MenuItem>Hindu</MenuItem>
                                <MenuItem>Kristin</MenuItem>
                                <MenuItem>Buddha</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl sx={{ m: 1, minWidth: 220 }}>
                            <InputLabel id="demo-simple-select-helper-label">Marital Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                label="ID Type"
                            >
                                <MenuItem>Married</MenuItem>
                                <MenuItem>Unmarried</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl sx={{ m: 1, minWidth: 220 }}>
                            <InputLabel id="demo-simple-select-helper-label">Blood Group</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                label="ID Type"
                            >
                                <MenuItem>A+</MenuItem>
                                <MenuItem>A-</MenuItem>
                                <MenuItem>B+</MenuItem>
                                <MenuItem>B-</MenuItem>
                                <MenuItem>O+</MenuItem>
                                <MenuItem>O-</MenuItem>
                                <MenuItem>AB+</MenuItem>
                                <MenuItem>AB-</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            label="Nationality"
                            placeholder="Enter nationality"
                        />
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained">Submit</Button>
            </Box>
        </form>
    );
};

export default Register;