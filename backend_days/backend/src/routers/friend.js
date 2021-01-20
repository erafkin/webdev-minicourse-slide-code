import express from 'express';
import * as FriendController from '../controllers/friend';

const router = express();
router.route('/')
  .get((req, res) => {
    FriendController.getAllFriends()
      .then((response) => {
        res.send({ status: 200, error: null, response });
      })
      .catch((error) => {
        res.send({
          status: 500,
          error: error.message,
          response: error,
        });
      });
  })
  .post((req, res) => {
    FriendController.createFriend(req.body.name, req.body.number, req.body.email, req.body.birthday)
      .then((response) => {
        res.send({ status: 200, error: null, response });
      })
      .catch((error) => {
        res.send({
          status: 500,
          error: error.message,
          response: error,
        });
      });
  });

// This route is takes the param of the mongoID so for example: "localhost:9090/friends/5f80da931b17dc4d3ecde613" where that long
// string is the mongoID for the indiv object that we are working with.
// (this is stored as _id in the objects that you see from the get requests.)
router.route('/:id')
  .get((req, res) => {
    FriendController.getFriend(req.params.id)
      .then((response) => {
        res.send({ status: 200, error: null, response });
      })
      .catch((error) => {
        res.send({
          status: 500,
          error: error.message,
          response: error,
        });
      });
  })
  .put((req, res) => {
    FriendController.updateFriend(req.params.id, req.body.name, req.body.number, req.body.email, req.body.birthday)
      .then((response) => {
        res.send({ status: 200, error: null, response });
      })
      .catch((error) => {
        res.send({
          status: 500,
          error: error.message,
          response: error,
        });
      });
  })
  .delete((req, res) => {
    FriendController.deleteFriend(req.params.id)
      .then((response) => {
        res.send({ status: 200, error: null, response });
      })
      .catch((error) => {
        res.send({
          status: 500,
          error: error.message,
          response: error,
        });
      });
  });
export default router;
