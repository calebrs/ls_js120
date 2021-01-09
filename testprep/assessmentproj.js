let armorMixin = {
  attachArmor() {

  },

  removeArmor() {

  }
}

let spellCasterMixin = {
  castSpell(spell) {
    return spell;
  }
}

class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.strength = Character.diceRoll();
    this.intelligence = Character.diceRoll();
  }

  static diceRoll() {
    return Math.floor(Math.random() * 10) + 2;
  }

  hurt(damage) {
    this.health -= damage;
  }

  heal(healing) {
    this.health += healing;
  }
}

class Warrior extends Character {
  constructor() {
    super()
    this.strength += 2;
  }
}
Object.assign(Warrior.prototype, armorMixin);

class Magician extends Character {
constructor() {
    super();
    this.intelligence += 2;
  }
}
Object.assign(Magician.prototype, spellCasterMixin);

class Bard extends Character {
  constructor() {
    super();
  }

  createPotion() {

  }
}
Object.assign(Bard.prototype, spellCasterMixin);

class Paladin extends Character {
  constructor() {
    super();
  }
}
Object.assign(Paladin.prototype, armorMixin, spellCasterMixin);

let jimbo = new Magician();
console.log(jimbo.castSpell('Bam!'));

