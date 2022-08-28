export default function DateTimeFormat(datetime: any) {
    var value = new Date(datetime.value);
    var data = `${value.toLocaleDateString('pt-br')} ${value.toLocaleTimeString('pt-br')}`

    return data
}