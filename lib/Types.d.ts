export declare enum VatMode {
    vat_payer = "vat_payer",
    non_vat_payer = "non_vat_payer",
    identified_person = "identified_person"
}
export declare enum ExpenseFireEvent {
    pay = "pay",
    remove_payment = "remove_payment",
    lock = "lock",
    unlock = "unlock"
}
export declare enum InvoiceFireEvent {
    mark_as_sent = "mark_as_sent",
    deliver = "deliver",
    pay = "pay",
    pay_proforma = "pay_proforma",
    pay_partial_proforma = "pay_partial_proforma",
    remove_payment = "remove_payment",
    deliver_reminder = "deliver_reminder",
    cancel = "cancel",
    undo_cancel = "undo_cancel",
    lock = "lock",
    unlock = "unlock",
    mark_as_uncollectible = "mark_as_uncollectible",
    undo_uncollectible = "undo_uncollectible"
}
export declare enum VatPriceMode {
    without_vat = 0,
    from_total_with_vat = 1
}
declare enum TodoName {
    initial = "initial",
    initial_fb = "initial_fb",
    email_bounced = "email_bounced",
    email_for_subject_bounced = "email_for_subject_bounced",
    invoice_overdue = "invoice_overdue",
    invoice_partial_proforma_paid = "invoice_partial_proforma_paid",
    invoice_partial_proforma_paid_bank = "invoice_partial_proforma_paid_bank",
    invoice_partial_proforma_paid_paypal = "invoice_partial_proforma_paid_paypal",
    invoice_partial_proforma_paid_gopay = "invoice_partial_proforma_paid_gopay",
    invoice_already_paid = "invoice_already_paid",
    expense_already_paid = "expense_already_paid",
    unpaired_payment = "unpaired_payment",
    invoice_payment_unpaired = "invoice_payment_unpaired",
    expense_payment_unpaired = "expense_payment_unpaired",
    bank_email_received_but_pairing_disabled = "bank_email_received_but_pairing_disabled",
    subject_unreliable_vat_payer = "subject_unreliable_vat_payer",
    subject_reliable_vat_payer = "subject_reliable_vat_payer",
    generator_finished = "generator_finished",
    generator_failed = "generator_failed",
    webhook_failed = "webhook_failed",
    paypal_unverified_notification = "paypal_unverified_notification",
    paypal_tampered_payment = "paypal_tampered_payment",
    paypal_uncompleted_payment = "paypal_uncompleted_payment",
    paypal_invalid_token = "paypal_invalid_token",
    gopay_invalid_token = "gopay_invalid_token",
    gopay_unpaired_payment = "gopay_unpaired_payment",
    gopay_uncompleted_payment = "gopay_uncompleted_payment",
    gopay_wrong_credentials = "gopay_wrong_credentials",
    suspicious_account = "suspicious_account",
    account_near_vat_turnover_limit = "account_near_vat_turnover_limit",
    account_exceeded_vat_turnover_limit = "account_exceeded_vat_turnover_limit"
}
export declare enum IbanVisibility {
    automatically = 0,
    always = 1
}
export type Account = {
    subdomain: string;
    plan: string;
    plan_price: number;
    email: string;
    invoice_email?: string;
    phone?: string;
    web?: string;
    name: string;
    full_name?: string;
    registration_no?: string;
    vat_no?: string;
    vat_mode: VatMode;
    vat_price_mode: VatPriceMode;
    street: string;
    street2?: string;
    city: string;
    zip: string;
    country: string;
    bank_account: string;
    iban?: string;
    swift_bic?: string;
    currency: string;
    unit_name?: string;
    vat_rate: number;
    displayed_note?: string;
    invoice_note?: string;
    due: number;
    custom_email_text: string;
    overdue_email_text: string;
    invoice_paypal: boolean;
    invoice_gopay: boolean;
    html_url: string;
    url: string;
    created_at: Date;
    updated_at: Date;
};
export type BankAccount = {
    id: number;
    name: string;
    number: string;
    currency: string;
    iban?: string;
    swift_bic?: string;
    pairing: boolean;
    payment_adjustment: boolean;
};
export type NumberFormat = {
    readonly id: number;
    readonly format: string;
    readonly preview: string;
    readonly default: boolean;
    readonly created_at: Date;
    readonly updated_at: Date;
};
export type InvoiceLine = {
    readonly id: number;
    name: string;
    quantity: number;
    unit_name?: string;
    unit_price: number;
    vat_rate: number;
    readonly unit_price_without_vat: number;
    readonly unit_price_with_vat: number;
    sku?: string;
};
export type ExpenseFilter = {
    subject_id: number;
    since: Date;
    updated_since: Date;
    status: string;
    page: number;
};
export type Expense = {
    readonly id: number;
    custom_id?: string;
    number?: string;
    original_number?: string;
    variable_symbol?: string;
    readonly supplier_name: string;
    readonly supplier_street: string;
    readonly supplier_city: string;
    readonly supplier_zip: string;
    readonly supplier_country: string;
    readonly supplier_registration_no: string;
    readonly supplier_vat_no: string;
    subject_id: number;
    readonly status: string;
    document_type?: string;
    issued_on?: Date;
    taxable_fulfillment_due?: Date;
    due_on: Date;
    readonly paid_on: Date;
    description?: string;
    private_note?: string;
    tags?: any[string];
    bank_account?: string;
    iban?: string;
    swift_bic?: string;
    payment_method?: string;
    hide_bank_account?: boolean;
    currency?: string;
    exchange_rate?: string;
    transferred_tax_liability?: boolean;
    vat_price_mode: VatPriceMode;
    supply_code?: number;
    round_total?: boolean;
    readonly subtotal: number;
    readonly total: number;
    readonly native_subtotal: number;
    readonly native_total: number;
    attachment?: Attachment;
    lines: InvoiceLine[];
    readonly html_url: string;
    readonly url: string;
    readonly subject_url: string;
    readonly created_at: Date;
    readonly updated_at: Date;
};
export type InventoryItem = {
    readonly id: number;
    name: string;
    sku?: string;
    article_number_type?: string;
    article_number?: string;
    unit_name?: string;
    track_quantity?: boolean;
    quantity?: number;
    min_quantity?: number;
    max_quantity?: number;
    allow_below_zero: boolean;
    native_purchase_price?: number;
    native_retail_price: number;
    vat_rate?: string;
    readonly average_native_purchase_price: number;
    supply_type?: string;
    readonly archived: boolean;
    private_note?: string;
    suggest_for?: string;
    readonly created_at: Date;
    readonly updated_at: Date;
};
export type InventoryMove = {
    readonly id: number;
    direction: string;
    moved_on: Date;
    quantity_change: number;
    purchase_price?: number;
    purchase_currency?: string;
    native_purchase_price?: number;
    retail_price?: number;
    retail_currency?: string;
    native_retail_price?: number;
    private_note?: string;
    inventory_item_id?: number;
    readonly created_at: Date;
    readonly updated_at: Date;
};
export type Message = {
    email?: string;
    email_copy?: string;
    subject?: string;
    message?: string;
};
export type User = {
    id: string;
    full_name: string;
    email: string;
    avatar_url: string;
};
export type ReportLine = {
    income: number;
    vat: number;
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
    name: string;
    created_at: Date;
    invoice_id: number;
    subject_id: number;
    text: string;
    invoice_url: string;
    subject_url: string;
    user: User;
    'user:id': number;
    'user:full_name': string;
    'user:avatar': string;
};
export type Todo = {
    id: number;
    name: TodoName;
    created_at: Date;
    completed_at: Date;
    invoice_id: number;
    subject_id: number;
    text: string;
    invoice_url: string;
    subject_url: string;
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
    readonly id: number;
    custom_id?: string;
    type?: string;
    name: string;
    street?: string;
    street2?: string;
    city?: string;
    zip?: string;
    country?: string;
    registration_no?: string;
    vat_no?: string;
    local_vat_no?: string;
    bank_account?: string;
    iban?: string;
    variable_symbol?: string;
    enabled_reminders?: boolean;
    due?: number;
    full_name?: string;
    email?: string;
    email_copy?: string;
    phone?: string;
    web?: string;
    private_note?: string;
    readonly avatar_url: string;
    readonly html_url: string;
    readonly url: string;
    readonly created_at: Date;
    readonly updated_at: Date;
};
export type Attachment = {
    file_name: string;
    content_type: string;
    download_url: string;
};
export type Invoice = {
    custom_id?: string;
    readonly id: number;
    proforma?: boolean;
    partial_proforma?: boolean;
    number?: string;
    number_format_id?: number;
    variable_symbol?: string;
    readonly your_name: string;
    readonly your_street: string;
    readonly your_street2: string;
    readonly your_city: string;
    readonly your_zip: string;
    readonly your_country: string;
    readonly your_registration_no: string;
    readonly your_vat_no: string;
    readonly your_local_vat_no: string;
    readonly client_name: string;
    readonly client_street: string;
    readonly client_street2: string;
    readonly client_city: string;
    readonly client_zip: string;
    readonly client_country: string;
    readonly client_registration_no: string;
    readonly client_vat_no: string;
    readonly client_local_vat_no: string;
    subject_id: number;
    subject_custom_id?: number;
    generator_id?: number;
    related_id?: number;
    correction?: boolean;
    correction_id?: number;
    readonly token: string;
    readonly status: string;
    order_number?: string;
    issued_on?: Date;
    taxable_fulfillment_due?: Date;
    due?: number;
    readonly due_on: Date;
    readonly sent_at: Date;
    readonly paid_at: Date;
    readonly reminder_sent_at: Date;
    readonly accepted_at: Date;
    readonly cancelled_at: Date;
    note?: string;
    footer_note?: string;
    private_note?: string;
    tags?: string[];
    bank_account_id?: number;
    bank_account?: string;
    iban?: string;
    iban_visibility?: IbanVisibility;
    swift_bic?: string;
    show_already_paid_note_in_pdf?: boolean;
    payment_method?: string;
    currency?: string;
    exchange_rate?: string;
    paypal?: boolean;
    gopay?: boolean;
    language?: string;
    transferred_tax_liability?: boolean;
    supply_code?: number;
    eu_electronic_service?: boolean;
    oss?: string;
    vat_price_mode: VatPriceMode;
    round_total?: boolean;
    readonly subtotal: number;
    readonly native_subtotal: number;
    readonly total: number;
    readonly native_total: number;
    readonly remaining_amount: number;
    readonly remaining_native_amount: number;
    readonly paid_amount: number;
    eet?: boolean;
    eet_cash_register?: string;
    eet_store?: number;
    eet_records?: any[];
    attachment?: Attachment;
    readonly html_url: string;
    readonly public_html_url: string;
    readonly url: string;
    readonly pdf_url: string;
    readonly subject_url: string;
    readonly created_at: Date;
    readonly updated_at: Date;
    lines: Partial<InvoiceLine>[];
};
export type Generator = {
    readonly id: number;
    custom_id?: string;
    name: string;
    recurring: boolean;
    proforma?: boolean;
    paypal?: boolean;
    gopay?: boolean;
    start_date: any;
    end_date?: any;
    months_period: number;
    next_occurrence_on?: any;
    due?: number;
    send_email?: boolean;
    subject_id: number;
    number_format_id?: number;
    note?: string;
    bank_account_id?: number;
    bank_account?: string;
    iban?: string;
    swift_bic?: string;
    tags?: string[];
    payment_method?: string;
    currency?: string;
    exchange_rate?: number;
    language?: string;
    vat_price_mode: VatPriceMode;
    transferred_tax_liability?: boolean;
    eu_electronic_service?: boolean;
    oss?: string;
    supply_code?: number;
    order_number?: string;
    readonly subtotal: number;
    readonly native_subtotal: number;
    readonly total: number;
    readonly native_total: number;
    readonly html_url: string;
    readonly url: string;
    readonly subject_url: string;
    readonly created_at: Date;
    readonly updated_at: Date;
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
export {};
