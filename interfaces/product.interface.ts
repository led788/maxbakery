export interface iProduct {
    id: number;
    tags?: (null)[] | null;
    images?: (ImagesEntity)[] | null;
    flags?: (null)[] | null;
    name: string;
    vendor_code: string;
    slug: string;
    price: number;
    sale_price: number;
    no_discount: boolean;
    description: string;
    active: boolean;
    sort: number;
    obtaining_method: string;
    calories: number;
    protein: number;
    fat: number;
    carbohydrates: number;
    ingredients: string;
    weight: string;
    updated: string;
    category: number;
    unit?: null;
  }
  export interface ImagesEntity {
    image: string;
  }
  