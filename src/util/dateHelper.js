/**
	 * Nimmt ein Datum von der DB und konvertiert es nach dd.m.yy z.B. 02.6.19
	 *
	 * @param dateInDBFormat
	 * @returns {string}
	 */
 function convertToShortWithYearDateFormat(dateInDBFormat) {
    const jsDate = new Date(dateInDBFormat);
    return jsDate.toLocaleString('de-DE', { year: '2-digit', month: 'numeric', day: '2-digit' });
}

/**
	 * Nimmt ein Datum von der DB und konvertiert es nach dd.mm.yyyy z.B. 12.06.2019
	 *
	 * @param dateInDBFormat
	 * @returns {string}
	 */
 function convertToMediumDateFormatJustDigits(dateInDBFormat) {
    const jsDate = new Date(dateInDBFormat);
    return jsDate.toLocaleString('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit' });
}

/**
	 * Datum vom Format yyyy-mm-dd ins Format yyyy/mm/dd umwandeln.
	 * Safari & IE browsers do not support the date format “yyyy-mm-dd”
	 * https://coderwall.com/p/gvwb9g/fix-invalid-date-on-safari-ie
	 *
	 * @param date
	 * @returns {*|void|string|never}
	 */
 function convertToAllBrowsersReadableDate(date) {
    return date.replace(/-/g, '/');
}

export default {
    convertToShortWithYearDateFormat,
    convertToMediumDateFormatJustDigits,
    convertToAllBrowsersReadableDate
}

