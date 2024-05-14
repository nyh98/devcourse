import { useDispatch } from 'react-redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from '../store';

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypeDispatch = () => useDispatch<AppDispatch>();

const logger = useTypeSelector(state => state.logger);
