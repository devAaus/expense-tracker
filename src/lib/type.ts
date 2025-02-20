export type Expense = {
   id: number;
   description: string;
   amount: number;
   createdAt: Date;
   updatedAt: Date;
}

export type ExpensesListProps = {
   expenses: Expense[]
}