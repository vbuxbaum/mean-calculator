"use strict";

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);


describe('api', function() {
  it('should retrieve html from server GET', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.html;
      });
      done();
  });  
  it('should list ALL operations on server/operations GET', function(done) {
    chai.request(server)
      .get('/operations')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body[0].should.have.property('_id');
        res.body[0].should.have.property('value');
        res.body[0].value.should.equal('+');
        res.body[1].value.should.equal('-');
        res.body[2].value.should.equal('*');
        res.body[3].value.should.equal('/');
      });
      done();
  });  
  it('should respond with result on server/calculate GET', function(done) {
    chai.request(server)
      .get('/calculate/?op=%2B&val1=3&val2=2')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.have.property('result');
        res.body.result.should.equal(5);
      });
    chai.request(server)
      .get('/calculate/?op=-&val1=3&val2=2')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.have.property('result');
        res.body.result.should.equal(1);
      });
    chai.request(server)
      .get('/calculate/?op=*&val1=3&val2=2')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.have.property('result');
        res.body.result.should.equal(6);
      });
    chai.request(server)
      .get('/calculate/?op=%2F&val1=3&val2=2')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.have.property('result');
        res.body.result.should.equal(1.5);
      });
    done();
  });  
});