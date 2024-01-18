import { initStore } from "../store/store.js";
import { initCurrentMoney } from "../components/currentmoney.js";
import { initConsumer } from "../components/consumer.js";
import { initHistory } from "../components/history.js";
import { handleCurrentAsset } from "./current-asset.js";
import "../style/index.scss";

const initApp = () => {
  handleCurrentAsset();
};

initApp();
