import { useEffect } from 'react';
import axios from 'axios';
import useDataStore from '../store/useDataStore';

const useData = () => {
  const dataStore = useDataStore();
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const wineriesResponse = await axios.get(`http://${apiUrl}/api/winery/get-wineries`);
        const winesResponse = await axios.get(`http://${apiUrl}/api/wine/get-wines/`);
        dataStore.setData(wineriesResponse.data, 'wineries');
        dataStore.setData(winesResponse.data, 'wines');
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []); 
};

export default useData;
