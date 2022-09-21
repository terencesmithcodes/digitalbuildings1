import axios from "axios";

const API_URL = '/api/energy/'

const getEnergyAnalyses = async (buildingNum) =>{
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // }

  const response = await axios.get(API_URL + buildingNum)

  return response.data
}

const energyService ={
  getEnergyAnalyses
}

export default energyService