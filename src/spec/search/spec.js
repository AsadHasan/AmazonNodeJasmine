//@flow
import { driver } from '../../helpers/driverfactory';
import { load } from '../../pageobjects/homepage'
import babel from 'babel-polyfill';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10e3;

describe('Search products', () => {
    beforeEach(async () => {
        await load();
    });

    it('Should be on the homepage', async () => {
        await expect(driver.getTitle()).toBe('Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment & more');
    });

    afterEach(async () => {
        await driver.quit();
    })
});