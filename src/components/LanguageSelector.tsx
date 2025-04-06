
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Languages } from 'lucide-react';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'mr', name: 'मराठी' }
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 focus:outline-none">
        <Languages size={20} />
        <span className="hidden md:inline ml-1">
          {languages.find(lang => lang.code === language)?.name}
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={`cursor-pointer ${language === lang.code ? 'bg-muted font-medium' : ''}`}
            onClick={() => setLanguage(lang.code as 'en' | 'hi' | 'mr')}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
