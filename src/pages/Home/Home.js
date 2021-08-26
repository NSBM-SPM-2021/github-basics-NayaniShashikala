import "./Home.css";
import { TextField } from "@material-ui/core";
const Home = () => {
    return( 
        <div className='content'>
            <div className='settings'>
                <span style={{fontSize:30 }}>Quiz Settings</span>

             <div className='settings_select'>
                    <TextField 
                    style={{ marginBottom: 20}}
                    label = 'Enter Your Name'
                    variant="outlined"
                    />
                    <TextField
                        select label="Select Category" 
                        variant= "outlined"
                        style= {{ marginBottom: 20 }} />                </div>
             </div>
            <img src ='/quiz2.svg' className= 'banner' alt="quiz img"></img>

        </div>
    );


};

export default Home;