interface LoadingProps {
  message?: string;
}

export function Loading({ message = 'Loading...' }: LoadingProps) {
  return (
    <div className='flex flex-col items-center justify-center space-y-4'>
      <div className='flex space-x-2'>
        <div className='h-4 w-4 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]' />
        <div className='h-4 w-4 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]' />
        <div className='h-4 w-4 animate-bounce rounded-full bg-primary' />
      </div>
      <p className='text-sm text-muted-foreground'>{message}</p>
    </div>
  );
}
