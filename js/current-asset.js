import { getCurrentAsset } from "../api/get-current-asset.js";

const $currentAssetValue = document.querySelector(".current-asset-value");

//데이터 조회 / 업데이트.
let loading = false;
export const handleCurrentAsset = async () => {
  loading = true;
  try {
    const { price } = await getCurrentAsset();
    console.dir($currentAssetValue);
    $currentAssetValue.textContent = price;
  } catch (err) {
    console.error("현재 자산을 조회하는데 실패했습니다.");
  }
  loading = false;
};
