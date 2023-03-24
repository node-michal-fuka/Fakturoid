import Client from './Client';
import {
    Account,
    BankAccount,
    Expense,
    ExpenseFilter,
    Invoice,
    InvoiceFilter,
    InvoiceFireFilter,
    Search,
    NumberFormat,
    Subject,
    SubjectFilter,
    User,
    UserFilter,
    ExpenseFireFilter,
    GeneratorFilter,
    Generator,
    Message,
    Report,
    EventFilter,
    Event,
    InventoryItemFilter,
    InventoryItem,
    InventoryMove,
    InventoryMoveFilter,
    TodoFilter,
    Todo,
} from './Types';

export default class Fakturoid extends Client {
    async getAccount(): Promise<Account> {
        return (await super.get('account.json')).data as Account;
    }

    async getBankAccounts(): Promise<BankAccount[]> {
        return (await super.get('bank_accounts.json')).data as BankAccount[];
    }

    async getUser(id: string): Promise<User> {
        return (await super.get(`/users/${id}.json`)).data as User;
    }

    async getUsers(filter?: Partial<UserFilter>): Promise<User[]> {
        return (await super.get('users.json', filter)).data as User[];
    }

    // INVOICES

    async getInvoices(filter?: Partial<InvoiceFilter>): Promise<Invoice[]> {
        return (await super.get('invoices.json', filter)).data as Invoice[];
    }

    async getRegularInvoices(filter?: Partial<InvoiceFilter>): Promise<Invoice[]> {
        return (await super.get('/invoices/regular.json', filter)).data as Invoice[];
    }

    async getProformaInvoices(filter?: Partial<InvoiceFilter>): Promise<Invoice[]> {
        return (await super.get('/invoices/proforma.json', filter)).data as Invoice[];
    }

    async getInvoice(id: string): Promise<Invoice> {
        return (await super.get(`/invoices/${id}.json`)).data as Invoice;
    }

    async getInvoicePdf(id: string): Promise<any> {
        return (await super.download(`/invoices/${id}/download.pdf`)).data;
    }

    async searchInvoices(filter?: Partial<Search>): Promise<Invoice[]> {
        return (await super.get(`/invoices/search.json`, filter)).data as Invoice[];
    }

    async updateInvoice(id: string, data: Partial<Invoice>): Promise<Invoice> {
        return (await super.patch(`/invoices/${id}.json`, data)).data as Invoice;
    }

    async fireInvoice(id: string, data: Partial<InvoiceFireFilter>): Promise<undefined> {
        return (await super.post(`/invoices/${id}/fire.json`, data)).data;
    }

    async createInvoice(invoice: Partial<Invoice>): Promise<Partial<Invoice>> {
        return (await super.post(`/invoices.json`, invoice)).data as Invoice;
    }

    async deleteInvoice(id: string): Promise<undefined> {
        return (await super.delete(`/invoices/${id}.json`)).data;
    }

    // EXPENSES
    async getExpenses(filter?: Partial<ExpenseFilter>): Promise<Expense[]> {
        return (await super.get('expenses.json', filter)).data as Expense[];
    }

    async getExpense(id: string): Promise<Expense> {
        return (await super.get(`/expenses/${id}.json`)).data as Expense;
    }

    async searchExpenses(filter?: Partial<Search>): Promise<Expense[]> {
        return (await super.get(`/expenses/search.json`, filter)).data as Expense[];
    }

    async updateExpense(id: string, data: Partial<Expense>): Promise<Expense> {
        return (await super.patch(`/expenses/${id}.json`, data)).data as Expense;
    }

    async fireExpense(id: string, data: Partial<ExpenseFireFilter>): Promise<undefined> {
        return (await super.post(`/expenses/${id}/fire.json`, data)).data;
    }

    async createExpense(invoice: Partial<Expense>): Promise<Partial<Expense>> {
        return (await super.post(`/expenses.json`, invoice)).data as Expense;
    }

    async deleteExpense(id: string): Promise<undefined> {
        return (await super.delete(`/expenses/${id}.json`)).data;
    }

    // SUBJECTS

    async getSubjects(filter?: Partial<SubjectFilter>): Promise<Subject[]> {
        return (await super.get(`/subjects.json`, filter)).data as Subject[];
    }

    async getSubject(id: string): Promise<Subject> {
        return (await super.get(`/subjects/${id}.json`)).data as Subject;
    }

    async createSubject(subject: Partial<Subject>): Promise<Partial<Subject>> {
        return (await super.post(`/subjects.json`, subject)).data as Subject;
    }

    async updateSubject(id: string, data: Partial<Subject>): Promise<Partial<Subject>> {
        return (await super.patch(`/subjects/${id}.json`, data)).data as Expense;
    }

    async deleteSubject(id: string): Promise<undefined> {
        return (await super.delete(`/subjects/${id}.json`)).data;
    }

    async searchSubjects(filter?: Partial<Search>): Promise<Subject[]> {
        return (await super.get(`/subjects/search.json`, filter)).data as Subject[];
    }

    // GENERATOR

    async getGenerators(filter?: Partial<GeneratorFilter>): Promise<Generator[]> {
        return (await super.get(`/generators.json`, filter)).data as Generator[];
    }

    async getTemplateGenerators(filter?: Partial<GeneratorFilter>): Promise<Generator[]> {
        return (await super.get(`/generators/template.json`, filter)).data as Generator[];
    }

    async getRecurringGenerators(filter?: Partial<GeneratorFilter>): Promise<Generator[]> {
        return (await super.get(`/generators/recurring.json`, filter)).data as Generator[];
    }

    async getGenerator(id: string): Promise<Generator> {
        return (await super.get(`/generators/${id}.json`)).data as Generator;
    }

    async updateGenerator(id: string, data: Partial<Generator>): Promise<Partial<Generator>> {
        return (await super.patch(`/generators/${id}.json`, data)).data as Generator;
    }

    async createGenerator(generator: Partial<Generator>): Promise<Partial<Generator>> {
        return (await super.post(`/generators.json`, generator)).data as Generator;
    }

    async deleteGenerator(id: string): Promise<undefined> {
        return (await super.delete(`/generators/${id}.json`)).data;
    }

    // MESSAGE

    async createMessage(invoiceId: number, message: Partial<Message>): Promise<Partial<Generator>> {
        return (await super.post(`/invoices/${invoiceId}/message.json`, message)).data as Generator;
    }

    // NUMBER FORMATS

    async getInvoiceNumberFormats(): Promise<NumberFormat[]> {
        return (await super.get(`/number_formats/invoices.json`)).data as NumberFormat[];
    }

    // REPORTS

    async getReports(year: number): Promise<Report> {
        return (await super.get(`/reports/${year}.json`)).data as Report;
    }

    async getPaidReports(year: number): Promise<Report> {
        return (await super.get(`/reports/${year}/paid.json`)).data as Report;
    }

    async getVatReports(year: number): Promise<Report> {
        return (await super.get(`/reports/${year}/vat.json`)).data as Report;
    }

    // EVENTS

    async getEvents(filter?: Partial<EventFilter>): Promise<Event[]> {
        return (await super.get(`/events.json`, filter)).data as Event[];
    }

    async getPaidEvents(filter?: Partial<EventFilter>): Promise<Event[]> {
        return (await super.get(`/events/paid.json`, filter)).data as Event[];
    }

    async getInventoryItems(filter?: Partial<InventoryItemFilter>): Promise<InventoryItem[]> {
        return (await super.get(`/inventory_items.json`, filter)).data as InventoryItem[];
    }

    // INVENTORY ITEMS

    async getArchivedInventoryItems(filter?: Partial<InventoryItemFilter>): Promise<InventoryItem[]> {
        return (await super.get(`/inventory_items/archived.json`, filter)).data as InventoryItem[];
    }

    async getInventoryItem(id: string): Promise<InventoryItem> {
        return (await super.get(`/inventory_items/${id}.json`)).data as InventoryItem;
    }

    async searchInventoryItems(filter?: Partial<Search>): Promise<InventoryItem[]> {
        return (await super.get(`/inventory_items/search.json`, filter)).data as InventoryItem[];
    }

    async archiveInventoryItem(id: string): Promise<any> {
        return (await super.post(`/inventory_items/${id}/archive.json`)).data;
    }

    async unarchiveInventoryItem(id: string): Promise<any> {
        return (await super.post(`/inventory_items/${id}/unarchive.json`)).data;
    }
    async updateInventoryItem(id: string, data: Partial<InventoryItem>): Promise<Partial<InventoryItem>> {
        return (await super.patch(`/inventory_items/${id}.json`, data)).data as InventoryItem;
    }

    async createInventoryItem(generator: Partial<InventoryItem>): Promise<Partial<InventoryItem>> {
        return (await super.post(`/inventory_items.json`, generator)).data as InventoryItem;
    }

    async deleteInventoryItem(id: string): Promise<undefined> {
        return (await super.delete(`/inventory_items/${id}.json`)).data;
    }

    // INVENTORY MOVES
    async getInventoryMoves(filter?: Partial<InventoryMoveFilter>): Promise<InventoryMove[]> {
        return (await super.get(`/inventory_moves.json`, filter)).data as InventoryMove[];
    }

    async getInventoryMove(inventoryItemId: string, id: string): Promise<InventoryMove> {
        return (await super.get(`/inventory_items/${inventoryItemId}/inventory_moves/${id}.json`))
            .data as InventoryMove;
    }

    async updateInventoryMove(inventoryItemId: string, id: string, data: Partial<InventoryMove>,): Promise<Partial<InventoryMove>> {
        return (await super.patch(`/inventory_items/${inventoryItemId}/inventory_moves/${id}.json`, data))
            .data as InventoryMove;
    }

    async createInventoryMove( inventoryItemId: string, inventoryMove: Partial<InventoryMove>): Promise<Partial<InventoryMove>> {
        return (await super.post(`/inventory_items/${inventoryItemId}/inventory_moves.json`, inventoryMove))
            .data as InventoryMove;
    }

    async deleteInventoryMove(inventoryItemId: string, id: string): Promise<undefined> {
        return (await super.delete(`/inventory_items/${inventoryItemId}/inventory_moves/${id}.json`)).data;
    }

    // TODOS

    async getTodos(filter?: Partial<TodoFilter>): Promise<Todo[]> {
        return (await super.get(`/todos.json`, filter)).data as Todo[];
    }
}
