function toggleList(id) {
    const list = document.getElementById(id);
    if (list.classList.contains('hidden')) {
      list.classList.remove('hidden');
    } else {
      list.classList.add('hidden');
    }
  }
  