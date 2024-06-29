import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';

interface ApiResponse {
  results: [],
  total_pages: number
}

export const getImages = async (topic: string, currentPage: number): Promise<ApiResponse> => {
  const response = await axios.get('search/photos/', {
    params: {
      query: topic,
      page: currentPage,
      per_page: 12,
      client_id: 'bUSMDa4i-sdjveC_T5JyLHQWSsIcCRVYzA0EX5ZXg1U',
    },
  });
  return response.data.results;
};