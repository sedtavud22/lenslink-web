import { useContext } from "react";
import { WorkInfoContext } from "../contexts/WorkInfoContext";

export default function useWorkInfo() {
  return useContext(WorkInfoContext);
}
