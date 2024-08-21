import React from 'react';
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/react';
import { ChevronsUpDown, Check } from 'lucide-react';

export interface Option {
  value: string;
  label: string;
}

export interface SelectLineColorProps {
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

const SelectLineColor: React.FC<SelectLineColorProps> = ({ options, value, onChange }) => {
  return (
    <Listbox value={value} onChange={onChange} defaultValue={value}>
      <div className=" relative">
        <ListboxButton className="relative w-full cursor-default rounded bg-white py-2 pl-3 pr-10 text-left border focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <span className="block truncate dark:text-black">
            {options.find(option => option.value === value)?.label}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronsUpDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </ListboxButton>
        <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {options.map(option => (
            <ListboxOption
              key={option.value}
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                  active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                }`
              }
              value={option.value}
            >
              {({ selected }) => (
                <>
                  <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                    {option.label}
                  </span>
                  {selected ? (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                      <Check className="h-5 w-5" aria-hidden="true" />
                    </span>
                  ) : null}
                </>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};

export default SelectLineColor;
