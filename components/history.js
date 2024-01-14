import { userStore } from "../store/store.js";
const historysection = document.querySelector("#history");
export const initHistory = () => {
  historyDatas();
};

export const historyDatas = () => {
  historysection.innerHTML = `<p>${userStore.content.amount}</p> <p>${userStore.content.id}</p> <p>${userStore.content.category}</p>`;
};
