export interface CreateUserDto {
  readonly name: string
  readonly secondName: string
  readonly lastName: string
  readonly secondLastName: string
  readonly username: string
  readonly countryCode: string
  readonly email: string
  readonly refreshToken?: string
  readonly password: string
}
