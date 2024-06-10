import { setupWorker } from 'msw/browser';
import { reviewsById } from './revies';
const handlers = [reviewsById];

export const worker = setupWorker(...handlers);
