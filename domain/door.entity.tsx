export type InputProps = {
  number: number;
  isOpen: boolean;
  isSelected: boolean;
  hasPresent: boolean;
};

export type OutputProps = {
  number: number;
  isOpen: boolean;
  isSelected: boolean;
  hasPresent: boolean;
};

export class Door {
  #number;
  #isOpen;
  #isSelected;
  #hasPresent;

  constructor(props: InputProps) {
    this.#number = props.number;
    this.#isOpen = props.isOpen;
    this.#isSelected = props.isSelected;
    this.#hasPresent = props.hasPresent;
  }

  toJSON(): OutputProps {
    return {
      number: this.#number,
      isOpen: this.#isOpen,
      isSelected: this.#isSelected,
      hasPresent: this.#hasPresent,
    };
  }
}
