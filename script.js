function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    
    // یەکەم: زەرفەکە دەکرێتەوە
    envelope.classList.add('open');

    // دووەم: پاش یەک چرکە، دەچێتە ناوەوەی نامەکە
    setTimeout(() => {
        document.getElementById('envelope-screen').classList.remove('active');
        document.getElementById('invitation-screen').classList.add('active');
    }, 1000);
}
