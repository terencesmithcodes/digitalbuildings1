import axios from "axios";

const API_URL = 'http://localhost:5500/api/building/'

const getEngBuilding = async (buildingNum) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // }

  const response = await axios.get(API_URL + buildingNum)
    return response.data
}

const engineerService = {
  getEngBuilding
}

export default engineerService