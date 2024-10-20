import { HttpTypes } from "@medusajs/types"
import { QueryEmployee } from "@starter/types"

export enum SpendingLimitResetFrequency {
  never = "never",
  daily = "daily",
  weekly = "weekly",
  monthly = "monthly",
  yearly = "yearly",
}

export interface Company {
  id: string
  name: string
  phone: string
  email: string
  address: string | null
  city: string | null
  state: string | null
  zip: string | null
  country: string | null
  logo_url: string | null
  currency_code: string | null
  spending_limit_reset_frequency: SpendingLimitResetFrequency
  employees: QueryEmployee[] | []
}

export interface Employee {
  id: string
  spending_limit: number
  is_admin: boolean
  company: Company
}

export interface Customer extends HttpTypes.StoreCustomer {
  employee: QueryEmployee | null
  orders: HttpTypes.StoreOrder[] | []
}
