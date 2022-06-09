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

  const { address } = deliveryParcels[0];

  const { transactionId, payments } = paymentData.transactions[0];
  const { firstName } = clientProfileData;
  const { postalCode: zipCode } = address;
  const { installments: parcel } = payments[0];

  const resumeItems = items.map(
    ({ name, skuName, price, quantity }: ProductProps) => ({
      name,
      skuName,
      price,
      quantity,
    })
  );

  console.log({
    firstName,
    transactionId,
    parcel,
    zipCode,
    value,
    resumeItems,
  });

  console.log(order);

  return <div className={styles.bannerEbitContainer} />;
};

export default SeloEbit;
