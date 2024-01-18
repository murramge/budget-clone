import { updateCurrentAsset } from "../api/update-current-asset";
import { getCurrentAsset } from "../api/get-current-asset";
import { toHidden, toShow } from "./util";

const $currentAssetValue = document.querySelector(".current-asset-value");
const $currentAssetLoader = document.querySelector(".current-asset-loader");
const $currentAssetInput = document.querySelector(".current-asset-input");
const $currentAssetButton = document.querySelector(".current-asset-button");
const $currentAssetButtonLoader = document.querySelector(
  ".current-asset-button-loader"
);
const $addItemButton = document.querySelector(".add-item-button");

export const initCurrentAsset = () => {
  handleGetCurrentAsset();

  $currentAssetButton.addEventListener("click", function () {
    const inputValue = $currentAssetInput.value;
    if (inputValue > 0) {
      handleAddCurrentAsset(inputValue);
      toHidden($currentAssetButton);
    } else {
      console.warn("0원 이상이 아닙니다.");
    }
  });
};

export const handleAddCurrentAsset = async (inputValue) => {
  toShow($currentAssetButtonLoader);
  toHidden($currentAssetButton);

  await updateCurrentAsset(Number(inputValue));

  toHidden($currentAssetButtonLoader);
  toShow($currentAssetButton);

  await handleGetCurrentAsset();
};

const handleGetCurrentAsset = async () => {
  toShow($currentAssetLoader);

  try {
    const { price } = await getCurrentAsset();
    if (price > 0) {
      $currentAssetValue.textContent = price.toLocaleString();
      toHidden($currentAssetInput);
    } else {
      toShow($currentAssetInput);
      toShow($currentAssetButton);
      toHidden($addItemButton);
    }
  } catch (err) {
    console.error("현재자산을 조회한는데 실패했습니다.");
  }

  toHidden($currentAssetLoader);
};
