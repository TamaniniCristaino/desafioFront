import './index.css'
import { useState } from "react"
import { Grid } from '@mui/material';

export default function Sidebar() {
  const [stateCountries, setStateCountries] = useState();

  return (
    <div className="container">
      <div className='sidebarHeader'>
        <span>Países Selecionados.</span>
      </div>
      <div className='sidebarBody'>
        <Grid container spacing={1} >
            <Grid item lg={6} sm={6}>
              <CardCountry />
            </Grid>
            <Grid item lg={6} sm={6}>
              <CardCountry />
            </Grid>
            <Grid item lg={6} sm={6}>
              <CardCountry />
            </Grid>
            <Grid item lg={6} sm={6}>
              <CardCountry />
            </Grid>
            
        </Grid>
    
      </div>
    </div>
  )
}

function CardCountry() {
  return (
    <div className='cardCountry'>
      <img width={'100%'} src={`https://countryflagsapi.com/png/br`} alt={'br'} />
    </div>
  ) 
}