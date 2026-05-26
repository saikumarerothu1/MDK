/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function GetCountryList(context) 

   {
 
    let codeToName = {
        'US': 'United States',
        'CA': 'Canada',
        'BR': 'Brazil',
        'MX': 'Mexico',
        'DE': 'Germany',
        'GB': 'United Kingdom',
        'UK': 'United Kingdom',
        'FR': 'France',
        'IT': 'Italy',
        'ES': 'Spain',
        'NL': 'Netherlands',
        'CH': 'Switzerland',
        'IN': 'India',
        'JP': 'Japan',
        'CN': 'China',
        'KR': 'South Korea',
        'AU': 'Australia',
        'SG': 'Singapore',
        'AE': 'United Arab Emirates',
        'SA': 'Saudi Arabia',
        'ZA': 'South Africa'
    };
 
    return context.read(
        '/demoapp/Services/com_sap_edm_sampleservice_v4.service',
        'Customers',
        [],
        '$select=Country&$orderby=Country'
    ).then(function(result) {
 
        let seen = new Set();
        let items = [];
 
        for (let i = 0; i < result.length; i++) {
            let code = result.getItem(i).Country;
            if (code) {
                code = code.toUpperCase().trim();
                if (!seen.has(code)) {
                    seen.add(code);
                    let fullName = codeToName[code] || code;
                    items.push({
                        DisplayValue: fullName,
                        ReturnValue: code
                    });
                }
            }
        }
 
        items.sort(function(a, b) {
            return a.DisplayValue.localeCompare(b.DisplayValue);
        });
 
        return items;
    });
}