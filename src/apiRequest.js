import React from "react";

const apiRequest = async (url, objectOpts = null, errMsg = null) => {
  try {
    const res = await fetch(url, objectOpts);
  } catch (error) {
    errMsg = error;
  }
};

export default apiRequest;
