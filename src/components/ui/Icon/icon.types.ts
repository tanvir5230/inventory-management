import type { LucideProps } from 'lucide-react';
import type { ComponentType } from 'react';

export interface IconProps extends LucideProps {
  name: TIconName;
}

export type TIcon = ComponentType<IconProps>;

export const IconName = {
  // ===== Navigation =====
  home: 'home',
  menu: 'menu',
  moreHorizontal: 'moreHorizontal',
  moreVertical: 'moreVertical',
  arrowLeft: 'arrowLeft',
  arrowRight: 'arrowRight',
  arrowUp: 'arrowUp',
  arrowDown: 'arrowDown',
  chevronDown: 'chevronDown',
  chevronUp: 'chevronUp',
  chevronRight: 'chevronRight',
  chevronLeft: 'chevronLeft',

  // ===== Actions =====
  search: 'search',
  close: 'close',
  plus: 'plus',
  circlePlus: 'circlePlus',
  minus: 'minus',
  check: 'check',
  edit: 'edit',
  trash: 'trash',
  download: 'download',
  upload: 'upload',
  refresh: 'refresh',
  command: 'command',
  maximize: 'maximize',

  // ===== UI / Status =====
  info: 'info',
  warning: 'warning',
  error: 'error',
  success: 'success',
  loader: 'loader',

  // ===== Media =====
  play: 'play',
  pause: 'pause',
  stop: 'stop',
  volume: 'volume',

  // ===== User =====
  user: 'user',
  users: 'users',
  settings: 'settings',
  logOut: 'logOut',

  // ===== Files =====
  file: 'file',
  folder: 'folder',
  fileText: 'fileText',

  // ===== Misc =====
  calendar: 'calendar',
  clock: 'clock',
  bell: 'bell',
  star: 'star',
  heart: 'heart',
  laptop: 'laptop',
  layers: 'layers',
  chartPie: 'chartPie',

  // ===== Sidebar =====
  layoutDashboard: 'layoutDashboard',
  shieldCheck: 'shieldCheck',
  package: 'package',
  createProduct: 'createProduct',
  expired: 'expired',
  lowStock: 'lowStock',
  category: 'category',
  subCategory: 'subCategory',
  brands: 'brands',
  units: 'units',
  variantAttributes: 'variantAttributes',
  warranties: 'warranties',
  printBarcode: 'printBarcode',
  printQrCode: 'printQrCode',
  tags: 'tags',
  barcode: 'barcode',
  boxes: 'boxes',
  shoppingCart: 'shoppingCart',
  receipt: 'receipt',
  shoppingBag: 'shoppingBag',
  percent: 'percent',
  creditCard: 'creditCard',
  store: 'store',
  warehouse: 'warehouse',
  barChart: 'barChart',

  // ===== Stock =====
  stockAdjustment: 'stockAdjustment',
  stockTransfer: 'stockTransfer',

  // ===== Promo =====
  coupons: 'coupons',
  giftCard: 'giftCard',

  // ===== Purchases =====
  purchaseOrder: 'purchaseOrder',
  purchaseReturn: 'purchaseReturn',

  // ===== Finance =====
  income: 'income',
  bankAccount: 'bankAccount',
  moneyTransfer: 'moneyTransfer',
  balanceSheet: 'balanceSheet',
  trialBalance: 'trialBalance',
  cashFlow: 'cashFlow',
  accountStatement: 'accountStatement',

  // ===== Peoples =====
  billers: 'billers',
  suppliers: 'suppliers',

  // ===== HRM =====
  departments: 'departments',
  designation: 'designation',
  shifts: 'shifts',
  attendance: 'attendance',
  leaves: 'leaves',
  holidays: 'holidays',
  payroll: 'payroll',

  // ===== User Management =====
  rolesPermissions: 'rolesPermissions',
  deleteRequest: 'deleteRequest',

  // ===== Custom =====
  circle: 'circle',

  // ===== Fallback =====
  default: 'default',
} as const;

export type TIconName = keyof typeof IconName;
