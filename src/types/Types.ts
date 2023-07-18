export type CategoryProps = {
  id: number;
  product_section_name: string;
};

export type ProductProps = {
  id: number;
  product_name: string;
  product_description: string;
  product_price: number;
  product_image: string;
  product_category: string;
};

export type CartProps = {
  cart_id: string;
  cart_quantity: string;
  created_at: string;
  product_activated: boolean;
  product_category: string;
  product_description: string;
  product_image: string;
  product_name: string;
  product_price: number;
  product_quantity: string;
  product_section: string;
  seller_id: string;
  shopper_id: string;
  total_cost: string;
};

export type ProductDetailsProps = {
  product_category: string;
  product_description: string;
  product_image: string;
  product_name: string;
  product_price: number;
  product_section: string;
  id: string;
};

export type UserProps = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  company_name: string;
  country: string;
  contact: string;
  business_category: string;
  activated: boolean;
  created_at: string;
};
