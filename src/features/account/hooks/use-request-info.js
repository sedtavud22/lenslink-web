import { useContext } from "react";
import { RequestInfoContext } from "../contexts/RequestInfoContext";

export default function useRequestInfo() {
  return useContext(RequestInfoContext);
}
