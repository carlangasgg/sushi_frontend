import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export const fetchPos = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/device/show_pos`);
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};

export const fetchPrinters = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/device/show_printers`);
      return response.data;
    } catch (error) {
      console.error("Error fetching items:", error);
      throw error;
    }
};

export const fetchRedSystems = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/device/show_red_systems`);
      return response.data;
    } catch (error) {
      console.error("Error fetching items:", error);
      throw error;
    }
};

export const fetchLocales = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/device/show_locales`);
      return response.data;
    } catch (error) {
      console.error("Error fetching items:", error);
      throw error;
    }
};