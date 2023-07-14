const TelegramBot = require('node-telegram-bot-api');

exports.handler = async function (event, context) {
    try {
    const { message } = JSON.parse(event.body);
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const bot = new TelegramBot(botToken);

    await bot.sendMessage(chatId, message);

    return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
    };
    } catch (error) {
    console.error('Failed to send message:', error);
    return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to send message' }),
    };
    }
};

