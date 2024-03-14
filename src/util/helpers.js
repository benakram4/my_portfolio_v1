export const getScrollElementById = (event, id) => {
	event.preventDefault();
	const elem = document.getElementById(id);
	const elemPosition = elem?.offsetTop / 1.1;
	window.scrollTo({
		top: elemPosition,
		behavior: "smooth",
	});
};
