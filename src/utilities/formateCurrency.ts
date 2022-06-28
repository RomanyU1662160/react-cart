const CURRENCY_CONVERTER = new Intl.NumberFormat(undefined, {
    style: 'currency', currency: 'GPB',
})

export const formatCurrency = (value: number) => {

    return CURRENCY_CONVERTER.format(value);
}