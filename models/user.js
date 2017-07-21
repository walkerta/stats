var express = require('express');
var app = express();
var request = require('supertest');
var mongoose = require('mongoose');
var session = require('session');
var bodyParser = require('body-parser');
var assert = require('assert');

module.exports = function(chai, utils) {
    var Assertion = chai.Assertion;


    if (require.main === "module") {
      app.listen(3000, function() {
        console.log('Express running on http://localhost:3000/.')
      });
    }

    module.exports = app;

    //list of current items with cost and quanity of each
    app.get('/activity', function(req, res) {
      res.status(200).json({
      });
    });

    app.get('/stats', function(req, res) {
      res.json({
        stats: "status of stats!"
      })
    })

    app.listen(3000);

//  GET	/activities	Show a list of all activities I am tracking, and links to their individual pages
//  POST	/activities	Create a new activity for me to track. -
//  GET	/activities/{id}	Show information about one activity I am tracking, and give me the data I have recorded for that activity.
//  PUT	/activities/{id}	Update one activity I am tracking, changing attributes such as name or type. Does not allow for changing tracked data.
//  DELETE	/activities/{id}	Delete one activity I am tracking. This should remove tracked data for that activity as well.
//  POST	/activities/{id}/stats	Add tracked data for a day. The data sent with this should include the day tracked. You can also override the data for a day already recorded.
//  DELETE	/stats/{id}	Remove tracked data for a day.



//get a list of activities I'm tracking, the links to their indivigual pages

  request(app)
              .get('/api/activity')
              .expect('Content-Type', /json/)
              .expect('data', [{}])
              .expect('status', 'success')
              .expect('activity')
              .expect(200)
              .end(function(err, res) {
                if (err) throw err;
              });
            app.post('/activity', function(req, res) {
              res.status(200).json({

              });
            });


  //create a new activity to track - .post ('api/stats/new_activity')
    request(app)
                .post('/api/activity')
                .expect('Content-Type', /json/)
                .expect('data', [{}])
                .expect('status', 'success')
                .expect('activity')
                .expect(200)
                .end(function(err, res) {
                  if (err) throw err;
                });
              app.post('/activity', function(req, res) {
                res.status(200).json({

                });
              });

  //show information about one activity, give data recorded
  request(app)
              .get('/api/activity{id}')
              .expect('Content-Type', /json/)
              .expect('data', [{}])
              .expect('status', 'success')
              .expect('activity{id)}')
              .expect(200)
              .end(function(err, res) {
                if (err) throw err;
              });
            app.post('/activity{id}', function(req, res) {
              res.status(200).json({

              });

//update one activity
              request(app)
              .put('/api/activity{id}')
              .expect('Content-Type', /json/)
              .expect('data', [{}])
              .expect('status', 'success')
              .expect('activity')
              .expect(200)
              .end(function(err, res) {
                if (err) throw err;
              });
              app.post('/activity{id}', function(req, res) {
              res.status(200).json({
              });


//delete one activity
              request(app)
              .delete('/api/activity{id}')
              .expect('Content-Type', /json/)
              .expect('data', [{}])
              .expect('status', 'success')
              .expect('activity')
              .expect(200)
              .end(function(err, res) {

                if (err) throw err;
              });
              app.post('/activity{id}', function(req, res) {
              res.status(200).json({
              });

//add tracked data for the day
              request(app)
              .post('/api/activity{id}/stats')
              .expect('Content-Type', /json/)
              .expect('data', [{}])
              .expect('status', 'success')
              .expect('stats')
              .expect(200)
              .end(function(err, res) {
                if (err) throw err;
              });
              app.post('/stats', function(req, res) {
              res.status(200).json({
              });


//remove tracked data
              request(app)
              .delete('/api/stats{id}')
              .expect('Content-Type', /json/)
              .expect('data', [{}])
              .expect('status', 'success')
              .expect('stat')
              .expect(200)
              .end(function(err, res) {
                if (err) throw err;
              });
              app.post('/stats{id}', function(req, res) {
              res.status(200).json({
              });
