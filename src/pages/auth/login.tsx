import { Button } from "@/components/atoms/Button"
import FieldText from "@/components/atoms/FieldText"
import Title from "@/components/atoms/Title"
import Card from "@/components/Card/Card"
import { email, password, required } from "@/helpers/forms/rules"
import { login } from "@/services/auth/auth.service"
import { loginRedux } from "@/store/auth/auth.slice"
import Link from "next/link"
import { useRouter } from "next/router"
import { Controller, useForm } from "react-hook-form"
import { useMutation } from "react-query"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"

interface LoginForm {
  email: string
  password: string
}

const Login = () => {
  const { push } = useRouter()
  const dispatch = useDispatch()
  const { handleSubmit, control } = useForm<LoginForm>()
  const { mutate, isLoading } = useMutation(login)

  const onSubmit = async (data: LoginForm) => {
    mutate({ username: data.email, password: data.password }, {
      onError() {
        toast.error('There was an error logging in, please check your credentials.');
      },
      onSuccess(data) {
        dispatch(loginRedux({...data, isLogged: true}))
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
              Login
            </Title>
          </div>
          <Controller
            name="email"
            control={control}
            rules={{
              required,
            }}
            render={({ field: { onChange, name, value }, formState: { errors } }) =>
              <FieldText
                label="Username or Email"
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
          <Button disable={isLoading}>
            Log in
          </Button>
          <p className="text-slate-300">
            You do not have an account yet?, <Link href={"/auth/register"} className="text-slate-400 font-semibold">Register here</Link>
          </p>
        </form>
      </Card>
    </div>
  )
}

export default Login