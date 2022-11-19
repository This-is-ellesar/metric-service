import { GoogleAnalytics } from "~/plugins/Metrics/Metric/google-analytic";
import { YandexMetrics } from "~/plugins/Metrics/Metric/yandex-metrics";
import { GoogleAnalyticsEvents, YandexMetricsEvents } from "~/types/plugins/metric.types";
import { Product } from "~/types/components/product.types";

export class MetricEvents {
  private googleEvents: GoogleAnalyticsEvents | null = null;
  private yandexEvents: YandexMetricsEvents | null = null;

  constructor() {
    const googleAnalytics = new GoogleAnalytics()
    const yandexMetrics = new YandexMetrics()

    googleAnalytics.loadVendor()
    yandexMetrics.loadVendor()

    this.googleEvents = googleAnalytics.events
    this.yandexEvents = yandexMetrics.events
  }

  addProduct(id: number) {
    this.googleEvents?.addProduct(id)
    this.yandexEvents?.addProduct(id)
  }

  productDetail(product: Product, categoryId: number | null = null) {
    this.googleEvents?.productDetail(product)
    this.yandexEvents?.productDetail({ ...product, categoryId})
  }

  pageView() {
    this.googleEvents?.pageView()
    this.yandexEvents?.pageView()
  }
}
