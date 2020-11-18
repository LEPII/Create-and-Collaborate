const mongoose = require('mongoose');
moment = require('moment');

const portfolioSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    typeOfEmployment: {
      type: String,
      required: true
    },
    dateOfEmployment: {
      type: Date,
      required: true
    },
    location: {
      type: String,
      required: true
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
    video: {
      type: String
    },
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

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
