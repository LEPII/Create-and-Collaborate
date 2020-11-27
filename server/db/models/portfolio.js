const mongoose = require('mongoose');
moment = require('moment');

const portfolioSchema = new mongoose.Schema(
  {
    company: {
      type: String
    },
    position: {
      type: String
    },
    typeOfEmployment: {
      type: String
    },
    dateOfEmployment: {
      type: String
    },
    location: {
      type: String
    },
    description: {
      type: String
    },
    school: {
      type: String
    },
    schoolDegree: {
      type: String
    },
    schoolDate: {
      type: Date
    },
    image: {
      type: String
    },
    hostedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

portfolioSchema.virtual('user', {
  ref: 'User',
  localField: 'hostedBy',
  foreignField: '_id'
});

portfolioSchema.methods.toJSON = function () {
  const portfolioEmpDate = this;
  const portfolioEmpObject = portfolioEmpDate.toObject();
  if (portfolioEmpObject.dateOfEmployment) {
    portfolioEmpObject.dateOfEmployment = moment(
      portfolioEmpObject.dateOfEmployment
    ).format('MMM YYYY');
  }
  return portfolioEmpObject;
};

portfolioSchema.methods.toJSON = function () {
  const portfolioEduDate = this;
  const portfolioEduObject = portfolioEduDate.toObject();
  if (portfolioEduObject.schoolDate) {
    portfolioEduObject.schoolDate = moment(
      portfolioEduObject.schoolDate
    ).format('YYYY');
  }
  return portfolioEduObject;
};

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;
