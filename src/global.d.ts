interface TelegramWebApp {
    expand(): void;
    ready(): void;
    colorScheme: 'light' | 'dark';
    themeParams: Record<string, any>;
    sendData(data: string): void;
    close(): void;
}

interface Window {
    Telegram: {
        WebApp: TelegramWebApp;
    };
}
