import { MetricEvents } from "~/plugins/Metrics/metric-events";

export default defineNuxtPlugin(() => {
  const metricEvents: MetricEvents = new MetricEvents()

  return {
    provide: {
      metricEvents,
    }
  }
});
