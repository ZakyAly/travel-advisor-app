import axios from "axios";

const URL =
  // "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
  "https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_latitude: ne.lat,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "64fca77853mshcbc9c264eaa9c1cp17c175jsn25ab313383f1",
      },
    });

    return data;
  } catch (err) {
    console.log(err);
  }
};
