import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/Icon';

const LandingPage = () => {
  return (
    <div>
      This is the landing page
      <Icon name='circle' />
      <Button>
        <Icon name='home' />
        Hello
      </Button>
    </div>
  );
};

export default LandingPage;
