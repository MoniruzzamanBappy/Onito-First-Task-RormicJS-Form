import { useFormik } from 'formik';
import * as Yup from "yup";
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";

import Button from '@mui/material/Button';

const Register = () => {
    const initialValues = {
        name: "",
        age: "",
        sex: "",
        number: "",
        idType: "",
        idNumber: "",
        guardianType: "",
        guardianName: "",
        email: "",
        guardianNumber: "",
        address: "",
        state: "",
        city: "",
        countryName: "",
        occupation: "",
        religion: "",
        maritalStatus: "",
        bloodGroup: "",
        nationality: "",
    };
    const SignUpSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("name is required"),

        age: Yup.number()
            .min(0, "Too Short!")
            .max(150, "Too Long!")
            .required("age is required"),
        sex: Yup.string()
            .min(3, "Too Short!")
            .max(10, "Too Long!")
            .required("sex is required"),

        number: Yup.string()
            .required("Phone number is required")
            .matches(
                /^(?:(?:\+|00)88|01)?\d{11}$|^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/g,
                "Invalid phone number"
            ),

        email: Yup.string().email().required("Email is required"),

        guardianName: Yup.string()
            .min(3, "Too Short!")
            .max(50, "Too Long!")
            .required("Guardian name is required"),

            guardianType: Yup.string().when("guardianName", {
                is: (val: string) => val.length > 0,
                then: Yup.string().required("Guardian type is required"),
            }),


    });

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: SignUpSchema,
        onSubmit: (values, actions) => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
        },
    });

    return (
        <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            autoComplete="off"
        >
            <p>Personal Details</p>
            <Grid container spacing={2} >
                <Grid item xs={4}>
                    <TextField
                        required
                        id="name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                        label="Enter Name"
                        placeholder="Enter Name"
                    />
                </Grid>
                <Grid item xs={4}>

                    <TextField
                        required
                        id="age"
                        name="age"
                        type="number"
                        value={formik.values.age}
                        onChange={formik.handleChange}
                        error={formik.touched.age && Boolean(formik.errors.age)}
                        helperText={formik.touched.age && formik.errors.age}
                        label="Date Of Birth or Age"
                        placeholder="Enter Date Of Birth or Age"
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        required
                        id="sex"
                        name="sex"
                        value={formik.values.sex}
                        onChange={formik.handleChange}
                        error={formik.touched.sex && Boolean(formik.errors.sex)}
                        helperText={formik.touched.sex && formik.errors.sex}
                        label="Sex"
                        placeholder="Enter Sex"
                    />
                </Grid>

            </Grid>
            <Grid container spacing={2} >
                <Grid item xs={4}>
                    <TextField
                        id="number"
                        name="number"
                        value={formik.values.number}
                        onChange={formik.handleChange}
                        error={formik.touched.number && Boolean(formik.errors.number)}
                        helperText={formik.touched.number && formik.errors.number}
                        label="Mobile Number"
                        placeholder="Enter Mobile Number"
                    />

                </Grid>
                <Grid item xs={8}>

                    <FormControl sx={{ m: 1, minWidth: 220 }}>
                        <InputLabel id="demo-simple-select-helper-label">ID Type</InputLabel>
                        <Select
                            id="idType"
                            name="idType"
                            value={formik.values.idType}
                            onChange={formik.handleChange}
                            error={formik.touched.idType && Boolean(formik.errors.idType)}
                            label="ID Type"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"National ID"}>National ID</MenuItem>
                            <MenuItem value={"Birth Certificate"}>Birth Certificate</MenuItem>
                            <MenuItem value={"Other"}>Other</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        id="idNumber"
                        name="idNumber"
                        value={formik.values.idNumber}
                        onChange={formik.handleChange}
                        error={formik.touched.idNumber && Boolean(formik.errors.idNumber)}
                        helperText={formik.touched.idNumber && formik.errors.idNumber}
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
                            id="guardianType"
                            name="guardianType"
                            value={formik.values.guardianType}
                            onChange={formik.handleChange}
                            error={formik.touched.guardianType && Boolean(formik.errors.guardianType)}
                            label="Guardian Type"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Father"}>Father</MenuItem>
                            <MenuItem value={"Mother"}>Mother</MenuItem>
                            <MenuItem value={"Other"}>Other</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        id="guardianName"
                        name="guardianName"
                        value={formik.values.guardianName}
                        onChange={formik.handleChange}
                        error={formik.touched.guardianName && Boolean(formik.errors.guardianName)}
                        helperText={formik.touched.guardianName && formik.errors.guardianName}
                        label="Guardian Name"
                        placeholder="Enter Guardian Name"
                    />
                </Grid>
                <Grid item xs={4}>

                    <TextField
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        label="Email"
                        placeholder="Enter your Email"
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        id="guardianNumber"
                        name="guardianNumber"
                        value={formik.values.guardianNumber}
                        onChange={formik.handleChange}
                        error={formik.touched.guardianNumber && Boolean(formik.errors.guardianNumber)}
                        helperText={formik.touched.guardianNumber && formik.errors.guardianNumber}
                        label="Contact Number"
                        placeholder="Enter contact number"
                    />
                </Grid>
            </Grid>
            <p>Address Details</p>
            <Grid container spacing={2} >
                <Grid item xs={4}>

                    <TextField
                        id="address"
                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        error={formik.touched.address && Boolean(formik.errors.address)}
                        helperText={formik.touched.address && formik.errors.address}
                        label="Address"
                        placeholder="Enter your address"
                    />
                </Grid>
                <Grid item xs={4}>
                    <FormControl sx={{ m: 1, minWidth: 220 }}>
                        <InputLabel id="demo-simple-select-helper-label">State</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="state"
                            name="state"
                            value={formik.values.state}
                            onChange={formik.handleChange}
                            error={formik.touched.state && Boolean(formik.errors.state)}
                            label="state"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Andhra"}>Andhra Pradesh</MenuItem>
                            <MenuItem value={"Arunachal"}>Arunachal Pradesh</MenuItem>
                            <MenuItem value={"Assam"}>Assam</MenuItem>
                            <MenuItem value={"Bihar"}>Bihar</MenuItem>
                            <MenuItem value={"Chhattisgarh"}>Chhattisgarh</MenuItem>
                            <MenuItem value={"Goa"}>Goa</MenuItem>
                            <MenuItem value={"Gujarat"}>Gujarat</MenuItem>
                            <MenuItem value={"Haryana"}>Haryana</MenuItem>
                            <MenuItem value={"Punjab"}>Punjab</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl sx={{ m: 1, minWidth: 220 }}>
                        <InputLabel id="demo-simple-select-helper-label">City</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="city"
                            name="city"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            error={formik.touched.city && Boolean(formik.errors.city)}
                            label="City"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Andhra"}>Andhra Pradesh</MenuItem>
                            <MenuItem value={"Arunachal"}>Arunachal Pradesh</MenuItem>
                            <MenuItem value={"Assam"}>Assam</MenuItem>
                            <MenuItem value={"Bihar"}>Bihar</MenuItem>
                            <MenuItem value={"Chhattisgarh"}>Chhattisgarh</MenuItem>
                            <MenuItem value={"Goa"}>Goa</MenuItem>
                            <MenuItem value={"Gujarat"}>Gujarat</MenuItem>
                            <MenuItem value={"Haryana"}>Haryana</MenuItem>
                            <MenuItem value={"Punjab"}>Punjab</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        id="countryName"
                        name="countryName"
                        value={formik.values.countryName}
                        onChange={formik.handleChange}
                        error={formik.touched.countryName && Boolean(formik.errors.countryName)}
                        helperText={formik.touched.countryName && formik.errors.countryName}
                        label="Country Name"
                        placeholder="Enter country name"
                    />
                </Grid>
            </Grid>
            <p>Other Details</p>
            <Grid container spacing={2} >
                <Grid item xs={3}>
                    <TextField
                        id="occupation"
                        name="occupation"
                        value={formik.values.occupation}
                        onChange={formik.handleChange}
                        error={formik.touched.occupation && Boolean(formik.errors.occupation)}
                        helperText={formik.touched.occupation && formik.errors.occupation}
                        label="Occupation"
                        placeholder="Enter Occupation"
                    />

                </Grid>
                <Grid item xs={3}>
                    <FormControl sx={{ m: 1, minWidth: 220 }}>
                        <InputLabel id="demo-simple-select-helper-label">Religion</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="religion"
                            name="religion"
                            value={formik.values.religion}
                            onChange={formik.handleChange}
                            error={formik.touched.religion && Boolean(formik.errors.religion)}
                            label="religion"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Islam"}>Islam</MenuItem>
                            <MenuItem value={"Hindu"}>Hindu</MenuItem>
                            <MenuItem value={"Kristin"}>Kristin</MenuItem>
                            <MenuItem value={"Buddha"}>Buddha</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <FormControl sx={{ m: 1, minWidth: 220 }}>
                        <InputLabel id="demo-simple-select-helper-label">Marital Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="maritalStatus"
                            name="maritalStatus"
                            value={formik.values.maritalStatus}
                            onChange={formik.handleChange}
                            error={formik.touched.maritalStatus && Boolean(formik.errors.maritalStatus)}
                            label="marital status"
                        >
                            <MenuItem value={"Married"}>Married</MenuItem>
                            <MenuItem value={"Unmarried"}>Unmarried</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <FormControl sx={{ m: 1, minWidth: 220 }}>
                        <InputLabel id="demo-simple-select-helper-label">Blood Group</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="bloodGroup"
                            name="bloodGroup"
                            value={formik.values.bloodGroup}
                            onChange={formik.handleChange}
                            error={formik.touched.bloodGroup && Boolean(formik.errors.bloodGroup)}
                            label="blood group"
                        >
                            <MenuItem value={"A+"}>A+</MenuItem>
                            <MenuItem value={"A-"}>A-</MenuItem>
                            <MenuItem value={"B+"}>B+</MenuItem>
                            <MenuItem value={"B-"}>B-</MenuItem>
                            <MenuItem value={"O+"}>O+</MenuItem>
                            <MenuItem value={"O-"}>O-</MenuItem>
                            <MenuItem value={"AB+"}>AB+</MenuItem>
                            <MenuItem value={"AB-"}>AB-</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        id="nationality"
                        name="nationality"
                        value={formik.values.nationality}
                        onChange={formik.handleChange}
                        error={formik.touched.nationality && Boolean(formik.errors.nationality)}
                        helperText={formik.touched.nationality && formik.errors.nationality}
                        label="Nationality"
                        placeholder="Enter nationality"
                    />
                </Grid>
            </Grid>
            <Button color="primary" variant="contained"  type="submit">
                Submit
            </Button>
        </Box>
    );
};

export default Register;