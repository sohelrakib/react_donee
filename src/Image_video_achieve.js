import * as React from 'react';
import { Container, Grid, Box, Item, TextField, Typography, FormGroup, Button } from '@mui/material';
import './create_goal_achieve.css';
import UploadImage from "./asset/Picture.png";

const Image_video_achieve = () => {
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
                    Photos and videos
            </Typography>

            <Typography 
                className="h5_goal_achieve"
                variant="h5" 
                align="left"
                gutterBottom>
                    Upload at least 3 photos related with your goal
            </Typography>

            <Grid container spacing={2}>
                <Grid item md={2} xs={4} spacing={4}>
                    <Box className="grid_goal_achieve">
                        <img src={UploadImage} alt="UploadImage" />
                        <input
                            color="primary"
                            accept="image/*"
                            id="contained-button-file"
                            multiple={false}
                            type="file"
                        />
                    </Box>
                </Grid>
                <Grid item md={2} xs={4} spacing={4} className="">
                    <Box className="grid_goal_achieve">
                        <img src={UploadImage} alt="UploadImage" />
                        <input
                            color="primary"
                            accept="image/*"
                            id="contained-button-file"
                            multiple={false}
                            type="file"
                        />
                    </Box>
                </Grid>
                <Grid item md={2} xs={4} spacing={4} className="">
                    <Box className="grid_goal_achieve">
                        <img src={UploadImage} alt="UploadImage" />
                        <input
                            color="primary"
                            accept="image/*"
                            id="contained-button-file"
                            multiple={false}
                            type="file"
                        />
                    </Box>
                </Grid>
                <Grid item md={2} xs={4} spacing={4} className="">
                    <Box className="grid_goal_achieve">
                        <img src={UploadImage} alt="UploadImage" />
                        <input
                            color="primary"
                            accept="image/*"
                            id="contained-button-file"
                            multiple={false}
                            type="file"
                        />
                    </Box>
                </Grid>
                <Grid item md={2} xs={4} spacing={4} className="">
                    <Box className="grid_goal_achieve">
                        <img src={UploadImage} alt="UploadImage" />
                        <input
                            color="primary"
                            accept="image/*"
                            id="contained-button-file"
                            multiple={false}
                            type="file"
                        />
                    </Box>
                </Grid>
                <Grid item md={2} xs={4} spacing={4} className="">
                    <Box className="grid_goal_achieve">
                        <img src={UploadImage} alt="UploadImage" />
                        <input
                            color="primary"
                            accept="image/*"
                            id="contained-button-file"
                            multiple={false}
                            type="file"
                        />
                    </Box>
                </Grid>
                <Grid item md={12} xs={12} spacing={4} style={{paddingTop:30}}>
                    <Typography 
                        className="h5_goal_achieve"
                        variant="h5" 
                        align="left"
                        gutterBottom>
                            Youtube link
                    </Typography>
                    <FormGroup>
                        <TextField
                            required
                            id="youtube_link"
                            label="Project title, keep it short and tell in a few words what it is about"
                            defaultValue=""
                            variant="outlined"
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
 
export default Image_video_achieve;