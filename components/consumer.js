import { userStore, updateStore } from "../store/store.js";
import { initHistory } from "./history.js";
const consumerCategory = document.querySelector("#consum_category");
const consumerButton = document.querySelector("#consum_button");
const consumerMoney = document.querySelector("#consum_money");
const consumerContent = document.querySelector("#consum_content");

export function initConsumer() {
  handleConsumer();
  randerConsumer();
}

function handleConsumer() {
  consumerButton.addEventListener("click", function (event) {
    event.preventDefault();
    userStore.content.category = consumerCategory.value;
    if (userStore.currentFunds < Number(consumerMoney.value)) {
      alert("현재 가지고 있는 돈보다 많습니다");
    } else {
      userStore.content.amount = Number(consumerMoney.value);
      userStore.currentFunds =
        Number(userStore.currentFunds) - Number(consumerMoney.value);
    }
    userStore.content.id = consumerContent.value;
    updateStore();
    initHistory();
  });
}

function randerConsumer() {}
