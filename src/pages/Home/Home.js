import "./Home.css";
import { Button, MenuItem, TextField } from "@material-ui/core";
import Categories, { } from '../../Data/Categories';

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
                        style= {{ marginBottom: 20 }} 
                    >   
                    {
                     Categories.map((cat)=> (

                        <MenuItem key = {cat.category} value = {cat.value} >
                        {cat.category}
                        </MenuItem>

                        ))
                       }
                    </TextField>  
                    <Button variant='contained' color ='primary'>
                        Start Quiz
                    </Button>           
                </div>
             </div>
            <img src ='/quiz2.svg' className= 'banner' alt="quiz img"></img>

        </div>
    );


};

export default Home;