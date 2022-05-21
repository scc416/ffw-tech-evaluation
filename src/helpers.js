import axios from "axios";
import { initialState, SHOW_ERROR, FETCH_DATA, CLICK_TAB } from "constants";

export const checkIfIsFonts = ({ content }) => Array.isArray(content);

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


export const fetchData = async (dispatch) => {
  try {
    const tabs = [];
    const { data } = await axios.get("/tabs");
    for (const tab of data) {
      const { label, content_endpoint } = tab;
      const {
        data: { content },
      } = await axios.get(`/${content_endpoint}`);
      formatData(tabs, content, label);
    }
    console.log(tabs);
    dispatch({ type: FETCH_DATA, payload: { tabs } });
  } catch (e) {
    console.log(e);
    dispatch({ type: SHOW_ERROR, payload: { error: e.message } });
  }
};

