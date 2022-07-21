import {Grid,List,ListItem} from "@mui/material";


const Footer = () => {
    return(
        <Grid container spacing={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}>
                <List>
                    <ListItem>ini list item</ListItem>
                    <ListItem>ini list item juga</ListItem>
                </List>
            </Grid>
            <Grid item xs={2}>
                <ul>
                    <li>123</li>
                    <li>456</li>
                </ul>
            </Grid>
            <Grid item xs={2}>
                <ul>
                    <li>123</li>
                    <li>456</li>
                </ul>
            </Grid>
            <Grid item xs={2}>
                <ul>
                    <li>123</li>
                    <li>456</li>
                </ul>
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    )
}

export default Footer;