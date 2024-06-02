import Freecurrencyapi from '@everapi/freecurrencyapi-js';
import { Console } from 'console';

const freecurrencyapi = new Freecurrencyapi('fca_live_CeJc70OcKzz2HH6Oz1ieTvYeKcGnSAdil9MKCNB0');

convertCurrency('USD', 'INR', 10)

export async function convertCurrency(fromCurrency, toCurrency, units) {
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier = res.data[toCurrency];
    return units * multiplier;
}

