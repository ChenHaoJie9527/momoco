import { forwardRef, Ref, useImperativeHandle, useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { CircleBorder } from '@momoco/react';
import JellyButton from './JellyButton';
import SelectLineColor from './SelectLineColor';
import SelectSize from './SelectSize';

interface CircleBorderModalProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary';
}

export type CircleBorderModalRef = {
  open: () => void;
  close: () => void;
};
const options = [
  { value: 'primary', label: 'Primary' },
  { value: 'secondary', label: 'Secondary' },
];

const graphSizes = [
  { name: 'Small', value: 'small' },
  { name: 'Medium', value: 'medium' },
  { name: 'Large', value: 'large' },
];
function CircleBorderModal(
  { size: initialSize = 'medium' }: CircleBorderModalProps,
  ref: Ref<CircleBorderModalRef>
) {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState(initialSize);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [selectedValue, setSelectedValue] = useState('primary');

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  const handleCopy = () => {
    // Implement copy functionality here
    console.log('Copied!');
  };

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="mx-auto rounded flex sm:flex-row md:w-[768px] lg:w-[860px] xl:w-[1080px] sm:w-[640px] bg-white p-6 shadow-xl dark:bg-[#25282e]">
          <div className="flex justify-center items-center w-1/2">
            <CircleBorder size={size} color={selectedValue} />
          </div>
          <div className="w-1/2 pl-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-medium mb-4 dark:text-white">Customize CircleBorder</h3>
              <div className="mb-4">
                <label className="block mb-2 dark:text-white">Line Color:</label>
                <SelectLineColor
                  options={options}
                  value={selectedValue}
                  label="Line Color"
                  onChange={e => {
                    setSelectedValue(e);
                  }}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 dark:text-white">Background Color:</label>
                <input
                  type="color"
                  value={backgroundColor}
                  onChange={e => setBackgroundColor(e.target.value)}
                  className="w-full p-1 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 dark:text-white">Size:</label>
                <SelectSize sizes={graphSizes} defaultSize={graphSizes[1]} />
              </div>
            </div>
            <div className="flex gap-2 ">
              <JellyButton size="small" color="sky" onClick={handleCopy}>
                Copy HTML
              </JellyButton>
              <JellyButton size="small" color="fuchsia" onClick={handleCopy}>
                Copy Vue
              </JellyButton>
              <JellyButton size="small" color="green" onClick={handleCopy}>
                Copy React
              </JellyButton>
              <JellyButton size="small" color="red" onClick={handleCopy}>
                Copy Svelte
              </JellyButton>
              <JellyButton size="small" color="blue" onClick={handleCopy}>
                Copy Angular
              </JellyButton>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default forwardRef(CircleBorderModal);
