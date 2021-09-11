import * as React from 'react';
import { Container, Grid, Box, Item, TextField, Typography, FormGroup, Button, MenuItem, FormControlLabel, Checkbox } from '@mui/material';
import './create_goal_achieve.css';



const Create_cause_achieve = () => {
    const selectValues = [
        {
          value: 'option 1',
          label: 'option 1',
        },
        {
          value: 'option 2',
          label: 'option 2',
        },
    ];
    
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        checkedE: false,
        checkedF: false,

        checkedG: false,
        checkedH: false,
        checkedI: false,
        checkedJ: false,
        checkedK: false,
        checkedL: false,
    });

    const [options, setOptions] = React.useState('option 1')
    
    const handleChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });

        setOptions(event.target.value);

    }; 

    ;

   

    return ( 
        <Container>
            <Typography 
                className="h4_goal_achieve"
                variant="h4" 
                align="left"
                gutterBottom>
                    Create causes that inspire <br /> people to change other’s lifes
            </Typography>

            <Grid container spacing={2}>
                <Grid item md={2} md={7} spacing={4}>
                    <FormGroup>
                        <Typography 
                            className="h5_goal_achieve"
                            variant="h5" 
                            align="left"
                            gutterBottom>
                            Which category does your goal belong to?
                        </Typography>

                        <TextField
                            id="outlined-select-options"
                            select
                            label="Select"
                            value={options}
                            onChange={handleChange}
                            helperText="Please select your categoty"
                            align="left"
                        >
                            {selectValues.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                            ))}
                        </TextField>
                    </FormGroup>

                    <br />
                    <Typography 
                        className="h5_goal_achieve"
                        variant="h5" 
                        align="left"
                        gutterBottom>
                        What kind of community are you looking to help?
                    </Typography> 
                    <Grid container spacing={2}>
                        <Grid item md={2} md={6} spacing={4}>
                            <FormGroup>
                                
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={state.checkedA}
                                        onChange={handleChange}
                                        name="checkedA"
                                        color="primary"
                                    />
                                    }
                                    label="Families"
                                />

                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={state.checkedB}
                                        onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                    }
                                    label="Mothers head of household"
                                />

                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={state.checkedC}
                                        onChange={handleChange}
                                        name="checkedC"
                                        color="primary"
                                    />
                                    }
                                    label="Kids and teenagers"
                                />

                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={state.checkedD}
                                        onChange={handleChange}
                                        name="checkedD"
                                        color="primary"
                                    />
                                    }
                                    label="Entrepreneurs"
                                />

                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={state.checkedE}
                                        onChange={handleChange}
                                        name="checkedE"
                                        color="primary"
                                    />
                                    }
                                    label="Elderlies"
                                />

                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={state.checkedF}
                                        onChange={handleChange}
                                        name="checkedF"
                                        color="primary"
                                    />
                                    }
                                    label="People with health issues"
                                />
                                
                                
                            </FormGroup>
                        </Grid>
                        <Grid item md={2} md={6} spacing={4}>
                            <FormGroup>
                                
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={state.checkedG}
                                        onChange={handleChange}
                                        name="checkedG"
                                        color="primary"
                                    />
                                    }
                                    label="Kids with health issues"
                                />

                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={state.checkedH}
                                        onChange={handleChange}
                                        name="checkedH"
                                        color="primary"
                                    />
                                    }
                                    label="Pets"
                                />

                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={state.checkedI}
                                        onChange={handleChange}
                                        name="checkedI"
                                        color="primary"
                                    />
                                    }
                                    label="Exotic animals"
                                />

                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={state.checkedJ}
                                        onChange={handleChange}
                                        name="checkedJ"
                                        color="primary"
                                    />
                                    }
                                    label="Environmental care"
                                />

                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={state.checkedK}
                                        onChange={handleChange}
                                        name="checkedK"
                                        color="primary"
                                    />
                                    }
                                    label="Water care"
                                />

                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={state.checkedL}
                                        onChange={handleChange}
                                        name="checkedL"
                                        color="primary"
                                    />
                                    }
                                    label="Other"
                                />
                                
                            </FormGroup>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={2} md={5} spacing={4}>
                    <Typography 
                        className="h5_goal_achieve"
                        variant="h5" 
                        align="left"
                        gutterBottom>
                            Goal name
                    </Typography>
                    <FormGroup>
                        <TextField
                            required
                            id="goal_name"
                            label="Project title, keep it short and tell in a few words what it is about"
                            defaultValue=""
                            variant="outlined"
                        />
                    </FormGroup> 
                    <br />
                    <Typography 
                        className="h5_goal_achieve"
                        variant="h5" 
                        align="left"
                        gutterBottom>
                            Brief description of your goal
                    </Typography>
                    <FormGroup>
                        <TextField
                            id="brief_description_of_your_goal"
                            label=""
                            multiline
                            rows={10}
                            defaultValue="Make a short description that catches the attention of the donor. Who are the beneficiaries, their needs and what are the results if the donation is received?"
                        />
                    </FormGroup> 
                </Grid>
            </Grid>

            <Box>
              <Button type="submit" variant="contained" color="primary" className="button_goal_achieve">
                  Continue
              </Button>
            </Box>

        </Container>
     );
}
 
export default Create_cause_achieve;