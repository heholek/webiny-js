// @flow
import { createHandler, PluginsContainer } from "@webiny/api";
import createConfig from "service-config";
import servicePlugins from "@webiny/api/plugins/service";
import securityPlugins from "@webiny/api-security/plugins";

const plugins = new PluginsContainer([servicePlugins, securityPlugins]);

export const handler = async (event: Object, context: Object) => {
    const config = await createConfig();
    const apolloHandler = await createHandler({ plugins, config });
    return apolloHandler(event, context);
};