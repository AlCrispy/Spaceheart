// Indice laterale delle pagine documento: si costruisce dai titoli h2/h3
// dentro .prose e evidenzia la sezione visibile durante lo scorrimento.
(function () {
  const toc = document.querySelector('.doc-toc ol');
  const headings = document.querySelectorAll('.prose h2[id], .prose h3[id]');
  if (!toc || !headings.length) return;

  const links = new Map();
  headings.forEach((h) => {
    const li = document.createElement('li');
    li.className = h.tagName === 'H3' ? 'lvl-3' : 'lvl-2';
    const a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent.replace('#', '').trim();
    li.appendChild(a);
    toc.appendChild(li);
    links.set(h.id, a);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.classList.remove('is-active'));
      const active = links.get(entry.target.id);
      if (active) active.classList.add('is-active');
    });
  }, { rootMargin: '-60px 0px -70% 0px' });

  headings.forEach((h) => observer.observe(h));

  // Su schermi stretti l'indice è chiuso: si apre toccando l'intestazione.
  const aside = toc.closest('.doc-toc');
  const label = aside.querySelector('.eyebrow');
  label.setAttribute('role', 'button');
  label.setAttribute('tabindex', '0');
  const toggle = () => aside.classList.toggle('is-open');
  label.addEventListener('click', toggle);
  label.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
  toc.addEventListener('click', (e) => { if (e.target.tagName === 'A') aside.classList.remove('is-open'); });
})();
