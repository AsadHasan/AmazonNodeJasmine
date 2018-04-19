import { Builder, WebDriver } from 'selenium-webdriver';
import chrome from 'chromedriver'

export var driver = new Builder().forBrowser('chrome').build();
