import { Address } from "@ton/ton";

export const validateAddress = (addressString: string) => {
  try {
    Address.parse(addressString);
    return true;
  } catch (error) {
    return false;
  }
};
