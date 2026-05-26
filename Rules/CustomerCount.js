/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function CustomerCount(clientAPI) {
    // Uses the folder name from your project as the path to the service
    return clientAPI.count('/demoapp/Services/com_sap_edm_sampleservice_v4.service', 'Customers', '')
        .then((count) => {
            return count.toString();
        })
        .catch((error) => {
            clientAPI.log(`Error fetching customer count: ${error}`, 'Error');
            return '0';
        });
}

