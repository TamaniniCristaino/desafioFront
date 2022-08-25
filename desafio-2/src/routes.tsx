import { Route, Routes } from 'react-router-dom'

import CovidData from 'pages/CovidData'

function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<CovidData />} />
        </Routes>
    )
}

export default MainRoutes;