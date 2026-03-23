export interface IDashboardOverviewResponse {
  metadata: IMetadata;
  alerts: IAlert[];
  kpis: IKpis;
  charts: ICharts;
  tables: ITables;
  inventorySummary: IInventorySummary;
}

interface IMetadata {
  user: string;
  serverTime: string;
  currency: string;
}

interface IAlert {
  type: string;
  message: string;
  actionLink?: string;
}

interface IKpis {
  totalSales: ITotalSales;
  totalSalesReturn: ITotalSalesReturn;
  totalPurchase: ITotalPurchase;
  profit: IProfit;
  invoiceDue: IInvoiceDue;
}

interface ITotalSales {
  value: number;
  trend: number;
  status: string;
}

interface ITotalSalesReturn {
  value: number;
  trend: number;
  status: string;
}

interface ITotalPurchase {
  value: number;
  trend: number;
  status: string;
}

interface IProfit {
  value: number;
  trend: number;
  description: string;
}

interface IInvoiceDue {
  value: number;
  trend: number;
  description: string;
}

interface ICharts {
  salesAndPurchase: ISalesAndPurchase;
  customerOverview: ICustomerOverview;
}

interface ISalesAndPurchase {
  labels: string[];
  datasets: IDataset[];
}

interface IDataset {
  label: string;
  data: number[];
}

interface ICustomerOverview {
  firstTime: number;
  returning: number;
}

interface ITables {
  topSellingProducts: ITopSellingProduct[];
  recentTransactions: IRecentTransaction[];
}

interface ITopSellingProduct {
  id: string;
  name: string;
  price: number;
  salesCount: string;
  growth: number;
  category: string;
}

interface IRecentTransaction {
  id: string;
  date: string;
  customer: string;
  status: string;
  total: number;
}

interface IInventorySummary {
  totalCategories: number;
  totalProducts: number;
  suppliers: number;
  customers: number;
}
