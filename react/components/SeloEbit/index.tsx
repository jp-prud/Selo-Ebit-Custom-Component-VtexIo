import React, { FC } from "react";
import { OrderGroupContext } from "vtex.order-placed";

import { ProductProps } from "./seloEbit.types";

import styles from "./styles.module.css";

const SeloEbit: FC = () => {
  const { useOrderGroup } = OrderGroupContext;

  const orderGroup = useOrderGroup();

  const order = orderGroup?.orders[0];
  const { value, items, clientProfileData, paymentData, deliveryParcels } =
    orderGroup?.orders[0];

  const { address, seller } = deliveryParcels[0];

  const { transactionId, payments } = paymentData.transactions[0];
  const { firstName } = clientProfileData;
  const { postalCode: zipCode, price: deliveryTax } = address;
  const { installments: parcels } = payments[0];

  const resumeItems = items.map(
    ({ name, skuName, price, quantity }: ProductProps) => ({
      name,
      skuName,
      price,
      quantity,
    })
  );

  // const deliveryTime = Number(shippingEstimate.replace(/\D/g, ''))

  console.log({
    firstName,
    transactionId,
    parcels,
    zipCode,
    deliveryTax,
    seller,
    value,
    resumeItems,
  });

  console.log(order);

  return (
    <div className={styles.bannerEbitContainer}>
      <param
        id="ebitParam"
        value={`storeId=76732&transactionId=${transactionId}&platform=1&zipCode=${zipCode}&parcels=${parcels}&deliveryTax=${deliveryTax}&deliveryTime=${1} &totalSpent=${value.toFixed(
          2
        )}&value=${value}&quantity=1 &productName=productName&paymentType=paymentType&sku=sku &productCondition=0&deliveryType=deliveryType&mktSaleId= mktSaleId='LojaBuettner'&l5=''&man=''&brd=''&brds=''`}
      />

      <a id="bannerEbit"></a>
    </div>
  );
};

export default SeloEbit;
