import { useState } from "react";
// Context
import GeneralContext from ".";
// Utilities
import apiCall from "../../api/apiCall";

const GeneralContextProvider = ({ children }) => {
  const [test, setTest] = useState(true);

  const exampleUseApiCall = async (userId) => {
    try {
      const data = await apiCall({ url: `http://insertApiAddress` });
      // Insert setData(data)
    } catch (e) {
      alert("Un error ha ocurrido. Por favor actualice la página");
    }
  };

  return <GeneralContext.Provider value={{ test, setTest }}>{children}</GeneralContext.Provider>;
};

export default GeneralContextProvider;
