import { userStore, updateStore } from "../store/store.js";
const currentMoneyButton = document.querySelector("#current_money_button");
const currentMoney = document.querySelector("#current_money_input");

export function initCurrentMoney() {
  handleCurrentMoney();
  randerCurrentMoney();
}

function handleCurrentMoney() {
  currentMoneyButton.addEventListener("click", function (event) {
    event.preventDefault();
    userStore.currentFunds = Number(currentMoney.value);
    userStore.firstpush = false;
    updateStore();
  });
}

function randerCurrentMoney() {
  console.log(userStore);
  currentMoney.value = userStore.currentFunds;
}
