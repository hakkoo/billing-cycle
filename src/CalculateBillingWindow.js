const BillingWindow = require('../src/BillingWindow');

const calculateBillingWindow = (shop, billCreateDate = new Date()) => {
    return new BillingWindow(new Date(), new Date());
};

module.exports =  calculateBillingWindow;
