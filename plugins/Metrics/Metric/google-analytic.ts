import { Metric } from "@/plugins/Metrics/Metric/index";
import { GoogleAnalyticsEvents } from "~/types/plugins/metric.types";

export class GoogleAnalytics implements Metric {
  events: GoogleAnalyticsEvents | null = null;

  loadVendor = () => {
    this.events = {
      addProduct: () => console.log('ProductAdded - GA'),
      pageView: () => console.log('PageViewed - GA'),
      productDetail: () => console.log('Google ok')
    }
  };
}
