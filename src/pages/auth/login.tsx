import { Button } from "@/components/atoms/Button"
import FieldText from "@/components/atoms/FieldText"
import Title from "@/components/atoms/Title"
import Card from "@/components/Card/Card"
import { email, password, required } from "@/helpers/forms/rules"
import { Controller, useForm } from "react-hook-form"

interface LoginForm {
  email: string
  password: string
}

const Login = () => {
  const { handleSubmit, control } = useForm<LoginForm>()

  const onSubmit = (data: LoginForm) => {
    console.log("🚀 ~ file: login.tsx:16 ~ onSubmit ~ data", data)
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
              pattern: email
            }}
            render={({ field: { onChange, name, value }, formState: {errors} }) =>
              <FieldText
                label="Email"
                name={name}
                value={value}
                onChange={onChange}
                error={errors.email?.message}
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
            render={({ field: { onChange, name, value }, formState: {errors} }) =>
              <FieldText
                label="Password"
                name={name}
                onChange={onChange}
                value={value}
                error={errors.password?.message}
                password
              />
            }
          />
          <Button>
            Log in
          </Button>
        </form>
      </Card>
    </div>
  )
}

export default Login