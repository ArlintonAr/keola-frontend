export interface ResponseMemberships {
  status:      number;
  description: string;
  objModel:    ObjModel;
}

export interface ObjModel {
  suscriptions:              Suscription[];
  totalScoreActivoCompuesto: number;
  totalScoreActivoResidual:  number;
  stateUsuario:              number;
  stateNameUsuario:          Stat;
}

export enum Stat {
  Activo = "Activo",
  InactivoLiquidación = "Inactivo - Liquidación",
  InactivoPreLiquidación = "Inactivo - Pre - Liquidación",
  InactivoSuscripciónFinalizada = "Inactivo - Suscripción Finalizada",
}

export interface Suscription {
  id:                       number;
  idUser:                   number;
  package:                  Package;
  packageDetailResponse:    PackageDetailResponse;
  creationDate:             Date;
  observation:              null | string;
  status:                   number;
  discountPriceUpgrade:     number;
  payment:                  null;
  statusName:               Stat;
  schedule:                 null;
  datePendingFee:           null;
  pendingFee:               number;
  descriptionPendingFee:    null;
  lastDatePaidFee:          null;
  quotaDescription:         string;
  scoreActiveCompuesto:     number;
  scoreActiveResidual:      number;
  nextExpiration:           null;
  allowGracePeriod:         boolean;
  countSuscriptionByFamily: number;
  typeShares:               TypeShares;
  codeComany:               CodeComany;
  beneficiaries:            string;
  numberGuests:             number;
}

export enum CodeComany {
  Empty = "-",
  Kn = "KN",
  Rrcr = "RRCR",
}

export interface Package {
  id:                 number;
  name:               string;
  codeMembership:     string;
  description:        string;
  idFamilyPackage:    number;
  estatus:            number;
  legalDocuments:     null;
  listPackageDetails: null;
}

export interface PackageDetailResponse {
  numberSharesLetters:         string;
  idPackageDetail:             number;
  price:                       number;
  numberQuotas:                number;
  initialPrice:                number;
  quotaPrice:                  number;
  priceLetters:                string;
  namePackage:                 string;
  nameFamilyPackage:           string;
  familyPackageId:             number;
  membershipVersionId:         number;
  numberShares:                number;
  membershipmaintenance:       number;
  membershipmaintenanceletter: Membershipmaintenanceletter;
  volume:                      number;
  desiredAmount:               number;
  desiredAmountletter:         DesiredAmountletter;
}

export enum DesiredAmountletter {
  CienMilDolaresCon00100Usd = " CIEN MIL DOLARES CON 00/100 USD",
  Empty = "",
}

export enum Membershipmaintenanceletter {
  CeroDolaresCon00100Usd = "CERO DOLARES CON 00/100 USD",
  CientoNoventaYNueveDolaresCon00100Usd = "CIENTO NOVENTA Y NUEVE DOLARES CON 00/100 USD",
}

export enum TypeShares {
  B = "B",
  C = "C",
  Empty = "-",
}
