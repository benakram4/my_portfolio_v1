export const getScrollElementById = (event,id) => {
  event.preventDefault();
  const href = event.currentTarget.href;
  const elem = document.getElementById(id);
  window.scrollTo({
    top: elem?.getBoundingClientRect().top,
    behavior: "smooth",
  });
};

