import { driver } from '../helpers/driverfactory';
import { until } from 'selenium-webdriver';
import babel from 'babel-polyfill';

const searchDropdownSelector = { css: '#searchDropdownBox' };
const searchDropdown = driver.findElement(searchDropdownSelector);

export const selectCategory = async () => {
    await driver.wait(until.elementIsVisible(searchDropdown));
    await searchDropdown.click();
};

export const load = async () => {
    await driver.get('http://www.amazon.co.uk');
    await driver.wait(until.titleIs('Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment & more'));
}