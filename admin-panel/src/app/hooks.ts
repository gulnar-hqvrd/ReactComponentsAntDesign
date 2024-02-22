import { TypedUseSelectorHook, UseDispatch } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const userAppDispatch = () => useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
