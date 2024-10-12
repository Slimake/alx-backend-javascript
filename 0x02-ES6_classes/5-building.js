export default class Building {
  constructor(sqft) {
    // Check for implementation of the evacuationWarningMessage method
    if (this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }
}
