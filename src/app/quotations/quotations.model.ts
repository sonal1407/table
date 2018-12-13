/**
 * @author Sonal Prajapati
*  @prop id: it return  number type value
*  @prop customerId it return number type value
 * @prop expiryDate it return string type value
 * @prop issueDate it return string type value
 * @prop quotationNumber return number type value
 * @prop itemDescription return string type value
 * @prop uom retun number type value
 * @prop untilPrice return number type value
 * @prop qty return number type value
 * @prop grandTotal it return number type value
 * @prop cgst  it return number type value
 * @prop sgst it return number type value
 */

export class Quotation {
    id: number;
    customerId: number;
    expiryDate: string;
    issueDate: string;
    quotationNumber: number;
    itemDescription: string;
    uom: number;
    unitPrice: number;
    qty: number;
    grandTotal: number;
    discount: number;
    cgst: number;
    sgst: number;
}
