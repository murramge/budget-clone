import { getConsumptionDetails } from "../api/get-consumption-details";
import { getCurrentAsset } from "../api/get-current-asset";
import { toHidden, toShow } from "./util";
import { deleteConsumptionDetail } from "../api/delete-consumption-details";
import { handleAddCurrentAsset } from "./current-asset";
const $consumptionDetailsList = document.querySelector(
  ".consumption-details-list"
);
const $consumptionDetailsLoader = document.querySelector(
  ".consumption-details-loader"
);

export const initConsumptionDetails = () => {
  handleGetConsumptionDetails();
};

const createElement = (tagName, className) => {
  const newElement = document.createElement(tagName);
  newElement.className = className;
  return newElement;
};

export const handleGetConsumptionDetails = async () => {
  toShow($consumptionDetailsLoader);
  $consumptionDetailsList.textContent = "";
  const list = await getConsumptionDetails();

  //오름차순 정렬
  list.sort((a, b) => a.id - b.id);

  list.map(
    ({ createAt, category, description, amount, fundsAtTheTime, id }) => {
      const $li = createElement("li", "consumption-details-per-day");
      const $pDate = createElement("p", "consumption-details-date");
      const $itemSection = createElement("section", "consumption-details-item");
      const $itemSectionColumn = createElement(
        "section",
        "consumption-details-item-column"
      );
      const $itemCategory = createElement("section");
      const $consumptionDetailsDetail = createElement(
        "div",
        "consumption-details-detail"
      );
      const $consumptionDetailsDetailTitle = createElement(
        "div",
        "consumption-details-detail-row consumption-details-detail-title"
      );
      const $consumptionDetailsDetailSubtitle = createElement(
        "div",
        "consumption-details-detail-row consumption-details-detail-subtitle"
      );
      const $consumptionDetailsItemCaption = createElement(
        "section",
        "consumption-details-item-caption"
      );
      const $deleteSection = createElement("div", "delete-section");
      const $deleteButton = createElement("button", "delete-button");

      // 날짜
      $pDate.textContent = new Date(createAt).toLocaleDateString();
      $li.appendChild($pDate);
      // 카테고리
      $itemCategory.textContent = category;
      $itemSectionColumn.appendChild($itemCategory);

      // 삭제 버튼
      $deleteButton.textContent = "🗑";
      $deleteButton.id = id;
      $deleteSection.appendChild($deleteButton);

      // 상세내역
      $consumptionDetailsDetailTitle.textContent = description;
      $consumptionDetailsDetailSubtitle.textContent = amount + "원";
      $consumptionDetailsDetail.appendChild($consumptionDetailsDetailTitle);
      $consumptionDetailsDetail.appendChild($consumptionDetailsDetailSubtitle);

      // 캡션
      $consumptionDetailsItemCaption.textContent = `남은 자산 ${fundsAtTheTime.toLocaleString()}원`;

      // 최종 추가
      $itemSectionColumn.appendChild($consumptionDetailsDetail);
      $itemSectionColumn.appendChild($deleteSection);
      $itemSection.appendChild($itemSectionColumn);
      $itemSection.appendChild($consumptionDetailsItemCaption);

      $li.appendChild($itemSection);
      $consumptionDetailsList.appendChild($li);
      addEventListener($deleteButton);
    }
  );

  toHidden($consumptionDetailsLoader);
};

const addEventListener = (deleteButton) => {
  deleteButton.addEventListener("click", () => {
    handleConsumptionDetailsDelete(deleteButton.id);
  });
};

const handleConsumptionDetailsDelete = async (deleteId) => {
  const list = await getConsumptionDetails();
  let { price } = await getCurrentAsset();
  list.map(({ id, amount }) => {
    if (id == Number(deleteId)) {
      price += amount;
    }
  });
  await handleAddCurrentAsset(price);
  await deleteConsumptionDetail(deleteId);

  handleGetConsumptionDetails();
  // console.log(price);
};
