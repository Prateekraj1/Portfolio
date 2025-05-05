import { useState } from "react";

type AlertDataType = {
  type: string;
  show: boolean;
  text: string;
};

type ShowAlertType = {
  text: string;
  type?: string;
};
const useAlert = () => {
  const [alert, setAlert] = useState<AlertDataType>({
    show: false,
    text: "",
    type: "danger",
  });

  const showAlert = ({ text, type = "danger" }: ShowAlertType) =>
    setAlert({ show: true, text, type });
  const hideAlert = () => setAlert({ show: false, text: "", type: "danger" });

  return { alert, showAlert, hideAlert };
};

export default useAlert;
