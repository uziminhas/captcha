import { useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

//enabledHashtags, setEnabledHashtags, enabledEmojis, setEnabledEmojis

export default function ToggleHashtags({ enabledHashtags, setEnabledHashtags, enabledEmojis, setEnabledEmojis }) {
  // const [enabledHashtags, setEnabledHashtags] = useState();
  // const handleToggleState = () => {
  //   function switchToggle() {
  //     if(enabledHashtags == true) {
  //       setEnabledHashtags(false);
  //     } else {
  //       setEnabledHashtags(true);
  //     }
  //   }
  // }



  return (
    <Switch.Group>
      <div className="flex justify-center items-center w-full max-w-md py-2">
        <Switch.Label className="mr-3">Include hashtags</Switch.Label>
        <Switch
          checked={enabledHashtags}
          onChange={setEnabledHashtags}
          className={`${
            enabledHashtags ? 'bg-gradient-to-r from-blue-400 to-emerald-400' : 'bg-gray-200'
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-sky-300 focus:ring-offset-5`}
        >
          <span
            className={`${
              enabledHashtags ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
      </div>
      <div className="flex justify-center items-center w-full max-w-md py-2">
        <Switch.Label className="mr-3">Use emojis</Switch.Label>
        <Switch
          checked={enabledEmojis}
          onChange={setEnabledEmojis}
          className={`${
            enabledEmojis ? 'bg-gradient-to-r from-blue-400 to-emerald-400' : 'bg-gray-200'
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-sky-300 focus:ring-offset-5`}
        >
          <span
            className={`${
              enabledEmojis ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>

  )
}