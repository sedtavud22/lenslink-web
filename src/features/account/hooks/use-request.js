import { useContext } from "react";
import { RequestContext } from "../contexts/RequestContext";

export default function useRequest() {
  return useContext(RequestContext);
}
