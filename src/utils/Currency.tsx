interface IProps {
  price: number;
  currency?: "NGN" | "USD";
}

const Currency: React.FC<IProps> = ({ price, currency }) => {
  return (
    <>
      {Intl.NumberFormat(currency === "NGN" ? "en-NG" : "en-US", {
        style: "currency",
        currency: currency ? currency : "NGN",
      }).format(price)}
    </>
  );
};

export default Currency;
