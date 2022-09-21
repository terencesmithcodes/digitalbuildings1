import axios from "axios";

const API_URL = '/api/selectbuilding/'

const getbuildingIds = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

const selectorService = {
  getbuildingIds
}

export default selectorService