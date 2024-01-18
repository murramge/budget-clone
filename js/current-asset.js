import { getCurrentAsset } from "../api/get-current-asset.js";
import { toShow, toHidden } from "./util.js";
const $currentAssetValue = document.querySelector(".current-asset-value");
const $currentAssetLoader = document.querySelector(".current-asset-loader");
const $currentAssetInput = document.querySelector(".current-asset-input");
const $currentAssetButton = document.querySelector(".current-asset-button");
const $addItemButton = document.querySelector(".add-item-button");
//데이터 조회 / 업데이트.

export const handleCurrentAsset = async () => {
  toShow($currentAssetLoader);
  try {
    const { price } = await getCurrentAsset();
    if (price > 0) {
      $currentAssetValue.textContent = price;
      toShow($addItemButton);
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
