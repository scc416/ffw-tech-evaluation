import axios from "axios";
import {
  CLICK_TAB,
  SHOW_ERROR,
  FETCH_DATA,
  endPoint,
  CLICK_FONT,
} from "constants";

export const checkIfIsFonts = (state) => {
  const { tabs, tabId } = state;
  const { content } = tabs[tabId];
  return Array.isArray(content);
};

const formatData = (tabs, content, label) => {
  if (Array.isArray(content)) {
    for (const font of content) {
      font.colorBlindLabel = font["color-blind-label"];
      delete font.id;
      delete font["color-blind-label"];
    }
  }
  const details = { content, label };
  tabs.push(details);
};

const makeEndPoint = (str) => `/${str}`;

export const fetchData = async (dispatch) => {
  try {
    const tabs = [];
    const { data } = await axios.get(endPoint);
    for (const tab of data) {
      const { label, content_endpoint } = tab;

      const url = makeEndPoint(content_endpoint);
      const {
        data: { content },
      } = await axios.get(url);
      formatData(tabs, content, label);
    }

    dispatch({ type: FETCH_DATA, payload: { tabs } });
  } catch ({ message }) {
    dispatch({ type: SHOW_ERROR, payload: { error: message } });
  }
};

export const keyDownActionDispatcher = (key, state, dispatch) => {
  const { tabs, tabId } = state;

  if (!tabs) return;
  const num = parseInt(key);
  if (num > 0 && num <= tabs.length) {
    const tabId = num - 1;
    return dispatch({ type: CLICK_TAB, payload: { tabId } });
  }

  const isFonts = checkIfIsFonts(state);

  if (!isFonts) return;

  const { content } = tabs[tabId];

  for (let i = 0; i < content.length; i++) {
    const tab = content[i];
    const { abbr } = tab;
    const char = abbr[0].toLowerCase();
    const found = key === char;
    if (found) {
      return dispatch({ type: CLICK_FONT, payload: { fontId: i } });
    }
  }
};
