import axios from "axios";

// Determine API URL based on environment
const isGitHubPages = window.location.hostname.includes('github.io');
const API_BASE = isGitHubPages ? 'https://mock-digital-buildings-api.glitch.me' : '';
const API_URL = `${API_BASE}/api/building/`;

// Mock building data for GitHub Pages
const mockBuildingData = {
  building: {
    "BuildingID": "1",
    "Name": "Corporate HQ Building",
    "Address": "123 Main Street",
    "City": "Metropolis",
    "State": "New York",
    "ZipCode": "10001",
    "Latitude": 40.7128,
    "Longitude": -74.0060,
    "SquareFootage": 250000,
    "NumFloors": 15,
    "PrimaryUse": "Office",
    "YearBuilt": 1995,
    "LastRenovation": 2018
  },
  equipClasses: [
    {"id": "1", "name": "HVAC", "count": 7},
    {"id": "2", "name": "Lighting", "count": 4},
    {"id": "4", "name": "Electrical", "count": 2},
    {"id": "3", "name": "Plumbing", "count": 2},
    {"id": "5", "name": "Security", "count": 1},
    {"id": "6", "name": "Fire Safety", "count": 1},
    {"id": "7", "name": "Elevator", "count": 2},
    {"id": "8", "name": "Energy Generation", "count": 1}
  ],
  equipTypes: [
    {"id": "101", "name": "Air Handler Unit", "count": 3},
    {"id": "102", "name": "Chiller", "count": 2},
    {"id": "103", "name": "Boiler", "count": 2},
    {"id": "201", "name": "LED Fixtures", "count": 3},
    {"id": "202", "name": "Fluorescent Fixtures", "count": 1},
    {"id": "401", "name": "Switchgear", "count": 1},
    {"id": "701", "name": "Passenger Elevator", "count": 2},
    {"id": "801", "name": "Solar Panels", "count": 1},
    {"id": "601", "name": "Sprinkler System", "count": 1},
    {"id": "501", "name": "Camera System", "count": 1}
  ],
  topAnalyses: [
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
  ]
};

const getEngBuilding = async (buildingNum) => {
  if (isGitHubPages) {
    // Return mock data for GitHub Pages
    return mockBuildingData;
  }

  const response = await axios.get(API_URL + buildingNum);
  return response.data;
}

const engineerService = {
  getEngBuilding
}

export default engineerService