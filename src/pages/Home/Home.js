import "./Home.css";
import { Button, MenuItem, TextField } from "@material-ui/core";
import Categories, { } from '../../Data/Categories';
import { useState } from "react";
import { useHistory } from "react-router";

const Home = ({name,setName, fetchQuestions}) => {
    const [category, setCategory] = useState("");

    const history = useHistory();

    const handleSubmit = () => {
        fetchQuestions (category);
        history.push("/quiz");
    };

    return( 
        <div className='content'>
            <div className='settings'>
                <span style={{fontSize:20 }}>Enter name and select quiz category to start the quiz.</span>

             <div className='settings_select'>
                    <TextField 
                    style={{ marginBottom: 20}}
                    label = 'Enter Your Name'
                    variant="outlined"
                    onChange= {(e) => setName(e.target.value)}
                    />
                    <TextField
                        select label="Select Category" 
                        variant= "outlined"
                        style= {{ marginBottom: 20 }} 
                        onChange= {(e) => setCategory(e.target.value)}
                        value={category}
                    >   
                    {
                     Categories.map((cat)=> (

                        <MenuItem key = {cat.category} value = {cat.value} >
                        {cat.category}
                        </MenuItem>

                        ))
                       }
                    </TextField>


                    <Button variant='contained' color ='primary' onClick={handleSubmit}>
                        Start Quiz
                    </Button>           
                </div>
             </div>
            <img src ='/quiz2.svg' className= 'banner' alt="quiz img"></img>

        </div>
    );


};

export default Home;