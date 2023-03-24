# Fakturoid NodeJs lib

NodeJs library for [Fakturoid.cz](https://www.fakturoid.cz/). Please see [API](https://fakturoid.docs.apiary.io/) for more documentation.
New account just for testing API and using separate user (created via "Nastavení > Uživatelé a oprávnění") for production usage is highly recommended.

## Node version
Module tested agains Node 18.15.0

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