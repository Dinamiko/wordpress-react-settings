import {__experimentalHeading as Heading, Card, CardBody, CheckboxControl, Button} from "@wordpress/components";
import {useState} from '@wordpress/element';

export const App = () => {
    const [checked, setChecked] = useState(false);

    return <>
        <Heading level={3} adjustLineHeightForInnerControls="large">React Settings Page</Heading>
        <Card>
            <CardBody>
                <CheckboxControl
                    label="Check me"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                />
                <Button variant="primary" onClick={() => console.log('click')}>
                    Save
                </Button>
            </CardBody>
        </Card>
    </>
}
