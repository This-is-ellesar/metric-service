import {Product} from "~/types/components/product.types";

export interface MetricInterface {
  events: unknown | null;
  loadVendor: () => void;
}
export interface GoogleAnalyticsEvents {
  addProduct: (id: number) => void
  pageView: () => void;
  productDetail: (product: Product) => void;
}

export interface YandexMetricsEvents {
  addProduct: (id: number) => void
  pageView: () => void;
  productDetail: (product: Product & {categoryId: number | null}) => void;
}