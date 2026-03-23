import type { TIconName } from '@/components/ui/Icon/icon.types';

type IDashboardSidebarNavItem = {
  title: string;
  href?: string;
  icon?: TIconName;
  children?: IDashboardSidebarNavItem[];
};

type IDashboardNavGroup = {
  title?: string;
  children: IDashboardSidebarNavItem[];
};

export const dashboardNavItems: IDashboardNavGroup[] = [
  {
    title: 'Main',
    children: [
      {
        title: 'Dashboard',
        href: '/dashboard',
        icon: 'layoutDashboard',
      },
    ],
  },

  {
    title: 'Inventory',
    children: [
      { title: 'Products', href: '/products', icon: 'package' },
      { title: 'Create Product', href: '/products/create', icon: 'createProduct' },
      { title: 'Expired Products', href: '/products/expired', icon: 'expired' },
      { title: 'Low Stocks', href: '/products/low-stocks', icon: 'lowStock' },
      { title: 'Category', href: '/categories', icon: 'category' },
      { title: 'Sub Category', href: '/sub-categories', icon: 'subCategory' },
      { title: 'Brands', href: '/brands', icon: 'brands' },
      { title: 'Units', href: '/units', icon: 'units' },
      { title: 'Variant Attributes', href: '/variant-attributes', icon: 'variantAttributes' },
      { title: 'Warranties', href: '/warranties', icon: 'warranties' },
      { title: 'Print Barcode', href: '/barcode', icon: 'printBarcode' },
      { title: 'Print QR Code', href: '/qr-code', icon: 'printQrCode' },
    ],
  },

  {
    title: 'Stock',
    children: [
      { title: 'Manage Stock', href: '/stock', icon: 'boxes' },
      { title: 'Stock Adjustment', href: '/stock-adjustment', icon: 'stockAdjustment' },
      { title: 'Stock Transfer', href: '/stock-transfer', icon: 'stockTransfer' },
    ],
  },

  {
    title: 'Sales',
    children: [
      {
        title: 'Sales',
        href: '/sales',
        icon: 'shoppingCart',
      },
      {
        title: 'Invoices',
        href: '/invoices',
        icon: 'fileText',
      },
      {
        title: 'Sales Return',
        href: '/sales-return',
        icon: 'receipt',
      },
      {
        title: 'Quotation',
        href: '/quotation',
        icon: 'fileText',
      },
      {
        title: 'POS',
        href: '/pos',
        icon: 'shoppingBag',
      },
    ],
  },

  {
    title: 'Promo',
    children: [
      { title: 'Coupons', href: '/coupons', icon: 'coupons' },
      { title: 'Gift Card', href: '/gift-cards', icon: 'giftCard' },
      { title: 'Discount', href: '/discounts', icon: 'percent' },
    ],
  },

  {
    title: 'Purchases',
    children: [
      {
        title: 'Purchases',
        href: '/purchases',
        icon: 'shoppingBag',
      },
      {
        title: 'Purchase Order',
        href: '/purchase-order',
        icon: 'purchaseOrder',
      },
      {
        title: 'Purchase Return',
        href: '/purchase-return',
        icon: 'purchaseReturn',
      },
    ],
  },

  {
    title: 'Finance & Accounts',
    children: [
      { title: 'Expenses', href: '/expenses', icon: 'creditCard' },
      { title: 'Income', href: '/income', icon: 'income' },
      { title: 'Bank Accounts', href: '/bank-accounts', icon: 'bankAccount' },
      { title: 'Money Transfer', href: '/money-transfer', icon: 'moneyTransfer' },
      { title: 'Balance Sheet', href: '/balance-sheet', icon: 'balanceSheet' },
      { title: 'Trial Balance', href: '/trial-balance', icon: 'trialBalance' },
      { title: 'Cash Flow', href: '/cash-flow', icon: 'cashFlow' },
      { title: 'Account Statement', href: '/account-statement', icon: 'accountStatement' },
    ],
  },

  {
    title: 'Peoples',
    children: [
      { title: 'Customers', href: '/customers', icon: 'users' },
      { title: 'Billers', href: '/billers', icon: 'billers' },
      { title: 'Suppliers', href: '/suppliers', icon: 'suppliers' },
      { title: 'Stores', href: '/stores', icon: 'store' },
      { title: 'Warehouses', href: '/warehouses', icon: 'warehouse' },
    ],
  },

  {
    title: 'HRM',
    children: [
      { title: 'Employees', href: '/employees', icon: 'user' },
      { title: 'Departments', href: '/departments', icon: 'departments' },
      { title: 'Designation', href: '/designation', icon: 'designation' },
      { title: 'Shifts', href: '/shifts', icon: 'shifts' },
      { title: 'Attendance', href: '/attendance', icon: 'attendance' },
      { title: 'Leaves', href: '/leaves', icon: 'leaves' },
      { title: 'Holidays', href: '/holidays', icon: 'holidays' },
      { title: 'Payroll', href: '/payroll', icon: 'payroll' },
    ],
  },

  {
    title: 'User Management',
    children: [
      { title: 'Users', href: '/users', icon: 'users' },
      { title: 'Roles & Permissions', href: '/roles', icon: 'rolesPermissions' },
      { title: 'Delete Account Request', href: '/delete-requests', icon: 'deleteRequest' },
    ],
  },
];
