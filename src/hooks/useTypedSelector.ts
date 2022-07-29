// тот же useSelector, но работающий с типами
import {TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector