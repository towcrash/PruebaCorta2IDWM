import { Info } from "./Info";
import { Result } from "./Results";

export interface ResponseAPIGetAll {
    info:    Info;
    results: Result[];
}
