// 소비내역 조회
// consumption-details
/**
 * @params {
 *  id: number,
 *  price: number,
 *  category: string,
 *  fundsAtTheTime: number,
 *  description: string,
 *  createAt: string,
 * }[]
 */
import axios from "axios";

export const addConsumptionDetail = async (body) => {
  const { data } = await axios.post(
    "http://localhost:3000/consumption-details",
    body
  );
  return data;
};
