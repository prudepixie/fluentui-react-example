import { PrimaryButton, DefaultButton, Checkbox, TextField } from "@fluentui/react"
import {ChoiceGroupBasicExample as VerticalRadio} from './VerticalRadio'
import Dropdown from "./Dropdown"

const Form = () => {
    return <form>
        <h1>Example Form</h1>
        <h5>Text Input</h5>
        <TextField placeholder="Type here..."/>
        <h5>Text Area</h5>
        <TextField multiline rows={3} placeholder="Type here..." />
        <h5>Checkboxes</h5>
        <Checkbox label="Default" />
        <Checkbox label="Disabled" disabled defaultChecked/>
        <Checkbox label="Checked" defaultChecked/>
        <h5>Vertical Radio Group</h5>
        <VerticalRadio/>
        <h5>Dropdown selection</h5>
        <Dropdown/>
        <h5>Button Group</h5>
        <div>
            <PrimaryButton text="Primary" />
            <DefaultButton text="Default" />
        </div>
    </form>
}

export default Form