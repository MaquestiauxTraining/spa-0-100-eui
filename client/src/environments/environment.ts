import { EuiEnvConfig } from '@eui/core';

export const environment: EuiEnvConfig = {
    production: false,
    enableDevToolRedux: true,
    envDynamicConfig: {
        uri: 'assets/config/env-json-config.json',
    },
};
