import { createContext } from "react";

export interface ITemplate {
    stateOpenMenu: boolean,
    setStateOpenMenu: Function,
    statePageSelect: string,
    setStatePageSelect: Function,
    setStateCountriesSelect: Function,
    stateCountriesSelect: any,
    stateCovidData: any, 
    setStateCovidData: Function
}

const TemplateContext = createContext({} as ITemplate);

export default TemplateContext;