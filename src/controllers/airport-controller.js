const { AirportService } = require("../services/index");

const airportService = new AirportService();
const create = async (req, res) => {
  try {
    const response = await airportService.create(req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully cretaed a airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a airport",
      err: error,
    });
  }
};
const destroy = async (req, res) => {
  try {
    const response = await airportService.destroy(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted a airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the airport",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await airportService.get(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetch a airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get a airport",
      err: error,
    });
  }
};
const update = async (req, res) => {
  try {
    const response = await airportService.update(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully updated a airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update a airport",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const airports = await airportService.getAll(req.query);
    return res.status(200).json({
      data: airports,
      success: true,
      message: "Successfully fetched all airports",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the airports",
      err: error,
    });
  }
};
module.exports = {
  create,
  destroy,
  get,
  update,
  getAll,
};
