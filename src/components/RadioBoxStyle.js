import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

// const plans = [
//   {
//     name: 'TikTok'
//   },
//   {
//     name: 'Instagram'
//   },
//   {
//     name: 'YouTube'
//   },
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function RadioBoxStyle({ styles, selectedStyle, setSelectedStyle }) {
  // const [selected, setSelected] = useState(plans[0])

  return (
    <div className="w-full px- py-2">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={selectedStyle} onChange={setSelectedStyle}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {styles.map((style, key) => (
              <RadioGroup.Option
                key={key}
                value={style}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'h-10 ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                      : ''
                  }
                  ${
                    checked ? 'h-10 bg-gradient-to-r from-blue-400 to-emerald-400 text-white' : 'h-10 bg-white'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {style}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? 'text-sky-100' : 'text-gray-500'
                            }`}
                          >
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
