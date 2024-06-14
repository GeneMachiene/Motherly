const { validationResult } = require("express-validator");
const Region = require("../models/location_models/regionModel");
const Province = require("../models/location_models/provinceModel");
const City = require("../models/location_models/cityModel");
const Barangay = require("../models/location_models/barangayModel");
const locationValidator = require("../validators/locationValidator");

const location_list = async (req, res) => {
  try {
    // Get all regions
    const regions = await Region.find();

    // Populate provinces for each region
    const populatedRegions = await Promise.all(
      regions.map(async (region) => {
        const populatedRegion = region.toJSON();
        populatedRegion.provinces = await Province.find({
          region: region._id,
        }).populate("cities");
        return populatedRegion;
      })
    );

    // Populate cities for each province
    const populatedProvinces = await Promise.all(
      populatedRegions.flatMap((region) =>
        region.provinces.map(async (province) => {
          const populatedProvince = province.toJSON();
          populatedProvince.cities = await City.find({
            province: province._id,
          }).populate("barangays");
          return populatedProvince;
        })
      )
    );

    // Populate barangays for each city
    const populatedCities = await Promise.all(
      populatedProvinces.flatMap((province) =>
        province.cities.map(async (city) => {
          const populatedCity = city.toJSON();
          populatedCity.barangays = await Barangay.find({ city: city._id });
          return populatedCity;
        })
      )
    );

    // Format the result into the desired embedded object structure
    const locationObject = populatedRegions.reduce((acc, region) => {
      acc[region.name] = region.provinces.reduce((provinceAcc, province) => {
        provinceAcc[province.name] = province.cities.reduce((cityAcc, city) => {
          cityAcc[city.name] = city.barangays.map((barangay) => barangay.name);
          return cityAcc;
        }, {});
        return provinceAcc;
      }, {});
      return acc;
    }, {});

    return res.status(200).json(locationObject);
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

module.exports = { location_list, region_create };
