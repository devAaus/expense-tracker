export type Expense = {
   id: number;
   description: string;
   amount: number;
   createdAt: Date;
   updatedAt: Date;
}

export type ExpenseProps = {
   expense: Expense
}

export type ExpensesListProps = {
   expenses: Expense[]
}

export type User = {
   id: string;
   email: string;
   family_name?: string;
   given_name: string;
   picture?: string;
   username?: string;
   phone_number?: string;
}

export type UserProps = {
   user: User
}