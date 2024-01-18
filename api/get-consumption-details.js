// 소비내역 조회
// consumption-details
/**
 * @returns {
 *  id: number,
 *  price: number,
 *  category: string,
 *  fundsAtTheTime: number,
 *  description: string,
 *  createAt: string,
 * }[]
 */
import axios from "axios";

export const getConsumptionDetails = async () => {
  const { data } = await axios.get("http://localhost:3000/consumption-details");
  return data;
};
