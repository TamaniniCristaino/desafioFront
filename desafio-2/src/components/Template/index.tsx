import { useState } from 'react'

import Routes from 'routes'
import Toolbar from 'components/Template/Toolbar';
import Body from 'components/Template/Body'
import Sidebar from 'components/Template/Sidebar'
import TemplateContext from 'context/TemplateContext'

function Template() {
  const [stateOpenMenu, setStateOpenMenu] = useState(true);
  const [statePageSelect, setStatePageSelect] = useState('');
  const [stateCountriesSelect, setStateCountriesSelect] = useState([]);
  const [stateCovidData, setStateCovidData] = useState<any[]>([]);

  return (
    <TemplateContext.Provider value={{
      stateOpenMenu,
      setStateOpenMenu,
      setStatePageSelect,
      statePageSelect,
      setStateCountriesSelect,
      stateCountriesSelect,
      setStateCovidData,
      stateCovidData
    }}>
      <div className="containerTemplate">
        <div className='templateSidebar'>
          <Sidebar />
        </div>
        <div className='templateBody'>
          <Toolbar />
          <Body>
            <Routes />
          </Body>
        </div>
      </div>
    </TemplateContext.Provider>
  );
}

export default Template;
