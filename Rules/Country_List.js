/**
 * Returns a flag image URL from FlagCDN API.
 * @param {IClientAPI} context
 */
export default function Country_List(context) {

    let country = context.binding.Country;
    country = country ? country.toLowerCase().trim() : '';

    if (country.length === 2) {
        // FlagCDN — free, no API key needed
        return `https://flagcdn.com/w80/${country}.png`;
        
        // Alternative sizes:
        // Small:  https://flagcdn.com/w40/${country}.png
        // Medium: https://flagcdn.com/w80/${country}.png
        // Large:  https://flagcdn.com/w160/${country}.png
        // SVG:    https://flagcdn.com/${country}.svg
    }

    return 'sap-icon://world';  // Fallback
}