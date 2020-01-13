'use strict';

const chatOpenButton = document.querySelector('.chat-widget');

const openChat = () => {
    chatOpenButton.classList.add('chat-widget_active');
};

chatOpenButton.addEventListener('click', openChat);

const chatWidgetInput = document.getElementById('chat-widget__input');
let botMessages = [
    'Снова ты?',
    'Давай, до свидания!',
    'Кто здесь?',
    'Все операторы заняты',
];

const sendMessage = () => {
    let getData = new Date().toString().slice(16, 21);
    let randomMessageIndex = Math.floor(Math.random() * 4);

    document.getElementById('chat-widget__messages').innerHTML += `
    <div class="message message_client">
      <div class="message__time">${getData}</div>
      <div class="message__text">
        ${chatWidgetInput.value}
      </div>
    </div>
    `;

    chatWidgetInput.value = '';

    function botReply() {
        document.getElementById('chat-widget__messages').innerHTML += `
    <div class="message">
      <div class="message__time">${getData}</div>
      <div class="message__text">
        ${botMessages[randomMessageIndex]}
      </div>
    </div>
    `;
    }

    setTimeout(botReply, 2000);
};

chatWidgetInput.addEventListener('change', sendMessage);