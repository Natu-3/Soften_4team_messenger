const Profile = require('../models/profile');

exports.createProfile = async (req, res) => {
    const { name, email } = req.body;
    const profilePicture = req.file ? req.file.filename : '';
  
    const profile = new Profile({ name, email, profilePicture });
  
    try {
      const savedProfile = await profile.save();
      res.json(savedProfile);
    } catch (err) {
      res.status(500).json({ error: 'Failed to create profile' });
    }
  };

exports.getAllProfiles = (req, res) => {
    Profile.find({})
      .then(profiles => {
        res.json(profiles);
      })
      .catch(err => {
        res.status(500).json({ error: 'Failed to get profiles' });
      });
  };