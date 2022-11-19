import { Metric } from "@/plugins/Metrics/Metric/index";
import { YandexMetricsEvents } from "~/types/plugins/metric.types";

export class YandexMetrics implements Metric {
  events: YandexMetricsEvents | null = null;

  loadVendor = () => {
    this.events = {
      addProduct: (id) => console.log(`Product with ${id} added`),
      pageView: () => console.log('PageViewed - YA'),
      productDetail: (product) => console.log(`This product viewed: ${product.title}`)
    }
  }
}