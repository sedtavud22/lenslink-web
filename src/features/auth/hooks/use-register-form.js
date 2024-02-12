import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import registerSchema from "../schemas/register-schema";

export default function useRegisterForm() {
  return useForm({ resolver: joiResolver(registerSchema) });
}
