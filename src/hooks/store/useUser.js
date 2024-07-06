import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userActions } from "src/store";

export const useUser = (callback = (state) => state.user) => {
  const state = useSelector(callback);
  const dispatch = useDispatch();
  return { state, dispatch, userActions };
};
