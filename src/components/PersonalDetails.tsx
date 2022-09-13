import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";

const PersonalDetails = (props: any) => {
    const formik = props.formik;
    return (
        <div>
            <Typography variant="h6" sx={{ textDecoration: 'underline'}} >Personal Detail</Typography>
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
                    <FormControl sx={{ m: 1, minWidth: 220 }}>
                        <InputLabel id="demo-simple-select-helper-label">Sex</InputLabel>
                        <Select
                            required
                            id="sex"
                            name="sex"
                            value={formik.values.sex}
                            onChange={formik.handleChange}
                            error={formik.touched.sex && Boolean(formik.errors.sex)}
                            label="Sex"
                            placeholder="Enter Sex"
                        >
                            <MenuItem value={"Male"}>Male</MenuItem>
                            <MenuItem value={"Female"}>Female</MenuItem>
                            <MenuItem value={"Common"}>Common</MenuItem>
                            <MenuItem value={"Other"}>Other</MenuItem>
                        </Select>
                    </FormControl>

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
                            <MenuItem value={"Passport"}>Passport</MenuItem>
                            <MenuItem value={"Aadhar"}>Aadhar</MenuItem>
                            <MenuItem value={"Pan"}>Pan</MenuItem>
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
        </div>
    );
};

export default PersonalDetails;