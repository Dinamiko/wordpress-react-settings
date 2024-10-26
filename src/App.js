import {__experimentalHeading as Heading, Card, CardBody, CheckboxControl, Button} from "@wordpress/components";
import {useState, useEffect} from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

export const App = () => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        apiFetch({path: '/wp/v2/settings?_fields=react_settings_page_check_me'})
            .then((setting) => {
                setChecked(Boolean(setting.react_settings_page_check_me))
            })
    }, []);

    const saveSettings = () => {
        apiFetch({
            path: '/wp/v2/settings',
            method: 'POST',
            data: {
                react_settings_page_check_me: checked,
            }
        });
    }

    return <>
        <Heading level={3} adjustLineHeightForInnerControls="large">React Settings Page</Heading>
        <Card>
            <CardBody>
                <CheckboxControl
                    label="Check me"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                />
                <Button variant="primary" onClick={saveSettings}>
                    Save
                </Button>
            </CardBody>
        </Card>
    </>
}
