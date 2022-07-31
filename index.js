const TelegramBot = require('node-telegram-bot-api'); // подключаем node-telegram-bot-api

const token = '5575225692:AAEnruASdUVNMa-ynz--3eLvzUYzK_YdjDk'; //token

const bot = new TelegramBot(token, {polling: true}); // on bot


const keyboard = [//keyboard on
    [
      {
        text: 'I want to get exam papers of math 2', // текст на кнопке
        callback_data: 'moreKeks' // данные для обработчика событий
      }
    ],
    [
        {
          text: 'I want to see labs for programming 2 in c',
          callback_data: 'morePes'
        }
    ],
    [
        {
          text: 'I want to listen a good music',
          url: 'https://www.youtube.com/playlist?list=PLVUqqkX_XZvOczvPneMCJm3bJQBFLUCJv' //link to somewhere
        }
      ]
  ];

// обработчик события присылания нам любого сообщения
bot.on('message', (msg) => {
  const chatId = msg.chat.id; //getting id of chat to answer to the right users

  // отправляем сообщение
  bot.sendMessage(chatId, 'Hi friend, what do you want?', { // connect keyboard...
        reply_markup: {
            inline_keyboard: keyboard
        }
    });
});

// events for keyboard
bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;

    let img = '';

    if (query.data === 'moreKeks') { // if ...
        img = 'keks.png';
    }

    if (query.data === 'morePes') { // if ...
        img = 'pes.png';
    }

    if (img) {
        bot.sendPhoto(chatId, img, { // connecting keyboard...
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    } else {
        bot.sendMessage(chatId, 'What is it?', { // again keyboard 
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    }
  });
  