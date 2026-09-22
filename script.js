function orderService(serviceName) {
    const msg = `Hi Benito Media, I want to order ${serviceName}`;
    window.open(`https://wa.me/254748671223?text=${encodeURIComponent(msg)}`, '_blank');
}

document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const service = document.getElementById('service').value;
    const details = document.getElementById('details').value;
    const mpesa = document.getElementById('mpesa').value;

    const whatsappMsg = `NEW ORDER - Benito Media\nName: ${name}\nService: ${service}\nDetails: ${details}\nM-Pesa: ${mpesa}`;
    window.open(`https://wa.me/254748671223?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
    alert('Order sent to WhatsApp! I will reply in 10 mins.');
});