import { ProductProps } from "../components/SeloEbit/seloEbit.types";
import resumeProductAttributes from "./resumeProductAttributes";

export default function getOrderSpecifications(order: any, storeId: number) {
  const { value, items, paymentData, deliveryParcels, sellers } = order;

  const { address, seller: deliveryType } = deliveryParcels[0];

  const { transactionId, payments } = paymentData.transactions[0];
  const { postalCode, price: deliveryTax } = address;
  const { installments: parcels } = payments[0];
  const { id: sellerId, name: sellerName } = sellers[0];

  const resumedProductsName = resumeProductAttributes(items, "name");
  const resumedProductsSKUName = resumeProductAttributes(items, "skuName");
  const resumedProductsQuantity = items.reduce(
    (acc: number, item: ProductProps) => (acc += item.quantity),
    0
  );

  let totalSpent = value.toString();
  const cents = totalSpent.slice(-2);

  totalSpent = totalSpent.slice(0, -2).concat(".", cents);

  const zipCode = postalCode.replace("-", "");

  const mktSaleId = sellerId ? sellerName : 0;

  return `storeId=${storeId}&transactionId=${transactionId}&platform=1&zipCode=${zipCode}&parcels=${parcels}&deliveryTax=${deliveryTax}&deliveryTime=${1}&totalSpent=${totalSpent}&value=${value}&quantity=${resumedProductsQuantity}&productName=${resumedProductsName}&paymentType=paymentType&sku=${resumedProductsSKUName}&productCondition=0&deliveryType=${deliveryType}&mktSaleId=mktSaleId=${mktSaleId}&l5=''&man=''&brd=''&brds=''`;
}
