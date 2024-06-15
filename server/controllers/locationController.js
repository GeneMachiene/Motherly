const { validationResult } = require("express-validator");
const Region = require("../models/location_models/regionModel");
const Province = require("../models/location_models/provinceModel");
const City = require("../models/location_models/cityModel");
const Barangay = require("../models/location_models/barangayModel");
const locationValidator = require("../validators/locationValidator");

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
              cities: citiesWithBarangays,
            };
          })
        );

        return {
          _id: region._id,
          name: region.name,
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

const province_create = [
  locationValidator.validateAndSanitizeProvince(),
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

const city_create = [
  locationValidator.validateAndSanitizeCity(),
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

const barangay_create = [
  locationValidator.validateAndSanitizeBarangay(),
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

module.exports = {
  location_list,
  region_create,
  region_update,
  province_create,
  city_create,
  barangay_create,
};
