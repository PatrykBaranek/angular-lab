interface Address {
  name: string;
  city: string;
  street: string;
  postalCode: string;
  nip?: string;
  bankAccountNumber?: string;
}

interface InvoiceItem {
  name: string;
  quantity: number;
  unit: string;
  netPrice: number;
  vatRate: 'zw' | '0%' | '5%' | '8%' | '23%';
  netValue: number;
  grossValue: number;
}

export interface Invoice {
  issuer: Address;
  customer: Address;
  invoiceNumber: string;
  issueDate: Date;
  saleDate: Date;
  paymentDueDate: Date;
  paymentMethod: 'cash' | 'transfer' | 'card';
  invoiceItems: InvoiceItem[];
}
