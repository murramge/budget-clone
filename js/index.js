import { initStore } from "../store/store.js";
import { initCurrentMoney } from "../components/currentmoney.js";
import { initConsumer } from "../components/consumer.js";
import { initHistory } from "../components/history.js";
import { initCurrentAsset } from "./current-asset.js";
import "@fortawesome/fontawesome-free/js/all.js";
import "../style/index.scss";
import { initConsumptionDetails } from "./consumption-details.js";
import { initAddItem } from "./add-items.js";

const initApp = () => {
  initCurrentAsset();
  initConsumptionDetails();
  initAddItem();
};

initApp();
