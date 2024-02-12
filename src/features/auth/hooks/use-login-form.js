import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import loginSchema from "../schemas/login-schema";

export default function useLoginForm() {
  return useForm({ resolver: joiResolver(loginSchema) });
}
