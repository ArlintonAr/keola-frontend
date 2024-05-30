export interface ResponseSchedule {
  status:      number;
  description: string;
  objModel:    ObjModel[];
}

export interface ObjModel {
  idPayment:              number;
  quoteDescription:       string;
  nextExpiration:         Date;
  dollarExchange:         number;
  quoteUsd:               number;
  quote:                  number;
  amortization:           number;
  capitalBalance:         number;
  porcentaje:             number;
  interested:             number;
  verif:                  number;
  obs:                    string;
  isQuoteInitial:         number;
  payDate:                Date | null;
  pts:                    number;
  numberQuotePay:         number;
  idSuscription:          number;
  positionOnSchedule:     number;
  amortizationUsd:        number;
  capitalbalanceUsd:      number;
  percentOverdueDetailId: null;
  verifText:              VerifText;
  totalPay:               number;
  totalOverdue:           number;
  daysOverdue:            number;
  paymentVouchers:        PaymentVoucher[];
}

export interface PaymentVoucher {
  idPaymentVoucher:       number;
  paymentId:              number;
  suscriptionId:          number;
  operationNumber:        string;
  companyOperationNumber: null;
  methodSubTipoPagoId:    number;
  note:                   string;
  paymentCoinCurrencyId:  number;
  subTotalAmount:         number;
  comissionSubTipoPago:   number;
  totalAmount:            number;
  creationDate:           Date;
  nameMethodTipoPago:     string;
  nameMethodSubTipoPago:  string;
  idRefeferenciaClass:    number;
  base64:                 string;
  namePicture:            string;
  pathPicture:            null;
  statusSave:             boolean;
}

export enum VerifText {
  Activo = "Activo",
  Inactivo = "Inactivo",
}
