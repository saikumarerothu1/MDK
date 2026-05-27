/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/demoapp/i18n/i18n.properties":
/*!********************************************************!*\
  !*** ./build.definitions/demoapp/i18n/i18n.properties ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "Customers=Customers\nCustomer_Detail=Customer Detail\nProducts=Products\nProduct_Detail=Product Detail\nSalesOrderHeaders=SalesOrderHeaders\nSalesOrderHeader_Detail=SalesOrderHeader Detail\nSalesOrderItems=SalesOrderItems\nSalesOrderItem_Detail=SalesOrderItem Detail\nPurchaseOrderItem_Detail=PurchaseOrderItem Detail"

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let demoapp_actions_application_appupdate_action = __webpack_require__(/*! ./demoapp/Actions/Application/AppUpdate.action */ "./build.definitions/demoapp/Actions/Application/AppUpdate.action")
let demoapp_actions_application_appupdatefailuremessage_action = __webpack_require__(/*! ./demoapp/Actions/Application/AppUpdateFailureMessage.action */ "./build.definitions/demoapp/Actions/Application/AppUpdateFailureMessage.action")
let demoapp_actions_application_appupdateprogressbanner_action = __webpack_require__(/*! ./demoapp/Actions/Application/AppUpdateProgressBanner.action */ "./build.definitions/demoapp/Actions/Application/AppUpdateProgressBanner.action")
let demoapp_actions_application_appupdatesuccessmessage_action = __webpack_require__(/*! ./demoapp/Actions/Application/AppUpdateSuccessMessage.action */ "./build.definitions/demoapp/Actions/Application/AppUpdateSuccessMessage.action")
let demoapp_actions_application_logout_action = __webpack_require__(/*! ./demoapp/Actions/Application/Logout.action */ "./build.definitions/demoapp/Actions/Application/Logout.action")
let demoapp_actions_application_navtoabout_action = __webpack_require__(/*! ./demoapp/Actions/Application/NavToAbout.action */ "./build.definitions/demoapp/Actions/Application/NavToAbout.action")
let demoapp_actions_application_navtoactivitylog_action = __webpack_require__(/*! ./demoapp/Actions/Application/NavToActivityLog.action */ "./build.definitions/demoapp/Actions/Application/NavToActivityLog.action")
let demoapp_actions_application_navtosupport_action = __webpack_require__(/*! ./demoapp/Actions/Application/NavToSupport.action */ "./build.definitions/demoapp/Actions/Application/NavToSupport.action")
let demoapp_actions_application_onwillupdate_action = __webpack_require__(/*! ./demoapp/Actions/Application/OnWillUpdate.action */ "./build.definitions/demoapp/Actions/Application/OnWillUpdate.action")
let demoapp_actions_application_reset_action = __webpack_require__(/*! ./demoapp/Actions/Application/Reset.action */ "./build.definitions/demoapp/Actions/Application/Reset.action")
let demoapp_actions_application_resetmessage_action = __webpack_require__(/*! ./demoapp/Actions/Application/ResetMessage.action */ "./build.definitions/demoapp/Actions/Application/ResetMessage.action")
let demoapp_actions_application_usermenupopover_action = __webpack_require__(/*! ./demoapp/Actions/Application/UserMenuPopover.action */ "./build.definitions/demoapp/Actions/Application/UserMenuPopover.action")
let demoapp_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./demoapp/Actions/CloseModalPage_Cancel.action */ "./build.definitions/demoapp/Actions/CloseModalPage_Cancel.action")
let demoapp_actions_closemodalpage_complete_action = __webpack_require__(/*! ./demoapp/Actions/CloseModalPage_Complete.action */ "./build.definitions/demoapp/Actions/CloseModalPage_Complete.action")
let demoapp_actions_closepage_action = __webpack_require__(/*! ./demoapp/Actions/ClosePage.action */ "./build.definitions/demoapp/Actions/ClosePage.action")
let demoapp_actions_com_sap_edm_sampleservice_v4_customers_navtocustomers_detail_action = __webpack_require__(/*! ./demoapp/Actions/com_sap_edm_sampleservice_v4/Customers/NavToCustomers_Detail.action */ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Customers/NavToCustomers_Detail.action")
let demoapp_actions_com_sap_edm_sampleservice_v4_customers_navtocustomers_list_action = __webpack_require__(/*! ./demoapp/Actions/com_sap_edm_sampleservice_v4/Customers/NavToCustomers_List.action */ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Customers/NavToCustomers_List.action")
let demoapp_actions_com_sap_edm_sampleservice_v4_products_navtoproducts_detail_action = __webpack_require__(/*! ./demoapp/Actions/com_sap_edm_sampleservice_v4/Products/NavToProducts_Detail.action */ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Products/NavToProducts_Detail.action")
let demoapp_actions_com_sap_edm_sampleservice_v4_products_navtoproducts_list_action = __webpack_require__(/*! ./demoapp/Actions/com_sap_edm_sampleservice_v4/Products/NavToProducts_List.action */ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Products/NavToProducts_List.action")
let demoapp_actions_com_sap_edm_sampleservice_v4_purchaseorderitems_navtopurchaseorderitems_detail_action = __webpack_require__(/*! ./demoapp/Actions/com_sap_edm_sampleservice_v4/PurchaseOrderItems/NavToPurchaseOrderItems_Detail.action */ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/PurchaseOrderItems/NavToPurchaseOrderItems_Detail.action")
let demoapp_actions_com_sap_edm_sampleservice_v4_salesorderheaders_navtosalesorderheaders_detail_action = __webpack_require__(/*! ./demoapp/Actions/com_sap_edm_sampleservice_v4/SalesOrderHeaders/NavToSalesOrderHeaders_Detail.action */ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/SalesOrderHeaders/NavToSalesOrderHeaders_Detail.action")
let demoapp_actions_com_sap_edm_sampleservice_v4_salesorderheaders_navtosalesorderheaders_list_action = __webpack_require__(/*! ./demoapp/Actions/com_sap_edm_sampleservice_v4/SalesOrderHeaders/NavToSalesOrderHeaders_List.action */ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/SalesOrderHeaders/NavToSalesOrderHeaders_List.action")
let demoapp_actions_com_sap_edm_sampleservice_v4_salesorderitems_navtosalesorderitems_detail_action = __webpack_require__(/*! ./demoapp/Actions/com_sap_edm_sampleservice_v4/SalesOrderItems/NavToSalesOrderItems_Detail.action */ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/SalesOrderItems/NavToSalesOrderItems_Detail.action")
let demoapp_actions_com_sap_edm_sampleservice_v4_salesorderitems_navtosalesorderitems_list_action = __webpack_require__(/*! ./demoapp/Actions/com_sap_edm_sampleservice_v4/SalesOrderItems/NavToSalesOrderItems_List.action */ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/SalesOrderItems/NavToSalesOrderItems_List.action")
let demoapp_actions_com_sap_edm_sampleservice_v4_service_closeoffline_action = __webpack_require__(/*! ./demoapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOffline.action */ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOffline.action")
let demoapp_actions_com_sap_edm_sampleservice_v4_service_closeofflinefailuremessage_action = __webpack_require__(/*! ./demoapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineFailureMessage.action */ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineFailureMessage.action")
let demoapp_actions_com_sap_edm_sampleservice_v4_service_closeofflinesuccessmessage_action = __webpack_require__(/*! ./demoapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineSuccessMessage.action */ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineSuccessMessage.action")
let demoapp_actions_com_sap_edm_sampleservice_v4_service_downloadoffline_action = __webpack_require__(/*! ./demoapp/Actions/com_sap_edm_sampleservice_v4/Service/DownloadOffline.action */ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/DownloadOffline.action")
let demoapp_actions_com_sap_edm_sampleservice_v4_service_downloadstartedmessage_action = __webpack_require__(/*! ./demoapp/Actions/com_sap_edm_sampleservice_v4/Service/DownloadStartedMessage.action */ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/DownloadStartedMessage.action")
let demoapp_actions_com_sap_edm_sampleservice_v4_service_initializeoffline_action = __webpack_require__(/*! ./demoapp/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOffline.action */ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOffline.action")
let demoapp_actions_com_sap_edm_sampleservice_v4_service_initializeofflinefailuremessage_action = __webpack_require__(/*! ./demoapp/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOfflineFailureMessage.action */ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOfflineFailureMessage.action")
let demoapp_actions_com_sap_edm_sampleservice_v4_service_syncfailuremessage_action = __webpack_require__(/*! ./demoapp/Actions/com_sap_edm_sampleservice_v4/Service/SyncFailureMessage.action */ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/SyncFailureMessage.action")
let demoapp_actions_com_sap_edm_sampleservice_v4_service_syncstartedmessage_action = __webpack_require__(/*! ./demoapp/Actions/com_sap_edm_sampleservice_v4/Service/SyncStartedMessage.action */ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/SyncStartedMessage.action")
let demoapp_actions_com_sap_edm_sampleservice_v4_service_uploadoffline_action = __webpack_require__(/*! ./demoapp/Actions/com_sap_edm_sampleservice_v4/Service/UploadOffline.action */ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/UploadOffline.action")
let demoapp_actions_createcustomerentityfailuremessage_action = __webpack_require__(/*! ./demoapp/Actions/CreateCustomerEntityFailureMessage.action */ "./build.definitions/demoapp/Actions/CreateCustomerEntityFailureMessage.action")
let demoapp_actions_createcustomerwithsalesorder_action = __webpack_require__(/*! ./demoapp/Actions/CreateCustomerWithSalesOrder.action */ "./build.definitions/demoapp/Actions/CreateCustomerWithSalesOrder.action")
let demoapp_actions_customercreationfailure_action = __webpack_require__(/*! ./demoapp/Actions/CustomerCreationFailure.action */ "./build.definitions/demoapp/Actions/CustomerCreationFailure.action")
let demoapp_actions_customers_createentity_action = __webpack_require__(/*! ./demoapp/Actions/Customers_CreateEntity.action */ "./build.definitions/demoapp/Actions/Customers_CreateEntity.action")
let demoapp_actions_customers_deleteconfirmation_action = __webpack_require__(/*! ./demoapp/Actions/Customers_DeleteConfirmation.action */ "./build.definitions/demoapp/Actions/Customers_DeleteConfirmation.action")
let demoapp_actions_customers_deleteentity_action = __webpack_require__(/*! ./demoapp/Actions/Customers_DeleteEntity.action */ "./build.definitions/demoapp/Actions/Customers_DeleteEntity.action")
let demoapp_actions_customers_updateentity_action = __webpack_require__(/*! ./demoapp/Actions/Customers_UpdateEntity.action */ "./build.definitions/demoapp/Actions/Customers_UpdateEntity.action")
let demoapp_actions_deletecustomerentityfailuremessage_action = __webpack_require__(/*! ./demoapp/Actions/DeleteCustomerEntityFailureMessage.action */ "./build.definitions/demoapp/Actions/DeleteCustomerEntityFailureMessage.action")
let demoapp_actions_errorarchive_errorarchive_syncfailure_action = __webpack_require__(/*! ./demoapp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action */ "./build.definitions/demoapp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action")
let demoapp_actions_errorarchive_navtoerrorarchive_detail_action = __webpack_require__(/*! ./demoapp/Actions/ErrorArchive/NavToErrorArchive_Detail.action */ "./build.definitions/demoapp/Actions/ErrorArchive/NavToErrorArchive_Detail.action")
let demoapp_actions_errorarchive_navtoerrorarchive_list_action = __webpack_require__(/*! ./demoapp/Actions/ErrorArchive/NavToErrorArchive_List.action */ "./build.definitions/demoapp/Actions/ErrorArchive/NavToErrorArchive_List.action")
let demoapp_actions_genericbannermessage_action = __webpack_require__(/*! ./demoapp/Actions/GenericBannerMessage.action */ "./build.definitions/demoapp/Actions/GenericBannerMessage.action")
let demoapp_actions_genericmessagebox_action = __webpack_require__(/*! ./demoapp/Actions/GenericMessageBox.action */ "./build.definitions/demoapp/Actions/GenericMessageBox.action")
let demoapp_actions_genericnavigation_action = __webpack_require__(/*! ./demoapp/Actions/GenericNavigation.action */ "./build.definitions/demoapp/Actions/GenericNavigation.action")
let demoapp_actions_generictoastmessage_action = __webpack_require__(/*! ./demoapp/Actions/GenericToastMessage.action */ "./build.definitions/demoapp/Actions/GenericToastMessage.action")
let demoapp_actions_logging_loguploadfailure_action = __webpack_require__(/*! ./demoapp/Actions/Logging/LogUploadFailure.action */ "./build.definitions/demoapp/Actions/Logging/LogUploadFailure.action")
let demoapp_actions_logging_loguploadsuccessful_action = __webpack_require__(/*! ./demoapp/Actions/Logging/LogUploadSuccessful.action */ "./build.definitions/demoapp/Actions/Logging/LogUploadSuccessful.action")
let demoapp_actions_logging_uploadlog_action = __webpack_require__(/*! ./demoapp/Actions/Logging/UploadLog.action */ "./build.definitions/demoapp/Actions/Logging/UploadLog.action")
let demoapp_actions_logging_uploadlogprogress_action = __webpack_require__(/*! ./demoapp/Actions/Logging/UploadLogProgress.action */ "./build.definitions/demoapp/Actions/Logging/UploadLogProgress.action")
let demoapp_actions_navtocustomers_create_action = __webpack_require__(/*! ./demoapp/Actions/NavToCustomers_Create.action */ "./build.definitions/demoapp/Actions/NavToCustomers_Create.action")
let demoapp_actions_navtocustomers_detail_action = __webpack_require__(/*! ./demoapp/Actions/NavToCustomers_Detail.action */ "./build.definitions/demoapp/Actions/NavToCustomers_Detail.action")
let demoapp_actions_navtocustomers_edit_action = __webpack_require__(/*! ./demoapp/Actions/NavToCustomers_Edit.action */ "./build.definitions/demoapp/Actions/NavToCustomers_Edit.action")
let demoapp_actions_navtocustomers_list_action = __webpack_require__(/*! ./demoapp/Actions/NavToCustomers_List.action */ "./build.definitions/demoapp/Actions/NavToCustomers_List.action")
let demoapp_actions_navtonewcreatecustomer_action = __webpack_require__(/*! ./demoapp/Actions/NavToNewCreateCustomer.action */ "./build.definitions/demoapp/Actions/NavToNewCreateCustomer.action")
let demoapp_actions_navtosales_action = __webpack_require__(/*! ./demoapp/Actions/NavToSales.action */ "./build.definitions/demoapp/Actions/NavToSales.action")
let demoapp_actions_new_customer_create_action = __webpack_require__(/*! ./demoapp/Actions/New_Customer_Create.action */ "./build.definitions/demoapp/Actions/New_Customer_Create.action")
let demoapp_actions_newcustomertosalesorder_action = __webpack_require__(/*! ./demoapp/Actions/NewCustomertoSalesorder.action */ "./build.definitions/demoapp/Actions/NewCustomertoSalesorder.action")
let demoapp_actions_product_detail_action = __webpack_require__(/*! ./demoapp/Actions/Product_detail.action */ "./build.definitions/demoapp/Actions/Product_detail.action")
let demoapp_actions_product_list_action = __webpack_require__(/*! ./demoapp/Actions/Product_list.action */ "./build.definitions/demoapp/Actions/Product_list.action")
let demoapp_actions_sales_order_header_action = __webpack_require__(/*! ./demoapp/Actions/Sales_Order_Header.action */ "./build.definitions/demoapp/Actions/Sales_Order_Header.action")
let demoapp_actions_salesorderheaders_createentity_action = __webpack_require__(/*! ./demoapp/Actions/SalesOrderHeaders_CreateEntity.action */ "./build.definitions/demoapp/Actions/SalesOrderHeaders_CreateEntity.action")
let demoapp_actions_updatecustomerentityfailuremessage_action = __webpack_require__(/*! ./demoapp/Actions/UpdateCustomerEntityFailureMessage.action */ "./build.definitions/demoapp/Actions/UpdateCustomerEntityFailureMessage.action")
let demoapp_actions_validationfailure_action = __webpack_require__(/*! ./demoapp/Actions/ValidationFailure.action */ "./build.definitions/demoapp/Actions/ValidationFailure.action")
let demoapp_actions_validationfailureaction_action = __webpack_require__(/*! ./demoapp/Actions/ValidationFailureAction.action */ "./build.definitions/demoapp/Actions/ValidationFailureAction.action")
let demoapp_globals_application_appdefinition_version_global = __webpack_require__(/*! ./demoapp/Globals/Application/AppDefinition_Version.global */ "./build.definitions/demoapp/Globals/Application/AppDefinition_Version.global")
let demoapp_globals_application_applicationname_global = __webpack_require__(/*! ./demoapp/Globals/Application/ApplicationName.global */ "./build.definitions/demoapp/Globals/Application/ApplicationName.global")
let demoapp_globals_application_supportemail_global = __webpack_require__(/*! ./demoapp/Globals/Application/SupportEmail.global */ "./build.definitions/demoapp/Globals/Application/SupportEmail.global")
let demoapp_globals_application_supportphone_global = __webpack_require__(/*! ./demoapp/Globals/Application/SupportPhone.global */ "./build.definitions/demoapp/Globals/Application/SupportPhone.global")
let demoapp_i18n_i18n_properties = __webpack_require__(/*! ./demoapp/i18n/i18n.properties */ "./build.definitions/demoapp/i18n/i18n.properties")
let demoapp_images_customer__service_png = __webpack_require__(/*! ./demoapp/Images/customer-service.png */ "./build.definitions/demoapp/Images/customer-service.png")
let demoapp_jsconfig_json = __webpack_require__(/*! ./demoapp/jsconfig.json */ "./build.definitions/demoapp/jsconfig.json")
let demoapp_pages_application_about_page = __webpack_require__(/*! ./demoapp/Pages/Application/About.page */ "./build.definitions/demoapp/Pages/Application/About.page")
let demoapp_pages_application_support_page = __webpack_require__(/*! ./demoapp/Pages/Application/Support.page */ "./build.definitions/demoapp/Pages/Application/Support.page")
let demoapp_pages_application_useractivitylog_page = __webpack_require__(/*! ./demoapp/Pages/Application/UserActivityLog.page */ "./build.definitions/demoapp/Pages/Application/UserActivityLog.page")
let demoapp_pages_com_sap_edm_sampleservice_v4_customers_customers_detail_page = __webpack_require__(/*! ./demoapp/Pages/com_sap_edm_sampleservice_v4_Customers/Customers_Detail.page */ "./build.definitions/demoapp/Pages/com_sap_edm_sampleservice_v4_Customers/Customers_Detail.page")
let demoapp_pages_com_sap_edm_sampleservice_v4_customers_customers_list_page = __webpack_require__(/*! ./demoapp/Pages/com_sap_edm_sampleservice_v4_Customers/Customers_List.page */ "./build.definitions/demoapp/Pages/com_sap_edm_sampleservice_v4_Customers/Customers_List.page")
let demoapp_pages_com_sap_edm_sampleservice_v4_products_products_detail_page = __webpack_require__(/*! ./demoapp/Pages/com_sap_edm_sampleservice_v4_Products/Products_Detail.page */ "./build.definitions/demoapp/Pages/com_sap_edm_sampleservice_v4_Products/Products_Detail.page")
let demoapp_pages_com_sap_edm_sampleservice_v4_products_products_list_page = __webpack_require__(/*! ./demoapp/Pages/com_sap_edm_sampleservice_v4_Products/Products_List.page */ "./build.definitions/demoapp/Pages/com_sap_edm_sampleservice_v4_Products/Products_List.page")
let demoapp_pages_com_sap_edm_sampleservice_v4_purchaseorderitems_purchaseorderitems_detail_page = __webpack_require__(/*! ./demoapp/Pages/com_sap_edm_sampleservice_v4_PurchaseOrderItems/PurchaseOrderItems_Detail.page */ "./build.definitions/demoapp/Pages/com_sap_edm_sampleservice_v4_PurchaseOrderItems/PurchaseOrderItems_Detail.page")
let demoapp_pages_com_sap_edm_sampleservice_v4_salesorderheaders_salesorderheaders_detail_page = __webpack_require__(/*! ./demoapp/Pages/com_sap_edm_sampleservice_v4_SalesOrderHeaders/SalesOrderHeaders_Detail.page */ "./build.definitions/demoapp/Pages/com_sap_edm_sampleservice_v4_SalesOrderHeaders/SalesOrderHeaders_Detail.page")
let demoapp_pages_com_sap_edm_sampleservice_v4_salesorderheaders_salesorderheaders_list_page = __webpack_require__(/*! ./demoapp/Pages/com_sap_edm_sampleservice_v4_SalesOrderHeaders/SalesOrderHeaders_List.page */ "./build.definitions/demoapp/Pages/com_sap_edm_sampleservice_v4_SalesOrderHeaders/SalesOrderHeaders_List.page")
let demoapp_pages_com_sap_edm_sampleservice_v4_salesorderitems_salesorderitems_detail_page = __webpack_require__(/*! ./demoapp/Pages/com_sap_edm_sampleservice_v4_SalesOrderItems/SalesOrderItems_Detail.page */ "./build.definitions/demoapp/Pages/com_sap_edm_sampleservice_v4_SalesOrderItems/SalesOrderItems_Detail.page")
let demoapp_pages_com_sap_edm_sampleservice_v4_salesorderitems_salesorderitems_list_page = __webpack_require__(/*! ./demoapp/Pages/com_sap_edm_sampleservice_v4_SalesOrderItems/SalesOrderItems_List.page */ "./build.definitions/demoapp/Pages/com_sap_edm_sampleservice_v4_SalesOrderItems/SalesOrderItems_List.page")
let demoapp_pages_customers_create_page = __webpack_require__(/*! ./demoapp/Pages/Customers_Create.page */ "./build.definitions/demoapp/Pages/Customers_Create.page")
let demoapp_pages_customers_detail_page = __webpack_require__(/*! ./demoapp/Pages/Customers_Detail.page */ "./build.definitions/demoapp/Pages/Customers_Detail.page")
let demoapp_pages_customers_edit_page = __webpack_require__(/*! ./demoapp/Pages/Customers_Edit.page */ "./build.definitions/demoapp/Pages/Customers_Edit.page")
let demoapp_pages_customers_lis_page = __webpack_require__(/*! ./demoapp/Pages/Customers_Lis.page */ "./build.definitions/demoapp/Pages/Customers_Lis.page")
let demoapp_pages_customers_orders_page = __webpack_require__(/*! ./demoapp/Pages/Customers_Orders.page */ "./build.definitions/demoapp/Pages/Customers_Orders.page")
let demoapp_pages_errorarchive_errorarchive_detail_page = __webpack_require__(/*! ./demoapp/Pages/ErrorArchive/ErrorArchive_Detail.page */ "./build.definitions/demoapp/Pages/ErrorArchive/ErrorArchive_Detail.page")
let demoapp_pages_errorarchive_errorarchive_list_page = __webpack_require__(/*! ./demoapp/Pages/ErrorArchive/ErrorArchive_List.page */ "./build.definitions/demoapp/Pages/ErrorArchive/ErrorArchive_List.page")
let demoapp_pages_main_page = __webpack_require__(/*! ./demoapp/Pages/Main.page */ "./build.definitions/demoapp/Pages/Main.page")
let demoapp_pages_new_customer_create_page = __webpack_require__(/*! ./demoapp/Pages/New_Customer_Create.page */ "./build.definitions/demoapp/Pages/New_Customer_Create.page")
let demoapp_pages_product_detail_page = __webpack_require__(/*! ./demoapp/Pages/Product_Detail.page */ "./build.definitions/demoapp/Pages/Product_Detail.page")
let demoapp_pages_products_list_page = __webpack_require__(/*! ./demoapp/Pages/Products_List.page */ "./build.definitions/demoapp/Pages/Products_List.page")
let demoapp_pages_sales_order_header_list_page = __webpack_require__(/*! ./demoapp/Pages/Sales_Order_Header_list.page */ "./build.definitions/demoapp/Pages/Sales_Order_Header_list.page")
let demoapp_pages_sales_order_items_page = __webpack_require__(/*! ./demoapp/Pages/Sales_Order_Items.page */ "./build.definitions/demoapp/Pages/Sales_Order_Items.page")
let demoapp_pages_salesorder_create_page = __webpack_require__(/*! ./demoapp/Pages/SalesOrder_Create.page */ "./build.definitions/demoapp/Pages/SalesOrder_Create.page")
let demoapp_pages_salesorderheaders_create_page = __webpack_require__(/*! ./demoapp/Pages/SalesOrderHeaders_Create.page */ "./build.definitions/demoapp/Pages/SalesOrderHeaders_Create.page")
let demoapp_pages_salesorders_details_page = __webpack_require__(/*! ./demoapp/Pages/SalesOrders_Details.page */ "./build.definitions/demoapp/Pages/SalesOrders_Details.page")
let demoapp_rules_application_appupdatefailure_js = __webpack_require__(/*! ./demoapp/Rules/Application/AppUpdateFailure.js */ "./build.definitions/demoapp/Rules/Application/AppUpdateFailure.js")
let demoapp_rules_application_appupdatesuccess_js = __webpack_require__(/*! ./demoapp/Rules/Application/AppUpdateSuccess.js */ "./build.definitions/demoapp/Rules/Application/AppUpdateSuccess.js")
let demoapp_rules_application_clientismultiusermode_js = __webpack_require__(/*! ./demoapp/Rules/Application/ClientIsMultiUserMode.js */ "./build.definitions/demoapp/Rules/Application/ClientIsMultiUserMode.js")
let demoapp_rules_application_getclientsupportversions_js = __webpack_require__(/*! ./demoapp/Rules/Application/GetClientSupportVersions.js */ "./build.definitions/demoapp/Rules/Application/GetClientSupportVersions.js")
let demoapp_rules_application_getclientversion_js = __webpack_require__(/*! ./demoapp/Rules/Application/GetClientVersion.js */ "./build.definitions/demoapp/Rules/Application/GetClientVersion.js")
let demoapp_rules_application_onwillupdate_js = __webpack_require__(/*! ./demoapp/Rules/Application/OnWillUpdate.js */ "./build.definitions/demoapp/Rules/Application/OnWillUpdate.js")
let demoapp_rules_application_resetappsettingsandlogout_js = __webpack_require__(/*! ./demoapp/Rules/Application/ResetAppSettingsAndLogout.js */ "./build.definitions/demoapp/Rules/Application/ResetAppSettingsAndLogout.js")
let demoapp_rules_cnt_js = __webpack_require__(/*! ./demoapp/Rules/Cnt.js */ "./build.definitions/demoapp/Rules/Cnt.js")
let demoapp_rules_com_sap_edm_sampleservice_v4_errorarchive_checkforsyncerror_js = __webpack_require__(/*! ./demoapp/Rules/com_sap_edm_sampleservice_v4/ErrorArchive_CheckForSyncError.js */ "./build.definitions/demoapp/Rules/com_sap_edm_sampleservice_v4/ErrorArchive_CheckForSyncError.js")
let demoapp_rules_count_js = __webpack_require__(/*! ./demoapp/Rules/Count.js */ "./build.definitions/demoapp/Rules/Count.js")
let demoapp_rules_country_list_js = __webpack_require__(/*! ./demoapp/Rules/Country_List.js */ "./build.definitions/demoapp/Rules/Country_List.js")
let demoapp_rules_createcustomerandsales_js = __webpack_require__(/*! ./demoapp/Rules/CreateCustomerAndSales.js */ "./build.definitions/demoapp/Rules/CreateCustomerAndSales.js")
let demoapp_rules_createvalidation_js = __webpack_require__(/*! ./demoapp/Rules/Createvalidation.js */ "./build.definitions/demoapp/Rules/Createvalidation.js")
let demoapp_rules_customerc_js = __webpack_require__(/*! ./demoapp/Rules/CustomerC.js */ "./build.definitions/demoapp/Rules/CustomerC.js")
let demoapp_rules_customercount_js = __webpack_require__(/*! ./demoapp/Rules/CustomerCount.js */ "./build.definitions/demoapp/Rules/CustomerCount.js")
let demoapp_rules_customercreatevalidation_js = __webpack_require__(/*! ./demoapp/Rules/CustomerCreateValidation.js */ "./build.definitions/demoapp/Rules/CustomerCreateValidation.js")
let demoapp_rules_customers_deleteconfirmation_js = __webpack_require__(/*! ./demoapp/Rules/Customers_DeleteConfirmation.js */ "./build.definitions/demoapp/Rules/Customers_DeleteConfirmation.js")
let demoapp_rules_customers_ordercount_js = __webpack_require__(/*! ./demoapp/Rules/Customers_OrderCount.js */ "./build.definitions/demoapp/Rules/Customers_OrderCount.js")
let demoapp_rules_emailvalidation_js = __webpack_require__(/*! ./demoapp/Rules/EmailValidation.js */ "./build.definitions/demoapp/Rules/EmailValidation.js")
let demoapp_rules_generatesalesorderid_js = __webpack_require__(/*! ./demoapp/Rules/GenerateSalesOrderID.js */ "./build.definitions/demoapp/Rules/GenerateSalesOrderID.js")
let demoapp_rules_getcountries_js = __webpack_require__(/*! ./demoapp/Rules/GetCountries.js */ "./build.definitions/demoapp/Rules/GetCountries.js")
let demoapp_rules_getcountrylist_js = __webpack_require__(/*! ./demoapp/Rules/GetCountryList.js */ "./build.definitions/demoapp/Rules/GetCountryList.js")
let demoapp_rules_getcustomercount_js = __webpack_require__(/*! ./demoapp/Rules/GetCustomerCount.js */ "./build.definitions/demoapp/Rules/GetCustomerCount.js")
let demoapp_rules_logging_loglevels_js = __webpack_require__(/*! ./demoapp/Rules/Logging/LogLevels.js */ "./build.definitions/demoapp/Rules/Logging/LogLevels.js")
let demoapp_rules_logging_settracecategories_js = __webpack_require__(/*! ./demoapp/Rules/Logging/SetTraceCategories.js */ "./build.definitions/demoapp/Rules/Logging/SetTraceCategories.js")
let demoapp_rules_logging_setuserloglevel_js = __webpack_require__(/*! ./demoapp/Rules/Logging/SetUserLogLevel.js */ "./build.definitions/demoapp/Rules/Logging/SetUserLogLevel.js")
let demoapp_rules_logging_togglelogging_js = __webpack_require__(/*! ./demoapp/Rules/Logging/ToggleLogging.js */ "./build.definitions/demoapp/Rules/Logging/ToggleLogging.js")
let demoapp_rules_logging_tracecategories_js = __webpack_require__(/*! ./demoapp/Rules/Logging/TraceCategories.js */ "./build.definitions/demoapp/Rules/Logging/TraceCategories.js")
let demoapp_rules_logging_userlogsetting_js = __webpack_require__(/*! ./demoapp/Rules/Logging/UserLogSetting.js */ "./build.definitions/demoapp/Rules/Logging/UserLogSetting.js")
let demoapp_rules_savecustomerdataandnavigate_js = __webpack_require__(/*! ./demoapp/Rules/SaveCustomerDataAndNavigate.js */ "./build.definitions/demoapp/Rules/SaveCustomerDataAndNavigate.js")
let demoapp_rules_service_initialize_js = __webpack_require__(/*! ./demoapp/Rules/Service/Initialize.js */ "./build.definitions/demoapp/Rules/Service/Initialize.js")
let demoapp_rules_storecustomertempdata_js = __webpack_require__(/*! ./demoapp/Rules/StoreCustomerTempData.js */ "./build.definitions/demoapp/Rules/StoreCustomerTempData.js")
let demoapp_services_com_sap_edm_sampleservice_v4_service = __webpack_require__(/*! ./demoapp/Services/com_sap_edm_sampleservice_v4.service */ "./build.definitions/demoapp/Services/com_sap_edm_sampleservice_v4.service")
let demoapp_styles_styles_css = __webpack_require__(/*! ./demoapp/Styles/Styles.css */ "./build.definitions/demoapp/Styles/Styles.css")
let demoapp_styles_styles_less = __webpack_require__(/*! ./demoapp/Styles/Styles.less */ "./build.definitions/demoapp/Styles/Styles.less")
let demoapp_styles_styles_light_css = __webpack_require__(/*! ./demoapp/Styles/Styles.light.css */ "./build.definitions/demoapp/Styles/Styles.light.css")
let demoapp_styles_styles_light_json = __webpack_require__(/*! ./demoapp/Styles/Styles.light.json */ "./build.definitions/demoapp/Styles/Styles.light.json")
let demoapp_styles_styles_light_nss = __webpack_require__(/*! ./demoapp/Styles/Styles.light.nss */ "./build.definitions/demoapp/Styles/Styles.light.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	demoapp_actions_application_appupdate_action : demoapp_actions_application_appupdate_action,
	demoapp_actions_application_appupdatefailuremessage_action : demoapp_actions_application_appupdatefailuremessage_action,
	demoapp_actions_application_appupdateprogressbanner_action : demoapp_actions_application_appupdateprogressbanner_action,
	demoapp_actions_application_appupdatesuccessmessage_action : demoapp_actions_application_appupdatesuccessmessage_action,
	demoapp_actions_application_logout_action : demoapp_actions_application_logout_action,
	demoapp_actions_application_navtoabout_action : demoapp_actions_application_navtoabout_action,
	demoapp_actions_application_navtoactivitylog_action : demoapp_actions_application_navtoactivitylog_action,
	demoapp_actions_application_navtosupport_action : demoapp_actions_application_navtosupport_action,
	demoapp_actions_application_onwillupdate_action : demoapp_actions_application_onwillupdate_action,
	demoapp_actions_application_reset_action : demoapp_actions_application_reset_action,
	demoapp_actions_application_resetmessage_action : demoapp_actions_application_resetmessage_action,
	demoapp_actions_application_usermenupopover_action : demoapp_actions_application_usermenupopover_action,
	demoapp_actions_closemodalpage_cancel_action : demoapp_actions_closemodalpage_cancel_action,
	demoapp_actions_closemodalpage_complete_action : demoapp_actions_closemodalpage_complete_action,
	demoapp_actions_closepage_action : demoapp_actions_closepage_action,
	demoapp_actions_com_sap_edm_sampleservice_v4_customers_navtocustomers_detail_action : demoapp_actions_com_sap_edm_sampleservice_v4_customers_navtocustomers_detail_action,
	demoapp_actions_com_sap_edm_sampleservice_v4_customers_navtocustomers_list_action : demoapp_actions_com_sap_edm_sampleservice_v4_customers_navtocustomers_list_action,
	demoapp_actions_com_sap_edm_sampleservice_v4_products_navtoproducts_detail_action : demoapp_actions_com_sap_edm_sampleservice_v4_products_navtoproducts_detail_action,
	demoapp_actions_com_sap_edm_sampleservice_v4_products_navtoproducts_list_action : demoapp_actions_com_sap_edm_sampleservice_v4_products_navtoproducts_list_action,
	demoapp_actions_com_sap_edm_sampleservice_v4_purchaseorderitems_navtopurchaseorderitems_detail_action : demoapp_actions_com_sap_edm_sampleservice_v4_purchaseorderitems_navtopurchaseorderitems_detail_action,
	demoapp_actions_com_sap_edm_sampleservice_v4_salesorderheaders_navtosalesorderheaders_detail_action : demoapp_actions_com_sap_edm_sampleservice_v4_salesorderheaders_navtosalesorderheaders_detail_action,
	demoapp_actions_com_sap_edm_sampleservice_v4_salesorderheaders_navtosalesorderheaders_list_action : demoapp_actions_com_sap_edm_sampleservice_v4_salesorderheaders_navtosalesorderheaders_list_action,
	demoapp_actions_com_sap_edm_sampleservice_v4_salesorderitems_navtosalesorderitems_detail_action : demoapp_actions_com_sap_edm_sampleservice_v4_salesorderitems_navtosalesorderitems_detail_action,
	demoapp_actions_com_sap_edm_sampleservice_v4_salesorderitems_navtosalesorderitems_list_action : demoapp_actions_com_sap_edm_sampleservice_v4_salesorderitems_navtosalesorderitems_list_action,
	demoapp_actions_com_sap_edm_sampleservice_v4_service_closeoffline_action : demoapp_actions_com_sap_edm_sampleservice_v4_service_closeoffline_action,
	demoapp_actions_com_sap_edm_sampleservice_v4_service_closeofflinefailuremessage_action : demoapp_actions_com_sap_edm_sampleservice_v4_service_closeofflinefailuremessage_action,
	demoapp_actions_com_sap_edm_sampleservice_v4_service_closeofflinesuccessmessage_action : demoapp_actions_com_sap_edm_sampleservice_v4_service_closeofflinesuccessmessage_action,
	demoapp_actions_com_sap_edm_sampleservice_v4_service_downloadoffline_action : demoapp_actions_com_sap_edm_sampleservice_v4_service_downloadoffline_action,
	demoapp_actions_com_sap_edm_sampleservice_v4_service_downloadstartedmessage_action : demoapp_actions_com_sap_edm_sampleservice_v4_service_downloadstartedmessage_action,
	demoapp_actions_com_sap_edm_sampleservice_v4_service_initializeoffline_action : demoapp_actions_com_sap_edm_sampleservice_v4_service_initializeoffline_action,
	demoapp_actions_com_sap_edm_sampleservice_v4_service_initializeofflinefailuremessage_action : demoapp_actions_com_sap_edm_sampleservice_v4_service_initializeofflinefailuremessage_action,
	demoapp_actions_com_sap_edm_sampleservice_v4_service_syncfailuremessage_action : demoapp_actions_com_sap_edm_sampleservice_v4_service_syncfailuremessage_action,
	demoapp_actions_com_sap_edm_sampleservice_v4_service_syncstartedmessage_action : demoapp_actions_com_sap_edm_sampleservice_v4_service_syncstartedmessage_action,
	demoapp_actions_com_sap_edm_sampleservice_v4_service_uploadoffline_action : demoapp_actions_com_sap_edm_sampleservice_v4_service_uploadoffline_action,
	demoapp_actions_createcustomerentityfailuremessage_action : demoapp_actions_createcustomerentityfailuremessage_action,
	demoapp_actions_createcustomerwithsalesorder_action : demoapp_actions_createcustomerwithsalesorder_action,
	demoapp_actions_customercreationfailure_action : demoapp_actions_customercreationfailure_action,
	demoapp_actions_customers_createentity_action : demoapp_actions_customers_createentity_action,
	demoapp_actions_customers_deleteconfirmation_action : demoapp_actions_customers_deleteconfirmation_action,
	demoapp_actions_customers_deleteentity_action : demoapp_actions_customers_deleteentity_action,
	demoapp_actions_customers_updateentity_action : demoapp_actions_customers_updateentity_action,
	demoapp_actions_deletecustomerentityfailuremessage_action : demoapp_actions_deletecustomerentityfailuremessage_action,
	demoapp_actions_errorarchive_errorarchive_syncfailure_action : demoapp_actions_errorarchive_errorarchive_syncfailure_action,
	demoapp_actions_errorarchive_navtoerrorarchive_detail_action : demoapp_actions_errorarchive_navtoerrorarchive_detail_action,
	demoapp_actions_errorarchive_navtoerrorarchive_list_action : demoapp_actions_errorarchive_navtoerrorarchive_list_action,
	demoapp_actions_genericbannermessage_action : demoapp_actions_genericbannermessage_action,
	demoapp_actions_genericmessagebox_action : demoapp_actions_genericmessagebox_action,
	demoapp_actions_genericnavigation_action : demoapp_actions_genericnavigation_action,
	demoapp_actions_generictoastmessage_action : demoapp_actions_generictoastmessage_action,
	demoapp_actions_logging_loguploadfailure_action : demoapp_actions_logging_loguploadfailure_action,
	demoapp_actions_logging_loguploadsuccessful_action : demoapp_actions_logging_loguploadsuccessful_action,
	demoapp_actions_logging_uploadlog_action : demoapp_actions_logging_uploadlog_action,
	demoapp_actions_logging_uploadlogprogress_action : demoapp_actions_logging_uploadlogprogress_action,
	demoapp_actions_navtocustomers_create_action : demoapp_actions_navtocustomers_create_action,
	demoapp_actions_navtocustomers_detail_action : demoapp_actions_navtocustomers_detail_action,
	demoapp_actions_navtocustomers_edit_action : demoapp_actions_navtocustomers_edit_action,
	demoapp_actions_navtocustomers_list_action : demoapp_actions_navtocustomers_list_action,
	demoapp_actions_navtonewcreatecustomer_action : demoapp_actions_navtonewcreatecustomer_action,
	demoapp_actions_navtosales_action : demoapp_actions_navtosales_action,
	demoapp_actions_new_customer_create_action : demoapp_actions_new_customer_create_action,
	demoapp_actions_newcustomertosalesorder_action : demoapp_actions_newcustomertosalesorder_action,
	demoapp_actions_product_detail_action : demoapp_actions_product_detail_action,
	demoapp_actions_product_list_action : demoapp_actions_product_list_action,
	demoapp_actions_sales_order_header_action : demoapp_actions_sales_order_header_action,
	demoapp_actions_salesorderheaders_createentity_action : demoapp_actions_salesorderheaders_createentity_action,
	demoapp_actions_updatecustomerentityfailuremessage_action : demoapp_actions_updatecustomerentityfailuremessage_action,
	demoapp_actions_validationfailure_action : demoapp_actions_validationfailure_action,
	demoapp_actions_validationfailureaction_action : demoapp_actions_validationfailureaction_action,
	demoapp_globals_application_appdefinition_version_global : demoapp_globals_application_appdefinition_version_global,
	demoapp_globals_application_applicationname_global : demoapp_globals_application_applicationname_global,
	demoapp_globals_application_supportemail_global : demoapp_globals_application_supportemail_global,
	demoapp_globals_application_supportphone_global : demoapp_globals_application_supportphone_global,
	demoapp_i18n_i18n_properties : demoapp_i18n_i18n_properties,
	demoapp_images_customer__service_png : demoapp_images_customer__service_png,
	demoapp_jsconfig_json : demoapp_jsconfig_json,
	demoapp_pages_application_about_page : demoapp_pages_application_about_page,
	demoapp_pages_application_support_page : demoapp_pages_application_support_page,
	demoapp_pages_application_useractivitylog_page : demoapp_pages_application_useractivitylog_page,
	demoapp_pages_com_sap_edm_sampleservice_v4_customers_customers_detail_page : demoapp_pages_com_sap_edm_sampleservice_v4_customers_customers_detail_page,
	demoapp_pages_com_sap_edm_sampleservice_v4_customers_customers_list_page : demoapp_pages_com_sap_edm_sampleservice_v4_customers_customers_list_page,
	demoapp_pages_com_sap_edm_sampleservice_v4_products_products_detail_page : demoapp_pages_com_sap_edm_sampleservice_v4_products_products_detail_page,
	demoapp_pages_com_sap_edm_sampleservice_v4_products_products_list_page : demoapp_pages_com_sap_edm_sampleservice_v4_products_products_list_page,
	demoapp_pages_com_sap_edm_sampleservice_v4_purchaseorderitems_purchaseorderitems_detail_page : demoapp_pages_com_sap_edm_sampleservice_v4_purchaseorderitems_purchaseorderitems_detail_page,
	demoapp_pages_com_sap_edm_sampleservice_v4_salesorderheaders_salesorderheaders_detail_page : demoapp_pages_com_sap_edm_sampleservice_v4_salesorderheaders_salesorderheaders_detail_page,
	demoapp_pages_com_sap_edm_sampleservice_v4_salesorderheaders_salesorderheaders_list_page : demoapp_pages_com_sap_edm_sampleservice_v4_salesorderheaders_salesorderheaders_list_page,
	demoapp_pages_com_sap_edm_sampleservice_v4_salesorderitems_salesorderitems_detail_page : demoapp_pages_com_sap_edm_sampleservice_v4_salesorderitems_salesorderitems_detail_page,
	demoapp_pages_com_sap_edm_sampleservice_v4_salesorderitems_salesorderitems_list_page : demoapp_pages_com_sap_edm_sampleservice_v4_salesorderitems_salesorderitems_list_page,
	demoapp_pages_customers_create_page : demoapp_pages_customers_create_page,
	demoapp_pages_customers_detail_page : demoapp_pages_customers_detail_page,
	demoapp_pages_customers_edit_page : demoapp_pages_customers_edit_page,
	demoapp_pages_customers_lis_page : demoapp_pages_customers_lis_page,
	demoapp_pages_customers_orders_page : demoapp_pages_customers_orders_page,
	demoapp_pages_errorarchive_errorarchive_detail_page : demoapp_pages_errorarchive_errorarchive_detail_page,
	demoapp_pages_errorarchive_errorarchive_list_page : demoapp_pages_errorarchive_errorarchive_list_page,
	demoapp_pages_main_page : demoapp_pages_main_page,
	demoapp_pages_new_customer_create_page : demoapp_pages_new_customer_create_page,
	demoapp_pages_product_detail_page : demoapp_pages_product_detail_page,
	demoapp_pages_products_list_page : demoapp_pages_products_list_page,
	demoapp_pages_sales_order_header_list_page : demoapp_pages_sales_order_header_list_page,
	demoapp_pages_sales_order_items_page : demoapp_pages_sales_order_items_page,
	demoapp_pages_salesorder_create_page : demoapp_pages_salesorder_create_page,
	demoapp_pages_salesorderheaders_create_page : demoapp_pages_salesorderheaders_create_page,
	demoapp_pages_salesorders_details_page : demoapp_pages_salesorders_details_page,
	demoapp_rules_application_appupdatefailure_js : demoapp_rules_application_appupdatefailure_js,
	demoapp_rules_application_appupdatesuccess_js : demoapp_rules_application_appupdatesuccess_js,
	demoapp_rules_application_clientismultiusermode_js : demoapp_rules_application_clientismultiusermode_js,
	demoapp_rules_application_getclientsupportversions_js : demoapp_rules_application_getclientsupportversions_js,
	demoapp_rules_application_getclientversion_js : demoapp_rules_application_getclientversion_js,
	demoapp_rules_application_onwillupdate_js : demoapp_rules_application_onwillupdate_js,
	demoapp_rules_application_resetappsettingsandlogout_js : demoapp_rules_application_resetappsettingsandlogout_js,
	demoapp_rules_cnt_js : demoapp_rules_cnt_js,
	demoapp_rules_com_sap_edm_sampleservice_v4_errorarchive_checkforsyncerror_js : demoapp_rules_com_sap_edm_sampleservice_v4_errorarchive_checkforsyncerror_js,
	demoapp_rules_count_js : demoapp_rules_count_js,
	demoapp_rules_country_list_js : demoapp_rules_country_list_js,
	demoapp_rules_createcustomerandsales_js : demoapp_rules_createcustomerandsales_js,
	demoapp_rules_createvalidation_js : demoapp_rules_createvalidation_js,
	demoapp_rules_customerc_js : demoapp_rules_customerc_js,
	demoapp_rules_customercount_js : demoapp_rules_customercount_js,
	demoapp_rules_customercreatevalidation_js : demoapp_rules_customercreatevalidation_js,
	demoapp_rules_customers_deleteconfirmation_js : demoapp_rules_customers_deleteconfirmation_js,
	demoapp_rules_customers_ordercount_js : demoapp_rules_customers_ordercount_js,
	demoapp_rules_emailvalidation_js : demoapp_rules_emailvalidation_js,
	demoapp_rules_generatesalesorderid_js : demoapp_rules_generatesalesorderid_js,
	demoapp_rules_getcountries_js : demoapp_rules_getcountries_js,
	demoapp_rules_getcountrylist_js : demoapp_rules_getcountrylist_js,
	demoapp_rules_getcustomercount_js : demoapp_rules_getcustomercount_js,
	demoapp_rules_logging_loglevels_js : demoapp_rules_logging_loglevels_js,
	demoapp_rules_logging_settracecategories_js : demoapp_rules_logging_settracecategories_js,
	demoapp_rules_logging_setuserloglevel_js : demoapp_rules_logging_setuserloglevel_js,
	demoapp_rules_logging_togglelogging_js : demoapp_rules_logging_togglelogging_js,
	demoapp_rules_logging_tracecategories_js : demoapp_rules_logging_tracecategories_js,
	demoapp_rules_logging_userlogsetting_js : demoapp_rules_logging_userlogsetting_js,
	demoapp_rules_savecustomerdataandnavigate_js : demoapp_rules_savecustomerdataandnavigate_js,
	demoapp_rules_service_initialize_js : demoapp_rules_service_initialize_js,
	demoapp_rules_storecustomertempdata_js : demoapp_rules_storecustomertempdata_js,
	demoapp_services_com_sap_edm_sampleservice_v4_service : demoapp_services_com_sap_edm_sampleservice_v4_service,
	demoapp_styles_styles_css : demoapp_styles_styles_css,
	demoapp_styles_styles_less : demoapp_styles_styles_less,
	demoapp_styles_styles_light_css : demoapp_styles_styles_light_css,
	demoapp_styles_styles_light_json : demoapp_styles_styles_light_json,
	demoapp_styles_styles_light_nss : demoapp_styles_styles_light_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/Application/AppUpdateFailure.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/demoapp/Rules/Application/AppUpdateFailure.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
  let result = clientAPI.actionResults.AppUpdate.error.toString();
  var message;
  console.log(result);
  if (result.startsWith('Error: Uncaught app extraction failure:')) {
    result = 'Error: Uncaught app extraction failure:';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
    result = 'Application instance is not up or running';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
    result = 'Service instance not found.';
  }
  switch (result) {
    case 'Service instance not found.':
      message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
      message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
      message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
      break;
    case 'Error: Uncaught app extraction failure:':
      message = 'Error extracting metadata. Please redeploy and try again.';
      break;
    case 'Application instance is not up or running':
      message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
      break;
    default:
      message = result;
      break;
  }
  return clientAPI.getPageProxy().executeAction({
    "Name": "/demoapp/Actions/Application/AppUpdateFailureMessage.action",
    "Properties": {
      "Duration": 0,
      "Message": message
    }
  });
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/Application/AppUpdateSuccess.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/demoapp/Rules/Application/AppUpdateSuccess.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}
function AppUpdateSuccess(clientAPI) {
  var message;
  // Force a small pause to let the progress banner show in case there is no new version available
  return sleep(500).then(function () {
    let result = clientAPI.actionResults.AppUpdate.data;
    console.log(result);
    let versionNum = result.split(': ')[1];
    if (result.startsWith('Current version is already up to date')) {
      return clientAPI.getPageProxy().executeAction({
        "Name": "/demoapp/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Message": `You are already using the latest version: ${versionNum}`,
          "NumberOfLines": 2
        }
      });
    } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
      message = 'No Application metadata found. Please deploy your application and try again.';
      return clientAPI.getPageProxy().executeAction({
        "Name": "/demoapp/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Duration": 5,
          "Message": message,
          "NumberOfLines": 2
        }
      });
    }
  });
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/Application/ClientIsMultiUserMode.js":
/*!******************************************************************************!*\
  !*** ./build.definitions/demoapp/Rules/Application/ClientIsMultiUserMode.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIsMultiUserMode)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ClientIsMultiUserMode(clientAPI) {
  return clientAPI.isAppInMultiUserMode();
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/Application/GetClientSupportVersions.js":
/*!*********************************************************************************!*\
  !*** ./build.definitions/demoapp/Rules/Application/GetClientSupportVersions.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientSupportVersions)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientSupportVersions(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  let versionStr = '';
  Object.keys(versionInfo).forEach(function (key, index) {
    // key: the name of the object key
    // index: the ordinal position of the key within the object
    //console.log(`Key: ${key}   Index: ${index}`);
    if (key != 'Application Version') {
      versionStr += `${key}: ${versionInfo[key]}\n`;
    }
  });
  return versionStr;
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/Application/GetClientVersion.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/demoapp/Rules/Application/GetClientVersion.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientVersion)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientVersion(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  if (versionInfo.hasOwnProperty('Application Version')) {
    return versionInfo['Application Version'];
  }
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/Application/OnWillUpdate.js":
/*!*********************************************************************!*\
  !*** ./build.definitions/demoapp/Rules/Application/OnWillUpdate.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
  return clientAPI.executeAction('/demoapp/Actions/Application/OnWillUpdate.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOffline.action').then(success => Promise.resolve(success), failure => Promise.reject('Offline Odata Close Failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/Application/ResetAppSettingsAndLogout.js":
/*!**********************************************************************************!*\
  !*** ./build.definitions/demoapp/Rules/Application/ResetAppSettingsAndLogout.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ResetAppSettingsAndLogout(clientAPI) {
  let logger = clientAPI.getLogger();
  let platform = clientAPI.nativescript.platformModule;
  let appSettings = clientAPI.nativescript.appSettingsModule;
  var appId;
  if (platform && (platform.isIOS || platform.isAndroid)) {
    appId = clientAPI.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
  } else {
    appId = 'WindowsClient';
  }
  try {
    // Remove any other app specific settings
    appSettings.getAllKeys().forEach(key => {
      if (key.substring(0, appId.length) === appId) {
        appSettings.remove(key);
      }
    });
  } catch (err) {
    logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
  } finally {
    // Logout 
    return clientAPI.getPageProxy().executeAction('/demoapp/Actions/Application/Reset.action');
  }
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/Cnt.js":
/*!************************************************!*\
  !*** ./build.definitions/demoapp/Rules/Cnt.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cnt)
/* harmony export */ });
/**
 * Calculates customer count synchronously for the UI layout.
 * @param {IClientAPI} clientAPI
 */
async function Cnt(clientAPI) {
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

/***/ }),

/***/ "./build.definitions/demoapp/Rules/Count.js":
/*!**************************************************!*\
  !*** ./build.definitions/demoapp/Rules/Count.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Count)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function Count(clientAPI) {
  // Uses the folder name from your project as the path to the service
  return clientAPI.count('/demoapp/Services/com_sap_edm_sampleservice_v4.service', 'Customers', '').then(count => {
    return count.toString();
  }).catch(error => {
    clientAPI.log(`Error fetching customer count: ${error}`, 'Error');
    return '0';
  });
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/Country_List.js":
/*!*********************************************************!*\
  !*** ./build.definitions/demoapp/Rules/Country_List.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Country_List)
/* harmony export */ });
/**
 * Returns a flag image URL from FlagCDN API.
 * @param {IClientAPI} context
 */
function Country_List(context) {
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
  return 'sap-icon://world'; // Fallback
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/CreateCustomerAndSales.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/demoapp/Rules/CreateCustomerAndSales.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateCustomerAndSales)
/* harmony export */ });
/**
 * Creates Customer + linked SalesOrder in a single deep-insert call
 * @param {IClientAPI} clientAPI
 */
async function CreateCustomerAndSales(clientAPI) {
  const pageProxy = clientAPI.getPageProxy();
  const appData = clientAPI.getAppClientData();
  const customerData = appData.CustomerData;
  try {
    if (!customerData) {
      throw new Error("Customer data missing. Please fill customer page first.");
    }

    // 1. Read SalesOrder values
    const currencyCode = pageProxy.evaluateTargetPath('#Control:FCCreateCurrencyCode/#Value');
    const netAmount = pageProxy.evaluateTargetPath('#Control:FCCreateNetAmount/#Value');
    const taxAmount = pageProxy.evaluateTargetPath('#Control:FCCreateTaxAmount/#Value');
    const grossAmount = pageProxy.evaluateTargetPath('#Control:FCCreateGrossAmount/#Value');
    const lifeCycleStatus = pageProxy.evaluateTargetPath('#Control:FCCreateLifeCycleStatus/#Value');
    const lifeCycleStatusName = pageProxy.evaluateTargetPath('#Control:FCCreateLifeCycleStatusName/#Value');
    const createdDate = pageProxy.evaluateTargetPath('#Control:FCCreatedate/#Value');

    // 2. Build combined payload (Deep Insert)
    const deepPayload = {
      FirstName: customerData.FirstName,
      LastName: customerData.LastName,
      EmailAddress: customerData.EmailAddress,
      PhoneNumber: customerData.PhoneNumber,
      Country: customerData.Country,
      // Nested SalesOrder — backend auto-links via navigation property
      SalesOrders: [{
        CurrencyCode: currencyCode ? currencyCode.toUpperCase() : "EUR",
        GrossAmount: grossAmount ? Number(grossAmount) : 0,
        NetAmount: netAmount ? Number(netAmount) : 0,
        TaxAmount: taxAmount ? Number(taxAmount) : 0,
        LifeCycleStatus: lifeCycleStatus || "N",
        LifeCycleStatusName: lifeCycleStatusName || "New",
        CreatedAt: createdDate
      }]
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
      "Properties": {
        "Message": "Customer and Sales Order Created Successfully"
      }
    });
  } catch (error) {
    let errorMessage = "Unknown error";
    if (error) {
      if (typeof error === "string") errorMessage = error;else if (error.message) errorMessage = error.message;else if (error.data) errorMessage = typeof error.data === "string" ? error.data : JSON.stringify(error.data);else {
        try {
          errorMessage = JSON.stringify(error, Object.getOwnPropertyNames(error));
        } catch (e) {
          errorMessage = String(error);
        }
      }
    }
    return clientAPI.executeAction({
      "Name": "/demoapp/Actions/CustomerCreationFailure.action",
      "Properties": {
        "Message": errorMessage
      }
    });
  }
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/Createvalidation.js":
/*!*************************************************************!*\
  !*** ./build.definitions/demoapp/Rules/Createvalidation.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InlineValidation)
/* harmony export */ });
/**
 * Unified inline validation for all fields.
 * Detects which control triggered and validates accordingly.
 * Shared between Create & Edit pages.
 * @param {IClientAPI} context
 */
function InlineValidation(context) {
  let controlName = context.getName();
  let value = context.getValue();
  if (Array.isArray(value)) value = value[0];
  const nameRegex = /^[A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF' \-.]+$/;
  const phoneRegex = /^\+?\d{7,15}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let msg = '';
  let text = value ? String(value).trim() : '';
  switch (controlName) {
    // ── First Name (Create & Edit) ──
    case 'FCCreateFirstName':
    case 'FCFirstName':
      if (text.length > 0 && text.length < 4) {
        msg = 'Must be at least 4 characters.';
      } else if (text.length > 10) {
        msg = 'Must not exceed 10 characters.';
      } else if (text.length > 0 && !nameRegex.test(text)) {
        msg = 'Only letters, apostrophes, hyphens, dots, and spaces allowed.';
      }
      break;

    // ── Last Name (Create & Edit) ──
    case 'FCCreateLastName':
    case 'FCLastName':
      if (text.length > 0 && text.length < 5) {
        msg = 'Must be at least 5 characters.';
      } else if (text.length > 10) {
        msg = 'Must not exceed 10 characters.';
      } else if (text.length > 0 && !nameRegex.test(text)) {
        msg = 'Only letters, apostrophes, hyphens, dots, and spaces allowed.';
      }
      break;

    // ── Phone (Create & Edit) ──
    case 'FCCreatePhone':
    case 'FCPhone':
      if (text.length > 0 && !phoneRegex.test(text)) {
        msg = '7–15 digits only, optional leading +. No spaces or letters.';
      }
      break;

    // ── Email (Create & Edit) ──
    case 'FCCreateEmail':
    case 'FCEmail':
      if (text.length > 0 && !emailRegex.test(text)) {
        msg = 'Enter a valid email (e.g., name@example.com).';
      }
      break;

    // ── DOB (Create & Edit) ──
    case 'FCCreateDOB':
    case 'FCDOB':
      if (value) {
        let dobDate = value instanceof Date ? value : new Date(value);
        if (isNaN(dobDate.getTime())) {
          msg = 'Enter a valid date of birth.';
        } else {
          let today = new Date();
          today.setHours(0, 0, 0, 0);
          dobDate.setHours(0, 0, 0, 0);
          if (dobDate > today) {
            msg = 'DOB cannot be a future date.';
          }
        }
      }
      break;
    default:
      break;
  }
  context.setHelperText(msg);
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/CustomerC.js":
/*!******************************************************!*\
  !*** ./build.definitions/demoapp/Rules/CustomerC.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomerC)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function CustomerC(clientAPI) {
  // Uses the folder name from your project as the path to the service
  return clientAPI.count('/demoapp/Services/com_sap_edm_sampleservice_v4.service', 'Customers', '').then(count => {
    return count.toString();
  }).catch(error => {
    clientAPI.log(`Error fetching customer count: ${error}`, 'Error');
    return '0';
  });
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/CustomerCount.js":
/*!**********************************************************!*\
  !*** ./build.definitions/demoapp/Rules/CustomerCount.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomerCount)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function CustomerCount(clientAPI) {
  // Uses the folder name from your project as the path to the service
  return clientAPI.count('/demoapp/Services/com_sap_edm_sampleservice_v4.service', 'Customers', '').then(count => {
    return count.toString();
  }).catch(error => {
    clientAPI.log(`Error fetching customer count: ${error}`, 'Error');
    return '0';
  });
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/CustomerCreateValidation.js":
/*!*********************************************************************!*\
  !*** ./build.definitions/demoapp/Rules/CustomerCreateValidation.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomerCreateValidation)
/* harmony export */ });
/**
 * Unified validation for Customer Create form.
 * Fields: FCCreateFirstName, FCCreateLastName, FCCreatePhone,
 *         FCCreateEmail, FCCreateDOB, FCCreateCountry
 * @param {IClientAPI} context
 */
function CustomerCreateValidation(context) {
  // ── Read & trim field values ──
  let firstName = context.evaluateTargetPath('#Control:FCCreateFirstName/#Value');
  let lastName = context.evaluateTargetPath('#Control:FCCreateLastName/#Value');
  let phone = context.evaluateTargetPath('#Control:FCCreatePhone/#Value');
  let email = context.evaluateTargetPath('#Control:FCCreateEmail/#Value');
  let dob = context.evaluateTargetPath('#Control:FCCreateDOB/#Value');
  let country = context.evaluateTargetPath('#Control:FCCountry/#Value');
  firstName = firstName ? firstName.trim() : '';
  lastName = lastName ? lastName.trim() : '';
  phone = phone ? phone.trim() : '';
  email = email ? email.trim() : '';

  // ── Regex patterns ──
  const nameRegex = /^[A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF' \-.]+$/;
  const phoneRegex = /^\+?\d{7,15}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let title = '';
  let message = '';

  // ── First Name ──
  if (!firstName) {
    title = 'Validate First Name';
    message = 'First Name is required.';
  } else if (firstName.length < 2) {
    title = 'Validate First Name';
    message = 'First Name must be at least 2 characters.';
  } else if (firstName.length > 50) {
    title = 'Validate First Name';
    message = 'First Name must not exceed 50 characters.';
  } else if (!nameRegex.test(firstName)) {
    title = 'Validate First Name';
    message = 'First Name may only contain letters, apostrophes, hyphens, dots, and spaces.';
  }

  // ── Last Name ──
  else if (!lastName) {
    title = 'Validate Last Name';
    message = 'Last Name is required.';
  } else if (lastName.length < 2) {
    title = 'Validate Last Name';
    message = 'Last Name must be at least 2 characters.';
  } else if (lastName.length > 50) {
    title = 'Validate Last Name';
    message = 'Last Name must not exceed 50 characters.';
  } else if (!nameRegex.test(lastName)) {
    title = 'Validate Last Name';
    message = 'Last Name may only contain letters, apostrophes, hyphens, dots, and spaces.';
  }

  // ── Phone ──
  else if (!phone) {
    title = 'Validate Phone';
    message = 'Phone number is required.';
  } else if (!phoneRegex.test(phone)) {
    title = 'Validate Phone';
    message = 'Phone must be 7-15 digits with an optional leading +. No spaces or dashes.';
  }

  // ── Email ──
  else if (!email) {
    title = 'Validate Email';
    message = 'Email address is required.';
  } else if (!emailRegex.test(email)) {
    title = 'Validate Email';
    message = 'Please enter a valid email address (e.g., name@example.com).';
  }

  // ── DOB ──
  else if (!dob) {
    title = 'Validate DOB';
    message = 'Date of Birth is required.';
  } else {
    let dobDate = new Date(dob);
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    if (isNaN(dobDate.getTime())) {
      title = 'Validate DOB';
      message = 'Please select a valid Date of Birth.';
    } else if (dobDate >= today) {
      title = 'Validate DOB';
      message = 'Date of Birth cannot be today or a future date.';
    }
  }

  // ── Country ──
  if (!message) {
    // ListPicker returns an array — check if user selected anything
    if (!country || Array.isArray(country) && country.length === 0) {
      title = 'Validate Country';
      message = 'Please select a Country.';
    }
  }

  // ── Show error OR proceed ──
  if (message) {
    return context.executeAction({
      "Name": "/demoapp/Actions/ValidationFailure.action",
      "Properties": {
        "Title": title,
        "Message": message
      }
    });
  }

  // ✅ All validations passed → Create entity
  return context.executeAction('/demoapp/Actions/Customers_CreateEntity.action');
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/Customers_DeleteConfirmation.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/demoapp/Rules/Customers_DeleteConfirmation.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Customers_DeleteConfirmation)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} context
*/
function Customers_DeleteConfirmation(context) {
  return context.executeAction('/demoapp/Actions/Customers_DeleteConfirmation.action').then(result => {
    if (result.data) {
      return context.executeAction('/demoapp/Actions/Customers_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/Customers_OrderCount.js":
/*!*****************************************************************!*\
  !*** ./build.definitions/demoapp/Rules/Customers_OrderCount.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomerOrderCount)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} context
*/
function CustomerOrderCount(context) {
  // Retrieves the current customer's information from the context
  const currentCustomer = context.getPageProxy().binding['@odata.readLink'];
  // Counts the number of sales orders associated with the current customer.
  return context.count('/demoapp/Services/com_sap_edm_sampleservice_v4.service', currentCustomer + '/SalesOrders', '').then(count => {
    return count;
  });
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/EmailValidation.js":
/*!************************************************************!*\
  !*** ./build.definitions/demoapp/Rules/EmailValidation.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmailValidation)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} context
*/
function EmailValidation(context) {
  //The following evaluateTargetPath will retrieve the current value of the email control
  if (context.evaluateTargetPath('#Control:FCEmail/#Value').indexOf('@') === -1) {
    //If email value does not contain @ display a validation failure message to the end-user
    context.executeAction('/demoapp/Actions/ValidationFailureAction.action');
  } else {
    //If @ is present in the email value, return true to indicate validation is successful
    return true;
  }
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/GenerateSalesOrderID.js":
/*!*****************************************************************!*\
  !*** ./build.definitions/demoapp/Rules/GenerateSalesOrderID.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GenerateSalesOrderID)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IContext} context
 */
function GenerateSalesOrderID(context) {
  return Date.now();
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/GetCountries.js":
/*!*********************************************************!*\
  !*** ./build.definitions/demoapp/Rules/GetCountries.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetCountries)
/* harmony export */ });
/**
 * Returns unique countries for ListPicker items
 * @param {IClientAPI} clientAPI
 */
function GetCountries(clientAPI) {
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
    AT: 'Austria'
  };
  return clientAPI.read('/demoapp/Services/com_sap_edm_sampleservice_v4.service',
  // <-- keep your service (change if your project service differs)
  'Customers', [], '$select=Country').then(result => {
    const seen = new Set();
    const items = [];
    for (let i = 0; i < result.length; i++) {
      const code = result.getItem(i).Country;
      if (code && !seen.has(code)) {
        seen.add(code);
        items.push({
          DisplayValue: countryMap[code] || code,
          ReturnValue: code
        });
      }
    }

    // Sort by display value
    return items.sort((a, b) => a.DisplayValue.localeCompare(b.DisplayValue));
  });
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/GetCountryList.js":
/*!***********************************************************!*\
  !*** ./build.definitions/demoapp/Rules/GetCountryList.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetCountryList)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetCountryList(context) {
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
  return context.read('/demoapp/Services/com_sap_edm_sampleservice_v4.service', 'Customers', [], '$select=Country&$orderby=Country').then(function (result) {
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
    items.sort(function (a, b) {
      return a.DisplayValue.localeCompare(b.DisplayValue);
    });
    return items;
  });
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/GetCustomerCount.js":
/*!*************************************************************!*\
  !*** ./build.definitions/demoapp/Rules/GetCustomerCount.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetCustomerCount)
/* harmony export */ });
/**
 * Retrieves the total count of customers from the sample service.
 * @param {IClientAPI} clientAPI
 */
function GetCustomerCount(clientAPI) {
  // Uses the folder name from your project as the path to the service
  return clientAPI.count('/demoapp/Services/com_sap_edm_sampleservice_v4.service', 'Customers', '').then(count => {
    return count.toString();
  }).catch(error => {
    clientAPI.log(`Error fetching customer count: ${error}`, 'Error');
    return '0';
  });
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/Logging/LogLevels.js":
/*!**************************************************************!*\
  !*** ./build.definitions/demoapp/Rules/Logging/LogLevels.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogLevels)
/* harmony export */ });
function LogLevels(clientAPI) {
  var levels = [];
  levels.push({
    'DisplayValue': 'Error',
    'ReturnValue': 'Error'
  });
  levels.push({
    'DisplayValue': 'Warning',
    'ReturnValue': 'Warn'
  });
  levels.push({
    'DisplayValue': 'Info',
    'ReturnValue': 'Info'
  });
  levels.push({
    'DisplayValue': 'Debug',
    'ReturnValue': 'Debug'
  });
  levels.push({
    'DisplayValue': 'Trace',
    'ReturnValue': 'Trace'
  });
  return levels;
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/Logging/SetTraceCategories.js":
/*!***********************************************************************!*\
  !*** ./build.definitions/demoapp/Rules/Logging/SetTraceCategories.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetTraceCategories)
/* harmony export */ });
function SetTraceCategories(clientAPI) {
  var logger = clientAPI.getLogger();
  const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
  const fcsection = sectionedTable.getSection('FormCellSection0');
  const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
  const odataTrace = fcsection.getControl('odataTrace');
  try {
    if (traceCategory.getValue()) {
      var values = traceCategory.getValue();
      var categories = [];
      if (values && values.length) {
        categories = values.map(value => {
          return 'mdk.trace.' + value.ReturnValue;
        });
      }
      clientAPI.setDebugSettings(odataTrace.getValue(), true, categories);
    }
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/Logging/SetUserLogLevel.js":
/*!********************************************************************!*\
  !*** ./build.definitions/demoapp/Rules/Logging/SetUserLogLevel.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetUserLogLevel)
/* harmony export */ });
function SetUserLogLevel(clientAPI) {
  try {
    if (clientAPI.getValue() && clientAPI.getValue()[0]) {
      var logger = clientAPI.getLogger();
      var listPickerValue = clientAPI.getValue()[0].ReturnValue;
      if (listPickerValue) {
        switch (listPickerValue) {
          case 'Debug':
            logger.setLevel('Debug');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Error':
            logger.setLevel('Error');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Warn':
            logger.setLevel('Warn');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Info':
            logger.setLevel('Info');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Trace':
            logger.setLevel('Trace');
            ShowTraceOptions(clientAPI, true);
            break;
          default:
            // eslint-disable-next-line no-console
            console.log(`unrecognized key ${listPickerValue}`);
        }
        return listPickerValue;
      }
    }
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}
function ShowTraceOptions(clientAPI, tracingEnabled) {
  let categories = clientAPI.getPageProxy().getControl('SectionedTable').getControl('TracingCategoriesListPicker');
  let odataTrace = clientAPI.getPageProxy().getControl('SectionedTable').getControl('odataTrace');
  categories.setVisible(tracingEnabled);
  odataTrace.setVisible(tracingEnabled);
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/Logging/ToggleLogging.js":
/*!******************************************************************!*\
  !*** ./build.definitions/demoapp/Rules/Logging/ToggleLogging.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleLogging)
/* harmony export */ });
function ToggleLogging(clientAPI) {
  try {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    let switchValue = enableLogSwitch.getValue();
    if (switchValue) {
      logger.on();
      logLevelListPicker.setVisible(true);
      logLevelListPicker.setEditable(true);
      logLevelListPicker.redraw();
    } else {
      logger.off();
      logLevelListPicker.setEditable(false);
      logLevelListPicker.setVisible(false);
      logLevelListPicker.redraw();
    }
    return switchValue;
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/Logging/TraceCategories.js":
/*!********************************************************************!*\
  !*** ./build.definitions/demoapp/Rules/Logging/TraceCategories.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TraceCategories)
/* harmony export */ });
function TraceCategories(clientAPI) {
  var categories = ['action', 'api', 'app', 'binding', 'branding', 'core', 'i18n', 'lcms', 'logging', 'odata', 'onboarding', 'profiling', 'push', 'restservice', 'settings', 'targetpath', 'ui'];
  var values = [];
  categories.forEach(category => {
    values.push({
      'DisplayValue': category,
      'ReturnValue': category
    });
  });
  return values;
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/Logging/UserLogSetting.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/demoapp/Rules/Logging/UserLogSetting.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogSetting)
/* harmony export */ });
function UserLogSetting(clientAPI) {
  try {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
    const odataTrace = fcsection.getControl('odataTrace');

    //Persist the user logging preferences
    if (logger) {
      console.log("in logger state");
      if (logger.isTurnedOn()) {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(true);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(true);
        }
      } else {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(false);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(false);
        }
      }
      var logLevel = logger.getLevel();
      if (logLevel) {
        if (logLevelListPicker) {
          logLevelListPicker.setValue([logLevel]);
        }
      }
      if (logLevel === 'Trace') {
        traceCategory.setVisible(true);
        odataTrace.setVisible(true);
      }

      //Upon selecting a value in the List picker and clicking the back button 
      //will enable the onload page rule. This will set the selected value
      //in the control
      if (logLevelListPicker.getValue()[0]) {
        var returnValue = logLevelListPicker.getValue()[0].ReturnValue;
        if (returnValue) {
          logLevelListPicker.setValue([returnValue]);
          logger.setLevel(returnValue);
        }
      }
    }
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(String(exception), 'Error User Logger could not be set');
  }
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/SaveCustomerDataAndNavigate.js":
/*!************************************************************************!*\
  !*** ./build.definitions/demoapp/Rules/SaveCustomerDataAndNavigate.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SaveCustomerDataAndNavigate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function SaveCustomerDataAndNavigate(context) {
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

/***/ }),

/***/ "./build.definitions/demoapp/Rules/Service/Initialize.js":
/*!***************************************************************!*\
  !*** ./build.definitions/demoapp/Rules/Service/Initialize.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Initialize)
/* harmony export */ });
function Initialize(context) {
  // Perform pre data initialization task

  // Initialize all your Data sources
  let _com_sap_edm_sampleservice_v4 = context.executeAction('/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOffline.action');

  //You can add more service initialize actions here

  return Promise.all([_com_sap_edm_sampleservice_v4]).then(() => {
    // After Initializing the DB connections

    // Display successful initialization  message to the user
    return context.executeAction({
      "Name": "/demoapp/Actions/GenericToastMessage.action",
      "Properties": {
        "Message": "Application Services Initialized",
        "Animated": true,
        "Duration": 1,
        "IsIconHidden": true,
        "NumberOfLines": 1
      }
    });
  }).catch(() => {
    return false;
  });
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/StoreCustomerTempData.js":
/*!******************************************************************!*\
  !*** ./build.definitions/demoapp/Rules/StoreCustomerTempData.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StoreCustomerTempData)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function StoreCustomerTempData(clientAPI) {
  const pageProxy = clientAPI.getPageProxy();
  const countryValue = pageProxy.evaluateTargetPath('#Control:FCCountry/#Value');
  const selectedCountry = countryValue?.[0]?.ReturnValue || '';
  const customerData = {
    FirstName: pageProxy.evaluateTargetPath('#Control:FCCreateFirstName/#Value'),
    LastName: pageProxy.evaluateTargetPath('#Control:FCCreateLastName/#Value'),
    EmailAddress: pageProxy.evaluateTargetPath('#Control:FCCreateEmail/#Value'),
    PhoneNumber: pageProxy.evaluateTargetPath('#Control:FCCreatePhone/#Value'),
    Country: selectedCountry
  };
  clientAPI.getAppClientData().CustomerData = customerData;
  return clientAPI.executeAction('/demoapp/Actions/NavToSales.action');
}

/***/ }),

/***/ "./build.definitions/demoapp/Rules/com_sap_edm_sampleservice_v4/ErrorArchive_CheckForSyncError.js":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/demoapp/Rules/com_sap_edm_sampleservice_v4/ErrorArchive_CheckForSyncError.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckForSyncError)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} context
 */
function CheckForSyncError(context) {
  context.count('/demoapp/Services/com_sap_edm_sampleservice_v4.service', 'ErrorArchive', '').then(errorCount => {
    if (errorCount > 0) {
      return context.getPageProxy().executeAction('/demoapp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action').then(function () {
        return Promise.reject(false);
      });
    }
  });
}

/***/ }),

/***/ "./build.definitions/demoapp/Styles/Styles.css":
/*!*****************************************************!*\
  !*** ./build.definitions/demoapp/Styles/Styles.css ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `Page {
  background-color: #0F1F1D;
}
.DarkList {
  background-color: #18302D;
}
.DarkList .ObjectCell {
  background-color: #18302D;
}
.DarkList .ObjectCellTitle {
  color: #FFFFFF;
}
.DarkList .ObjectCellSubhead {
  color: #B2DFDB;
}
.DarkList .ObjectCellDescription {
  color: #B2DFDB;
}
Button {
  background-color: #009688;
  color: #FFFFFF;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/demoapp/Styles/Styles.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,yBAAyB;EACzB,cAAc;AAChB","sourcesContent":["Page {\n  background-color: #0F1F1D;\n}\n.DarkList {\n  background-color: #18302D;\n}\n.DarkList .ObjectCell {\n  background-color: #18302D;\n}\n.DarkList .ObjectCellTitle {\n  color: #FFFFFF;\n}\n.DarkList .ObjectCellSubhead {\n  color: #B2DFDB;\n}\n.DarkList .ObjectCellDescription {\n  color: #B2DFDB;\n}\nButton {\n  background-color: #009688;\n  color: #FFFFFF;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/demoapp/Styles/Styles.less":
/*!******************************************************!*\
  !*** ./build.definitions/demoapp/Styles/Styles.less ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@primaryColor : #009688;
@darkBg       : #0F1F1D;
@darkSurface  : #18302D;
@textPrimary  : #FFFFFF;
@textSecondary: #B2DFDB;

Page {
    background-color: @darkBg;
}

.DarkList {
    background-color: @darkSurface;
}

.DarkList .ObjectCell {
    background-color: @darkSurface;
}

.DarkList .ObjectCellTitle {
    color: @textPrimary;
}

.DarkList .ObjectCellSubhead {
    color: @textSecondary;
}

.DarkList .ObjectCellDescription {
    color: @textSecondary;
}

Button {
    background-color: @primaryColor;
    color: @textPrimary;
}`, "",{"version":3,"sources":["webpack://./build.definitions/demoapp/Styles/Styles.less"],"names":[],"mappings":"AAAA,uBAAuB;AACvB,uBAAuB;AACvB,uBAAuB;AACvB,uBAAuB;AACvB,uBAAuB;;AAEvB;IACI,yBAAyB;AAC7B;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,+BAA+B;IAC/B,mBAAmB;AACvB","sourcesContent":["@primaryColor : #009688;\n@darkBg       : #0F1F1D;\n@darkSurface  : #18302D;\n@textPrimary  : #FFFFFF;\n@textSecondary: #B2DFDB;\n\nPage {\n    background-color: @darkBg;\n}\n\n.DarkList {\n    background-color: @darkSurface;\n}\n\n.DarkList .ObjectCell {\n    background-color: @darkSurface;\n}\n\n.DarkList .ObjectCellTitle {\n    color: @textPrimary;\n}\n\n.DarkList .ObjectCellSubhead {\n    color: @textSecondary;\n}\n\n.DarkList .ObjectCellDescription {\n    color: @textSecondary;\n}\n\nButton {\n    background-color: @primaryColor;\n    color: @textPrimary;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/demoapp/Styles/Styles.light.css":
/*!***********************************************************!*\
  !*** ./build.definitions/demoapp/Styles/Styles.light.css ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.ns-light Page {
	background-color: #0F1F1D;
}
.ns-light .DarkList {
	background-color: #18302D;
}
.ns-light .DarkList .ObjectCell {
	background-color: #18302D;
}
.ns-light .DarkList .ObjectCellTitle {
	color: #FFFFFF;
}
.ns-light .DarkList .ObjectCellSubhead {
	color: #B2DFDB;
}
.ns-light .DarkList .ObjectCellDescription {
	color: #B2DFDB;
}
.ns-light Button {
	background-color: #009688;
	color: #FFFFFF;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/demoapp/Styles/Styles.light.css"],"names":[],"mappings":"AAAA;CACC,yBAAyB;AAC1B;AACA;CACC,yBAAyB;AAC1B;AACA;CACC,yBAAyB;AAC1B;AACA;CACC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,yBAAyB;CACzB,cAAc;AACf","sourcesContent":[".ns-light Page {\n\tbackground-color: #0F1F1D;\n}\n.ns-light .DarkList {\n\tbackground-color: #18302D;\n}\n.ns-light .DarkList .ObjectCell {\n\tbackground-color: #18302D;\n}\n.ns-light .DarkList .ObjectCellTitle {\n\tcolor: #FFFFFF;\n}\n.ns-light .DarkList .ObjectCellSubhead {\n\tcolor: #B2DFDB;\n}\n.ns-light .DarkList .ObjectCellDescription {\n\tcolor: #B2DFDB;\n}\n.ns-light Button {\n\tbackground-color: #009688;\n\tcolor: #FFFFFF;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/demoapp/Styles/Styles.light.nss":
/*!***********************************************************!*\
  !*** ./build.definitions/demoapp/Styles/Styles.light.nss ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@primaryColor: #009688;
@darkBg: #0F1F1D;
@darkSurface: #18302D;
@textPrimary: #FFFFFF;
@textSecondary: #B2DFDB;
DarkList {
	background-color: #18302D;
}
DarkList .ObjectCell {
	background-color: #18302D;
}
DarkList .ObjectCellTitle {
	font-color: #FFFFFF;
}
DarkList .ObjectCellSubhead {
	font-color: #B2DFDB;
}
DarkList .ObjectCellDescription {
	font-color: #B2DFDB;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/demoapp/Styles/Styles.light.nss"],"names":[],"mappings":"AAAA,sBAAsB;AACtB,gBAAgB;AAChB,qBAAqB;AACrB,qBAAqB;AACrB,uBAAuB;AACvB;CACC,yBAAyB;AAC1B;AACA;CACC,yBAAyB;AAC1B;AACA;CACC,mBAAmB;AACpB;AACA;CACC,mBAAmB;AACpB;AACA;CACC,mBAAmB;AACpB","sourcesContent":["@primaryColor: #009688;\n@darkBg: #0F1F1D;\n@darkSurface: #18302D;\n@textPrimary: #FFFFFF;\n@textSecondary: #B2DFDB;\nDarkList {\n\tbackground-color: #18302D;\n}\nDarkList .ObjectCell {\n\tbackground-color: #18302D;\n}\nDarkList .ObjectCellTitle {\n\tfont-color: #FFFFFF;\n}\nDarkList .ObjectCellSubhead {\n\tfont-color: #B2DFDB;\n}\nDarkList .ObjectCellDescription {\n\tfont-color: #B2DFDB;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../../../css-loader/dist/runtime/api.js":
/*!**************************************************!*\
  !*** ../../../../css-loader/dist/runtime/api.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../../../css-loader/dist/runtime/sourceMaps.js":
/*!*********************************************************!*\
  !*** ../../../../css-loader/dist/runtime/sourceMaps.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/demoapp/Pages/Application/About.page":
/*!****************************************************************!*\
  !*** ./build.definitions/demoapp/Pages/Application/About.page ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"_Name":"KeyValue0","KeyName":"User ID","Value":"#Application/#AppData/UserId","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"#Application/#AppData/DeviceId","_Name":"KeyValue1","KeyName":"Device ID","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"/demoapp/Globals/Application/ApplicationName.global","_Name":"KeyValue2","KeyName":"Application","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"/demoapp/Globals/Application/AppDefinition_Version.global","_Name":"KeyValue3","KeyName":"Application Metadata Version","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"KeyAndValues":[{"Value":"/demoapp/Rules/Application/GetClientVersion.js","_Name":"KeyValue4","KeyName":"Client Version","Visible":"$(PLT,true,true,false)","_Type":"KeyValue.Type.Item"},{"Value":"/demoapp/Rules/Application/GetClientSupportVersions.js","_Name":"KeyValue5","KeyName":"Client Support Versions","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"About","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/demoapp/Actions/CloseModalPage_Complete.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"About","PreferredCaptionSize":"Large","_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/demoapp/Pages/Application/Support.page":
/*!******************************************************************!*\
  !*** ./build.definitions/demoapp/Pages/Application/Support.page ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ContactCell","_Name":"SectionContactCellTable1","EmptySection":{"FooterVisible":false},"ContactCells":[{"ContactCell":{"_Name":"ContactCellItem0","Headline":"Contact Support","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"/demoapp/Globals/Application/SupportPhone.global"},{"ActivityType":"Email","ActivityValue":"/demoapp/Globals/Application/SupportEmail.global"},{"ActivityType":"Message","ActivityValue":"/demoapp/Globals/Application/SupportPhone.global"}]}}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection0","Visible":"$(PLT,true,true,false)","EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"_Name":"SectionSimplePropertyCell0","KeyName":"Activity Log","AccessoryType":"DisclosureIndicator","Visible":"$(PLT,true,true,false)","OnPress":"/demoapp/Actions/Application/NavToActivityLog.action","_Type":"SimplePropertyCollection.Type.Cell"}}],"Layout":{"NumberOfColumns":1,"MinimumInteritemSpacing":66}}]}],"_Type":"Page","_Name":"Settings","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/demoapp/Actions/CloseModalPage_Complete.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"Settings","PreferredCaptionSize":"Small","_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/demoapp/Pages/Application/UserActivityLog.page":
/*!**************************************************************************!*\
  !*** ./build.definitions/demoapp/Pages/Application/UserActivityLog.page ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"EnableLogSwitch","IsVisible":true,"Separator":true,"Caption":"Enable Logging","OnValueChange":"/demoapp/Rules/Logging/ToggleLogging.js","IsEditable":true},{"IsSearchEnabled":false,"_Type":"Control.Type.FormCell.ListPicker","_Name":"LogLevelListPicker","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Log Level","OnValueChange":"/demoapp/Rules/Logging/SetUserLogLevel.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":"/demoapp/Rules/Logging/LogLevels.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"TracingCategoriesListPicker","IsVisible":false,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Tracing Categories","PickerPrompt":"Select Categories for Tracing","OnValueChange":"/demoapp/Rules/Logging/SetTraceCategories.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":"/demoapp/Rules/Logging/TraceCategories.js"},{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"odataTrace","IsVisible":false,"Separator":true,"Caption":"OData Tracing","OnValueChange":"/demoapp/Rules/Logging/SetTraceCategories.js","IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection0"},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Send","IsVisible":true,"Separator":true,"Title":"Send Activity Log","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/demoapp/Actions/Logging/UploadLogProgress.action"}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}]}],"_Type":"Page","_Name":"UserActivityLog","ActionBar":{"Caption":"Activity Log","PreferredCaptionSize":"Small","_Type":"Control.Type.ActionBar"},"OnLoaded":"/demoapp/Rules/Logging/UserLogSetting.js"}

/***/ }),

/***/ "./build.definitions/demoapp/Pages/Customers_Create.page":
/*!***************************************************************!*\
  !*** ./build.definitions/demoapp/Pages/Customers_Create.page ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateFirstName","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"First Name","PlaceHolder":"Enter First Name","OnValueChange":"/demoapp/Rules/Createvalidation.js","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateLastName","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Last Name","PlaceHolder":"Enter Last Value","OnValueChange":"/demoapp/Rules/Createvalidation.js","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreatePhone","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Phone","PlaceHolder":"Enter Phone Number","OnValueChange":"/demoapp/Rules/Createvalidation.js","KeyboardType":"Phone","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateEmail","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Email","PlaceHolder":"Enter Email","OnValueChange":"/demoapp/Rules/Createvalidation.js","KeyboardType":"Email","Enabled":true,"IsEditable":true},{"Value":"Enter DOB","_Type":"Control.Type.FormCell.DatePicker","_Name":"FCCreateDOB","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"DOB","IsEditable":true,"Mode":"Datetime","OnValueChange":"/demoapp/Rules/Createvalidation.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"FCCountry","RequiredIndicator":false,"IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Country","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Select Country","PlaceHolder":"Select Country","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"Search":{"Enabled":true},"PickerItems":{"Target":"/demoapp/Rules/GetCountryList.js","DisplayValue":"{DisplayValue}","ReturnValue":"{ReturnValue}"}}],"Layout":{"NumberOfColumns":1},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"Customers_Create","ActionBar":{"Items":[{"_Type":"Control.Type.ActionBarItem","_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/demoapp/Actions/CloseModalPage_Cancel.action"},{"_Type":"Control.Type.ActionBarItem","_Name":"ActionBarItem1","Caption":"Item","SystemItem":"Save","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/demoapp/Rules/CustomerCreateValidation.js"}],"_Name":"ActionBar0","_Type":"Control.Type.ActionBar","Caption":"Create Customer"}}

/***/ }),

/***/ "./build.definitions/demoapp/Pages/Customers_Detail.page":
/*!***************************************************************!*\
  !*** ./build.definitions/demoapp/Pages/Customers_Detail.page ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"ObjectHeader":{"Subhead":"{FirstName}","Footnote":"{EmailAddress}","Description":"{CustomerID}","StatusText":"{PhoneNumber}","DetailImage":"sap-icon://customer","DetailImageIsCircular":false,"BodyText":"{DateOfBirth}","HeadlineText":"{LastName}","StatusPosition":"Stacked","StatusImagePosition":"Leading","SubstatusImagePosition":"Leading"},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0","Visible":true},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"KeyAndValues":[{"Value":"{Gender}","_Type":"KeyValue.Type.Item","_Name":"KeyValue4","KeyName":"Gender","Visible":true},{"Value":"{HouseNumber} {Street}","_Type":"KeyValue.Type.Item","_Name":"KeyValue0","KeyName":"Address","Visible":true},{"Value":"{City}","_Type":"KeyValue.Type.Item","_Name":"KeyValue1","KeyName":"City","Visible":true},{"Value":"{PostalCode}","_Type":"KeyValue.Type.Item","_Name":"KeyValue2","KeyName":"Postal Code","Visible":true},{"Value":"{Country}","_Type":"KeyValue.Type.Item","_Name":"KeyValue3","KeyName":"Country","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}},{"Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionCommonTypeHeader0","AccessoryType":"None","UseTopPadding":true,"Caption":"Customer Orders"},"Footer":{"_Type":"SectionCommon.Type.Footer","_Name":"SectionCommonTypeFooter0","Caption":"See All","AttributeLabel":"/demoapp/Rules/Customers_OrderCount.js","AccessoryType":"DisclosureIndicator","FooterStyle":"Attribute","Visible":true,"OnPress":{"Name":"/demoapp/Actions/GenericNavigation.action","Properties":{"PageToOpen":"/demoapp/Pages/Customers_Orders.page"}},"UseBottomPadding":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Grouping":{"GroupingProperties":[],"Header":{"Items":[]}},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"{@odata.readLink}/SalesOrders","QueryOptions":"$top=5&$orderby=CreatedAt desc"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"Caption":"No Customer Orders Found","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[],"_Type":"ObjectCell.Type.ContextMenu"},"Title":"$(D,{CreatedAt},'','',{format:'medium'})","Subhead":"{CustomerID}","DisplayDescriptionInMobile":true,"StatusText":"$(C,{GrossAmount},{CurrencyCode},'',{minimumIntegerDigits:1,minimumFractionDigits:0,maximumFractionDigits:2,useGrouping:true})","PreserveIconStackSpacing":false,"AccessoryType":"DisclosureIndicator","Tags":[],"AvatarStack":{"Avatars":[],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"OnPress":{"Name":"/demoapp/Actions/GenericNavigation.action","Properties":{"PageToOpen":"/demoapp/Pages/SalesOrders_Details.page"}},"_Type":"ObjectTable.Type.ObjectCell","Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"DesignTimeTarget":{"Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"Customers"},"_Type":"Page","_Name":"Customers_Detail","ActionBar":{"Items":[{"_Type":"Control.Type.ActionBarItem","_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Edit","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/demoapp/Actions/NavToCustomers_Edit.action"},{"_Type":"Control.Type.ActionBarItem","_Name":"ActionBarItem1","Caption":"Item","SystemItem":"Trash","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/demoapp/Rules/Customers_DeleteConfirmation.js"}],"_Name":"ActionBar1","_Type":"Control.Type.ActionBar","Caption":"Details"},"FioriToolbar":{"_Type":"Control.Type.FioriToolbar","_Name":"FioriToolbar0","Items":[{"_Type":"FioriToolbarItem.Type.Button","_Name":"ToolbarItem0","Visible":true,"Title":"Create Order","OnPress":{"Name":"/demoapp/Actions/GenericNavigation.action","Properties":{"PageToOpen":"/demoapp/Pages/SalesOrderHeaders_Create.page","ModalPage":true}},"Enabled":true,"ButtonType":"Primary","Semantic":"Tint","ImagePosition":"Leading"}]}}

/***/ }),

/***/ "./build.definitions/demoapp/Pages/Customers_Edit.page":
/*!*************************************************************!*\
  !*** ./build.definitions/demoapp/Pages/Customers_Edit.page ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"Value":"{FirstName}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCFirstName","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"First Name","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"Value":"{LastName}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCLastName","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Last Name","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"Value":"{PhoneNumber}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCPhone","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Phone","PlaceHolder":"PlaceHolder","KeyboardType":"Phone","Enabled":true,"IsEditable":true},{"Value":"{EmailAddress}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCEmail","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Email","PlaceHolder":"PlaceHolder","KeyboardType":"Email","Enabled":true,"IsEditable":true},{"Value":"{DateOfBirth}","_Type":"Control.Type.FormCell.DatePicker","_Name":"FCUpdateDOB","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"DOB","IsEditable":true,"Mode":"Datetime"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"FCCountry","RequiredIndicator":false,"IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Country","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one single item","PlaceHolder":"Select","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"Search":{"Enabled":true},"PickerItems":{"Target":"/demoapp/Rules/GetCountryList.js","DisplayValue":"{DisplayValue}","ReturnValue":"{ReturnValue}"}}],"Layout":{"NumberOfColumns":1},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"Customers_Edit","ActionBar":{"Items":[{"_Type":"Control.Type.ActionBarItem","_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/demoapp/Actions/CloseModalPage_Cancel.action"},{"_Type":"Control.Type.ActionBarItem","_Name":"ActionBarItem1","Caption":"Item","SystemItem":"Save","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/demoapp/Actions/Customers_UpdateEntity.action"}],"_Name":"ActionBar1","_Type":"Control.Type.ActionBar","Caption":"Update Customer"}}

/***/ }),

/***/ "./build.definitions/demoapp/Pages/Customers_Lis.page":
/*!************************************************************!*\
  !*** ./build.definitions/demoapp/Pages/Customers_Lis.page ***!
  \************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ContactCell","Target":{"Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"Customers"},"_Name":"SectionContactCell0","Header":{"Styles":{"Caption":"/demoapp/Rules/Cnt.js"},"_Type":"SectionCommon.Type.Header","_Name":"SectionCommonTypeHeader1","AccessoryType":"None","UseTopPadding":true,"Caption":"/demoapp/Rules/Cnt.js"},"Visible":true,"EmptySection":{"FooterVisible":false},"ContactCell":{"Visible":true,"DetailImage":"/demoapp/Rules/Country_List.js","BadgeImage":"res://contact.png","Headline":"{LastName}","Subheadline":"{FirstName}","Description":"{City}+','+{Country}","OnPress":"/demoapp/Actions/NavToCustomers_Detail.action","ActivityItems":[{"_Name":"SectionContactCell0ActivityItems0","ActivityType":"Phone","ActivityValue":"{PhoneNumber}"},{"_Name":"SectionContactCell0ActivityItems1","ActivityType":"Email","ActivityValue":"{EmailAddress}"},{"_Name":"SectionContactCell0ActivityItems2","ActivityType":"Message","ActivityValue":"{PhoneNumber}"}],"ContextMenu":{"PerformFirstActionWithFullSwipe":true}},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"DetailImageIsCircular":true,"UseHeadlineForDetailImage":false,"Search":{"Enabled":true,"BarcodeScanner":true}}]}],"_Type":"Page","_Name":"Customers_Lis","ActionBar":{"Items":[{"_Type":"Control.Type.ActionBarItem","_Name":"ActionBarItem1","Caption":"add","SystemItem":"Add","Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/demoapp/Actions/NavToNewCreateCustomer.action"},{"_Type":"Control.Type.ActionBarItem","_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Add","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/demoapp/Actions/NavToCustomers_Create.action"}],"_Name":"ActionBar2","_Type":"Control.Type.ActionBar","Caption":"Customers"}}

/***/ }),

/***/ "./build.definitions/demoapp/Pages/Customers_Orders.page":
/*!***************************************************************!*\
  !*** ./build.definitions/demoapp/Pages/Customers_Orders.page ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ObjectTable","Target":{"Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"SalesOrderHeaders","QueryOptions":"$filter=CustomerID eq {CustomerID}&$orderby=CreatedAt desc"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"Caption":"No Orders Found","FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"ObjectCell":{"Title":"$(D,{CreatedAt},'','',{format:'medium'})","Subhead":"{CustomerID}","DisplayDescriptionInMobile":true,"StatusText":"$(C,{GrossAmount},{CurrencyCode},'',{minimumIntegerDigits:1,minimumFractionDigits:0,maximumFractionDigits:2,useGrouping:true})","PreserveIconStackSpacing":false,"AccessoryType":"DisclosureIndicator","Tags":[],"AvatarStack":{"Avatars":[],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"OnPress":{"Name":"/demoapp/Actions/GenericNavigation.action","Properties":{"PageToOpen":"/demoapp/Pages/SalesOrders_Details.page"}},"_Type":"ObjectTable.Type.ObjectCell","Selected":false,"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[],"_Type":"ObjectCell.Type.ContextMenu"}},"Search":{"Enabled":true,"BarcodeScanner":true},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"Grouping":{"GroupingProperties":[],"Header":{"Items":[]}},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"Customers_Orders","ActionBar":{"Items":[],"_Name":"ActionBar1","_Type":"Control.Type.ActionBar","Caption":"Customer Orders"}}

/***/ }),

/***/ "./build.definitions/demoapp/Pages/ErrorArchive/ErrorArchive_Detail.page":
/*!*******************************************************************************!*\
  !*** ./build.definitions/demoapp/Pages/ErrorArchive/ErrorArchive_Detail.page ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"KeyAndValues":[{"Value":"{Message}","_Name":"KeyValue0","KeyName":"Error","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"{RequestBody}","_Name":"KeyValue1","KeyName":"Request Body","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"{RequestURL}","_Name":"KeyValue2","KeyName":"Request URL","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"{HTTPStatusCode}","_Name":"KeyValue3","KeyName":"HTTP Status Code","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"{RequestMethod}","_Name":"KeyValue4","KeyName":"Request Method","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"ErrorArchive_Detail","ActionBar":{"Caption":"Details","PreferredCaptionSize":"Large","_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/demoapp/Pages/ErrorArchive/ErrorArchive_List.page":
/*!*****************************************************************************!*\
  !*** ./build.definitions/demoapp/Pages/ErrorArchive/ErrorArchive_List.page ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ObjectTable","Target":{"Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"ErrorArchive"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false,"Caption":"No record found!"},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"_Type":"ObjectCell.Type.ContextMenu"},"Title":"{HTTPStatusCode}","Subhead":"{RequestURL}","Footnote":"{Message}","StatusText":"{RequestMethod}","AvatarStack":{"ImageIsCircular":false},"PreserveIconStackSpacing":false,"AccessoryType":"None","OnPress":"/demoapp/Actions/ErrorArchive/NavToErrorArchive_Detail.action","Selected":false,"_Type":"ObjectTable.Type.ObjectCell"},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"ErrorArchive_List","ActionBar":{"Caption":"Error List","PreferredCaptionSize":"Large","_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/demoapp/Pages/Main.page":
/*!***************************************************!*\
  !*** ./build.definitions/demoapp/Pages/Main.page ***!
  \***************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Layout":{"LayoutType":"Vertical","HorizontalAlignment":"Leading"},"_Type":"Section.Type.ButtonTable","_Name":"SectionButtonTable1","Visible":true,"EmptySection":{"FooterVisible":false},"Buttons":[{"_Type":"ButtonTable.Type.Button","_Name":"Customer","Title":"Customer","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://customer","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/demoapp/Actions/NavToCustomers_List.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton0","Title":"Products","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://product","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/demoapp/Actions/Product_list.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton1","Title":"Sales Order Header","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://sales-order","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/demoapp/Actions/Sales_Order_Header.action"}]}]}],"_Type":"Page","_Name":"Main","ActionBar":{"Items":[{"_Type":"Control.Type.ActionBarItem","_Name":"ActionBarItem0","Caption":"User Menu","Icon":"sap-icon://customer","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/demoapp/Actions/Application/UserMenuPopover.action"}],"_Name":"ActionBar1","_Type":"Control.Type.ActionBar","Caption":"Main","PreferredCaptionSize":"Large"}}

/***/ }),

/***/ "./build.definitions/demoapp/Pages/New_Customer_Create.page":
/*!******************************************************************!*\
  !*** ./build.definitions/demoapp/Pages/New_Customer_Create.page ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateFirstName","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"First Name","PlaceHolder":"Enter First Name","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateLastName","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Last Name","PlaceHolder":"Enter Last Name","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreatePhone","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Phone","PlaceHolder":"Enter Phone Number","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateEmail","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Email","PlaceHolder":"Enter Email","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"FCCountry","RequiredIndicator":false,"IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Country","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one single item","PlaceHolder":"Select","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"Search":{"Enabled":true},"PickerItems":{"Target":"/demoapp/Rules/GetCountryList.js","DisplayValue":"{DisplayValue}","ReturnValue":"{ReturnValue}"}}],"Layout":{"NumberOfColumns":1},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"New_Customer_Create","ActionBar":{"Items":[{"_Type":"Control.Type.ActionBarItem","_Name":"ActionBarItem1","Caption":"Item","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/demoapp/Actions/CloseModalPage_Cancel.action"},{"_Type":"Control.Type.ActionBarItem","_Name":"ActionBarItem0","Caption":"Next","Icon":"sap-icon://sys-next-page","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/demoapp/Rules/StoreCustomerTempData.js"}],"_Name":"ActionBar0","_Type":"Control.Type.ActionBar","Caption":"Customer Create"}}

/***/ }),

/***/ "./build.definitions/demoapp/Pages/Product_Detail.page":
/*!*************************************************************!*\
  !*** ./build.definitions/demoapp/Pages/Product_Detail.page ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0","ObjectHeader":{"Subhead":"{ProductID}","Footnote":"{ShortDescription}","Description":"{Category}","DetailImage":"sap-icon://product","DetailImageIsCircular":false,"HeadlineText":"{Name}","StatusPosition":"Stacked","StatusImagePosition":"Leading","SubstatusImagePosition":"Leading"},"Visible":true},{"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"KeyAndValues":[{"Value":"{CurrencyCode}","_Type":"KeyValue.Type.Item","_Name":"KeyValue2","KeyName":"Currency Code","Visible":true},{"Value":"{Price}","_Type":"KeyValue.Type.Item","_Name":"KeyValue0","KeyName":"Price","Visible":true},{"Value":"{QuantityUnit}","_Type":"KeyValue.Type.Item","_Name":"KeyValue1","KeyName":"Quantity Unit","Visible":true},{"Value":"{SupplierID}","_Type":"KeyValue.Type.Item","_Name":"KeyValue3","KeyName":"Supplier ID","Visible":true}],"MaxItemCount":1,"Layout":{"NumberOfColumns":2}}],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"Product_Detail","ActionBar":{"Items":[],"_Name":"ActionBar1","_Type":"Control.Type.ActionBar","Caption":"Details"},"DesignTimeTarget":{"Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"Products"}}

/***/ }),

/***/ "./build.definitions/demoapp/Pages/Products_List.page":
/*!************************************************************!*\
  !*** ./build.definitions/demoapp/Pages/Products_List.page ***!
  \************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","Target":{"Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"Products"},"_Name":"SectionedTable0","Section":{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ContactCell","Target":{"Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"Products"},"_Name":"SectionContactCell0","Visible":true,"EmptySection":{"FooterVisible":false},"ContactCell":{"Visible":true,"DetailImage":"sap-icon://product","BadgeImage":"sap-icon://product","Headline":"{Name}","Subheadline":"{ProductID}","Description":"{Category}","OnPress":"/demoapp/Actions/Product_detail.action","ActivityItems":[{"_Name":"SectionContactCell0ActivityItems0","ActivityType":"Detail","ActivityValue":"{CategoryName}"}],"ContextMenu":{"PerformFirstActionWithFullSwipe":true}},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"DetailImageIsCircular":true,"UseHeadlineForDetailImage":false,"Search":{"Enabled":true,"BarcodeScanner":true}}}],"_Type":"Page","_Name":"Products_List","ActionBar":{"Items":[],"_Name":"ActionBar4","_Type":"Control.Type.ActionBar","Caption":"Products"}}

/***/ }),

/***/ "./build.definitions/demoapp/Pages/SalesOrderHeaders_Create.page":
/*!***********************************************************************!*\
  !*** ./build.definitions/demoapp/Pages/SalesOrderHeaders_Create.page ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Controls":[{"Value":"EUR","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateCurrencyCode","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Currency Code","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"Value":"18.010","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateNetAmount","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Net Amount","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"Value":"108.010","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateTaxAmount","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Tax Amount","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"Value":"126.02","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateGrossAmount","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Gross Amount","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"Value":"N","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateLifeCycleStatus","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Lifecycle Status","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"Value":"New","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateLifeCycleStatusName","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Lifecycle Status Name","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"Value":"Enter Date","_Type":"Control.Type.FormCell.DatePicker","_Name":"FCCreatedate","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Creation Date","IsEditable":true,"Mode":"Datetime"}],"Layout":{"NumberOfColumns":1}}],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"SalesOrderHeaders_Create","ActionBar":{"Items":[{"_Type":"Control.Type.ActionBarItem","_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/demoapp/Actions/CloseModalPage_Cancel.action"},{"_Type":"Control.Type.ActionBarItem","_Name":"ActionBarItem1","Caption":"Item","SystemItem":"Save","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/demoapp/Actions/SalesOrderHeaders_CreateEntity.action"}],"_Name":"ActionBar0","_Type":"Control.Type.ActionBar","Caption":"Create Order"}}

/***/ }),

/***/ "./build.definitions/demoapp/Pages/SalesOrder_Create.page":
/*!****************************************************************!*\
  !*** ./build.definitions/demoapp/Pages/SalesOrder_Create.page ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"Value":"EUR","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateCurrencyCode","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Currency Code","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"Value":"18.010","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateNetAmount","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Net Amount","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"Value":"108.010","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateTaxAmount","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Tax Amount","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"Value":"126.02","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateGrossAmount","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Gross Amount","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"Value":"N","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateLifeCycleStatus","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Lifecycle Status","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"Value":"New","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateLifeCycleStatusName","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Lifecycle Status Name","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"Value":"Enter Date","_Type":"Control.Type.FormCell.DatePicker","_Name":"FCCreatedate","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Creation Date","IsEditable":true,"Mode":"Datetime"}],"Layout":{"NumberOfColumns":1},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"SalesOrder_Create","ActionBar":{"Items":[{"_Type":"Control.Type.ActionBarItem","_Name":"ActionBarCancel","Caption":"Cancel","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/demoapp/Actions/CloseModalPage_Cancel.action"},{"_Type":"Control.Type.ActionBarItem","_Name":"ActionBarDone","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/demoapp/Rules/CreateCustomerAndSales.js"}],"_Name":"ActionBar0","_Type":"Control.Type.ActionBar","Caption":"Create Sales Order"}}

/***/ }),

/***/ "./build.definitions/demoapp/Pages/SalesOrders_Details.page":
/*!******************************************************************!*\
  !*** ./build.definitions/demoapp/Pages/SalesOrders_Details.page ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"KeyAndValues":[{"Value":"{SalesOrderID}","_Type":"KeyValue.Type.Item","_Name":"KeyValue0","KeyName":"Order Number","Visible":true},{"Value":"{LifeCycleStatusName}","_Type":"KeyValue.Type.Item","_Name":"KeyValue2","KeyName":"Status","Visible":true},{"Value":"$(D,{CreatedAt},'','',{format:'medium'})","_Type":"KeyValue.Type.Item","_Name":"KeyValue4","KeyName":"Created At","Visible":true},{"Value":"\t$(C,{NetAmount},{CurrencyCode},'',{minimumIntegerDigits:1,minimumFractionDigits:0,maximumFractionDigits:2,useGrouping:true})","_Type":"KeyValue.Type.Item","_Name":"KeyValue1","KeyName":"Net Amount","Visible":true},{"Value":"$(C,{TaxAmount},{CurrencyCode},'',{minimumIntegerDigits:1,minimumFractionDigits:0,maximumFractionDigits:2,useGrouping:true})","_Type":"KeyValue.Type.Item","_Name":"KeyValue3","KeyName":"Tax Amount","Visible":true},{"Value":"$(C,{GrossAmount},{CurrencyCode},'',{minimumIntegerDigits:1,minimumFractionDigits:0,maximumFractionDigits:2,useGrouping:true})","_Type":"KeyValue.Type.Item","_Name":"KeyValue5","KeyName":"Total Amount","Visible":true}],"MaxItemCount":1,"Layout":{"NumberOfColumns":2}}],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"SalesOrders_Details","ActionBar":{"Items":[],"_Name":"ActionBar1","_Type":"Control.Type.ActionBar","Caption":"Order Details"},"DesignTimeTarget":{"Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"SalesOrderHeaders"}}

/***/ }),

/***/ "./build.definitions/demoapp/Pages/Sales_Order_Header_list.page":
/*!**********************************************************************!*\
  !*** ./build.definitions/demoapp/Pages/Sales_Order_Header_list.page ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ContactCell","Target":{"Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"SalesOrderHeaders"},"_Name":"SectionContactCell0","Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"ContactCell":{"Visible":true,"DetailImage":"res://contact.png","BadgeImage":"sap-icon://sales-order","Headline":"{SalesOrderID}","Subheadline":"{CurrencyCode}","Description":"{NetAmount}","ContextMenu":{"PerformFirstActionWithFullSwipe":true}},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"DetailImageIsCircular":true,"UseHeadlineForDetailImage":false}],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"Sales_Order_Header_list","ActionBar":{"Items":[],"_Name":"ActionBar1","_Type":"Control.Type.ActionBar","Caption":"Sales Orders"}}

/***/ }),

/***/ "./build.definitions/demoapp/Pages/Sales_Order_Items.page":
/*!****************************************************************!*\
  !*** ./build.definitions/demoapp/Pages/Sales_Order_Items.page ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"Sales_Order_Items","ActionBar":{"Items":[],"_Name":"ActionBar1","_Type":"Control.Type.ActionBar","Caption":"Sales Order Items"},"DesignTimeTarget":{"Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"SalesOrderItems"}}

/***/ }),

/***/ "./build.definitions/demoapp/Pages/com_sap_edm_sampleservice_v4_Customers/Customers_Detail.page":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/demoapp/Pages/com_sap_edm_sampleservice_v4_Customers/Customers_Detail.page ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"Customers","QueryOptions":""},"ActionBar":{"Items":[],"Caption":"$(L,Customer_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{FirstName}","Subhead":"{City}","BodyText":"","Footnote":"{CustomerID}","Description":"{Country}","StatusText":"{DateOfBirth}","StatusImage":"","SubstatusImage":"","SubstatusText":"{EmailAddress}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"City","Value":"{City}","_Type":"KeyValue.Type.Item"},{"KeyName":"Country","Value":"{Country}","_Type":"KeyValue.Type.Item"},{"KeyName":"CustomerID","Value":"{CustomerID}","_Type":"KeyValue.Type.Item"},{"KeyName":"DateOfBirth","Value":"{DateOfBirth}","_Type":"KeyValue.Type.Item"},{"KeyName":"EmailAddress","Value":"{EmailAddress}","_Type":"KeyValue.Type.Item"},{"KeyName":"FirstName","Value":"{FirstName}","_Type":"KeyValue.Type.Item"},{"KeyName":"HouseNumber","Value":"{HouseNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"LastName","Value":"{LastName}","_Type":"KeyValue.Type.Item"},{"KeyName":"PhoneNumber","Value":"{PhoneNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"PostalCode","Value":"{PostalCode}","_Type":"KeyValue.Type.Item"},{"KeyName":"Street","Value":"{Street}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"Address","_Type":"SectionCommon.Type.Header"},"KeyAndValues":[{"KeyName":"HouseNumber","Value":"{Address/HouseNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"Street","Value":"{Address/Street}","_Type":"KeyValue.Type.Item"},{"KeyName":"City","Value":"{Address/City}","_Type":"KeyValue.Type.Item"},{"KeyName":"Country","Value":"{Address/Country}","_Type":"KeyValue.Type.Item"},{"KeyName":"PostalCode","Value":"{Address/PostalCode}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValueAddress","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"SalesOrders","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{CurrencyCode}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{LifeCycleStatusName}","Footnote":"{CustomerID}","PreserveIconStackSpacing":false,"StatusText":"{GrossAmount}","Subhead":"{CreatedAt}","SubstatusText":"{LifeCycleStatus}","OnPress":"/demoapp/Actions/com_sap_edm_sampleservice_v4/SalesOrderHeaders/NavToSalesOrderHeaders_Detail.action","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/SalesOrders","Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["SalesOrderHeaders"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Customers_Detail"}

/***/ }),

/***/ "./build.definitions/demoapp/Pages/com_sap_edm_sampleservice_v4_Customers/Customers_List.page":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/demoapp/Pages/com_sap_edm_sampleservice_v4_Customers/Customers_List.page ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[],"Caption":"$(L,Customers)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{Country}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/demoapp/Actions/com_sap_edm_sampleservice_v4/Customers/NavToCustomers_Detail.action","StatusImage":"","Title":"{FirstName}","Footnote":"{CustomerID}","PreserveIconStackSpacing":false,"StatusText":"{DateOfBirth}","Subhead":"{City}","SubstatusText":"{EmailAddress}","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Customers","Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Customers_List"}

/***/ }),

/***/ "./build.definitions/demoapp/Pages/com_sap_edm_sampleservice_v4_Products/Products_Detail.page":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/demoapp/Pages/com_sap_edm_sampleservice_v4_Products/Products_Detail.page ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"Products","QueryOptions":""},"ActionBar":{"Items":[],"Caption":"$(L,Product_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"/demoapp/Services/com_sap_edm_sampleservice_v4.service/{@odata.readLink}/Picture","HeadlineText":"{Name}","Subhead":"{Category}","BodyText":"","Footnote":"{CurrencyCode}","Description":"{CategoryName}","StatusText":"{DimensionDepth}","StatusImage":"","SubstatusImage":"","SubstatusText":"{DimensionHeight}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Category","Value":"{Category}","_Type":"KeyValue.Type.Item"},{"KeyName":"CategoryName","Value":"{CategoryName}","_Type":"KeyValue.Type.Item"},{"KeyName":"CurrencyCode","Value":"{CurrencyCode}","_Type":"KeyValue.Type.Item"},{"KeyName":"DimensionDepth","Value":"{DimensionDepth}","_Type":"KeyValue.Type.Item"},{"KeyName":"DimensionHeight","Value":"{DimensionHeight}","_Type":"KeyValue.Type.Item"},{"KeyName":"DimensionUnit","Value":"{DimensionUnit}","_Type":"KeyValue.Type.Item"},{"KeyName":"DimensionWidth","Value":"{DimensionWidth}","_Type":"KeyValue.Type.Item"},{"KeyName":"LongDescription","Value":"{LongDescription}","_Type":"KeyValue.Type.Item"},{"KeyName":"Name","Value":"{Name}","_Type":"KeyValue.Type.Item"},{"KeyName":"PictureUrl","Value":"{PictureUrl}","_Type":"KeyValue.Type.Item"},{"KeyName":"Price","Value":"{Price}","_Type":"KeyValue.Type.Item"},{"KeyName":"ProductID","Value":"{ProductID}","_Type":"KeyValue.Type.Item"},{"KeyName":"QuantityUnit","Value":"{QuantityUnit}","_Type":"KeyValue.Type.Item"},{"KeyName":"ShortDescription","Value":"{ShortDescription}","_Type":"KeyValue.Type.Item"},{"KeyName":"SupplierID","Value":"{SupplierID}","_Type":"KeyValue.Type.Item"},{"KeyName":"Weight","Value":"{Weight}","_Type":"KeyValue.Type.Item"},{"KeyName":"WeightUnit","Value":"{WeightUnit}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"PurchaseOrderItems","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{GrossAmount}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{ProductID}","Footnote":"{ItemNumber}","PreserveIconStackSpacing":false,"StatusText":"{NetAmount}","Subhead":"{CurrencyCode}","SubstatusText":"{PurchaseOrderID}","OnPress":"/demoapp/Actions/com_sap_edm_sampleservice_v4/PurchaseOrderItems/NavToPurchaseOrderItems_Detail.action","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/PurchaseOrderItems","Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"SalesOrderItems","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{DeliveryDate}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{ProductID}","Footnote":"{GrossAmount}","PreserveIconStackSpacing":false,"StatusText":"{ItemNumber}","Subhead":"{CurrencyCode}","SubstatusText":"{NetAmount}","OnPress":"/demoapp/Actions/com_sap_edm_sampleservice_v4/SalesOrderItems/NavToSalesOrderItems_Detail.action","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/SalesOrderItems","Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["PurchaseOrderItems","SalesOrderItems"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Products_Detail"}

/***/ }),

/***/ "./build.definitions/demoapp/Pages/com_sap_edm_sampleservice_v4_Products/Products_List.page":
/*!**************************************************************************************************!*\
  !*** ./build.definitions/demoapp/Pages/com_sap_edm_sampleservice_v4_Products/Products_List.page ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[],"Caption":"$(L,Products)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{CategoryName}","AvatarStack":{"Avatars":[{"Image":"/demoapp/Services/com_sap_edm_sampleservice_v4.service/{@odata.readLink}/Picture"}],"ImageIsCircular":false},"Icons":[],"OnPress":"/demoapp/Actions/com_sap_edm_sampleservice_v4/Products/NavToProducts_Detail.action","StatusImage":"","Title":"{Name}","Footnote":"{CurrencyCode}","PreserveIconStackSpacing":false,"StatusText":"{DimensionDepth}","Subhead":"{Category}","SubstatusText":"{DimensionHeight}","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Products","Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Products_List"}

/***/ }),

/***/ "./build.definitions/demoapp/Pages/com_sap_edm_sampleservice_v4_PurchaseOrderItems/PurchaseOrderItems_Detail.page":
/*!************************************************************************************************************************!*\
  !*** ./build.definitions/demoapp/Pages/com_sap_edm_sampleservice_v4_PurchaseOrderItems/PurchaseOrderItems_Detail.page ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"PurchaseOrderItems","QueryOptions":""},"ActionBar":{"Items":[],"Caption":"$(L,PurchaseOrderItem_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{ProductID}","Subhead":"{CurrencyCode}","BodyText":"","Footnote":"{ItemNumber}","Description":"{GrossAmount}","StatusText":"{NetAmount}","StatusImage":"","SubstatusImage":"","SubstatusText":"{PurchaseOrderID}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"CurrencyCode","Value":"{CurrencyCode}","_Type":"KeyValue.Type.Item"},{"KeyName":"GrossAmount","Value":"{GrossAmount}","_Type":"KeyValue.Type.Item"},{"KeyName":"ItemNumber","Value":"{ItemNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"NetAmount","Value":"{NetAmount}","_Type":"KeyValue.Type.Item"},{"KeyName":"ProductID","Value":"{ProductID}","_Type":"KeyValue.Type.Item"},{"KeyName":"PurchaseOrderID","Value":"{PurchaseOrderID}","_Type":"KeyValue.Type.Item"},{"KeyName":"Quantity","Value":"{Quantity}","_Type":"KeyValue.Type.Item"},{"KeyName":"QuantityUnit","Value":"{QuantityUnit}","_Type":"KeyValue.Type.Item"},{"KeyName":"TaxAmount","Value":"{TaxAmount}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PurchaseOrderItems_Detail"}

/***/ }),

/***/ "./build.definitions/demoapp/Pages/com_sap_edm_sampleservice_v4_SalesOrderHeaders/SalesOrderHeaders_Detail.page":
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/demoapp/Pages/com_sap_edm_sampleservice_v4_SalesOrderHeaders/SalesOrderHeaders_Detail.page ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"SalesOrderHeaders","QueryOptions":""},"ActionBar":{"Items":[],"Caption":"$(L,SalesOrderHeader_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{LifeCycleStatusName}","Subhead":"{CreatedAt}","BodyText":"","Footnote":"{CustomerID}","Description":"{CurrencyCode}","StatusText":"{GrossAmount}","StatusImage":"","SubstatusImage":"","SubstatusText":"{LifeCycleStatus}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"CreatedAt","Value":"{CreatedAt}","_Type":"KeyValue.Type.Item"},{"KeyName":"CurrencyCode","Value":"{CurrencyCode}","_Type":"KeyValue.Type.Item"},{"KeyName":"CustomerID","Value":"{CustomerID}","_Type":"KeyValue.Type.Item"},{"KeyName":"GrossAmount","Value":"{GrossAmount}","_Type":"KeyValue.Type.Item"},{"KeyName":"LifeCycleStatus","Value":"{LifeCycleStatus}","_Type":"KeyValue.Type.Item"},{"KeyName":"LifeCycleStatusName","Value":"{LifeCycleStatusName}","_Type":"KeyValue.Type.Item"},{"KeyName":"NetAmount","Value":"{NetAmount}","_Type":"KeyValue.Type.Item"},{"KeyName":"SalesOrderID","Value":"{SalesOrderID}","_Type":"KeyValue.Type.Item"},{"KeyName":"TaxAmount","Value":"{TaxAmount}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"Items","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{DeliveryDate}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{ProductID}","Footnote":"{GrossAmount}","PreserveIconStackSpacing":false,"StatusText":"{ItemNumber}","Subhead":"{CurrencyCode}","SubstatusText":"{NetAmount}","OnPress":"/demoapp/Actions/com_sap_edm_sampleservice_v4/SalesOrderItems/NavToSalesOrderItems_Detail.action","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/Items","Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["SalesOrderItems"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"SalesOrderHeaders_Detail"}

/***/ }),

/***/ "./build.definitions/demoapp/Pages/com_sap_edm_sampleservice_v4_SalesOrderHeaders/SalesOrderHeaders_List.page":
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/demoapp/Pages/com_sap_edm_sampleservice_v4_SalesOrderHeaders/SalesOrderHeaders_List.page ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[],"Caption":"$(L,SalesOrderHeaders)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{CurrencyCode}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/demoapp/Actions/com_sap_edm_sampleservice_v4/SalesOrderHeaders/NavToSalesOrderHeaders_Detail.action","StatusImage":"","Title":"{LifeCycleStatusName}","Footnote":"{CustomerID}","PreserveIconStackSpacing":false,"StatusText":"{GrossAmount}","Subhead":"{CreatedAt}","SubstatusText":"{LifeCycleStatus}","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"SalesOrderHeaders","Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"SalesOrderHeaders_List"}

/***/ }),

/***/ "./build.definitions/demoapp/Pages/com_sap_edm_sampleservice_v4_SalesOrderItems/SalesOrderItems_Detail.page":
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/demoapp/Pages/com_sap_edm_sampleservice_v4_SalesOrderItems/SalesOrderItems_Detail.page ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"SalesOrderItems","QueryOptions":""},"ActionBar":{"Items":[],"Caption":"$(L,SalesOrderItem_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{ProductID}","Subhead":"{CurrencyCode}","BodyText":"","Footnote":"{GrossAmount}","Description":"{DeliveryDate}","StatusText":"{ItemNumber}","StatusImage":"","SubstatusImage":"","SubstatusText":"{NetAmount}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"CurrencyCode","Value":"{CurrencyCode}","_Type":"KeyValue.Type.Item"},{"KeyName":"DeliveryDate","Value":"{DeliveryDate}","_Type":"KeyValue.Type.Item"},{"KeyName":"GrossAmount","Value":"{GrossAmount}","_Type":"KeyValue.Type.Item"},{"KeyName":"ItemNumber","Value":"{ItemNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"NetAmount","Value":"{NetAmount}","_Type":"KeyValue.Type.Item"},{"KeyName":"ProductID","Value":"{ProductID}","_Type":"KeyValue.Type.Item"},{"KeyName":"Quantity","Value":"{Quantity}","_Type":"KeyValue.Type.Item"},{"KeyName":"QuantityUnit","Value":"{QuantityUnit}","_Type":"KeyValue.Type.Item"},{"KeyName":"SalesOrderID","Value":"{SalesOrderID}","_Type":"KeyValue.Type.Item"},{"KeyName":"TaxAmount","Value":"{TaxAmount}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"SalesOrderItems_Detail"}

/***/ }),

/***/ "./build.definitions/demoapp/Pages/com_sap_edm_sampleservice_v4_SalesOrderItems/SalesOrderItems_List.page":
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/demoapp/Pages/com_sap_edm_sampleservice_v4_SalesOrderItems/SalesOrderItems_List.page ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[],"Caption":"$(L,SalesOrderItems)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{DeliveryDate}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/demoapp/Actions/com_sap_edm_sampleservice_v4/SalesOrderItems/NavToSalesOrderItems_Detail.action","StatusImage":"","Title":"{ProductID}","Footnote":"{GrossAmount}","PreserveIconStackSpacing":false,"StatusText":"{ItemNumber}","Subhead":"{CurrencyCode}","SubstatusText":"{NetAmount}","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"SalesOrderItems","Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"SalesOrderItems_List"}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"_Name":"demoapp","Version":"/demoapp/Globals/Application/AppDefinition_Version.global","MainPage":"/demoapp/Pages/Main.page","OnLaunch":"/demoapp/Rules/Service/Initialize.js","OnWillUpdate":"/demoapp/Rules/Application/OnWillUpdate.js","OnDidUpdate":"/demoapp/Rules/Service/Initialize.js","Styles":"/demoapp/Styles/Styles.css","Localization":"/demoapp/i18n/i18n.properties","_SchemaVersion":"26.3","StyleSheets":{"Styles":{"css":"/demoapp/Styles/Styles.light.css","ios":"/demoapp/Styles/Styles.light.nss","android":"/demoapp/Styles/Styles.light.json"}},"SDKStyles":{"ios":"/demoapp/Styles/Styles.light.nss","android":"/demoapp/Styles/Styles.light.json"}}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/Application/AppUpdate.action":
/*!************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/Application/AppUpdate.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/demoapp/Rules/Application/AppUpdateFailure.js","OnSuccess":"/demoapp/Rules/Application/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/Application/AppUpdateFailureMessage.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/Application/AppUpdateFailureMessage.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/Application/AppUpdateProgressBanner.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/Application/AppUpdateProgressBanner.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/demoapp/Actions/Application/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/Application/AppUpdateSuccessMessage.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/Application/AppUpdateSuccessMessage.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/Application/Logout.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/Application/Logout.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":true}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/Application/NavToAbout.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/Application/NavToAbout.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/demoapp/Pages/Application/About.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/Application/NavToActivityLog.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/Application/NavToActivityLog.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/demoapp/Pages/Application/UserActivityLog.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/Application/NavToSupport.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/Application/NavToSupport.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"NavigationType":"Cross","PageToOpen":"/demoapp/Pages/Application/Support.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/Application/OnWillUpdate.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/Application/OnWillUpdate.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/Application/Reset.action":
/*!********************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/Application/Reset.action ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":false}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/Application/ResetMessage.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/Application/ResetMessage.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","Title":"Reset","OKCaption":"Yes","OnOK":"/demoapp/Rules/Application/ResetAppSettingsAndLogout.js","CancelCaption":"No"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/Application/UserMenuPopover.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/Application/UserMenuPopover.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Enabled":true,"Icon":"sap-icon://synchronize","OnPress":"/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/SyncStartedMessage.action","Title":"Sync Changes","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://headset","OnPress":"/demoapp/Actions/Application/NavToSupport.action","Title":"Support","Visible":true},{"Enabled":true,"Icon":"sap-icon://refresh","OnPress":"/demoapp/Actions/Application/AppUpdateProgressBanner.action","Title":"Check for Updates","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://hint","OnPress":"/demoapp/Actions/Application/NavToAbout.action","Title":"About","Visible":true},{"Enabled":true,"Icon":"sap-icon://reset","OnPress":"/demoapp/Actions/Application/ResetMessage.action","Title":"Reset","Visible":true},{"Enabled":true,"Icon":"sap-icon://log","OnPress":"/demoapp/Actions/Application/Logout.action","Title":"Logout","Visible":"/demoapp/Rules/Application/ClientIsMultiUserMode.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/CloseModalPage_Cancel.action":
/*!************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/CloseModalPage_Cancel.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/CloseModalPage_Complete.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/CloseModalPage_Complete.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/ClosePage.action":
/*!************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/ClosePage.action ***!
  \************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/CreateCustomerEntityFailureMessage.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/CreateCustomerEntityFailureMessage.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"CreateCustomerEntityFailureMessage"},"Message":"Failed to Create Customer record - {#ActionResults:Customers_CreateEntity/error}","Title":"Create Customer","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/CreateCustomerWithSalesOrder.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/CreateCustomerWithSalesOrder.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"CreateCustomerWithSalesOrder"},"Target":{"Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"Customers"},"Properties":{"Country":"{Country}","EmailAddress":"{EmailAddress}","FirstName":"{FirstName}","LastName":"{LastName}","PhoneNumber":"{PhoneNumber}"}}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/CustomerCreationFailure.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/CustomerCreationFailure.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"CustomerCreationFailure"},"Message":"{Property:Message}","Title":"Error","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/Customers_CreateEntity.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/Customers_CreateEntity.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"Customers_CreateEntity"},"OnFailure":"/demoapp/Actions/CreateCustomerEntityFailureMessage.action","OnSuccess":"/demoapp/Actions/CloseModalPage_Complete.action","Target":{"Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"Customers"},"Properties":{"Country":"#Control:FCCountry/#SelectedValue","DateOfBirth":"#Control:FCCreateDOB/#Value","EmailAddress":"#Control:FCCreateEmail/#Value","FirstName":"#Control:FCCreateFirstName/#Value","LastName":"#Control:FCCreateLastName/#Value","PhoneNumber":"#Control:FCCreatePhone/#Value"}}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/Customers_DeleteConfirmation.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/Customers_DeleteConfirmation.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"Customers_DeleteConfirmation"},"Message":"Delete current entity?","Title":"Delete Confirmation","OKCaption":"Ok","CancelCaption":"Cancel"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/Customers_DeleteEntity.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/Customers_DeleteEntity.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.DeleteEntity","ActionResult":{"_Name":"Customers_DeleteEntity"},"OnFailure":"/demoapp/Actions/DeleteCustomerEntityFailureMessage.action","OnSuccess":"/demoapp/Actions/CloseModalPage_Complete.action","Target":{"Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"Customers","ReadLink":"{@odata.readLink}"}}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/Customers_UpdateEntity.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/Customers_UpdateEntity.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","ActionResult":{"_Name":"Customers_UpdateEntity"},"OnFailure":"/demoapp/Actions/UpdateCustomerEntityFailureMessage.action","OnSuccess":"/demoapp/Actions/CloseModalPage_Complete.action","ValidationRule":"/demoapp/Rules/EmailValidation.js","Target":{"Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"Customers","ReadLink":"{@odata.readLink}"},"Properties":{"Country":"#Control:FCCountry/#SelectedValue","DateOfBirth":"#Control:FCUpdateDOB/#Value","EmailAddress":"#Control:FCEmail/#Value","FirstName":"#Control:FCFirstName/#Value","LastName":"#Control:FCLastName/#Value","PhoneNumber":"#Control:FCPhone/#Value"}}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/DeleteCustomerEntityFailureMessage.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/DeleteCustomerEntityFailureMessage.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"DeleteCustomerEntityFailureMessage"},"Message":"Delete entity failure - {#ActionResults:Customers_DeleteEntity/error}","Title":"Delete Customer","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","Message":"Upload failed!","Duration":0,"Animated":false,"OnActionLabelPress":"/demoapp/Actions/ErrorArchive/NavToErrorArchive_List.action","ActionLabel":"View Errors"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/ErrorArchive/NavToErrorArchive_Detail.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/ErrorArchive/NavToErrorArchive_Detail.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/demoapp/Pages/ErrorArchive/ErrorArchive_Detail.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/ErrorArchive/NavToErrorArchive_List.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/ErrorArchive/NavToErrorArchive_List.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/demoapp/Pages/ErrorArchive/ErrorArchive_List.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/GenericBannerMessage.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/GenericBannerMessage.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","ActionResult":{"_Name":"GenericBannerMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/GenericMessageBox.action":
/*!********************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/GenericMessageBox.action ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"GenericMessageBox"},"Message":"Message","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/GenericNavigation.action":
/*!********************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/GenericNavigation.action ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"GenericNavigation"},"PageToOpen":"/demoapp/Pages/Main.page"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/GenericToastMessage.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/GenericToastMessage.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"GenericToastMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/Logging/LogUploadFailure.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/Logging/LogUploadFailure.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Uploading log file failed with error: {#ActionResults:UploadLog/error}","OKCaption":"OK","Title":"Log Upload Failed","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/Logging/LogUploadSuccessful.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/Logging/LogUploadSuccessful.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":3,"IsIconHidden":false,"MaxNumberOfLines":1,"Message":"Log File Uploaded","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/Logging/UploadLog.action":
/*!********************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/Logging/UploadLog.action ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"UploadLog"},"ActivityIndicatorText":"Uploading...","OnFailure":"/demoapp/Actions/Logging/LogUploadFailure.action","OnSuccess":"/demoapp/Actions/Logging/LogUploadSuccessful.action","ShowActivityIndicator":false,"_Type":"Action.Type.Logger.Upload"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/Logging/UploadLogProgress.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/Logging/UploadLogProgress.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionMessage":"Logs Uploaded","CompletionTimeout":2,"Message":"Uploading Log Files...","OnSuccess":"/demoapp/Actions/Logging/UploadLog.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/NavToCustomers_Create.action":
/*!************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/NavToCustomers_Create.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToCustomers_Create"},"PageToOpen":"/demoapp/Pages/Customers_Create.page","ModalPage":true}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/NavToCustomers_Detail.action":
/*!************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/NavToCustomers_Detail.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToCustomers_Detail"},"PageToOpen":"/demoapp/Pages/Customers_Detail.page"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/NavToCustomers_Edit.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/NavToCustomers_Edit.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToCustomers_Edit"},"PageToOpen":"/demoapp/Pages/Customers_Edit.page","ModalPage":true}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/NavToCustomers_List.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/NavToCustomers_List.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToCustomers_List"},"PageToOpen":"/demoapp/Pages/Customers_Lis.page"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/NavToNewCreateCustomer.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/NavToNewCreateCustomer.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToNewCreateCustomer"},"PageToOpen":"/demoapp/Pages/New_Customer_Create.page","ModalPage":true}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/NavToSales.action":
/*!*************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/NavToSales.action ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToSales"},"PageToOpen":"/demoapp/Pages/SalesOrder_Create.page","ModalPage":true}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/NewCustomertoSalesorder.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/NewCustomertoSalesorder.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"NewCustomertoSalesorder"},"Target":{"Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"SalesOrderHeaders"},"Properties":{"CreatedAt":"#Control:FCCreatedate/#Value","CurrencyCode":"#Control:FCCreateCurrencyCode/#Value","GrossAmount":"#Control:FCCreateGrossAmount/#Value","LifeCycleStatus":"#Control:FCCreateLifeCycleStatus/#Value","LifeCycleStatusName":"#Control:FCCreateLifeCycleStatusName/#Value","NetAmount":"#Control:FCCreateNetAmount/#Value","TaxAmount":"#Control:FCCreateTaxAmount/#Value"}}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/New_Customer_Create.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/New_Customer_Create.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"New_Customer_Create"},"Target":{"Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"Customers"},"Properties":{"Country":"#Control:FCCountry/#SelectedValue","EmailAddress":"#Control:FCCreateEmail/#Value","FirstName":"#Control:FCCreateFirstName/#Value","LastName":"#Control:FCCreateLastName/#Value","PhoneNumber":"#Control:FCCreatePhone/#Value"}}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/Product_detail.action":
/*!*****************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/Product_detail.action ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"Product_detail"},"PageToOpen":"/demoapp/Pages/Product_Detail.page","ModalPage":true}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/Product_list.action":
/*!***************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/Product_list.action ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"Product_list"},"PageToOpen":"/demoapp/Pages/Products_List.page","ModalPage":true}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/SalesOrderHeaders_CreateEntity.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/SalesOrderHeaders_CreateEntity.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateRelatedEntity","ActionResult":{"_Name":"SalesOrderHeaders_CreateEntity"},"OnFailure":{"Name":"/demoapp/Actions/GenericMessageBox.action","Properties":{"Message":"Failed to Create Sales Order record - {#ActionResults:SalesOrderHeaders_CreateEntity/error}","Title":"Create Sales Order"}},"OnSuccess":"/demoapp/Actions/CloseModalPage_Complete.action","Target":{"Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"SalesOrderHeaders"},"ParentLink":{"Target":{"EntitySet":"Customers","ReadLink":"{@odata.readLink}"},"Property":"SalesOrders"},"Properties":{"CreatedAt":"#Control:FCCreatedate/#Value","CurrencyCode":"#Control:FCCreateCurrencyCode/#Value","GrossAmount":"#Control:FCCreateGrossAmount/#Value","LifeCycleStatus":"#Control:FCCreateLifeCycleStatus/#Value","LifeCycleStatusName":"#Control:FCCreateLifeCycleStatusName/#Value","NetAmount":"#Control:FCCreateNetAmount/#Value","TaxAmount":"#Control:FCCreateTaxAmount/#Value"}}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/Sales_Order_Header.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/Sales_Order_Header.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"Sales_Order_Header"},"PageToOpen":"/demoapp/Pages/Sales_Order_Header_list.page"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/UpdateCustomerEntityFailureMessage.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/UpdateCustomerEntityFailureMessage.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"UpdateCustomerEntityFailureMessage"},"Message":"Failed to Save Customer Updates - {#ActionResults:Customers_UpdateEntity/error}","Title":"Update Customer","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/ValidationFailure.action":
/*!********************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/ValidationFailure.action ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"ValidationFailure"},"Message":"Validation failed","Title":"Validation","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/ValidationFailureAction.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/ValidationFailureAction.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"ValidationFailureAction"},"Message":"Email address is not in the correct format recipient @ domain . domaintype","Title":"Validate Email","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Customers/NavToCustomers_Detail.action":
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Customers/NavToCustomers_Detail.action ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/demoapp/Pages/com_sap_edm_sampleservice_v4_Customers/Customers_Detail.page"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Customers/NavToCustomers_List.action":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Customers/NavToCustomers_List.action ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/demoapp/Pages/com_sap_edm_sampleservice_v4_Customers/Customers_List.page"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Products/NavToProducts_Detail.action":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Products/NavToProducts_Detail.action ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/demoapp/Pages/com_sap_edm_sampleservice_v4_Products/Products_Detail.page"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Products/NavToProducts_List.action":
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Products/NavToProducts_List.action ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/demoapp/Pages/com_sap_edm_sampleservice_v4_Products/Products_List.page"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/PurchaseOrderItems/NavToPurchaseOrderItems_Detail.action":
/*!*********************************************************************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/PurchaseOrderItems/NavToPurchaseOrderItems_Detail.action ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/demoapp/Pages/com_sap_edm_sampleservice_v4_PurchaseOrderItems/PurchaseOrderItems_Detail.page"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/SalesOrderHeaders/NavToSalesOrderHeaders_Detail.action":
/*!*******************************************************************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/SalesOrderHeaders/NavToSalesOrderHeaders_Detail.action ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/demoapp/Pages/com_sap_edm_sampleservice_v4_SalesOrderHeaders/SalesOrderHeaders_Detail.page"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/SalesOrderHeaders/NavToSalesOrderHeaders_List.action":
/*!*****************************************************************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/SalesOrderHeaders/NavToSalesOrderHeaders_List.action ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/demoapp/Pages/com_sap_edm_sampleservice_v4_SalesOrderHeaders/SalesOrderHeaders_List.page"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/SalesOrderItems/NavToSalesOrderItems_Detail.action":
/*!***************************************************************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/SalesOrderItems/NavToSalesOrderItems_Detail.action ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/demoapp/Pages/com_sap_edm_sampleservice_v4_SalesOrderItems/SalesOrderItems_Detail.page"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/SalesOrderItems/NavToSalesOrderItems_List.action":
/*!*************************************************************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/SalesOrderItems/NavToSalesOrderItems_List.action ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/demoapp/Pages/com_sap_edm_sampleservice_v4_SalesOrderItems/SalesOrderItems_List.page"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOffline.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOffline.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OfflineOData.Close","Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","Force":true,"ActionResult":{"_Name":"close"},"OnSuccess":"/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineSuccessMessage.action","OnFailure":"/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineFailureMessage.action":
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineFailureMessage.action ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failure closing data service - {#ActionResults:close/error}","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineSuccessMessage.action":
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineSuccessMessage.action ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Data service closed successfully","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/DownloadOffline.action":
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/DownloadOffline.action ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","DefiningRequests":[{"Name":"Customers","Query":"Customers"},{"Name":"Products","Query":"Products"},{"Name":"SalesOrderHeaders","Query":"SalesOrderHeaders"},{"Name":"SalesOrderItems","Query":"SalesOrderItems"}],"_Type":"Action.Type.OfflineOData.Download","ActionResult":{"_Name":"sync"},"OnFailure":"/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/SyncFailureMessage.action","OnSuccess":"/demoapp/Rules/com_sap_edm_sampleservice_v4/ErrorArchive_CheckForSyncError.js"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/DownloadStartedMessage.action":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/DownloadStartedMessage.action ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Download in progress...","CompletionMessage":"Download Successful","CompletionTimeout":7,"OnSuccess":"/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/DownloadOffline.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOffline.action":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOffline.action ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","DefiningRequests":[{"Name":"Customers","Query":"Customers"},{"Name":"Products","Query":"Products"},{"Name":"SalesOrderHeaders","Query":"SalesOrderHeaders"},{"Name":"SalesOrderItems","Query":"SalesOrderItems"}],"_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"ActivityIndicatorText":"Downloading...","ActionResult":{"_Name":"init"},"OnFailure":"/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOfflineFailureMessage.action":
/*!***********************************************************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOfflineFailureMessage.action ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/SyncFailureMessage.action":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/SyncFailureMessage.action ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Sync offline data service failure - {#ActionResults:sync/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/SyncStartedMessage.action":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/SyncStartedMessage.action ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Upload in progress...","CompletionMessage":"Sync completed","CompletionTimeout":7,"OnSuccess":"/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/UploadOffline.action","OnFailure":"/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/SyncFailureMessage.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/UploadOffline.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/UploadOffline.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/demoapp/Services/com_sap_edm_sampleservice_v4.service","_Type":"Action.Type.OfflineOData.Upload","ActionResult":{"_Name":"sync"},"OnSuccess":"/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/DownloadStartedMessage.action","OnFailure":"/demoapp/Actions/com_sap_edm_sampleservice_v4/Service/SyncFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/demoapp/Globals/Application/AppDefinition_Version.global":
/*!************************************************************************************!*\
  !*** ./build.definitions/demoapp/Globals/Application/AppDefinition_Version.global ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/demoapp/Globals/Application/ApplicationName.global":
/*!******************************************************************************!*\
  !*** ./build.definitions/demoapp/Globals/Application/ApplicationName.global ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"MDK App","_Type":"String"}

/***/ }),

/***/ "./build.definitions/demoapp/Globals/Application/SupportEmail.global":
/*!***************************************************************************!*\
  !*** ./build.definitions/demoapp/Globals/Application/SupportEmail.global ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"support@mycompany.com","_Type":"String"}

/***/ }),

/***/ "./build.definitions/demoapp/Globals/Application/SupportPhone.global":
/*!***************************************************************************!*\
  !*** ./build.definitions/demoapp/Globals/Application/SupportPhone.global ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ }),

/***/ "./build.definitions/demoapp/Services/com_sap_edm_sampleservice_v4.service":
/*!*********************************************************************************!*\
  !*** ./build.definitions/demoapp/Services/com_sap_edm_sampleservice_v4.service ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"com.sap.edm.sampleservice.v4","OfflineEnabled":true,"LanguageURLParam":"","OnlineOptions":{},"OfflineOptions":{"StoreParameters":{}},"PathSuffix":"","SourceType":"Mobile","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/demoapp/Images/customer-service.png":
/*!***************************************************************!*\
  !*** ./build.definitions/demoapp/Images/customer-service.png ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "webpack/container/entry/bundle.js":
/*!***********************!*\
  !*** container entry ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var moduleMap = {
	".": () => {
		return Promise.resolve().then(() => (() => ((__webpack_require__(/*! ./build.definitions/application-index.js */ "./build.definitions/application-index.js")))));
	}
};
var get = (module, getScope) => {
	__webpack_require__.R = getScope;
	getScope = (
		__webpack_require__.o(moduleMap, module)
			? moduleMap[module]()
			: Promise.resolve().then(() => {
				throw new Error('Module "' + module + '" does not exist in container.');
			})
	);
	__webpack_require__.R = undefined;
	return getScope;
};
var init = (shareScope, initScope) => {
	if (!__webpack_require__.S) return;
	var name = "default"
	var oldScope = __webpack_require__.S[name];
	if(oldScope && oldScope !== shareScope) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
	__webpack_require__.S[name] = shareScope;
	return __webpack_require__.I(name, initScope);
};

// This exports getters to disallow modifications
__webpack_require__.d(exports, {
	get: () => (get),
	init: () => (init)
});

/***/ }),

/***/ "./build.definitions/demoapp/Styles/Styles.light.json":
/*!************************************************************!*\
  !*** ./build.definitions/demoapp/Styles/Styles.light.json ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"DarkList":{"background-color":"#18302D"},"DarkList .ObjectCell":{"background-color":"#18302D"},"DarkList .ObjectCellTitle":{"font-color":"#FFFFFF"},"DarkList .ObjectCellSubhead":{"font-color":"#B2DFDB"},"DarkList .ObjectCellDescription":{"font-color":"#B2DFDB"}}');

/***/ }),

/***/ "./build.definitions/demoapp/jsconfig.json":
/*!*************************************************!*\
  !*** ./build.definitions/demoapp/jsconfig.json ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"compilerOptions":{"module":"esnext","target":"es2019","moduleResolution":"node","lib":["esnext","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = (msg) => {
/******/ 				if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 			};
/******/ 			var uniqueName = undefined;
/******/ 			var register = (name, version, factory, eager) => {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = (id) => {
/******/ 				var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("webpack/container/entry/bundle.js");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map