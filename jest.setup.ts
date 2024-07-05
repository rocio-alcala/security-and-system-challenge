import "@testing-library/jest-dom";

// create <dialog> and its methods in node to test ContactForm
global.HTMLDialogElement.prototype.showModal = function () {};
global.HTMLDialogElement.prototype.close = function () {};
