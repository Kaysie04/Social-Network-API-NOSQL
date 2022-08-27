const { User, Thought} = require('../models')

const thoughtController = {
    // find all thoughts

    getAllThoughts(req, res) {
        Thought.find({})
        .populate({
            path: 'reactions',
            select:'-__v'
        })
        .select('-__v')
        .sort({ _id: -1})
        .then((dbThoughtData) => {
            res.json(dbThoughtData)
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err)
        })
    },

    // find one thought by id
    getThoughtById({ params}, res){
        Thought.findOne({ _id: params.id})
        .populate({
            path: 'reactions',
            select: '-__v'
        })
        .select('-__v')
        .then((dbThoughtData) => {
            if(!dbThoughtData){
                res.statue(404).json({message: 'no thought found with this id'});
            }
            res.json(dbThoughtData);
        })
        .catch((err)=> {
            console.log(err);
            res.status(400).json(err)
        })
    },


    // create a thought
    createThought({params, body}, res) {
        Thought.create(body)
        .then(({_id})=> {
            return User.findByIdAndUpdate(
                {_id: body.userId},
                {$push: {thoughts: _id}},
                {new: true}
            );
        })
        .then((dbUserData) => {
            if (!dbUserData) {
              return res
                .status(404)
                .json({ message: "no user found with this id to create thought" });
            }
    
            res.json({ message: " User's thought was created!" });
          })
          .catch((err) => res.json(err));

        
    },

    // update thought by Id
    updateThought({params, body}, res) {
        Thought.findByIdAndUpdate({ _id: params.id}, body, {
            new: true,
            runValidators: true

        })
    }
}

module.exports = thoughtController;



  // update Thought by id
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.json(err));
  }
  












