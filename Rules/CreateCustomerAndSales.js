/**
 * Creates Customer + linked SalesOrder in a single deep-insert call
 * @param {IClientAPI} clientAPI
 */
export default async function CreateCustomerAndSales(clientAPI) {
    const pageProxy = clientAPI.getPageProxy();
    const appData = clientAPI.getAppClientData();
    const customerData = appData.CustomerData;

    try {
        if (!customerData) {
            throw new Error("Customer data missing. Please fill customer page first.");
        }

        // 1. Read SalesOrder values
        const currencyCode        = pageProxy.evaluateTargetPath('#Control:FCCreateCurrencyCode/#Value');
        const netAmount           = pageProxy.evaluateTargetPath('#Control:FCCreateNetAmount/#Value');
        const taxAmount           = pageProxy.evaluateTargetPath('#Control:FCCreateTaxAmount/#Value');
        const grossAmount         = pageProxy.evaluateTargetPath('#Control:FCCreateGrossAmount/#Value');
        const lifeCycleStatus     = pageProxy.evaluateTargetPath('#Control:FCCreateLifeCycleStatus/#Value');
        const lifeCycleStatusName = pageProxy.evaluateTargetPath('#Control:FCCreateLifeCycleStatusName/#Value');
        const createdDate = pageProxy.evaluateTargetPath('#Control:FCCreatedate/#Value');


        // 2. Build combined payload (Deep Insert)
        const deepPayload = {
            FirstName:    customerData.FirstName,
            LastName:     customerData.LastName,
            EmailAddress: customerData.EmailAddress,
            PhoneNumber:  customerData.PhoneNumber,
            Country:      customerData.Country,

            // Nested SalesOrder — backend auto-links via navigation property
            SalesOrders: [
                {
                    CurrencyCode:        currencyCode ? currencyCode.toUpperCase() : "EUR",
                    GrossAmount:         grossAmount ? Number(grossAmount) : 0,
                    NetAmount:           netAmount ? Number(netAmount) : 0,
                    TaxAmount:           taxAmount ? Number(taxAmount) : 0,
                    LifeCycleStatus:     lifeCycleStatus || "N",
                    LifeCycleStatusName: lifeCycleStatusName || "New",
                    CreatedAt: createdDate
                }
            ]
        };

        // 3. Single backend call — creates Customer + SalesOrder + Link
        await clientAPI.executeAction({
            "Name": "/demoapp/Actions/CreateCustomerWithSalesOrder.action",
            "Properties": {
                "Properties": deepPayload
            }
        });
        // 4. Clean up temp data
        appData.CustomerData = null;
        

        return clientAPI.executeAction({
            "Name": "/demoapp/Actions/CloseModalPage_Complete.action",
            "Properties": { "Message": "Customer and Sales Order Created Successfully" }
        });

    } catch (error) {
        let errorMessage = "Unknown error";
        if (error) {
            if (typeof error === "string") errorMessage = error;
            else if (error.message) errorMessage = error.message;
            else if (error.data) errorMessage = typeof error.data === "string"
                                                 ? error.data
                                                 : JSON.stringify(error.data);
            else {
                try {
                    errorMessage = JSON.stringify(error, Object.getOwnPropertyNames(error));
                } catch (e) {
                    errorMessage = String(error);
                }
            }
        }

        return clientAPI.executeAction({
            "Name": "/demoapp/Actions/CustomerCreationFailure.action",
            "Properties": { "Message": errorMessage }
        });
    }
}