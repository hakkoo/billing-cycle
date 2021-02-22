const BillingWindow = require('../src/BillingWindow');

const calculateBillingWindow = (shop, currentDate = new Date()) => {
    return new BillingWindow(new Date(), new Date());
};

module.exports =  calculateBillingWindow;
