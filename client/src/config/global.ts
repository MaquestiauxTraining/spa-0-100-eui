import { GlobalConfig, LogEvent, LogLevel, ConsoleAppender, UrlAppender } from '@eui/core';

export function LogConsoleLowercasePrefixConverter(event: LogEvent): string {
    return `Custom Prefix: ${event.loggerName.toUpperCase()}`;
}

export const GLOBAL: GlobalConfig = {
    appTitle: 'CSDR-app',
    i18n: {
        i18nService: {
            defaultLanguage: 'en',
            languages: ['en', 'fr'],
        },
        i18nLoader: {
            i18nFolders: ['i18n-eui', 'i18n'],
        },
    },
    user: {
        defaultUserPreferences: {
            dashboard: { },
            lang: 'en'
        }
    }
};
