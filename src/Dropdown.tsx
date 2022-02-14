import { Dropdown } from '@fluentui/react'

const inputItems = [
  {key: 'Bruce Wayne', text: 'Bruce Wayne'},
  {key: 'Natasha Romanoff', text: 'Natasha Romanoff'},
  {key: 'Steven Strange', text: 'Steven Strange'}
]

const DropdownExample = () => (
  <Dropdown
    options={inputItems}
    placeholder="Select your hero"
  />
)

export default DropdownExample
