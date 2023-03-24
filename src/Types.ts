export enum VatMode {
    vat_payer = 'vat_payer',
    non_vat_payer = 'non_vat_payer',
    identified_person = 'identified_person',
}

export enum ExpenseFireEvent {
    pay = 'pay',
    remove_payment = 'remove_payment',
    lock = 'lock',
    unlock = 'unlock',
}

export enum InvoiceFireEvent {
    mark_as_sent = 'mark_as_sent', // Označit jako odeslanou
    deliver = 'deliver', // Doručit emailem
    pay = 'pay', // Označit jako zaplacenou (akceptuje volitelný parametr `paid_at`, `paid_amount`, `variable_symbol` a `bank_account_id`)
    pay_proforma = 'pay_proforma', // Zaplatit proformu a vystavit daňový doklad
    pay_partial_proforma = 'pay_partial_proforma', // Zaplatit částečnou proformu
    remove_payment = 'remove_payment', // Zrušit zaplacení
    deliver_reminder = 'deliver_reminder', // Poslat upomínku
    cancel = 'cancel', // Stornovat fakturu
    undo_cancel = 'undo_cancel', // Zrušit stornování
    lock = 'lock', // Uzamčení faktury
    unlock = 'unlock', // Odemčení faktury
    mark_as_uncollectible = 'mark_as_uncollectible', // Označit jako nedobytnou
    undo_uncollectible = 'undo_uncollectible', // Zrušit označení jako nedobytné
}

export enum VatPriceMode {
    without_vat,
    from_total_with_vat,
}

enum TodoName {
    initial = 'initial', // Příklad důležité události
    initial_fb = 'initial_fb', // Odkaz na Facebook
    email_bounced = 'email_bounced', // Email se nepodařil doručit
    email_for_subject_bounced = 'email_for_subject_bounced', // Email pro klienta se nepodařil doručit
    invoice_overdue = 'invoice_overdue', // Nezaplacená faktura po poslední upomínce
    invoice_partial_proforma_paid = 'invoice_partial_proforma_paid', // Záloha zaplacena
    invoice_partial_proforma_paid_bank = 'invoice_partial_proforma_paid_bank', // Záloha zaplacena spárováním
    invoice_partial_proforma_paid_paypal = 'invoice_partial_proforma_paid_paypal', // Záloha zaplacena přes PayPal
    invoice_partial_proforma_paid_gopay = 'invoice_partial_proforma_paid_gopay', // Záloha zaplacena přes GoPay
    invoice_already_paid = 'invoice_already_paid', // Faktura byla již jednou zaplacena
    expense_already_paid = 'expense_already_paid', // Náklad byl již jednou zaplacen
    unpaired_payment = 'unpaired_payment', // Nespárovaná příchozí platba
    invoice_payment_unpaired = 'invoice_payment_unpaired', // Nespárovaná příchozí platba
    expense_payment_unpaired = 'expense_payment_unpaired', // Nespárovaná odchozí platba
    bank_email_received_but_pairing_disabled = 'bank_email_received_but_pairing_disabled', // Přišel párovací email, ale párování je vypnuto
    subject_unreliable_vat_payer = 'subject_unreliable_vat_payer', // Kontakt se stal nespolehlivým plátcem DPH
    subject_reliable_vat_payer = 'subject_reliable_vat_payer', // Kontakt se stal spolehlivým plátcem DPH
    generator_finished = 'generator_finished', // Poslední faktura ze šablony
    generator_failed = 'generator_failed', // Selhalo vygenerování faktury ze šablony
    webhook_failed = 'webhook_failed', // Selhalo doručení webhooku
    paypal_unverified_notification = 'paypal_unverified_notification', // Pokus o podvržení platby z PayPalu
    paypal_tampered_payment = 'paypal_tampered_payment', // Pokus o přepsání dat z PayPalu
    paypal_uncompleted_payment = 'paypal_uncompleted_payment', // Platba na váš PayPal účet vyžaduje pozornost
    paypal_invalid_token = 'paypal_invalid_token', // Neplatný Fakturoidí PayPal token
    gopay_invalid_token = 'gopay_invalid_token', // Neplatný Fakturoidí GoPay token ID platby v GoPay
    gopay_unpaired_payment = 'gopay_unpaired_payment', // Nespárovaná platba přes GoPay
    gopay_uncompleted_payment = 'gopay_uncompleted_payment', // Platba na váš GoPay účet nebyla dokončena
    gopay_wrong_credentials = 'gopay_wrong_credentials', // Špatné přihlašovací údaje k platební bráně GoPay
    suspicious_account = 'suspicious_account', // Detekováno přepisování kontaktů
    account_near_vat_turnover_limit = 'account_near_vat_turnover_limit', // Blížíte se k hranici obratu plátce DPH
    account_exceeded_vat_turnover_limit = 'account_exceeded_vat_turnover_limit', // Překročili jste obrat povinné registrace k DPH
}

export enum IbanVisibility {
    automatically,
    always,
}

export type Account = {
    subdomain: string; // Název účtu (slug) - string
    plan: string; // jméno tarifu - string
    plan_price: number; // cena tarifu - integer
    email: string; // email vlastníka účtu - string
    invoice_email?: string; // email, ze kterého jsou odesílány faktury - string, optional
    phone?: string; // telefon vlastníka účtu - string, optional
    web?: string; // web vlastníka účtu - string, optional
    name: string; // jméno firmy - string
    full_name?: string; // jméno majitele účtu - string, optional
    registration_no?: string; // IČ - string, optional
    vat_no?: string; // DIČ - string, optional
    vat_mode: VatMode; // Plátce DPH / Neplátce DPH / Identifikovaná osoba - string, values: vat_payer, non_vat_payer, identified_person
    vat_price_mode: VatPriceMode; // způsob zadávání cen do řádků - string, values: without_vat, from_total_with_vat
    street: string; // ulice - string
    street2?: string; // ulice 2 - string, optional
    city: string; // město - string
    zip: string; // PSČ - string
    country: string; // země (ISO kód) - string
    bank_account: string; // výchozí bankovní účet - string
    iban?: string; // IBAN - string, optional
    swift_bic?: string; // BIC (pro SWIFT platby) - string, optional
    currency: string; // měna - string
    unit_name?: string; // výchozí jednotka - string, optional
    vat_rate: number; // výchozí daňová sazba - integer
    displayed_note?: string; // text patičky - string, optional
    invoice_note?: string; // text před položkami faktury - string, optional
    due: number; // počet dní před splatností - integer
    custom_email_text: string; // text emailu pro odeslání faktury - string
    overdue_email_text: string; // text upomínky - string
    invoice_paypal: boolean; // zapnutí PayPal plateb - boolean
    invoice_gopay: boolean; // zapnutí GoPay plateb - boolean
    html_url: string; // HTML adresa účtu - string
    url: string; // API adresa účtu - string
    created_at: Date; // datum vytvoření účtu - datetime
    updated_at: Date; // datum poslední úpravy účtu - datetime
};

export type BankAccount = {
    id: number; // identifikátor bankovního účtu - integer
    name: string; // název účtu - string
    number: string; // číslo účtu - string
    currency: string; // měna - string
    iban?: string; // IBAN - string, optional
    swift_bic?: string; // BIC (pro SWIFT platby) - string, optional
    pairing: boolean; // párovnání plateb - boolean
    payment_adjustment: boolean; // haléřové vyrovnání při párování plateb - boolean
};

export type NumberFormat = {
    readonly id: number; // identifikátor číselné řady - integer, readonly
    readonly format: string; // formát číselné řady - string, readonly
    readonly preview: string; // náhled číselné řady - string, readonly
    readonly default: boolean; // defaultní číselná řada - boolean, readonly
    readonly created_at: Date; // datum vytvoření číselné řady - datetime, readonly
    readonly updated_at: Date; // datum poslední aktualizace číselné řady - datetime, readonly
};

export type InvoiceLine = {
    readonly id: number; // Identifikátor řádku - integer, readonly
    name: string; // Popis řádku faktury - string, required
    quantity: number; // Množství - decimal, required
    unit_name?: string; // Množstevní jednotka - string, optional
    unit_price: number; // Cena za jednotku - decimal, required
    vat_rate: number; // Sazba DPH (pro neplátce DPH 0) - integer, required
    readonly unit_price_without_vat: number; // Cena za jednotku bez DPH - decimal, readonly
    readonly unit_price_with_vat: number; // Cena za jednotku včetně DPH - decimal, readonly
    sku?: string; // SKU kód skladové položky - string, optional
};

export type ExpenseFilter = {
    subject_id: number;
    since: Date;
    updated_since: Date;
    status: string;
    page: number;
};

export type Expense = {
    readonly id: number; // identifikátor nákladu - integer, readonly
    custom_id?: string; // identifikátor nákladu ve vaší aplikaci - string, optional
    number?: string; // číslo nákladu (Př: N20150101, musí odpovídat formátu čísla v nastavení účtu, doplní se automaticky) - string, optional, unique, default: next in the row
    original_number?: string; // číslo dokladu (uvedené na přijaté faktuře) - string, optional
    variable_symbol?: string; // variabilní symbol (nepovinné) - string, optional
    readonly supplier_name: string; // název firmy kontaktu - string, readonly
    readonly supplier_street: string; // ulice kontatku - string, readonly
    readonly supplier_city: string; // město kontaktu - string, readonly
    readonly supplier_zip: string; // poštovní směrovací číslo kontaktu - string, readonly
    readonly supplier_country: string; // země kontaktu (ISO kód) - string, readonly
    readonly supplier_registration_no: string; // IČ kontaktu - string, readonly
    readonly supplier_vat_no: string; // DIČ kontaktu - string, readonly
    subject_id: number; // ID kontaktu (povinné) - integer, required
    readonly status: string; // stav nákladu - open/overdue/paid - string, readonly
    document_type?: string; // typ dokumentu - bill/invoice/other - string, optional, default: invoice
    issued_on?: Date; // datum vystavení - date, optional, default: today
    taxable_fulfillment_due?: Date; // datum zdanitelného plnění - date, optional, default: today
    due_on: Date; // datum splatnosti - date, required
    readonly paid_on: Date; // datum zaplacení nákladu - datetime, readonly
    description?: string; // popis (nepovinné) - string, optional
    private_note?: string; // soukromá poznámka (nepovinné) - string, optional
    tags?: any[string]; // seznam tagů nákladu - array, optional
    bank_account?: string; // číslo bankovního účtu (nepovinné - použije se bankovní účet z kontaktu) - string, optional, default: by subject
    iban?: string; // IBAN (nepovinné - doplní se z kontaktu) - string, optional, default: by subject
    swift_bic?: string; // BIC (nepovinné - doplní se z kontaktu) - string, optional, default: by subject
    payment_method?: string; // bank (bankovní převod) / cash (hotově) / cod (dobírka) / card (Karta) - string, optional, default: bank
    hide_bank_account?: boolean; // skrytí bankovních údajů, používá se jen pokud payment_method není nastaveno na bank - boolean, optional
    currency?: string; // kód měny (nepovinné - doplní se z účtu, 3 znaky) - string, optional, default: by account settings
    exchange_rate?: string; // kurz (povinný pokud je měna faktury jiná než měna účtu) - string, optional
    transferred_tax_liability?: boolean; // přenesená daňová povinnost true/false - boolean, optional, default: false
    vat_price_mode: VatPriceMode; // způsob zadávání cen do řádků - string, values: without_vat, from_total_with_vat, default: without_vat
    supply_code?: number; // kód plnění pro souhrnná hlášení (pouze pro zahraniční faktury do EU) - integer, optional
    round_total?: boolean; // zaokrouhlit cenu s DPH (při vystavení) - boolean, optional, default: false
    readonly subtotal: number; // součet (bez DPH) - decimal, readonly
    readonly total: number; // celkový součet (včetně DPH) - decimal, readonly
    readonly native_subtotal: number; // součet v měně účtu - decimal, readonly
    readonly native_total: number; // součet v měně účtu (včetně DPH) - decimal, readonly
    attachment?: Attachment; // příloha - object, optional
    lines: InvoiceLine[];
    readonly html_url: string; // HTML adresa nákladu - string, readonly
    readonly url: string; // API adresa nákladu - string, readonly
    readonly subject_url: string; // API adresa kontaktu - string, readonly
    readonly created_at: Date; // datum vytvoření nákladu - datetime, readonly
    readonly updated_at: Date; // datum poslední aktualizace nákladu - datetime, readonly
};

export type InventoryItem = {
    readonly id: number; // Identifikátor položky - integer, readonly
    name: string; // Název položky - text, required
    sku?: string; // Interní kód položky (SKU) - string, optional (required pokud je zapnuto sledování počtu)
    article_number_type?: string; // Typ kódu produktu (ian ean isbn) - string, optional, default: ian
    article_number?: string; // Kód produktu - string, optional
    unit_name?: string; // Měrná jednotka - string, optional
    track_quantity?: boolean; // Sledovat počet - boolean, optional, default: false
    quantity?: number; // Množství skladem - decimal, optional (required pokud je zapnuto sledování počtu)
    min_quantity?: number; // Minimální množství - decimal, optional
    max_quantity?: number; // Maximální množství - decimal, optional
    allow_below_zero: boolean; // Množství může jít do záporu - boolean, default: false
    native_purchase_price?: number; // Nákupní cena za jednotku - decimal, optional (required pokud je zapnuto sledování počtu)
    native_retail_price: number; // Prodejní cena za jednotku - decimal, required
    vat_rate?: string; // Sazba DPH: Základní 21 % (standard) / Snížená 15 % (reduced) / Snížená 10 % (reduced2) / Nulová (zero) - string, optional
    readonly average_native_purchase_price: number; // Průměrná nákupní cena - decimal, readonly
    supply_type?: string; // Typ položky: Zboží (goods) / Služba (service) - string, optional
    readonly archived: boolean; // Položka je archivovaná - boolean, readonly
    private_note?: string; // Soukromá poznámka - text, optional
    suggest_for?: string; // Napovídat pro: Faktury (invoices) / Náklady (expenses) / Oboje (both) - string, optional
    readonly created_at: Date; // Datum vytvoření položky - datetime, readonly
    readonly updated_at: Date; // Datum poslední aktualizace položky - datetime, readonly
};

export type InventoryMove = {
    readonly id: number; // Identifikátor pohybu - integer, readonly
    direction: string; // Směr pohybu: Naskladnění (in) / Vyskladnění (out) - string, required
    moved_on: Date; // Datum pohybu - datetime, required
    quantity_change: number; // Množství - decimal, required
    purchase_price?: number; // Nákupní cena za jednotku - decimal, optional
    purchase_currency?: string; // Kód měny (nepovinné - doplní se z účtu, 3 znaky) - string, optional, default: by account settings
    native_purchase_price?: number; // Nákupní cena v měně účtu - decimal, optional
    retail_price?: number; // Prodejní cena za jednotku - decimal, optional
    retail_currency?: string; // Kód měny (nepovinné - doplní se z účtu, 3 znaky) - string, optional, default: by account settings
    native_retail_price?: number; // Prodejní cena v měně účtu - decimal, optional
    private_note?: string; // Soukromá poznámka - text, optional
    inventory_item_id?: number; // Identifikátor skladové položky - integer, optional
    readonly created_at: Date; // Datum vytvoření pohybu - datetime, readonly
    readonly updated_at: Date; // Datum poslední aktualizace pohybu - datetime, readonly
};

export type Message = {
    email?: string; // E-mail příjemce - string, optional, default: by invoice subject
    email_copy?: string; // Kopie na e-mail - string, optional, default: by invoice subject
    subject?: string; // Předmět emailu - string, optional
    message?: string; // Text e-mailu - string, optional, default: by account settings
};

export type User = {
    id: string; // Identifikátor uživatele - string
    full_name: string; // Jméno uživatele - string
    email: string; // E-mail uživatele - string
    avatar_url: string; // Avatar uživatele - string
};

export type ReportLine = {
    income: number; // Vyfakturovaná částka bez DPH - decimal
    vat: number; // DPH - decimal
};

export type Report = {
    January: ReportLine;
    February: ReportLine;
    March: ReportLine;
    April: ReportLine;
    May: ReportLine;
    June: ReportLine;
    July: ReportLine;
    August: ReportLine;
    September: ReportLine;
    October: ReportLine;
    November: ReportLine;
    December: ReportLine;
};

export type Event = {
    // TODO https://fakturoid.docs.apiary.io/#reference/event-names
    name: string; // typ události - generated, sent, accepted, sent_reminder, overdue, paid, paid_bank, payment_removed, unpaired_payment - string
    created_at: Date; // datum a čas vytvoření události - datetime
    invoice_id: number; // ID faktury (nepovinné) - integer
    subject_id: number; // ID kontaktu (nepovinné) - integer
    text: string; // text události - string
    invoice_url: string; // API adresa faktury (nepovinné) - string
    subject_url: string; // API adresa kontaktu (nepovinné) - string
    user: User; // uživatel - object
    'user:id': number; // Identifikátor uživatele - integer
    'user:full_name': string; // Jméno uživatel - string
    'user:avatar': string; // Obrázek uživatele - string
};

export type Todo = {
    id: number; // identifikátor důležité události - integer
    name: TodoName; // typ události - initial_todo, initial_fb, already_paid, unpaired_payment, email_bounced - string
    created_at: Date; // datum a čas vytvoření události - datetime
    completed_at: Date; // datum a čas odškrtnutí události - datetime
    invoice_id: number; // ID faktury - integer
    subject_id: number; // ID kontaktu - integer
    text: string; // text události - string
    invoice_url: string; // API adresa faktury - string
    subject_url: string; // API adresa kontaktu - string
};

export type EventFilter = {
    subject_id: number;
    since: Date;
    page: number;
};

export type InventoryMoveFilter = {
    since: Date;
    updated_since: Date;
    page: number;
    inventory_item_id: number;
};

export type TodoFilter = {
    subject_id: number;
    since: Date;
    page: number;
};

export type InventoryItemFilter = {
    since: Date;
    updated_since: Date;
    page: number;
    article_number: string;
    sku: string;
};

export type GeneratorFilter = {
    subject_id: number;
    since: Date;
    updated_since: Date;
    page: number;
};

export type SubjectFilter = {
    page: number;
    since: Date;
    updated_since: Date;
    custom_id: string;
};

export type Subject = {
    readonly id: number; // identifikátor kontaktu - integer, readonly
    custom_id?: string; // identifikátor kontaktu ve vaší aplikaci - string, optional
    type?: string; // typ kontaktu - customer/supplier/both - string, optional, default: customer
    name: string; // jméno firmy kontaktu - string, required
    street?: string; // ulice - string, optional
    street2?: string; // ulice 2 - string, optional, deprecated - v další verzi API bude odstraněn
    city?: string; // město - string, optional
    zip?: string; // poštovní směrovací číslo - string, optional
    country?: string; // země (ISO Kód) - string, optional, default: same as account
    registration_no?: string; // IČ podnikatele - string, optional
    vat_no?: string; // DIČ (plátci DPH, IČ DPH na Slovensku, je mezinárodní a začíná kódem země) - string, optional
    local_vat_no?: string; // SK DIČ (pouze pro Slovensko, nezačíná kódem země) - string, optional
    bank_account?: string; // číslo bankovního účtu - string, optional
    iban?: string; // IBAN - string, optional
    variable_symbol?: string; // variabilní symbol - string, optional
    enabled_reminders?: boolean; // příznak zda zasílat připomínky - boolean, optional, default: true
    due?: number; // počet dní splatnosti faktury pro kontakt, pokud chcete nechat defaultní splatnost podle nastavení účtu, ponechte prázdné - integer, optional
    full_name?: string; // jméno kontaktní osoby - string, optional
    email?: string; // email pro posílání faktur kontaktu - string, optional
    email_copy?: string; // email pro posílání kopie faktur kontaktu - string, optional
    phone?: string; // telefon - string, optional
    web?: string; // web - string, optional
    private_note?: string; // soukromá poznámka - string, optional
    readonly avatar_url: string; // Adresa obrázku kontaktu - string, readonly
    readonly html_url: string; // HTML adresa kontaktu - string, readonly
    readonly url: string; // API adresa kontaktu - string, readonly
    readonly created_at: Date; // datum vytvoření kontaktu - datetime, readonly
    readonly updated_at: Date; // datum poslední aktualizace kontaktu - datetime, readonly
};

export type Attachment = {
    file_name: string;
    content_type: string;
    download_url: string;
};

export type Invoice = {
    custom_id?: string; // identifikátor faktury ve vaší aplikaci - string, optional
    readonly id: number; // identifikátor faktury - integer, readonly
    proforma?: boolean; // příznak proformy - true/false - boolean, optional, default: false
    partial_proforma?: boolean; // přiznak zda je proforma na plnou částku - true/false - boolean, optional, default: false
    number?: string; // číslo faktury (Př: 2011-0001, musí odpovídat formátu čísla v nastavení účtu) - string, optional, unique
    number_format_id?: number; // ID číselné řady - integer, optional
    variable_symbol?: string; // variabilní symbol (nepovinné - doplní se z čísla faktury) - string, optional, default: by invoice number
    readonly your_name: string; // název vaší firmy - string, readonly
    readonly your_street: string; // vaše ulice - string, readonly
    readonly your_street2: string; // vaše ulice 2 - string, readonly, deprecated - v další verzi API bude odstraněn
    readonly your_city: string; // vaše město - string, readonly
    readonly your_zip: string; // vaše poštovní směrovací číslo - string, readonly
    readonly your_country: string; // vaše země (ISO kód) - string, readonly
    readonly your_registration_no: string; // vaše IČ - string, readonly
    readonly your_vat_no: string; // vaše DIČ - string, readonly
    readonly your_local_vat_no: string; // vaše SK DIČ (pouze pro Slovensko, nezačíná kódem země) - string, readonly
    readonly client_name: string; // název firmy kontaktu - string, readonly
    readonly client_street: string; // ulice kontatku - string, readonly
    readonly client_street2: string; // ulice 2 kontaktu - string, readonly, deprecated - v další verzi API bude odstraněn
    readonly client_city: string; // město kontaktu - string, readonly
    readonly client_zip: string; // poštovní směrovací číslo kontaktu - string, readonly
    readonly client_country: string; // země kontaktu (ISO kód) - string, readonly
    readonly client_registration_no: string; // IČ kontaktu - string, readonly
    readonly client_vat_no: string; // DIČ kontaktu - string, readonly
    readonly client_local_vat_no: string; // SK DIČ kontaktu (pouze pro Slovensko, nezačíná kódem země) - string, readonly
    subject_id: number; // ID kontaktu (povinné) - integer, required
    subject_custom_id?: number; // identifikátor kontaktu ve vaší aplikaci - integer, optional
    generator_id?: number; // ID šablony ze které byla faktura vystavena - integer, optional
    related_id?: number; // ID proformy/faktury (u faktur vystavených ze zálohových faktur) - integer, optional
    correction?: boolean; // true - Opravný daňový doklad, false - faktura/proforma - boolean, optional, default: false
    correction_id?: number; // ID opravovaného dokladu, zadává se pouze pokud je correction=true, na opravovaný doklad se automaticky doplní ID opravného daňového dokladu - integer, optional
    readonly token: string; // token pro public akci - string, readonly
    readonly status: string; // stav faktury - open/sent/overdue/paid/cancelled - string, readonly
    order_number?: string; // číslo objednávky (nepovinné) - string, optional
    issued_on?: Date; // datum vystavení (zobrazeno na faktuře) - date, optional, default: today
    taxable_fulfillment_due?: Date; // datum zdanitelného plnění - date, optional, default: today
    due?: number; // počet dní, než bude po splatnosti (nepovinné - doplní se z účtu) - integer, optional, default: by account settings
    readonly due_on: Date; // datum splatnosti (doplní se podle due) - date, readonly
    readonly sent_at: Date; // datum a čas odeslání faktury - datetime, readonly
    readonly paid_at: Date; // datum a čas zaplacení faktury - datetime, readonly
    readonly reminder_sent_at: Date; // datum a čas odeslání upomínky - datetime, readonly
    readonly accepted_at: Date; // datum a čas odsouhlasení faktury klientem - datetime, readonly
    readonly cancelled_at: Date; // datum stornování faktury (pouze pro neplátce DPH) - datetime, readonly
    note?: string; // text před položkami faktury (nepovinné - doplní se z účtu) - string, optional, default: by account settings
    footer_note?: string; // patička faktury (nepovinné - doplní se z účtu) - string, optional, default: by account settings
    private_note?: string; // soukromá poznámka (nepovinné) - string, optional
    tags?: string[]; // seznam tagů faktury - array, optional
    bank_account_id?: number; // ID bankovního účtu (nepovinné - použije se výchozí bankovní účet) - integer, only on create action, optional
    bank_account?: string; // číslo bankovního účtu (nepovinné - použije se výchozí bankovní účet) - string, optional, default: by account settings
    iban?: string; // IBAN (nepovinné - doplní se z účtu) - string, optional, default: by account settings
    iban_visibility?: IbanVisibility; // viditelnost IBANu - string, optional, values: automatically, always
    swift_bic?: string; // BIC (nepovinné - doplní se z účtu) - string, optional, default: by account settings
    show_already_paid_note_in_pdf?: boolean; // zobrazí na faktuře "Neplaťte již uhrazeno" v jazyce faktury **bez ohledu na stav platby**. Lze nastavit pouze pro faktury, pro proformy je vždy `false`. Pro faktury vystavené z plné proformy je vždy `true`. - boolean, optional, default: false
    payment_method?: string; // bank (bankovní převod) / cash (hotově) / cod (dobírka) / paypal (PayPal) / card (Karta) - string, optional, default: bank
    currency?: string; // kód měny (nepovinné - doplní se z účtu, 3 znaky) - string, optional, default: by account settings
    exchange_rate?: string; // kurz (povinný pokud je měna faktury jiná než měna účtu) - string, optional
    paypal?: boolean; // tlačítko pro platbu PayPalem - true/false - boolean, optional, default: false
    gopay?: boolean; // tlačítko pro platbu přes GoPay - true/false - boolean, optional, default: false
    language?: string; // jazyk faktury (cz, sk, en, de, fr, it, es, ru, hu, pl, ro) - string, optional, default: cz
    transferred_tax_liability?: boolean; // přenesená daňová povinnost true/false - boolean, optional, default: false
    supply_code?: number; // kód plnění pro souhrnná hlášení (pouze pro zahraniční faktury do EU) - integer, optional
    eu_electronic_service?: boolean; // příznak, pokud je faktura v režimu MOSS - boolean, optional, default: false, deprecated
    oss?: string; // příznak, jestli je faktura v režimu OSS, povolené hodnoty disabled - vypnuto, service - služba, goods - zboží. Prázdná hodnota znamená disabled - string, optional, default: disabled
    vat_price_mode: VatPriceMode; // způsob zadávání cen do řádků - string, values: null, without_vat, from_total_with_vat, default: by account settings
    round_total?: boolean; // zaokrouhlit cenu s DPH (při vystavení) - boolean, optional, default: false
    readonly subtotal: number; // součet (bez DPH) - decimal, readonly
    readonly native_subtotal: number; // součet v měně účtu - decimal, readonly
    readonly total: number; // celkový součet (včetně DPH) - decimal, readonly
    readonly native_total: number; // součet v měně účtu (včetně DPH) - decimal, readonly
    readonly remaining_amount: number; // částka k zaplacení (včetně DPH) - decimal, readonly
    readonly remaining_native_amount: number; // částka k zaplacení v měně účtu (včetně DPH) - decimal, readonly
    readonly paid_amount: number; // skutečně zaplacená částka - decimal, readonly
    eet?: boolean; // příznak jestli je faktura evidovaná v EET (více v článku na podpoře EET pro vývojáře) - boolean, optional, default: false
    eet_cash_register?: string; // pokladna - string, optional, default: null
    eet_store?: number; // číslo provozovny - integer, optional, default: null
    eet_records?: any[]; // EET záznamy - array, optional, default: []
    attachment?: Attachment; // příloha - object, optional
    readonly html_url: string; // HTML adresa faktury - string, readonly
    readonly public_html_url: string; // veřejná HTML adresa faktury - string, readonly
    readonly url: string; // API adresa faktury - string, readonly
    readonly pdf_url: string; // API adresa pro stažení faktury v PDF - string, readonly
    readonly subject_url: string; // API adresa kontaktu - string, readonly
    readonly created_at: Date; // datum vytvoření faktury - datetime, readonly
    readonly updated_at: Date; // datum poslední aktualizace faktury - datetime, readonly
    lines: Partial<InvoiceLine>[];
};

export type Generator = {
    readonly id: number; // identifikátor šablony - integer, readonly
    custom_id?: string; // identifikátor šablony ve vaší aplikaci - string, optional
    name: string; // pojmenování šablony - string, required
    recurring: boolean; // true/false jedná se o pravidelnou nebo normální šablonu - boolean, required
    proforma?: boolean; // příznak proformy - true/false - boolean, optional, default: false
    paypal?: boolean; // vystavenou fakturu ze šablony půjde zaplati přes PayPal - boolean, optional, default: false
    gopay?: boolean; // vystavenou fakturu ze šablony půjde zaplati přes GoPay - boolean, optional, default: false
    start_date: any; // počáteční datum pro pravidelnou šablonu - date, required for recurring invoices
    end_date?: any; // koncové datum pro pravidelnou šablonu - date, optional
    months_period: number; // počet měsíců do dalšího vystavení faktury ze šablony (pravidelná šablona) - integer, required for recurring invoices
    next_occurrence_on?: any; // datum dalšího vystavení faktury z pravidelné šablony - date, optional
    due?: number; // počet dní, než bude po splatnosti (nepovinné - doplní se z účtu) - integer, optional, default: by account settings
    send_email?: boolean; // true/false posílat pravidelnou šablonu emailem - boolean, optional, default: false
    subject_id: number; // ID kontaktu (povinné) - integer, required
    number_format_id?: number; // ID číselné řady - integer, optional
    note?: string; // text před položkami faktury - string, optional
    bank_account_id?: number; // ID bankovního účtu (nepovinné - doplní se výchozí bankovní účet) - integer, optional, default: by account settings
    bank_account?: string; // číslo bankovního účtu (nepovinné - doplní se výchozí bankovní účet), musí odpovídat některému účtu z Bankovních účtů - string, optional, default: by account settings
    iban?: string; // IBAN - string, optional, default: by account settings
    swift_bic?: string; // BIC (pro SWIFT platby) - string, optional, default: by account settings
    tags?: string[]; // seznam tagů šablony (jen pravidelné) - array, optional
    payment_method?: string; // bank (bankovní převod) / cash (hotově) / cod (dobírka) / card (Karta) - string, optional
    currency?: string; // kód měny (nepovinné - doplní se z účtu, 3 znaky) - string, optional, default: by account settings
    exchange_rate?: number; // kurz (nepovinné) - decimal, optional
    language?: string; // jazyk vystavené faktury (cz, sk, en, de, fr, it, es, ru, hu, pl, ro) - string, optional, default: cz
    vat_price_mode: VatPriceMode; // způsob zadávání cen do řádků - string, values: null, without_vat, from_total_with_vat
    transferred_tax_liability?: boolean; // přenesená daňová povinnost true/false - boolean, optional, default: false
    eu_electronic_service?: boolean; // příznak, pokud je faktura v režimu MOSS - boolean, optional, default: false, deprecated
    oss?: string; // příznak, jestli je šablona v režimu OSS, povolené hodnoty disabled - vypnuto, service - služba, goods - zboží. Prázdná hodnota znamená disabled - string, optional, default: disabled
    supply_code?: number; // kód plnění pro souhrnná hlášení (pouze pro zahraniční faktury do EU) - integer, optional
    order_number?: string; // číslo objednávky (nepovinné) - string, optional
    readonly subtotal: number; // součet (bez DPH) - decimal, readonly
    readonly native_subtotal: number; // součet v měně účtu - decimal, readonly
    readonly total: number; // celkový součet (včetně DPH) - decimal, readonly
    readonly native_total: number; // celkový součet v měně účtu - decimal, readonly
    readonly html_url: string; // HTML adresa šablony - string, readonly
    readonly url: string; // API adresa šablony - string, readonly
    readonly subject_url: string; // API adresa kontaktu - string, readonly
    readonly created_at: Date; // datum vytvoření šablony - datetime, readonly
    readonly updated_at: Date; // datum poslední aktualizace šablony - datetime, readonly

    lines: InvoiceLine[];
};

export type UserFilter = {
    page: number;
};

export type InvoiceFilter = {
    page: number;
    since: Date;
    until: Date;
    updated_since: Date;
    updated_until: Date;
    number: string;
    status: string;
    subject_id: number;
    custom_id: string;
};

export type InvoiceFireFilter = {
    event: InvoiceFireEvent;

    paid_at: Date;
    paid_amount: number;
    variable_symbol: string;
};

export type ExpenseFireFilter = {
    event: ExpenseFireEvent;

    paid_on: Date;
    paid_amount: number;
    variable_symbol: string;
    bank_account_id: number;
};

export type Search = {
    query: string;
    page: number;
};
