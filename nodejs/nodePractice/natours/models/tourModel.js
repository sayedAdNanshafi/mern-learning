const mongoose = require('mongoose');
const slugify = require('slugify');

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A Tour Must Have A Name'],
      unique: true,
      maxlength: [
        35,
        'A Tour Name Must Have less than or equal to 35 characters',
      ],
      minlength: [
        5,
        'A Tour name must have more than or equal to 5 characters',
      ],
    },
    slug: String,
    duration: {
      type: Number,
      required: [true, 'A Tour must have a duration'],
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'A Tour must have a max group size'],
    },
    difficulty: {
      type: String,
      required: [true, 'A Tour must have a difficulty'],
      enum: {
        values: ['difficult', 'easy', 'medium'],
        message:
          'difficulty can be set to either: difficult, easy or medium',
      },
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'Rating must be greater than or equal to 1'],
      max: [5, 'Rating must be less than or equal to 5'],
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, 'A Tour Must Have A Price'],
    },
    priceDiscount: {
      type: Number,
      validate: {
        //this keyword in validator function points to current document only
        // when we are creating a new document. Therefore it doesn't work
        // when we update the document.🔥🔥
        validator: function (val) {
          return this.price > val;
        },
        message:
          'Discount price {{VALUE}} cannot be greater than price of the Tour',
      },
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'A Tour must have a summary'],
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      required: [true, 'A Tour must have an image cover'],
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    startDates: [Date],
    secretTour: {
      type: Boolean,
      default: false,
    },
    startLocation: {
      type: {
        type: String,
        default: 'Point',
        enum: ['Point'],
      },
      coordinates: [Number],
      address: String,
      description: String,
    },
    locations: [
      {
        type: {
          type: String,
          default: 'Point',
          enum: 'Point',
        },
        coordinates: [Number],
        address: String,
        description: String,
        day: Number,
      },
    ],
    guides: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  },
);

tourSchema.index({ price: 1, ratingsAverage: -1 });
tourSchema.index({ slug: 1 });

tourSchema.virtual('durationWeeks').get(function () {
  return Math.floor(this.duration / 7);
});
tourSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'tour',
  localField: '_id',
});
tourSchema.pre('save', function (next) {
  this.slug = slugify(this.name, {
    lower: true,
  });
  next();
});
tourSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'guides',
    select: '-__v -passwordChangedAt',
  });
  next();
});

//to embed guides into tour document😊

// tourSchema.pre('save', async function (next) {
//   const guidesPromises = this.guides.map(
//     async id => await User.findById(id),
//   );
//   this.guides = await Promise.all(guidesPromises);
//   next();
// });

// tourSchema.post('save', function (doc, next) {
//   console.log(doc);
//   next();
// });
tourSchema.pre(/^find/, function (next) {
  this.find({
    secretTour: {
      $ne: true,
    },
  });
  next();
});
tourSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({
    $match: {
      secretTour: {
        $ne: true,
      },
    },
  });
  next();
});
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
