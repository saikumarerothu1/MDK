/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function SaveCustomerDataAndNavigate(context) {

    // Store Customer data in Application-level ClientData
    let appData = context.getAppClientData();

    appData.FirstName = context.evaluateTargetPath("#Control:FCCreateFirstName/#Value");
    appData.LastName = context.evaluateTargetPath("#Control:FCCreateLastName/#Value");
    appData.Phone = context.evaluateTargetPath("#Control:FCCreatePhone/#Value");
    appData.Email = context.evaluateTargetPath("#Control:FCCreateEmail/#Value");
    appData.Country = context.evaluateTargetPath("#Control:FCCountry/#SelectedValue");

    // Navigate to Sales Order page
    return context.executeAction("/demoapp/Actions/NavToSales.action");
}