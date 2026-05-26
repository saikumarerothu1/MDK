/**
 * Returns unique countries for ListPicker items
 * @param {IClientAPI} clientAPI
 */
export default function GetCountries(clientAPI) {

  const countryMap = {
    DE: 'Germany',
    US: 'United States',
    IN: 'India',
    JP: 'Japan',
    FR: 'France',
    AR: 'Argentina',
    CN: 'China',
    BR: 'Brazil',
    MX: 'Mexico',
    GB: 'United Kingdom',
    CA: 'Canada',
    DK: 'Denmark',
    ZA: 'South Africa',
    IT: 'Italy',
    CH: 'Switzerland',
    ES: 'Spain',
    AT: 'Austria',
  };

  return clientAPI.read(
    '/demoapp/Services/com_sap_edm_sampleservice_v4.service', // <-- keep your service (change if your project service differs)
    'Customers',
    [],
    '$select=Country'
  ).then(result => {

    const seen = new Set();
    const items = [];

    for (let i = 0; i < result.length; i++) {
      const code = result.getItem(i).Country;

      if (code && !seen.has(code)) {
        seen.add(code);
        items.push({
          DisplayValue: countryMap[code] || code,
          ReturnValue: code,
        });
      }
    }

    // Sort by display value
    return items.sort((a, b) => a.DisplayValue.localeCompare(b.DisplayValue));
  });
}