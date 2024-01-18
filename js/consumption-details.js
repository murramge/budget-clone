import { getConsumptionDetails } from "../api/get-consumption-details";
import { toShow, toHidden } from "./util";
const $consumptionDetails = document.querySelector(".consumption-details-list");
const $consumptionDetailsLoader = document.querySelector(
  ".consumption-details-loader"
);

export const initConsumptionDetails = () => {
  handleGetConsumptionDetails();
};

export const handleGetConsumptionDetails = async () => {
  toShow($consumptionDetailsLoader);
  const list = await getConsumptionDetails();
  list.map((item) => {
    const $li = document.createElement("li");
    $li.textContent = JSON.stringify(item);
    $consumptionDetails.appendChild($li);
  });

  toHidden($consumptionDetailsLoader);
};
