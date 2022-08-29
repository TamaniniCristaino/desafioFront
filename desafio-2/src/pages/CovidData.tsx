import PDataGrid from "components/PDataGrid";
import Container from "components/Template/Container";
import { useEffect, useState } from "react";
import { GridColDef } from '@mui/x-data-grid';

import covidDataAPI from 'api/covidDataAPI';

export default function CovidData() {
    const [stateLoading, setStateLoading] = useState(true);
    const [stateCovidData, setStateCovidData] = useState<any[]>([]);

    async function loadApis() {
      const respCovidData: any = await covidDataAPI();

      setStateCovidData(respCovidData.data.Countries);
      setStateLoading(false);
    }

    useEffect(() => {
      loadApis()
    },[])

    const columns: GridColDef[] = [
      {
        field: 'Country',
        headerName: 'País',
        flex: 1,
        sortable: true,
      },
      {
        field: 'CountryCode',
        headerName: 'Sigla',
        width: 60,
        sortable: true,
      },
      {
        type: 'number',
        field: 'TotalConfirmed',
        headerName: 'Total Confirmados',
        minWidth: 180,
        sortable: true,
      },
      {
        type: 'number',
        field: 'TotalDeaths',
        headerName: 'Total Mortos',
        minWidth: 180,
        sortable: true,
      },
      {
        type: 'number',
        field: 'TotalRecovered',
        headerName: 'Total Recuperado',
        minWidth: 180,
        sortable: true,
      },
      {
        field: '',
        headerName: 'Bandeira',
        align: 'center',
        headerAlign: 'center',
        renderCell: (params: any) => {
          return (
            <div style={{
              backgroundColor: '#fff',
              padding: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 2
            }}>
              <img src={`https://countryflagsapi.com/png/${params.row.CountryCode}`} alt={params.row.CountryCode}
              width={22}
              height={12}
              />
            </div>
          )
        },
      },
    ];

    return (
      <Container>
        <PDataGrid 
          columns={columns}
          loading={stateLoading}
          rows={stateCovidData}
          idColumn={'ID'}
          multiSelect
        />
      </Container>
    )
}