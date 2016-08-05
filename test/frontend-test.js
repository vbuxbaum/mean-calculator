"use strict";

var chai = require('chai');
var server = require('../server');
var path='http://localhost:3000';
var should = chai.should();
var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;

var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
 


test.describe('UI', function() {
	test.it('should navigate to Google', function(done) {
		var driver = new webdriver.Builder().
		withCapabilities(webdriver.Capabilities.chrome()).
		build();
		this.timeout(10000);

		driver.get('http://www.google.com');
		var searchBox = driver.findElement(webdriver.By.name('q'));
		searchBox.sendKeys('simple programmer');
		searchBox.getAttribute('value').then(function(value) {
		assert.equal(value, 'simple programmer');
		});
		driver.quit();
		done()
	});
	test.it('should load page', function(done) {
	    var driver = new webdriver.Builder()
	    	.withCapabilities(webdriver.Capabilities.chrome())
	    	.build();
		driver.get(path);
		this.timeout(10000);

	    var el = driver.findElement(webdriver.By.tagName('h1'));
	    el.getAttribute('innerHTML').then(function(text) {
	      assert.equal(text, 'Calculator');
	    });
	    driver.quit();
	    done();
	});
	test.it('should type number in first box', function(done) {
	    var driver = new webdriver.Builder()
	    	.withCapabilities(webdriver.Capabilities.chrome())
	    	.build();
		driver.get(path);
		this.timeout(10000);

	    var el = driver.findElement(webdriver.By.name('val1'));
	    el.sendKeys('14')
	    el.getAttribute('value').then(function(value) {
	      assert.equal(value, '14');
	    });
	    driver.quit();
	    done();
	});
	test.it('should type number in second box', function(done) {
	    var driver = new webdriver.Builder()
	    	.withCapabilities(webdriver.Capabilities.chrome())
	    	.build();
		driver.get(path);
		this.timeout(10000);

	    var el = driver.findElement(webdriver.By.name('val2'));
	    el.sendKeys('7')
	    el.getAttribute('value').then(function(value) {
	      assert.equal(value, '7');
	    });
	    driver.quit();
	    done();
	});
	test.it('should select \'/\' symbol', function(done) {
	    var driver = new webdriver.Builder()
	    	.withCapabilities(webdriver.Capabilities.chrome())
	    	.build();
		driver.get(path);
		this.timeout(10000);

	    var el = driver.findElement(webdriver.By.name('op'));
	    el.sendKeys('/')
	    el.getAttribute('value').then(function(value) {
	      assert.equal(value, '/');
	    });
	    driver.quit();
	    done();
	});
	test.it('should display no result on empty submission', function(done) {
	    var driver = new webdriver.Builder()
	    	.withCapabilities(webdriver.Capabilities.chrome())
	    	.build();
		driver.get(path);
		this.timeout(10000);

	    var el = driver.findElement(webdriver.By.name('calcButton'));
	    el.click();
	    el = driver.findElement(webdriver.By.name('calc'));
	    el.getAttribute('innerHTML').then(function(value) {
	      assert.equal(value, ' = ');
	    });
	    driver.quit();
	    done();
	});
		test.it('should display result of 10 on submission 2*5', function(done) {
	    var driver = new webdriver.Builder()
	    	.withCapabilities(webdriver.Capabilities.chrome())
	    	.build();
		driver.get(path);
		this.timeout(10000);
 		var el = driver.findElement(webdriver.By.name('val1'));
	    el.sendKeys('5');
	    el = driver.findElement(webdriver.By.name('val2'));
	    el.sendKeys('2');
	    el = driver.findElement(webdriver.By.name('op'));
	    el.sendKeys('*');
	    el = driver.findElement(webdriver.By.name('calcButton'));
	    el.click();
	    el = driver.findElement(webdriver.By.name('calc'));
	    el.getAttribute('innerHTML').then(function(value) {
	      assert.equal(value, ' = 10');
	    });
	    driver.quit();
	    done();
	});
});