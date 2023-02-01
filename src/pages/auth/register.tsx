import Autocomplete, { AutocompleteOption } from "@/components/atoms/Autocomplete"
import { Button } from "@/components/atoms/Button"
import FieldText from "@/components/atoms/FieldText"
import Title from "@/components/atoms/Title"
import Card from "@/components/Card/Card"
import { email, password, required } from "@/helpers/forms/rules"
import { formToPayloadCreateUser } from "@/services/users/adapters/user.adapter"
import { createUser } from "@/services/users/user.service"
import { loginRedux } from "@/store/auth/auth.slice"
import Link from "next/link"
import { useRouter } from "next/router"
import { Controller, useForm } from "react-hook-form"
import { useMutation } from "react-query"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"

export interface SignupForm {
  name: string
  secondName: string
  lastName: string
  secondLastname: string
  username: string
  countryCode: AutocompleteOption
  email: string
  password: string
  confirm: string
}

const Signup = () => {
  const { push } = useRouter()
  const dispatch = useDispatch()
  const { handleSubmit, control, getValues } = useForm<SignupForm>()
  const { mutate, isLoading } = useMutation({mutationFn: createUser})

  const onSubmit = async (data: SignupForm) => {
    console.log("🚀 ~ file: register.tsx:35 ~ onSubmit ~ data", data)
    const payload = formToPayloadCreateUser(data)

    mutate(payload, {
      onError() {
        toast.error('There was an error logging in, please check your credentials.');
      },
      onSuccess(data) {
        dispatch(loginRedux(data))
        push('/editor')
      }
    })
  }

  return (
    <div className="w-11/12 max-w-[544px] mx-auto mt-14">
      <Card>
        <form className="flex flex-col gap-8 p-8 justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
          <div className="self-start">
            <Title biggest>
              Sign up
            </Title>
          </div>
          <Controller
            name="name"
            control={control}
            rules={{
              required,
            }}
            render={({ field: { onChange, name, value }, formState: { errors } }) =>
              <FieldText
                label="Name"
                name={name}
                value={value}
                onChange={onChange}
                error={errors.email?.message}
                disabled={isLoading}
              />
            }
          />
          <Controller
            name="secondName"
            control={control}
            render={({ field: { onChange, name, value }, formState: { errors } }) =>
              <FieldText
                label="Second Name"
                name={name}
                value={value}
                onChange={onChange}
                error={errors.email?.message}
                disabled={isLoading}
              />
            }
          />
          <Controller
            name="lastName"
            control={control}
            rules={{
              required,
            }}
            render={({ field: { onChange, name, value }, formState: { errors } }) =>
              <FieldText
                label="Lastname"
                name={name}
                value={value}
                onChange={onChange}
                error={errors.email?.message}
                disabled={isLoading}
              />
            }
          />
          <Controller
            name="secondLastname"
            control={control}
            render={({ field: { onChange, name, value }, formState: { errors } }) =>
              <FieldText
                label="Second Lastname"
                name={name}
                value={value}
                onChange={onChange}
                error={errors.email?.message}
                disabled={isLoading}
              />
            }
          />
          <Controller
            name="username"
            control={control}
            rules={{
              required,
            }}
            render={({ field: { onChange, name, value }, formState: { errors } }) =>
              <FieldText
                label="Username"
                name={name}
                value={value}
                onChange={onChange}
                error={errors.email?.message}
                disabled={isLoading}
              />
            }
          />
          <Controller
            name="countryCode"
            control={control}
            rules={{
              required
            }}
            render={({ field: { onChange, name, value }, formState: { errors } }) =>
              <Autocomplete
                label="Country"
                name={name}
                value={value}
                onChange={onChange}
                error={errors.email?.message}
                disabled={isLoading}
                options={[
                  {value: 'MX', label: 'Mexico'},
                  {value: 'US', label: 'Unites States'},
                  {value: 'UK', label: 'United Kingdom'},
                  {value: 'ES', label: 'Spain'},
                ]}
              />
            }
          />
          <Controller
            name="email"
            control={control}
            rules={{
              required,
              pattern: email
            }}
            render={({ field: { onChange, name, value }, formState: { errors } }) =>
              <FieldText
                label="Email"
                name={name}
                value={value}
                onChange={onChange}
                error={errors.email?.message}
                disabled={isLoading}
              />
            }
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required,
              pattern: password
            }}
            render={({ field: { onChange, name, value }, formState: { errors } }) =>
              <FieldText
                label="Password"
                name={name}
                onChange={onChange}
                value={value}
                error={errors.password?.message}
                password
                disabled={isLoading}
              />
            }
          />
          <Controller
            name="confirm"
            control={control}
            rules={{
              required,
              validate: {
                isEqual: v => v !== getValues('password') ? 'La contraseña no coincide': true
              }
            }}
            render={({ field: { onChange, name, value }, formState: { errors } }) =>
              <FieldText
                label="Confirm Password"
                name={name}
                onChange={onChange}
                value={value}
                error={errors.password?.message}
                password
                disabled={isLoading}
              />
            }
          />
          <Button disable={isLoading}>
            Sign up
          </Button>
          <p className="text-slate-300">
            Already have an account, <Link href={"/auth/login"} className="text-slate-400 font-semibold">Log in here</Link>
          </p>
        </form>
      </Card>
    </div>
  )
}

export default Signup