/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default async function CreateCustomerAndSales(clientAPI) {

    const pageProxy = clientAPI.getPageProxy();

    const appData = clientAPI.getAppClientData();

    const customerData = appData.CustomerData;

    try {

        const customerResult = await clientAPI.executeAction({
            "Name": "/demoapp/Actions/New_Customer_Create.action",
            "Properties": {
                "Properties": customerData
            }
        });

        const createdCustomer = JSON.parse(customerResult.data);

        const customerId = createdCustomer.CustomerID;

        const currencyCode = pageProxy.evaluateTargetPath(
            '#Control:FCSalesOrderCurrency/#Value'
        );

        const grossAmount = pageProxy.evaluateTargetPath(
            '#Control:FCSalesOrderGrossAmount/#Value'
        );

        const netAmount = pageProxy.evaluateTargetPath(
            '#Control:FCSalesOrderNetAmount/#Value'
        );

        const taxAmount = pageProxy.evaluateTargetPath(
            '#Control:FCSalesOrderTaxAmount/#Value'
        );

        const lifeCycleStatus = pageProxy.evaluateTargetPath(
            '#Control:FCSalesOrderLifeCycle/#Value'
        );

        const lifeCycleStatusName = pageProxy.evaluateTargetPath(
            '#Control:FCSalesOrderLifeCycleStatusName/#Value'
        );


        await clientAPI.executeAction({
            "Name": "/demoapp/Actions/New_SalesOrder_Create.action",
            "Properties": {
                "Properties": {

                    "CustomerID": customerId,

                    "CurrencyCode": currencyCode.toUpperCase(),

                    "GrossAmount": Number(grossAmount),

                    "NetAmount": Number(netAmount),

                    "TaxAmount": Number(taxAmount),

                    "LifeCycleStatus": "N",

                    "LifeCycleStatusName": "New"
                }
            }
        });

        return clientAPI.executeAction({
            "Name": "/demoapp/Actions/CloseModalPage_Complete.action",
            "Properties": {
                "Message": "Customer and Sales Order Created"
            }
        });

    } catch (error) {

        return clientAPI.executeAction({
            "Name": "/demoapp/Actions/CustomerCreationFailure.action",
            "Properties": {
                "Message": JSON.stringify(error)
            }
        });
    }
}