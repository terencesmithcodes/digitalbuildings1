import axios from "axios";

const API_URL = 'http://localhost:5500/api/building/'

const getEngBuilding = async (buildingNum, subNum) => {
  console.log(`sub: ${subNum}`)
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // }

  const response = await axios.get(API_URL + buildingNum + "/" + subNum)
    return response.data
}

const engineerService = {
  getEngBuilding
}

export default engineerService