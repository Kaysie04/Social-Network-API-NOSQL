const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller')

// /api/thoughts
router.route('/')
.get(getAllThougths)
.post(createThought);

// /api/thoughts/:id
router.route('/users/:id')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:userId/friends/:friendId')
.post(addReaction)
.delete(removeReaction);

module.exports = router;