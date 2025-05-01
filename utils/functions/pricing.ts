
/**
 * Formats the input to the Dutch Euro formatting with correct amount of decimals and decimal separator
 */
function formatPrice(
    priceNumber: number | string,
    includeShortPricePeriod = false,
): string {
    if (includeShortPricePeriod) {
        return (
            Number(priceNumber).toLocaleString('nl-NL', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }) +
            ' /' +
            getShortDisplayPricePeriod()
        );
    }
    return Number(priceNumber).toLocaleString('nl-NL', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

export {
    formatPrice,
};
