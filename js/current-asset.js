import { getCurrentAsset } from "../api/get-current-asset.js";
import { toShow, toHidden } from "./util.js";
import { addCurrentAsset } from "../api/add-current-asset.js";
const $currentAssetValue = document.querySelector(".current-asset-value");
const $currentAssetLoader = document.querySelector(".current-asset-loader");
const $currentAssetInput = document.querySelector(".current-asset-input");
const $currentAssetButton = document.querySelector(".current-asset-button");
const $currentAssetButtonLoader = document.querySelector(
  ".current-asset-button-loader"
);
const $addItemButton = document.querySelector(".add-item-button");
//데이터 조회 / 업데이트.

export const initCurrentAsset = () => {
  handleCurrentAsset();

  $currentAssetButton.addEventListener("click", (e) => {
    const inputValue = $currentAssetInput.value;
    if (inputValue > 0) {
      handleAddCurrentAsset(inputValue);
    } else {
      console.warn("0원 이상이 아닙니다.");
    }
  });
};

const handleAddCurrentAsset = async (inputValue) => {
  //   const buttonText = $currentAssetButton.textContent;
  //   $currentAssetButton.textContent = "";
  toHidden($currentAssetButton);
  toShow($currentAssetButtonLoader);
  await addCurrentAsset(Number(inputValue));
  //   await new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(1);
  //     }, 3000);
  //   });
  toHidden($currentAssetButtonLoader);
  toShow($currentAssetButton);
  //   $currentAssetButton.textContent = buttonText;
};
const handleCurrentAsset = async () => {
  toShow($currentAssetLoader);
  try {
    const { price } = await getCurrentAsset();
    if (price > 0) {
      toHidden($currentAssetInput);
      $currentAssetValue.textContent = price.toLocaleString();
    } else {
      toShow($currentAssetButton);
      toShow($currentAssetInput);
      toHidden($addItemButton);
    }
  } catch (err) {
    console.error("현재 자산을 조회하는데 실패했습니다.");
  }
  toHidden($currentAssetLoader);
};
