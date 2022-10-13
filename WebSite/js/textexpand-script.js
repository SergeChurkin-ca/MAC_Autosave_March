var elements = {
  text: document.querySelectorAll('.text'),
  button: document.querySelectorAll('.expand')
}

function expandableToggle(e) {
  const btn = e.target;
  const expandable = btn.parentElement.querySelector('.expandable');
  if (!expandable){
    console.error('No expandable element found!');
    return;
  }
  if (expandable.classList.contains('expanded')) {
    // it's expanded, collapse it
    expandable.classList.toggle('expanded', false);
    btn.classList.toggle('activated', false);
  } else {
    // it's collapsed, expand it
    expandable.classList.toggle('expanded', true);
    btn.classList.toggle('activated', true);
  }
}