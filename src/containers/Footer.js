import {Grid,List,ListItem, Typography} from "@mui/material";


const Footer = () => {
    return(
        <Grid container spacing={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
                <h3>About</h3>
                <Typography>Lorem Ipsum is simply dummy 
                    text of the printing and typesetting industry. 
                     Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book. I
                     t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                     It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                     and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    )
}

export default Footer;