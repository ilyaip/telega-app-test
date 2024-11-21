import TelegramBot from 'node-telegram-bot-api';
// Укажите токен, который вы получили от BotFather
const token = '8122416027:AAEfCxyG-I60n6VWQGLmB5I1KaSTIFW__-g';

// Создаём бота с поддержкой "long polling"
const bot = new TelegramBot(token, { polling: true });

// Обрабатываем команду /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    console.log('Received /start command'); // Выводим в консоль
    // Отправляем сообщение с кнопкой Web App
    bot.sendMessage(chatId, 'Click the button below to open the app:', {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Open Web App',
                        web_app: { url: 'https://gleaming-figolla-478e91.netlify.app/' }, // URL вашего приложения
                    },
                ],
            ],
        },
    });
});
