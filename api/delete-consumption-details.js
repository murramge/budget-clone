import axios from "axios";

export const deleteConsumptionDetail = async (deleteid) => {
  try {
    const { data } = await axios.delete(
      `http://localhost:3000/consumption-details/${deleteid}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
