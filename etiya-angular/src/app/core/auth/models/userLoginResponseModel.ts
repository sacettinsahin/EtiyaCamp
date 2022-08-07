import { ResultModel } from "../../models/resultModels";

export interface UserLoginResponseModel extends ResultModel{
    access_token:string;
}