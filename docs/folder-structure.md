# How the folders and files are organized

## Feature-Based Folder Structure

Instead of spreading a feature’s code across multiple top-level folders, group everything related to that feature in a single directory.

### Example: `orders` Feature

Rather than organizing files like this:

- `src/hooks/orders/useOrder.ts`
- `src/types/orders.ts`
- `src/stores/ordersStore.ts`

Structure them like this:

- `features/orders/hooks/useOrder.ts`
- `features/orders/types.ts`
- `features/orders/store.ts`

### Benefits

- Keeps all related code in one place  
- Improves maintainability and readability & navigation to the codebase

## app

- app directory holds the layouts, global pages (non-feature specific), App component, routers

## components

- components here have NO business logic, NO API calls, NO auth checks. 
- They receive props and render UI. If a component needs useAuth() or calls an API, it belongs in features/ instead.
- `ui/` — primitives: Button, Input, Modal, Badge
- `layout/` — structural shells: Sidebar, Navbar, PageHeader
- `feedback/` — Loading, Toast, ErrorBoundary

## hook/ - app wide hooks

Here app-wide hooks are placed. Feature level hooks shouldn't stay here.

## lib/ — third-party configuration

- Thin wrappers and config for external libraries: `lib/sentry.ts`, `lib/analytics.ts`, `lib/i18n.ts`
- Isolates third-party APIs with a wrapper. So, swapping a vendor is a one-file change
- Never import from Sentry/Analytics/i18n directly in components — always go through `lib/`

## context/ — React contexts

- `AuthProvider, ThemeProvider`. Each file exports the context, its provider, and is paired with a hook in hooks/. 
- Keep contexts lean — they hold the value and the setter, not business logic.

## router/ — all routing config

- `index.tsx` — The full route tree goes here (eg: `createBrowserRouter` if with react router)
- This file is the access control manifest: every `AuthGuard` and `RoleGuard` is visible here
- Lazy imports for every page. `routes.ts` — typed route path constants and never hardcode '/dashboard' as a string in components.

## services/ — shared API infrastructure

- The HTTP client setup goes here, NOT the individual API calls (those live in features/).
- `api-client.ts` — Axios/fetch instance with base URL, interceptors, token injection, 401 handling
- `query-client.ts` — React Query client config (stale times, retry logic)
- Feature-level calls: features/auth/authService.ts, features/billing/invoiceService.ts

## store/ — global client state

- Only truly global state lives here — auth session, theme, notification queue, user preferences
- Feature-local state (form state, selected row, modal open/closed) stays inside the feature
  
## types/ — shared domain types

- Types used across multiple features: `User, Role, ApiResponse<T>, PaginatedResponse<T>`
- Feature-specific types (Invoice, BillingPlan) stay in features/billing/types.ts
- Avoid a single monolithic types.ts — it becomes a dumping ground.

## utils/ — pure helper functions

- No React, no side effects. eg: `formatDate(), formatCurrency(), cn() (classname merge), truncate()`
- Each util is a pure function with a unit test
- If a util needs a hook or context, it's not a util — it's a hook

## important points to remember

- Use barrel export for feature codes from `feature/orders/index.ts`
- `components/` can't import from `features`
- features can't import from each other
- So how features can communicate? features can only communicate throught
