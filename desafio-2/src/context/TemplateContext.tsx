import { createContext } from "react";

export interface ITemplate {
    stateOpenMenu: boolean,
    setStateOpenMenu: Function,
    statePageSelect: string,
    setStatePageSelect: Function
}

const TemplateContext = createContext({} as ITemplate);

export default TemplateContext;