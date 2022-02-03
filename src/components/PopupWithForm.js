import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({popupSelector, handleFormSubmit}) {
    super(popupSelector);
    
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._inputList = this._element.querySelectorAll(".popup__input");

    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );

    return this._formValues;
  }

  setEventListeners() {
    this._popupElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());

      this.close();
    });

    super.setEventListeners();
  }

  close() {
    this._popupForm.reset();

    super.close();
  }
}

export default PopupWithForm;