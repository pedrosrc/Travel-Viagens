import { all } from "redux-saga/effects";
import reserve from "./modules/reserves/saga";

export default function* rootSaga():any{
    return yield all([
        reserve,
    ]);
}