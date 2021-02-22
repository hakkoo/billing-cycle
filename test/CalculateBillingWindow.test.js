const Charge = require('../src/Charge');
const Shop = require('../src/Shop');
const BillingWindow = require('../src/BillingWindow');
const calculateBillingWindow = require('../src/CalculateBillingWindow');

test('Expect BillingWindow to be March 15, 2017 - April 14, 2017', () => {
    const charge = new Charge(1, 2000, 'paid', new Date('March 15, 2017'));
    const shop = new Shop(1, [charge]);
    const expected = new BillingWindow(new Date('March 15, 2017'), new Date('April 14, 2017'));

    const result = calculateBillingWindow(shop, new Date('March 20, 2017'));

    expect(result).toMatchObject(expected);
});

test('Expect BillingWindow to be April 14, 2017 - May 14, 2017', () => {
    const charge = new Charge(1, 2000, 'paid', new Date('March 15, 2017'));
    const shop = new Shop(1, [charge]);
    const expected = new BillingWindow(new Date('April 14, 2017'), new Date('May 14, 2017'));

    const result = calculateBillingWindow(shop, new Date('May 1, 2017'));

    expect(result).toMatchObject(expected);
});

test('What is the BillingWindow for August 14, 2018', () => {
    const charge = new Charge(1, 2000, 'paid', new Date('March 15, 2017'));
    const shop = new Shop(1, [charge]);

    const resultBillingWindow = calculateBillingWindow(shop, new Date('August 14, 2018'));

    console.log(`The start date for August 14, 2018 billing window is: ${resultBillingWindow.start}
    The end date for August 14, 2018 billing window is: ${resultBillingWindow.end}`)
});

test('What is the BillingWindow for today', () => {
    const charge = new Charge(1, 2000, 'paid', new Date('March 15, 2017'));
    const shop = new Shop(1, [charge]);

    const resultBillingWindow = calculateBillingWindow(shop);

    console.log(`The start date for today's billing window is: ${resultBillingWindow.start}
    The end date for today's billing window is: ${resultBillingWindow.end}`)
});
