// QR & Link generation
document.getElementById('generate-btn').addEventListener('click', () => {
    const text = document.getElementById('text-input').value.trim();
    if(!text){ alert('Enter text!'); return; }

    const baseLink = 'https://example.com/note/'; // Replace with your base
    const code = Math.random().toString(36).substring(2,8);
    const shortLink = baseLink + code;

    document.getElementById('link').value = shortLink;

    QRCode.toCanvas(document.getElementById('qrImg'), shortLink, { width:200 }, function(err){
        if(err) console.error(err);
    });
});

// Copy link
document.getElementById('copy-btn').addEventListener('click', () => {
    const link = document.getElementById('link');
    link.select();
    navigator.clipboard.writeText(link.value);
    alert('Copied!');
});

// Download QR
document.getElementById('download-qr').addEventListener('click', () => {
    const img = document.getElementById('qrImg').toDataURL("image/png");
    const a = document.createElement('a');
    a.href = img;
    a.download = 'qr.png';
    a.click();
});

// Print / PDF
document.getElementById('print-note').addEventListener('click', () => {
    window.print();
});