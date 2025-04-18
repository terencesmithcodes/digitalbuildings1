import axios from "axios";

// Determine API URL based on environment
const isGitHubPages = window.location.hostname.includes('github.io');
const API_BASE = isGitHubPages ? 'https://mock-digital-buildings-api.glitch.me' : '';
const API_URL = `${API_BASE}/api/energy/`;

// Mock energy data for GitHub Pages
const mockEnergyData = {
  building: {
    "BuildingID": "1",
    "Name": "Corporate HQ Building",
    "Address": "123 Main Street",
    "City": "Metropolis",
    "State": "New York",
    "StateName": "New York",
    "ZipCode": "10001",
    "Zip": "10001",
    "Phone": "(212) 555-7890",
    "Latitude": 40.7128,
    "Longitude": -74.0060,
    "SquareFootage": 250000,
    "Area": "250,000",
    "NumFloors": 15,
    "Floors": 15,
    "BuildingTypeName": "Office",
    "PrimaryUse": "Office",
    "YearBuilt": 1995,
    "LastRenovation": 2018,
    "ClientName": "Corporate HQ Building"
  },
  // Track records for energy efficiency tasks
  trackRecords: [
    {
      "TaskID": "ECM-001",
      "EID": "AHU-1",
      "Description": "Air Handler tuning recommended to address 5% efficiency decrease"
    },
    {
      "TaskID": "ECM-002",
      "EID": "CH-2",
      "Description": "Chiller maintenance required - efficiency at 78%, needs condenser coil cleaning"
    },
    {
      "TaskID": "ECM-003",
      "EID": "BLR-1",
      "Description": "Boiler combustion efficiency at 87%, recommend burner inspection and tuning"
    },
    {
      "TaskID": "ECM-004",
      "EID": "FL-F4",
      "Description": "Replace fluorescent fixtures with LED lighting to reduce energy consumption by 30%"
    }
  ],
  analyses: [
    {
      "name": "Air Handler Efficiency Analysis",
      "teaser": [
        "AHU-1 is showing 5% decrease in efficiency",
        "AHU-2 is operating at optimal efficiency",
        "AHU-3 maintenance recommended within 30 days",
        "Air filter replacement needed for optimal performance",
        "Adjust temperature setpoints to improve energy usage"
      ]
    },
    {
      "name": "Chiller Performance Analysis",
      "teaser": [
        "Chiller 1 operating at 92% efficiency",
        "Chiller 2 requires maintenance - efficiency at 78%",
        "Power consumption increased by 8% since last month",
        "Recommended cleaning of condenser coils",
        "Optimize chilled water temperature setpoint"
      ]
    },
    {
      "name": "Building Energy Benchmarking",
      "teaser": [
        "Current ENERGY STAR score: 82 (up 3 points)",
        "Energy Use Intensity: 68 kBtu/sq ft/year",
        "Performance better than 75% of similar buildings",
        "Weather-normalized consumption decreased 4%",
        "Potential for further optimization identified in HVAC scheduling"
      ]
    }
  ],
  energyData: {
    monthlyCost: [7500, 7800, 8200, 8100, 7900, 8600, 9200, 9400, 8800, 8100, 7800, 7600],
    monthlyUsage: [125000, 130000, 137000, 135000, 132000, 143000, 153000, 157000, 147000, 135000, 130000, 127000],
    hvacBreakdown: {
      cooling: 42,
      heating: 58
    }
  }
};

const getEnergyAnalyses = async (buildingNum) => {
  if (isGitHubPages) {
    // Return mock data for GitHub Pages
    return mockEnergyData;
  }

  const response = await axios.get(API_URL + buildingNum);
  return response.data;
}

const energyService ={
  getEnergyAnalyses
}

export default energyService