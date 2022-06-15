import React, { FC, useEffect } from "react";
import { OrderGroupContext } from "vtex.order-placed";
import getOrderSpecifications from "../../utils/getOrderSpecifications";

import styles from "./styles.module.css";

const SeloEbit: FC = () => {
  const { useOrderGroup } = OrderGroupContext;
  const orderGroup = useOrderGroup();
  const order = orderGroup?.orders[0];

  const storeId = 76732;

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "getSelo";
    script.src = `https://imgs.ebit.com.br/ebitBR/selo-ebit/js/getSelo.js?${storeId}`;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const specificationOrderData = getOrderSpecifications(order, 76732);

  return (
    <div className={styles.bannerEbitContainer}>
      <param id="ebitParam" value={specificationOrderData} />

      <a id="bannerEbit"></a>
    </div>
  );
};

export default SeloEbit;
