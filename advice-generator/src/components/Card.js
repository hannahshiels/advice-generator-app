import Box from '@mui/material/Box';
import patternDividerDesktop from '../images/pattern-divider-desktop.svg';
import dice from '../images/icon-dice.svg';
import axios from "axios";
import { useState, useEffect } from "react";
import catchError from "../catchError.js";
const baseURL = "https://api.adviceslip.com/advice";




function Card() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [advice, setAdvice] = useState([]);

  const getAdvice = async () => {
    let randomAdviceID = Math.floor((Math.random() * 224) + 1);
    const newURL = baseURL + "/" + randomAdviceID;
    const response = await catchError(axios.get(newURL));
    if (response.status !== 200) {
      setError(true)
    }
    setAdvice(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <Box className="card">
      <Box className="card-header"> <p>  {loading ? "" : error ? "Failed to fetch data" : "Advice #" + advice.slip.id}</p> </Box>
      <Box className="card-body"><p>  {loading ? "" : error ? "Failed to fetch data" : '"' + advice.slip.advice + '"'} </p>
        <Box className="divider-container"> <img alt="" src={patternDividerDesktop} />  </Box>
      </Box>
      <Box className="card-footer"> <Box className="circle"> <button onClick={getAdvice}><img alt="dice" src={dice} /> </button>  </Box> </Box>
    </Box>

  )
}

export default Card;