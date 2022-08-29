import { makeStyles } from '@material-ui/styles';

const useStylesDataGrid = makeStyles({
    rootGrid: {
      background: '#111729',
      color: '#fff',
      border: '1px solid #19B97F',
      borderRadius: 4,
    },
    overlayGrid:{
      backgroundColor: '#3E3E40',
      color: '#fff',
    },
    footerContainerGrid: {
        background: '#1C253C',
        color: '#fff'
    },
    menuIconGrid: {
        color: '#fff',
        outline: 'none',
    },
    columnHeadersGrid: {
        background: '#1C253C',
        color: '#fff',
        outline: 'none',
    },
    toolbarContainerGrid: {
        background: '#2A344C',
        color: '#fff',
        height: 45
    },
    cellGrid: {
      outline: 'none',
      color: '#fff'
    },
    row: {
      "&:nth-child(2n)": { 
        background: '#171F37',
        border: '1px solid #0AC2E9'
      },
      "&.Mui-selected": {
        color: "#FFC700",
      },
      "&.Mui-selected:hover": {
        color: "#FFC700",
        backgroundColor: '#3E3E40',
      },
      '&:hover': {
        color: "#FFC700",
      },
      
    },
    paginationRootGrid: {
      padding: 8,
      marginRight: 8,
      borderRadius: 4,
      color: '#fff !important',
    },
    paginationTextGrid: {
      color: '#fff !important',
      fontSize: 20
    },  
    outlinedGrid: {
      color: '#fff !important',
      fontSize: 20
    },
    checkboxInput: {
      color: '#fff'
    },
    filterIcon: {
      color: '#fff'
    },
    menuIconButton: {
      color: '#fff'
    },

    toolbarRootGrid: {
      color: '#fff'
    }

});

export default useStylesDataGrid;