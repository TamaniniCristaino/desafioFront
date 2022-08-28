import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/styles';

interface IWPFInputText {
    typeField: 'text' | 'number',
    name: string,
    value: any,
    onChange: Function,
    label?: string,
    multiline?: boolean,
    maxrow?: number,
    rows?: number,
    typefont?: 'upperCase' | 'lowerCase',
    error?: boolean,
    onBlur?: Function,
    helperText?: string,
    required?: boolean,
    fullWidth?: boolean,
    disabled?: boolean,
    autoFocus?: boolean,
    style?: any,
    inputProps?: any
    backgroundInput?: string,
    backgroundInputSelect?: string,
}

export default function PFText(props: IWPFInputText) {
    const useStyles = makeStyles({
        root: {
            background: props.backgroundInput ?? 'transparent',
            border: '1px solid #0AC2E9',
            borderRadius: 3,
            height: 30,
            fontSize: 12,
            color: '#fff'
        },
        focused: {
            background: props.backgroundInputSelect ?? 'transparent',
            color: '#fff'
        },
    
  
      });

    const classes = useStyles();
    return (
        <TextField
            type={props.typeField || 'text'}
            sx={{
                color: '#fff'
            }}
            name={props.name}
            label={props.label}
            value={props.value || ''}
            multiline={props.multiline}
            maxRows={props.maxrow}
            rows={props.rows}
            onChange={(e:any) => {
                if(e.target.value.length > 0) {
                    let valueString: string = e.target.value;
                    if(props.typefont === 'upperCase') {
                        valueString = valueString.toUpperCase();
                    } else if (props.typefont === 'lowerCase') {
                        valueString = valueString.toLowerCase();
                    }
                    props.onChange({[e.target.name]: valueString}, e.target.name, valueString)
                } else {
                    props.onChange({[e.target.name]: null}, e.target.name, null)
                }
            }}
            error={props.error}
            onBlur={(e:any) => {
                if(e.target.value.length > 0) {
                    props.onBlur?.({[e.target.name]: e.target.value}, e.target.name, e.target.value)
                } else {
                    props.onBlur?.({[e.target.name]: null},  e.target.name, null)
                }
                props.onBlur?.()
            }}
            helperText={props.helperText}
            InputLabelProps={{ 
                shrink: true, 
                style: {
                    color: '#fff',
                    fontSize: 14 
                },
            }}
            required={props.required}
            fullWidth={props.fullWidth ?? true}
            disabled={props.disabled}
            size='small'
            autoComplete='off'
            autoFocus={props.autoFocus}
            style={{
                background: 'transparent',
                ...props.style
            }}
            InputProps={{
                ...props.inputProps,
                classes: {
                    root: classes.root,
                    focused: classes.focused
                 }
            }}
        />
    )
}