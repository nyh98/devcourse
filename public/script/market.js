document.querySelectorAll('.order').forEach((tag, index) => {
  tag.addEventListener('click', () => {
    const now = new Date();

    const item = { id: index + 1, date: now.toLocaleDateString() };
    fetch('/data', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
  });
});
