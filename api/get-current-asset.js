import axios from "axios";

/**
 *
 * @returns { price: number}
 */
export const getCurrentAsset = async () => {
  const { data } = await axios.get("http://localhost:3000/current-asset");
  return data;
};
