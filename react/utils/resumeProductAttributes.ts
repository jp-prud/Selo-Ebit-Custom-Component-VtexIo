import { ProductProps } from "../components/SeloEbit/seloEbit.types";

export default function resumeProductAttributes(array: ProductProps[], attributeName: string) {
  return array.reduce((acc: string, item: any, index: number) => {
    const currentValue = item[attributeName].toUpperCase();

    return (acc += index > 0 ? `|${currentValue}` : currentValue);
  }, "");
}
