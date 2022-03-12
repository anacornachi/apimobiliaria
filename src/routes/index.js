import express from 'express';

export default (app) => {
  app.get('/', (req, res) => {
    res.json({status: 'Success!'});
  });
};
