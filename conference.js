// conference.js

function openConference(event) {
    // Закрываем модальное окно регистрации
    const eventModal = document.getElementById("eventModal");
    eventModal.classList.remove("active");
    
    // Скрываем основной контент и показываем конференцию
    document.querySelector('.main-content').style.display = 'none';
    document.querySelector('.quiz-section').style.display = 'none';
    document.querySelector('.newspapers-section').style.display = 'none';
    document.getElementById('conferenceContainer').style.display = 'block';
    
    // Устанавливаем информацию о конференции
    document.getElementById('conferenceTitle').textContent = event.title;
    document.getElementById('conferenceDescription').textContent = event.description;
    
    // Подключаемся к конференции
    document.getElementById('jitsiFrame').src = `https://meet.jit.si/${event.conferenceId}`;
}

// Управление конференцией
document.getElementById('backToCalendar').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('conferenceContainer').style.display = 'none';
    document.querySelector('.main-content').style.display = 'flex';
    document.querySelector('.quiz-section').style.display = 'none';
    document.querySelector('.newspapers-section').style.display = 'block';
});

document.getElementById('screenShareBtn').addEventListener('click', function() {
    alert('В реальном приложении будет запущена демонстрация экрана');
});

document.getElementById('toggleVideoBtn').addEventListener('click', function() {
    const btn = document.getElementById('toggleVideoBtn');
    if (btn.innerHTML.includes('Выключить')) {
        btn.innerHTML = '<i>📹</i> Включить видео';
    } else {
        btn.innerHTML = '<i>📹</i> Выключить видео';
    }
});

document.getElementById('toggleAudioBtn').addEventListener('click', function() {
    const btn = document.getElementById('toggleAudioBtn');
    if (btn.innerHTML.includes('Выключить')) {
        btn.innerHTML = '<i>🎙️</i> Включить микрофон';
    } else {
        btn.innerHTML = '<i>🎙️</i> Выключить микрофон';
    }
});

// Чат конференции
document.getElementById('sendMessageBtn').addEventListener('click', sendMessage);
document.getElementById('chatInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (message) {
        const chatMessages = document.getElementById('chatMessages');
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.innerHTML = `
            <div class="sender">Вы:</div>
            <div class="text">${message}</div>
        `;
        chatMessages.appendChild(messageElement);
        input.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}