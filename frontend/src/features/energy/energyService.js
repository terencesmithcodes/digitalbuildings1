import axios from "axios";

const API_URL = 'http://localhost:5500/api/energy/'

const getEnergyAnalyses = async (buildingNum, subNum) =>{
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // }

  const response = await axios.get(API_URL + buildingNum + '/' + subNum)

  return response.data
}

const energyService ={
  getEnergyAnalyses
}

export default energyService