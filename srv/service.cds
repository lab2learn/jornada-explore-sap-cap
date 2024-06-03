using { API_BUSINESS_PARTNER } from './external/API_BUSINESS_PARTNER';

service Sap @(path: '/sap') {

    @readonly
    entity A_BusinessPartner as projection on API_BUSINESS_PARTNER.A_BusinessPartner;

}