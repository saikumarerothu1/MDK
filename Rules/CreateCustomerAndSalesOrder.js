/**
 * @param {IClientAPI} clientAPI
 */
export default function CreateCustomerAndSalesOrder(clientAPI) {

    const page = clientAPI.getPageProxy();
    const clientData = page.getClientData();


    clientData.FirstName = clientAPI.evaluateTargetPath("#Page:-Previous/#Control:FCCreateFirstName/#Value");
    clientData.LastName  = clientAPI.evaluateTargetPath("#Page:-Previous/#Control:FCCreateLastName/#Value");
    clientData.Phone     = clientAPI.evaluateTargetPath("#Page:-Previous/#Control:FCCreatePhone/#Value");
    clientData.Email     = clientAPI.evaluateTargetPath("#Page:-Previous/#Control:FCCreateEmail/#Value");
    clientData.Country   = clientAPI.evaluateTargetPath("#Page:-Previous/#Control:FCCountry/#SelectedValue");

    return clientAPI.executeAction("/demoapp/Actions/New_Customer_Create.action")
        .then(() => {

            const actionResult = clientAPI.getActionResult("New_Customer_Create");
            const createdCustomer = actionResult.data;

            if (!createdCustomer || !createdCustomer.CustomerID) {
                return clientAPI.executeAction({
                    "Name": "/demoapp/Actions/GenericMessageBox.action",
                    "Properties": {
                        "Title": "Error",
                        "Message": "Customer was not created properly. Cannot continue with SalesOrder."
                    }
                });
            }

            clientData.CustomerID = createdCustomer.CustomerID;

            return clientAPI.executeAction("/demoapp/Actions/New_SalesOrder_Create.action");
        });
}