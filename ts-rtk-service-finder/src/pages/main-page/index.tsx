import { useSelector } from "react-redux";
import { AppStateType } from "../../redux/store";

export default function MainPage() {
  const categoryState = useSelector(
    (state: AppStateType) => state.categoryState
  );

  return <>Burası mainpage</>;
}
