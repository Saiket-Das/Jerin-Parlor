const {
  getAllReviewService,
  createReviewService,
  updateReviewByIdService,
  deleteReviewByIdService,
  getReviewById,
} = require("../services/review.service");

// -------> Get all reviews
exports.getAllReview = async (req, res, next) => {
  try {
    const review = await getAllReviewService();

    res.status(200).json({
      success: true,
      message: "Successfully get all reviews",
      data: review,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// -------> Create a new review
exports.createReview = async (req, res, next) => {
  try {
    const review = await createReviewService(req.body);

    res.status(200).json({
      success: true,
      message: "Successfully create a new review",
      data: review,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// -------> Update a review by poster
exports.updateReviewById = async (req, res, next) => {
  try {
    const review = await getReviewById(req.params.id);

    if (review?.reviewer?.email != req.user.email) {
      return res.status(403).json({
        status: "Forbidden",
        message: "Fail",
        error: "You are not authorized.",
      });
    }

    const result = await updateReviewByIdService(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Successfully update a review by Id",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// -------> Delete a review by poster
exports.deleteReviewById = async (req, res, next) => {
  try {
    const review = await getReviewById(req.params.id);

    if (review?.reviewer?.email != req.user.email) {
      return res.status(403).json({
        status: "Forbidden",
        message: "Fail",
        error: "You are not authorized.",
      });
    }
    const result = await deleteReviewByIdService(req.params.id);

    res.status(200).json({
      success: true,
      message: "Successfully delete a review by Id",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
