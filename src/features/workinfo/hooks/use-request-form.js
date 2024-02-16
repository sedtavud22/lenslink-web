import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import requestSchema from "../schemas/request-schema";

export default function useRequestForm() {
  return useForm({ resolver: joiResolver(requestSchema) });
}
