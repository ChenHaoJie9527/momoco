import { Fragment, useState } from 'react';
import {
  Listbox,
  Transition,
  ListboxOptions,
  ListboxButton,
  ListboxOption,
} from '@headlessui/react';
import { ChevronsUpDown, Check } from 'lucide-react';

interface Size {
  name: string;
  value: string;
}

interface SelectSizeProps {
  sizes: Size[];
  defaultSize?: Size;
  onChange?: (size: string) => void;
}

function SelectSize({ sizes, defaultSize, onChange }: SelectSizeProps) {
  const [selectedSize, setSelectedSize] = useState(defaultSize || sizes[0]);
  return (
    <Listbox
      value={selectedSize}
      onChange={value => {
        setSelectedSize(value);
        onChange?.(value.value);
      }}
    >
      <div className="relative mt-1">
        <ListboxButton className="relative w-full cursor-default rounded bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <span className="block truncate dark:text-[#000]">{selectedSize.name}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronsUpDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </ListboxButton>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded bg-white text-base z-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {sizes.map(size => (
              <ListboxOption
                key={size.value}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                  }`
                }
                value={size}
              >
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {size.name}
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
        </Transition>
      </div>
    </Listbox>
  );
}

export default SelectSize;
