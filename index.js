import { initStore } from "./store/store.js";
import { initCurrentMoney } from "./components/currentmoney.js";
import { initConsumer } from "./components/consumer.js";
import { initHistory } from "./components/history.js";
import axios from "axios";
import "./index.scss";

const getPosts = async () => {
  const data = await axios.get("http://localhost:3000/posts");
  console.log(data);
  return data;
};

getPosts();

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
