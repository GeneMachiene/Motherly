const { validationResult } = require("express-validator");
const Region = require("../models/location_models/regionModel");
const Province = require("../models/location_models/provinceModel");
const City = require("../models/location_models/cityModel");
const Barangay = require("../models/location_models/barangayModel");
const locationValidator = require("../validators/locationValidator");
const { validateMongoId } = require("../validators/generalValidator");

const location_list = async (req, res) => {
  try {
    const regions = await Region.find().lean();

    const result = await Promise.all(
      regions.map(async (region) => {
        const provinces = await Province.find({ region: region._id }).lean();

        const provincesWithCities = await Promise.all(
          provinces.map(async (province) => {
            const cities = await City.find({ province: province._id }).lean();

            const citiesWithBarangays = await Promise.all(
              cities.map(async (city) => {
                const barangays = await Barangay.find({
                  city: city._id,
                }).lean();

                return {
                  _id: city._id,
                  name: city.name,
                  updateAt: city.updatedAt,
                  barangays: barangays.map((barangay) => ({
                    _id: barangay._id,
                    name: barangay.name,
                  })),
                };
              })
            );

            return {
              _id: province._id,
              name: province.name,
              updateAt: province.updatedAt,
              cities: citiesWithBarangays,
            };
          })
        );

        return {
          _id: region._id,
          name: region.name,
          updateAt: region.updatedAt,
          provinces: provincesWithCities,
        };
      })
    );

    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ error: "Internal server error" });
  }
};

const region_create = [
  locationValidator.validateAndSanitizeRegion(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await Region.create(req.body);
      return res.status(200).json({ message: "Region added successfully." });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
];

const region_update = [
  validateMongoId("Region"),
  locationValidator.validateAndSanitizeRegion(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await Region.update(req.params.id, req.body.name);
      return res.status(200).json({ message: "Region updated successfully." });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
];

const region_delete = async (req, res) => {
  try {
    await Region.findOneAndDelete({ _id: req.params.id }).exec();
    return res.status(200).json({ message: "region deleted successfully." });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const province_create = [
  locationValidator.validateAndSanitizeProvince("create"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await Province.add(req.body);
      return res.status(200).json({ message: "Province added successfully." });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
];

const province_update = [
  validateMongoId("Province"),
  locationValidator.validateAndSanitizeProvince("update"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await Province.update(req.params.id, req.body.name);
      return res
        .status(200)
        .json({ message: "Province updated successfully." });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
];

const province_delete = async (req, res) => {
  try {
    await Province.findOneAndDelete({ _id: req.params.id }).exec();
    return res.status(200).json({ message: "Province deleted successfully." });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const city_create = [
  locationValidator.validateAndSanitizeCity("create"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await City.add(req.body);
      return res.status(200).json({ message: "City added successfully." });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
];

const city_update = [
  validateMongoId("City"),
  locationValidator.validateAndSanitizeCity("update"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await City.update(req.params.id, req.body.name);
      return res.status(200).json({ message: "City updated successfully." });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
];

const city_delete = async (req, res) => {
  try {
    await City.findOneAndDelete({ _id: req.params.id }).exec();
    return res.status(200).json({ message: "City deleted successfully." });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const barangay_create = [
  locationValidator.validateAndSanitizeBarangay("create"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await Barangay.add(req.body);
      return res.status(200).json({ message: "Barangay added successfully." });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
];

const barangay_update = [
  validateMongoId("Barangay"),
  locationValidator.validateAndSanitizeBarangay("update"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await Barangay.update(req.params.id, req.body.name);
      return res
        .status(200)
        .json({ message: "Barangay updated successfully." });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
];

const barangay_delete = async (req, res) => {
  try {
    await Barangay.delete(req.params.id);
    return res.status(200).json({ message: "Barangay deleted successfully." });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  location_list,
  region_create,
  region_update,
  region_delete,
  province_create,
  province_update,
  province_delete,
  city_create,
  city_update,
  city_delete,
  barangay_create,
  barangay_update,
  barangay_delete,
};
