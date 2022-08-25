import 'components/Template/template.css';

interface IContainer {
    children: any,
    styles?: any
}

export default function Container(props: IContainer) {

    return (
        <div className="containerDefault" style={{...props.styles}}>
            {props.children}
        </div>
    )
}