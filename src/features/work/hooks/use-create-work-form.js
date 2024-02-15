import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import workSchema from "../schemas/work-schema";

export default function useCreateWorkForm() {
  return useForm({ resolver: joiResolver(workSchema) });
}
