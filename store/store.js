export const userStore = {
  currentFunds: 0,
  firstpush: true,

  content: {
    id: "",
    category: "",
    amount: 0,
    createAt: new Date(),
    fundsAtTheTime: 0,
  },
};

export const updateStore = () => {
  localStorage.setItem("store", JSON.stringify(userStore));
  console.log(localStorage.getItem("store"));
  randerStore();
};

export const initStore = () => {
  try {
    const stores = localStorage.getItem("store");
    if (!stores) updateStore();
    randerStore();
  } catch (error) {
    console.log(error);
  }
};

function randerStore() {
  let stores = localStorage.getItem("store");
  stores = JSON.parse(stores);
  console.log(stores);
  userStore.currentFunds = stores.currentFunds;
  userStore.firstpush = stores.firstpush;
  userStore.content.id = stores.content.id;
  userStore.content.amount = stores.content.amount;
  userStore.content.category = stores.content.category;
}
