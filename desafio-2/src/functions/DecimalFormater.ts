export default function DecimalFormater(val: any, minDig: number = 2, maxDig: number = 2) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: minDig || 2,
        maximumFractionDigits: maxDig || 2,
    }).format(val);
}