import { initStore } from "./store/store.js";
import { initCurrentMoney } from "./components/currentmoney.js";
import { initConsumer } from "./components/consumer.js";
import { initHistory } from "./components/history.js";

init();

function init() {
  try {
    initStore();
    initCurrentMoney();
    initConsumer();
    initHistory();
  } catch (error) {
    console.log(error);
  }
}
