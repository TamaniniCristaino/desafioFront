import './index.css'
import { useContext } from "react"
import { Grid } from '@mui/material';
import TemplateContext from 'context/TemplateContext';

export default function Sidebar() {
  const { stateCountriesSelect } = useContext(TemplateContext);

  return (
    <div className="container">
      <div className='sidebarHeader'>
        <span>Países Selecionados.</span>
      </div>
      <div className='sidebarBody'>
        <Grid container spacing={1}>
            {
              stateCountriesSelect.map((el: any) => {
               return (
                  <Grid key={el} item lg={6} sm={6}>
                    <CardCountry key={el} dataID={el} />
                  </Grid>
                )
              })
            }
        </Grid>
    
      </div>
    </div>
  )
}

interface ICardCountry {
  dataID: string
}

function CardCountry(props: ICardCountry) {
  const { stateCovidData } = useContext(TemplateContext);
  const CountryCode = stateCovidData.filter((el: any) => {
    return el.ID === props.dataID
  })

  return (
    <div className='cardCountry'>
      <img width={'100%'} src={`https://countryflagsapi.com/png/${CountryCode[0].CountryCode}`} alt={'br'} />
      <span>{CountryCode[0].Country}</span>
    </div>
  ) 
}