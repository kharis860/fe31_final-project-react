import axios from "axios";
export const FETCH = "FETCH";
export const SENDDATA = "SENDDATA";
export const SENDDATAOK = "SENDDATAOK";

export function fetch() {
  return {
    type: FETCH,
  };
}

export function sendDataOk(data) {
  return {
    type: SENDDATAOK,
    payload: data,
  };
}

export function sendData() {
  return async (dispatch) => {
    dispatch(fetch());

    const dataPasien = await axios.get("https://6350e03cdfe45bbd55b074ed.mockapi.io/medTechAPI/pasien");
    console.log(dataPasien.data);
    dispatch(sendDataOk(dataPasien.data));
  };
}
