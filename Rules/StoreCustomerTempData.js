/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function StoreCustomerTempData(clientAPI) {

    const pageProxy = clientAPI.getPageProxy();

    const countryValue = pageProxy.evaluateTargetPath(
        '#Control:FCCountry/#Value'
    );

    const selectedCountry = countryValue?.[0]?.ReturnValue || '';

    const customerData = {

        FirstName: pageProxy.evaluateTargetPath(
            '#Control:FCCreateFirstName/#Value'
        ),

        LastName: pageProxy.evaluateTargetPath(
            '#Control:FCCreateLastName/#Value'
        ),

        EmailAddress: pageProxy.evaluateTargetPath(
            '#Control:FCCreateEmail/#Value'
        ),

        PhoneNumber: pageProxy.evaluateTargetPath(
            '#Control:FCCreatePhone/#Value'
        ),

        Country: selectedCountry
    };

    clientAPI.getAppClientData().CustomerData = customerData;

    return clientAPI.executeAction(
        '/demoapp/Actions/NavToSales.action'
    );
}
