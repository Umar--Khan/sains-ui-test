import axios from 'axios';
import { apiBaseUrl } from 'const/apiBaseUrl';

const instance = axios.create({
  baseURL: apiBaseUrl,
});

export default instance;
