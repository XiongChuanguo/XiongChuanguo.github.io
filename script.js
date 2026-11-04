document.getElementById('year').textContent = new Date().getFullYear();

// Navigation still works as ordinary anchor links without JavaScript.
if ('IntersectionObserver' in window) {
  const navigation = [...document.querySelectorAll('nav a')];
  const sections = [...document.querySelectorAll('main > section[id]')];
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter(entry => entry.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (!visible.length) return;
    const current = '#' + visible[0].target.id;
    navigation.forEach(link => {
      if (link.getAttribute('href') === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-5% 0px -45% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}
