// Функция сохранения данных в localStorage
function saveData() {
    const text = document.getElementById('editor').value;
    localStorage.setItem('savedText', text);
    showStatus('Данные сохранены!', 'success');
}

// Функция загрузки данных из localStorage
function loadData() {
    const savedText = localStorage.getItem('savedText') || '';
    document.getElementById('editor').value = savedText;
    showStatus('Данные загружены!', 'info');
}

// Функция очистки данных
function clearData() {
    localStorage.removeItem('savedText');
    document.getElementById('editor').value = '';
    showStatus('Данные очищены!', 'warning');
}

// Вспомогательная функция для отображения статуса
function showStatus(message, type) {
    const statusEl = document.getElementById('status');
    statusEl.textContent = message;
    statusEl.className = type;
    setTimeout(() => {
        statusEl.textContent = '';
        statusEl.className = '';
    }, 3000);
}

// Автозагрузка данных при открытии страницы
window.onload = loadData;
