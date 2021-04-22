import { storage } from '../../services/config/storage';

export const initialState = {
    email: null,
    details: storage.fetch.authToken() || null,
}