export const paths = {
  home: {
    path: '/',
    getHref: () => '/',
  },

  auth: {
    register: {
      path: '/auth/register',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
    login: {
      path: '/auth/login',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
  },

  app: {
    dashboard: {
      path: '/dashboard',
      getHref: () => '/dashboard',
    },
    profile: {
      path: 'profile',
      getHref: () => '/app/profile',
    },

    inventory: {
      products: {
        path: '/dashboard/products',
        getHref: () => '/dashboard/products',
      },
      createProduct: {
        path: '/dashboard/products/create',
        getHref: () => '/dashboard/products/create',
      },
      expiredProducts: {
        path: '/dashboard/products/expired',
        getHref: () => '/dashboard/products/expired',
      },
      lowStocks: {
        path: '/dashboard/products/low-stocks',
        getHref: () => '/dashboard/products/low-stocks',
      },
      categories: {
        path: '/dashboard/categories',
        getHref: () => '/dashboard/categories',
      },
      subCategories: {
        path: '/dashboard/sub-categories',
        getHref: () => '/dashboard/sub-categories',
      },
      brands: {
        path: '/dashboard/brands',
        getHref: () => '/dashboard/brands',
      },
      units: {
        path: '/dashboard/units',
        getHref: () => '/dashboard/units',
      },
      variantAttributes: {
        path: '/dashboard/variant-attributes',
        getHref: () => '/dashboard/variant-attributes',
      },
      warranties: {
        path: '/dashboard/warranties',
        getHref: () => '/dashboard/warranties',
      },
      barcode: {
        path: '/dashboard/barcode',
        getHref: () => '/dashboard/barcode',
      },
      qrCode: {
        path: '/dashboard/qr-code',
        getHref: () => '/dashboard/qr-code',
      },
    },

    stock: {
      manage: {
        path: '/dashboard/stock',
        getHref: () => '/dashboard/stock',
      },
      adjustment: {
        path: '/dashboard/stock-adjustment',
        getHref: () => '/dashboard/stock-adjustment',
      },
      transfer: {
        path: '/dashboard/stock-transfer',
        getHref: () => '/dashboard/stock-transfer',
      },
    },

    sales: {
      sales: {
        path: '/dashboard/sales',
        getHref: () => '/dashboard/sales',
      },
      invoices: {
        path: '/dashboard/invoices',
        getHref: () => '/dashboard/invoices',
      },
      salesReturn: {
        path: '/dashboard/sales-return',
        getHref: () => '/dashboard/sales-return',
      },
      quotation: {
        path: '/dashboard/quotation',
        getHref: () => '/dashboard/quotation',
      },
      pos: {
        path: '/dashboard/pos',
        getHref: () => '/dashboard/pos',
      },
    },

    promo: {
      coupons: {
        path: '/dashboard/coupons',
        getHref: () => '/dashboard/coupons',
      },
      giftCards: {
        path: '/dashboard/gift-cards',
        getHref: () => '/dashboard/gift-cards',
      },
      discounts: {
        path: '/dashboard/discounts',
        getHref: () => '/dashboard/discounts',
      },
    },

    purchases: {
      purchases: {
        path: '/dashboard/purchases',
        getHref: () => '/dashboard/purchases',
      },
      purchaseOrder: {
        path: '/dashboard/purchase-order',
        getHref: () => '/dashboard/purchase-order',
      },
      purchaseReturn: {
        path: '/dashboard/purchase-return',
        getHref: () => '/dashboard/purchase-return',
      },
    },

    finance: {
      expenses: {
        path: '/dashboard/expenses',
        getHref: () => '/dashboard/expenses',
      },
      income: {
        path: '/dashboard/income',
        getHref: () => '/dashboard/income',
      },
      bankAccounts: {
        path: '/dashboard/bank-accounts',
        getHref: () => '/dashboard/bank-accounts',
      },
      moneyTransfer: {
        path: '/dashboard/money-transfer',
        getHref: () => '/dashboard/money-transfer',
      },
      balanceSheet: {
        path: '/dashboard/balance-sheet',
        getHref: () => '/dashboard/balance-sheet',
      },
      trialBalance: {
        path: '/dashboard/trial-balance',
        getHref: () => '/dashboard/trial-balance',
      },
      cashFlow: {
        path: '/dashboard/cash-flow',
        getHref: () => '/dashboard/cash-flow',
      },
      accountStatement: {
        path: '/dashboard/account-statement',
        getHref: () => '/dashboard/account-statement',
      },
    },

    peoples: {
      customers: {
        path: '/dashboard/customers',
        getHref: () => '/dashboard/customers',
      },
      billers: {
        path: '/dashboard/billers',
        getHref: () => '/dashboard/billers',
      },
      suppliers: {
        path: '/dashboard/suppliers',
        getHref: () => '/dashboard/suppliers',
      },
      stores: {
        path: '/dashboard/stores',
        getHref: () => '/dashboard/stores',
      },
      warehouses: {
        path: '/dashboard/warehouses',
        getHref: () => '/dashboard/warehouses',
      },
    },

    hrm: {
      employees: {
        path: '/dashboard/employees',
        getHref: () => '/dashboard/employees',
      },
      departments: {
        path: '/dashboard/departments',
        getHref: () => '/dashboard/departments',
      },
      designation: {
        path: '/dashboard/designation',
        getHref: () => '/dashboard/designation',
      },
      shifts: {
        path: '/dashboard/shifts',
        getHref: () => '/dashboard/shifts',
      },
      attendance: {
        path: '/dashboard/attendance',
        getHref: () => '/dashboard/attendance',
      },
      leaves: {
        path: '/dashboard/leaves',
        getHref: () => '/dashboard/leaves',
      },
      holidays: {
        path: '/dashboard/holidays',
        getHref: () => '/dashboard/holidays',
      },
      payroll: {
        path: '/dashboard/payroll',
        getHref: () => '/dashboard/payroll',
      },
    },

    userManagement: {
      users: {
        path: '/dashboard/users',
        getHref: () => '/dashboard/users',
      },
      roles: {
        path: '/dashboard/roles',
        getHref: () => '/dashboard/roles',
      },
      deleteRequests: {
        path: '/dashboard/delete-requests',
        getHref: () => '/dashboard/delete-requests',
      },
    },
  },
} as const;
