/**
 * Calculates customer count synchronously for the UI layout.
 * @param {IClientAPI} clientAPI
 */
export default async function Cnt(clientAPI) {
    try {
        // Use await to pause execution until the OData service returns the count number
        const count = await clientAPI.count('/demoapp/Services/com_sap_edm_sampleservice_v4.service', 'Customers', '');
        
        // Return the final string directly to the Caption property
        return `Total Customers: ${count}`;
    } catch (error) {
        // Log the error to your mobile client console for troubleshooting
        clientAPI.log(`Error fetching customer count: ${error}`, 'Error');
        return 'Total Customers: 0';
    }
}
