import { INavLink, INavLinkGroup, Nav, Stack } from "@fluentui/react";
import { BrowserRouter, Link, Route, Switch, useHistory } from "react-router-dom";
import TelemetryProvider from "../service/telemetry-provider";
import { getAppInsights } from "../service/TelemetryService";
import Ft3asApp from "./Ft3asApp";
import Ft3asHome from "./Ft3asHome";



export default function Ft3asNavApp() {
    const appInsightKey = process.env.REACT_APP_APP_INSIGHTS_KEY
    let appInsights = null;
    const history = useHistory();

    const _onLinkClick = (event?: React.MouseEvent<HTMLElement>, item?: INavLink) => {
        if (item) {
            history.push(item.url);
            return false;
            // console.log('navigate to ' + item.url);
            // event?.stopPropagation();            
        }
    }

    const navLinkGroups: INavLinkGroup[] = [
        {
            links: [                
                {
                    name: 'AzChecklist',
                    url: '/',
                    icon: 'CheckList',
                    key: 'key1',
                },
                {
                    name: 'About',
                    url: '/about',
                    icon: 'Home',
                    expandAriaLabel: 'Home',
                    collapseAriaLabel: 'Home',
                },
            ],
        },
    ];

    return (

        <BrowserRouter>
            <TelemetryProvider instrumentationKey={appInsightKey} after={() => { appInsights = getAppInsights() }}>
                <Stack horizontal>
                    <Stack.Item>
                        <Nav
                            onLinkClick={_onLinkClick}
                            selectedKey="key1"
                            ariaLabel="AzChecklist"
                            groups={navLinkGroups}
                            onRenderLink={(link) => link ? (<Link to={link.url}>{link.name}</Link>) : <></>}
                        />
                    </Stack.Item>
                    <Stack.Item grow>
                        <Switch>
                            <Route exact path="/" component={Ft3asApp} />
                            <Route path="/about" component={Ft3asHome} />
                        </Switch>
                    </Stack.Item>
                </Stack>
            </TelemetryProvider>
        </BrowserRouter >);
}