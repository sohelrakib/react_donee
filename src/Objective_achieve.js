import * as React from 'react';
import { Container, Grid, Box, Item, TextField, Typography, FormGroup, Button, MenuItem, FormControlLabel, Checkbox } from '@mui/material';
import './create_goal_achieve.css';

const Objective_achieve = () => {
    return ( 
        <Container>
            <Typography 
                className="h4_goal_achieve"
                variant="h4" 
                align="left"
                gutterBottom>
                    Objectives to reach
            </Typography>

            <Grid container spacing={2}>
                <Grid item md={2} md={4} spacing={4}>
                    <Typography 
                        className="h5_goal_achieve"
                        variant="h5" 
                        align="left"
                        gutterBottom>
                        Number of Donees
                    </Typography> 
                    <FormGroup>
                        <TextField
                            required
                            id="number_of_donee"
                            defaultValue="10"
                            variant="outlined"
                        />
                    </FormGroup> 
                </Grid>
                <Grid item md={2} md={4} spacing={4}>
                    43534 f gfb nbf nnf nfnn
                    43534 f gfb nbf nnf nfnn
                    43534 f gfb nbf nnf nfnn
                    43534 f gfb nbf nnf nfnn
                    43534 f gfb nbf nnf nfnn
                    43534 f gfb nbf nnf nfnn
                    43534 f gfb nbf nnf nfnn
                </Grid>
                <Grid item md={2} md={4} spacing={4}>
                    45 3 3 y4 hf ngf ng n
                    45 3 3 y4 hf ngf ng n
                    45 3 3 y4 hf ngf ng n
                    45 3 3 y4 hf ngf ng n
                    45 3 3 y4 hf ngf ng n
                    45 3 3 y4 hf ngf ng n
                    45 3 3 y4 hf ngf ng n
                </Grid>
            </Grid>
        </Container>
     );
}
 
export default Objective_achieve;