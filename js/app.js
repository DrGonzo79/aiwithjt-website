// aiwithjt.com — site interactions
document.getElementById('yr').textContent = new Date().getFullYear();

document.querySelectorAll('form.signup').forEach(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(form);
    fetch(form.action, { method: 'POST', body: data, mode: 'no-cors' }).finally(function () {
      var card = form.closest('.formcard');
      if (card) {
        card.querySelector('h3').textContent = "You're in. Check your inbox ✉";
        card.querySelector('p').textContent = "The guide is on its way — look for an email from justin@aiwithjt.com.";
        form.style.display = 'none';
        var c = card.querySelector('.consent');
        if (c) c.style.display = 'none';
      } else {
        form.textContent = "You're in — check your inbox ✉";
      }
    });
  });
});
