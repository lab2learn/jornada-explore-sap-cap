using { API_SALES_ORDER_SRV } from './external/API_SALES_ORDER_SRV';

service Sap @(path: '/sap') {

    @readonly
    entity A_SalesOrder as projection on API_SALES_ORDER_SRV.A_SalesOrder;

    function getSalesOrderAmountBySoldToParty() returns String;

}