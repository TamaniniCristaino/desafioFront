import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  ptBR,
} from '@mui/x-data-grid';

import { useEffect, useState } from 'react';
import './index.css';
import SearchIcon from '@mui/icons-material/Search';
import useStylesDataGrid from 'components/css/useStylesDataGrid';
import { InputAdornment } from '@mui/material';
import { Box } from '@mui/system';
import quickSearch from 'functions/quickSearch';
import WPFieldText from 'components/PFields/PFText'
interface WPTableGridProps {
  columns: any[]
  rows: any[]
  borderRadius?: number
  export?: boolean
  CustomFooter?: any
  height?: number
  onRowClick?: Function
  onRowDoubleClick?: Function
  idColumn?: string
  zebrado?: boolean
  getRowClassName?: any
  disableSelectionOnClick?: boolean
  multiSelect?: boolean
  onMultiSelection?: any
  multiSelections?: any
  loading: boolean
  fieldConnection?: string
}

export default function PDataGrid(props: WPTableGridProps) {
  const classes = useStylesDataGrid()
  const [pageSize, setPageSize] = useState();
  const [stateSearch, setStateSearch] = useState('');
  const [stateRows, setStateRows] = useState<(any[])>([]);

  const expt: any = props.export ?? { enabled: true, fileName: 'Export' };

  const filterData = (items: any, term: any) => {
      const searched = quickSearch(items, term);
      setStateRows(searched);
    };

  const handleSearch = (value: string) => {
      setStateSearch(value);
      if (props.rows.length > 0 && value !== '' && value !== null) {
        filterData(props.rows, value);
      }
      if (value === '') {
          setStateRows(props.rows);
      }
    };

  useEffect(() => {
      setStateRows(props.rows);
  }, [props.rows])

  function CustomToolbar() {
      return (
          <GridToolbarContainer>
              <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  marginLeft: 1,
                  marginRight: 1
              }}>
              <GridToolbarExport
                  classes={{
                      root: classes.toolbarRootGrid
                  }}
                  csvOptions={{ delimiter: ';', fileName: expt.fileName, utf8WithBom: true }}
              />
              <WPFieldText
                  name='search'
                  typeField='text'
                  value={stateSearch ?? []}
                  fullWidth={false}
                  autoFocus
                  onChange={(obj: any, name: string, value: string) => {
                      handleSearch(value);
                  }}
                  backgroundInput="#111729"
                  backgroundInputSelect="#111729"
                  style={{
                      width: 180,
                      color: '#fff'
                  }}
                  inputProps={{
                      startAdornment: <InputAdornment position="start"><SearchIcon sx={{color: "#fff", fontSize: 14}}/></InputAdornment>,
                  }}
              />
              </Box>
          </GridToolbarContainer>
      );
  }

  function CustomFooter() {
      return <GridToolbarContainer>{props.CustomFooter}</GridToolbarContainer>;
  }

  return (
          <DataGrid
            classes={{
                root: classes.rootGrid,
                columnHeaders: classes.columnHeadersGrid,
                footerContainer: classes.footerContainerGrid,
                toolbarContainer: classes.toolbarContainerGrid,
                overlay: classes.overlayGrid,
                cell: classes.cellGrid,
                row: classes.row,
                // main: classes.main
                checkboxInput: classes.checkboxInput,
                sortIcon: classes.filterIcon,
                menuIconButton: classes.menuIconButton
            }}
              columns={props.columns}
              rows={stateRows}
              pageSize={pageSize}
              rowHeight={props.height ?? 40}
              onRowClick={(r) => {
                  if (props.onRowClick) {
                      return props?.onRowClick(r);
                  }
                  return null;
              }}
              onRowDoubleClick={(r) => {
                  if (props.onRowDoubleClick) {
                      return props.onRowDoubleClick(r);
                  }
                  return null;
              }}
              onPageSizeChange={(newPageSize: any) => setPageSize(newPageSize)}
              rowsPerPageOptions={[10, 25, 50, 100]}
              pagination
              getRowId={(r: any) => {
                  if (props.idColumn) {
                      return r[props.idColumn];
                  }
                  return r.ID;
              }}
              localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
              disableSelectionOnClick={props.disableSelectionOnClick}
              checkboxSelection={props.multiSelect}
              onSelectionModelChange={(newSelectionModel) => {
                  if (props?.onMultiSelection) {
                      return props?.onMultiSelection(newSelectionModel);
                  }
                  return null;
              }}
              selectionModel={props.multiSelections}
              loading={props.loading ?? false}
              components={{
                  Toolbar: expt.enabled && CustomToolbar,
                  Footer: props.CustomFooter && CustomFooter,
                  // Pagination: CustomPagination,
              }}
          />
  );
}