import { Link } from 'react-router';
import { paths } from '@/app/Router/paths';
import logo from '@/assets/images/logo.png';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/Icon';
import Image from '@/components/ui/image';

const FEATURES = [
  { icon: 'package' as const, label: 'Inventory', desc: 'Track stock in real time' },
  { icon: 'shoppingCart' as const, label: 'Sales', desc: 'Manage orders and invoices' },
  { icon: 'barChart' as const, label: 'Analytics', desc: 'Charts and financial summaries' },
  { icon: 'warehouse' as const, label: 'Warehouses', desc: 'Multi-location management' },
] as const;

const LandingPage = () => {
  return (
    <div className='flex min-h-screen flex-col bg-background text-foreground'>
      {/* Nav */}
      <header className='flex items-center justify-between border-b px-6 py-4 sm:px-12'>
        <Image src={logo} alt='Logo' className='h-7 w-auto object-contain' />
        <div className='flex items-center gap-3'>
          <Button variant='ghost' size='sm' asChild>
            <Link to={paths.auth.login.getHref()}>Sign in</Link>
          </Button>
          <Button size='sm' asChild>
            <Link to={paths.app.dashboard.getHref()}>Dashboard</Link>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <main className='flex flex-1 flex-col items-center justify-center gap-6 px-6 py-20 text-center sm:px-12'>
        <Badge variant='outline'>All systems operational</Badge>

        <h1 className='max-w-2xl text-display-2 font-bold leading-tight tracking-tight'>
          Inventory management, <span className='text-primary'>simplified.</span>
        </h1>

        <p className='max-w-md text-body-xl text-muted-foreground'>
          One place to manage your products, sales, purchases, and team — with the clarity you need
          to grow.
        </p>

        <div className='flex flex-wrap items-center justify-center gap-3'>
          <Button size='lg' asChild>
            <Link to={paths.app.dashboard.getHref()}>
              Go to Dashboard
              <Icon name='arrowRight' className='ml-1' size={16} />
            </Link>
          </Button>
          <Button size='lg' variant='outline' asChild>
            <Link to={paths.auth.register.getHref()}>Create account</Link>
          </Button>
        </div>
      </main>

      {/* Feature strip */}
      <section className='border-t bg-muted/40'>
        <div className='mx-auto grid max-w-4xl grid-cols-2 divide-x divide-y divide-border sm:grid-cols-4 sm:divide-y-0'>
          {FEATURES.map(({ icon, label, desc }) => (
            <div key={label} className='flex flex-col items-center gap-2 px-8 py-8 text-center'>
              <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 text-primary'>
                <Icon name={icon} size={18} />
              </div>
              <span className='text-body-lg font-semibold'>{label}</span>
              <span className='text-body-sm text-muted-foreground'>{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t px-6 py-5 text-center text-body-sm text-muted-foreground sm:px-12'>
        &copy; {new Date().getFullYear()} Inventory Management. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
