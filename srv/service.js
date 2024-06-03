const cds = require('@sap/cds');

module.exports = async (srv) => {

    const bupa = await cds.connect.to('API_BUSINESS_PARTNER');

    srv.on('READ', 'A_BusinessPartner', async (req) => {
        return bupa.transaction(req).send({
            query: req.query,
            headers: {
                apikey: process.env.apikey
            }
        });
    });

}