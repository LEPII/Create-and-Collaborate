const mongoose = require('mongoose'),
  validator = require('validator'),
  bcrypt = require('bcryptjs'),
  jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true
    },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email is invalid');
        }
      }
    },
    bio: {
      type: String
    },
    mentor: {
      type: Boolean,
      required: true,
      default: false
    },
    location: {
      type: String
    },
    number: {
      type: String
    },

    password: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (value.toLowerCase().includes('password')) {
          throw new Error('Password cannot be password.');
        }
        if (value.length < 6) {
          throw new Error('Password must be at least 6 characters.');
        }
      }
    },
    admin: {
      type: Boolean,
      required: true,
      default: false
    },
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ],
    avatar: {
      type: String
    },
    following: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        }
      }
    ],
    followers: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        }
      }
    ],
    category: [
      {
        type: {
          type: String
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

userSchema.virtual('jobs', {
  ref: 'Job',
  localField: '_id',
  foreignField: 'hostedBy'
});

userSchema.virtual('gallery', {
  ref: 'Gallery',
  localField: '_id',
  foreignField: 'hostedBy'
});

userSchema.virtual('image', {
  ref: 'Image',
  localField: '_id',
  foreignField: 'hostedBy'
});

//password/token camo
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

//create token for user
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    {
      _id: user._id.toString(),
      name: user.name
    },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

//secure login for existing user
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid password, try again.');
  return user;
};

//password hasher
userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password'))
    user.password = await bcrypt.hash(user.password, 8);
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
