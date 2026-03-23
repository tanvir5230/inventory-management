import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Icon } from '@/components/ui/Icon';
import type { TLanguage } from '@/types';

const languages: TLanguage[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'bn', label: 'বাংলা', flag: '🇧🇩' },
];

interface LanguageSelectionProps {
  onSelectLanguage?: (language: TLanguage) => void;
}

const LanguageSelection = ({ onSelectLanguage }: LanguageSelectionProps) => {
  const [selected, setSelected] = React.useState<TLanguage>(languages[0]);

  const handleLangSelect = (lang: TLanguage) => {
    setSelected(lang);
    onSelectLanguage?.(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='px-2 text-lg leading-none w-10 h-10 bg-light'>{selected.flag}</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='w-40' align='start'>
        {languages.map((lang) => {
          const isActive = lang.code === selected.code;

          return (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => handleLangSelect(lang)}
              className='flex items-center gap-2 cursor-pointer'
            >
              <span className='text-lg'>{lang.flag}</span>
              <span className='flex-1'>{lang.label}</span>

              {isActive && <Icon name='check' />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelection;
