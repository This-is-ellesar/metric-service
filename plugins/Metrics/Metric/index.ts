import { MetricInterface } from "../../../types/plugins/metric.types";

export abstract class Metric implements MetricInterface {
  events: unknown = null;

  abstract loadVendor: () => void;
}
