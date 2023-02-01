import { CreateUserDto } from "@/interfaces/services/user.interface";
import { SignupForm } from "@/pages/auth/register";

export const formToPayloadCreateUser = (data: SignupForm): CreateUserDto => {
  return {
    name: data.name,
    secondName: data.secondName,
    lastName: data.lastName,
    secondLastName: data.secondLastname,
    username: data.username,
    countryCode: String(data.countryCode.value),
    email: data.email,
    password: data.password,
  }
}