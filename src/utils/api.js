// src/utils/api.js

import axios from "axios";

// this function sends your form data to the API given in the PDF
export const sendContactForm = async (formData) => {
  try {
    const response = await axios.post(
      "https://vernanbackend.ezlab.in/api/contact-us/",
      formData
    );
    return response;
  } catch (error) {
    throw error;
  }
};
