import * as React from 'react';
import { Container, Grid, Box, Item, TextField, Typography, FormGroup, Button } from '@mui/material';
import './create_goal_achieve.css';

const Create_goal_achieve = () => {
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return ( 
        <Container>
            <Typography 
                className="h4_goal_achieve"
                variant="h4" 
                align="left"
                gutterBottom>
                    What do you want to achieve?
            </Typography>

            <Grid container spacing={2} className="main_div_goal_achieve">
                <Grid item md={6} xs={12} spacing={4} className="left_div_goal_achieve">
                    
                    <Typography 
                        className="h5_goal_achieve"
                        variant="h5" 
                        align="left"
                        gutterBottom>
                            Problem description
                    </Typography>
                    <FormGroup>    
                        <TextField
                        id="outlined-multiline-static"
                        label=""
                        multiline
                        rows={10}
                        defaultValue="Describe the problem that aims to solve your cause"
                        />
                    </FormGroup>
                </Grid>
                <Grid item md={6} xs={12} spacing={4} className="right_div_goal_achieve">
                    <Typography 
                        className="h5_goal_achieve"
                        variant="h5" 
                        align="left"
                        gutterBottom>
                            Solution
                    </Typography>
                    <FormGroup>    
                        <TextField
                        id="outlined-multiline-static"
                        label=""
                        multiline
                        rows={10}
                        defaultValue="Describe the solution that your goal propose and how this will positively impact your community"
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
 
export default Create_goal_achieve;