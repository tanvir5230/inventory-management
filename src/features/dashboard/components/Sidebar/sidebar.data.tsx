import { paths } from '@/app/Router/paths';
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

const { app } = paths;

export const dashboardNavItems: IDashboardNavGroup[] = [
  {
    title: 'Main',
    children: [
      {
        title: 'Dashboard',
        href: app.dashboard.path,
        icon: 'layoutDashboard',
      },
    ],
  },

  {
    title: 'Inventory',
    children: [
      { title: 'Products', href: app.inventory.products.path, icon: 'package' },
      { title: 'Create Product', href: app.inventory.createProduct.path, icon: 'createProduct' },
      { title: 'Expired Products', href: app.inventory.expiredProducts.path, icon: 'expired' },
      { title: 'Low Stocks', href: app.inventory.lowStocks.path, icon: 'lowStock' },
      { title: 'Category', href: app.inventory.categories.path, icon: 'category' },
      { title: 'Sub Category', href: app.inventory.subCategories.path, icon: 'subCategory' },
      { title: 'Brands', href: app.inventory.brands.path, icon: 'brands' },
      { title: 'Units', href: app.inventory.units.path, icon: 'units' },
      {
        title: 'Variant Attributes',
        href: app.inventory.variantAttributes.path,
        icon: 'variantAttributes',
      },
      { title: 'Warranties', href: app.inventory.warranties.path, icon: 'warranties' },
      { title: 'Print Barcode', href: app.inventory.barcode.path, icon: 'printBarcode' },
      { title: 'Print QR Code', href: app.inventory.qrCode.path, icon: 'printQrCode' },
    ],
  },

  {
    title: 'Stock',
    children: [
      { title: 'Manage Stock', href: app.stock.manage.path, icon: 'boxes' },
      { title: 'Stock Adjustment', href: app.stock.adjustment.path, icon: 'stockAdjustment' },
      { title: 'Stock Transfer', href: app.stock.transfer.path, icon: 'stockTransfer' },
    ],
  },

  {
    title: 'Sales',
    children: [
      { title: 'Sales', href: app.sales.sales.path, icon: 'shoppingCart' },
      { title: 'Invoices', href: app.sales.invoices.path, icon: 'fileText' },
      { title: 'Sales Return', href: app.sales.salesReturn.path, icon: 'receipt' },
      { title: 'Quotation', href: app.sales.quotation.path, icon: 'fileText' },
      { title: 'POS', href: app.sales.pos.path, icon: 'shoppingBag' },
    ],
  },

  {
    title: 'Promo',
    children: [
      { title: 'Coupons', href: app.promo.coupons.path, icon: 'coupons' },
      { title: 'Gift Card', href: app.promo.giftCards.path, icon: 'giftCard' },
      { title: 'Discount', href: app.promo.discounts.path, icon: 'percent' },
    ],
  },

  {
    title: 'Purchases',
    children: [
      { title: 'Purchases', href: app.purchases.purchases.path, icon: 'shoppingBag' },
      { title: 'Purchase Order', href: app.purchases.purchaseOrder.path, icon: 'purchaseOrder' },
      { title: 'Purchase Return', href: app.purchases.purchaseReturn.path, icon: 'purchaseReturn' },
    ],
  },

  {
    title: 'Finance & Accounts',
    children: [
      { title: 'Expenses', href: app.finance.expenses.path, icon: 'creditCard' },
      { title: 'Income', href: app.finance.income.path, icon: 'income' },
      { title: 'Bank Accounts', href: app.finance.bankAccounts.path, icon: 'bankAccount' },
      { title: 'Money Transfer', href: app.finance.moneyTransfer.path, icon: 'moneyTransfer' },
      { title: 'Balance Sheet', href: app.finance.balanceSheet.path, icon: 'balanceSheet' },
      { title: 'Trial Balance', href: app.finance.trialBalance.path, icon: 'trialBalance' },
      { title: 'Cash Flow', href: app.finance.cashFlow.path, icon: 'cashFlow' },
      {
        title: 'Account Statement',
        href: app.finance.accountStatement.path,
        icon: 'accountStatement',
      },
    ],
  },

  {
    title: 'Peoples',
    children: [
      { title: 'Customers', href: app.peoples.customers.path, icon: 'users' },
      { title: 'Billers', href: app.peoples.billers.path, icon: 'billers' },
      { title: 'Suppliers', href: app.peoples.suppliers.path, icon: 'suppliers' },
      { title: 'Stores', href: app.peoples.stores.path, icon: 'store' },
      { title: 'Warehouses', href: app.peoples.warehouses.path, icon: 'warehouse' },
    ],
  },

  {
    title: 'HRM',
    children: [
      { title: 'Employees', href: app.hrm.employees.path, icon: 'user' },
      { title: 'Departments', href: app.hrm.departments.path, icon: 'departments' },
      { title: 'Designation', href: app.hrm.designation.path, icon: 'designation' },
      { title: 'Shifts', href: app.hrm.shifts.path, icon: 'shifts' },
      { title: 'Attendance', href: app.hrm.attendance.path, icon: 'attendance' },
      { title: 'Leaves', href: app.hrm.leaves.path, icon: 'leaves' },
      { title: 'Holidays', href: app.hrm.holidays.path, icon: 'holidays' },
      { title: 'Payroll', href: app.hrm.payroll.path, icon: 'payroll' },
    ],
  },

  {
    title: 'User Management',
    children: [
      { title: 'Users', href: app.userManagement.users.path, icon: 'users' },
      {
        title: 'Roles & Permissions',
        href: app.userManagement.roles.path,
        icon: 'rolesPermissions',
      },
      {
        title: 'Delete Account Request',
        href: app.userManagement.deleteRequests.path,
        icon: 'deleteRequest',
      },
    ],
  },
];
