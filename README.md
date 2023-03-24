# Fakturoid NodeJs lib

NodeJs library for [Fakturoid.cz](https://www.fakturoid.cz/). Please see [API](https://fakturoid.docs.apiary.io/) for more documentation.
New account just for testing API and using separate user (created via "Nastavení > Uživatelé a oprávnění") for production usage is highly recommended.

# Usage typescript
```
    import Fakturoid from 'fakturoid-ts';
    import {Invoice} from "fakturoid-ts/lib/Types";
    
    const client = new Fakturoid("slug", "email", "token");
    const invoices: Invoice[] = await client.getInvoices();
```

# Usage javascript
```
    const Fakturoid = require('fakturoid-ts').default;
    
    const client = new Fakturoid("slug", "email", "token");
    const invoices = await client.getInvoices();
```

# Available methods
- `getAccount()`
- `getBankAccounts()`
- `getUser(id: string)`
- `getUsers(filter?: Partial<UserFilter>)`
- `getInvoices(filter?: Partial<InvoiceFilter>)`
- `getRegularInvoices(filter?: Partial<InvoiceFilter>)`
- `getProformaInvoices(filter?: Partial<InvoiceFilter>)`
- `getInvoice(id: string)`
- `getInvoicePdf(id: string)`
- `searchInvoices(filter?: Partial<Search>)`
- `updateInvoice(id: string, data: Partial<Invoice>)`
- `fireInvoice(id: string, data: Partial<InvoiceFireFilter>)`
- `createInvoice(invoice: Partial<Invoice>)`
- `deleteInvoice(id: string)`
- `getExpenses(filter?: Partial<ExpenseFilter>)`
- `getExpense(id: string)`
- `searchExpenses(filter?: Partial<Search>)`
- `updateExpense(id: string, data: Partial<Expense>)`
- `fireExpense(id: string, data: Partial<ExpenseFireFilter>)`
- `createExpense(invoice: Partial<Expense>)`
- `deleteExpense(id: string)`
- `getSubjects(filter?: Partial<SubjectFilter>)`
- `getSubject(id: string)`
- `createSubject(subject: Partial<Subject>)`
- `updateSubject(id: string, data: Partial<Subject>)`
- `deleteSubject(id: string)`
- `searchSubjects(filter?: Partial<Search>)`
- `getGenerators(filter?: Partial<GeneratorFilter>)`
- `getTemplateGenerators(filter?: Partial<GeneratorFilter>)`
- `getRecurringGenerators(filter?: Partial<GeneratorFilter>)`
- `getGenerator(id: string)`
- `updateGenerator(id: string, data: Partial<Generator>)`
- `createGenerator(generator: Partial<Generator>)`
- `deleteGenerator(id: string)`
- `createMessage(invoiceId: number, message: Partial<Message>)`
- `getInvoiceNumberFormats()`
- `getReports(year: number)`
- `getPaidReports(year: number)`
- `getVatReports(year: number)`
- `getEvents(filter?: Partial<EventFilter>)`
- `getPaidEvents(filter?: Partial<EventFilter>)`
- `getInventoryItems(filter?: Partial<InventoryItemFilter>)`
- `getArchivedInventoryItems(filter?: Partial<InventoryItemFilter>)`
- `getInventoryItem(id: string)`
- `searchInventoryItems(filter?: Partial<Search>)`
- `archiveInventoryItem(id: string)`
- `unarchiveInventoryItem(id: string)`
- `updateInventoryItem(id: string, data: Partial<InventoryItem>)`
- `createInventoryItem(generator: Partial<InventoryItem>)`
- `deleteInventoryItem(id: string)`
- `getInventoryMoves(filter?: Partial<InventoryMoveFilter>)`
- `getInventoryMove(inventoryItemId: string, id: string)`
- `updateInventoryMove(inventoryItemId: string, id: string, data: Partial<InventoryMove>)`
- `createInventoryMove( inventoryItemId: string, inventoryMove: Partial<InventoryMove>)`
- `deleteInventoryMove(inventoryItemId: string, id: string)`
- `getTodos(filter?: Partial<TodoFilter>)`

# Examples

* Create client
```
    const client = new Fakturoid(SLUG, EMAIL, TOKEN);
```

### Invoices

* Filter invoices by date
```
    const invoices: Invoice[] = await client.getInvoices({
        until: new Date(2023,2,22),
    });
```

* Filter invoices by page
```
    const invoices: Invoice[] = await client.getInvoices({
        page: 2,
    });
```

* Download pdf
```
  const writer = fs.createWriteStream('file.pdf');
  const stream = await client.getInvoicePdf(invoice.id)
  stream.pipe(writer);
```

* Update invoice
```
    await client.updateInvoice(invoice.id, {
        "number": "2023-01-01"
    })
```

* Fire invoice event
```
    await client.fireInvoice(invoice.id, {
        event: InvoiceFireEvent.mark_as_sent
    })
```

* Create invoice
```
    const [subject]: Subject = await client.getSubjects();

    const invoice: Partial<Invoice> = {
        subject_id: subject.id,
        lines: [{
            name: "Hard work",
            quantity: 1,
            unit_price: 40000,
        }],

    }
    await client.createInvoice(invoice);
```

* Delete incoive
```
    await client.deleteInvoice(invoice.id);
```