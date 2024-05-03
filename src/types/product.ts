import { Translation } from "./global";

export interface ProductTranslation extends Translation {
  description: string;
  title: string;
}

export interface IProduct {
  id: number;
  age_limit: number;
  uuid: string;
  shop_id: number;
  category_id: number;
  keywords: string;
  brand_id: number;
  qr_code: string | null;
  digital: boolean;
  active: boolean;
  img: string;
  created_at: string;
  updated_at: string;
  r_count?: number;
  visibility: boolean;
  status: string;
  r_avg?: number;
  min_qty: number;
  max_qty: number;
  min_price: number;
  max_price: number;
  bar_code: string;
  translation: ProductTranslation;
  interval?: number;
  o_count?: number;
}
