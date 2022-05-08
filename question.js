class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
}

let questions = [
  new Question(
    "Kam naudingos morkos?",
    ["Niekam", "Hitleriui", "Kepenims", "Odai"],
    "ODAI"
  ),
  new Question(
    "Kam naudingi obuoliai?",
    ["Širdžiai", "Kojoms", "Delfinams", "Virškinimui"],
    "VIRŠKINIMUI"
  ),
  new Question(
    "Kokias ligas padeda gydyti agrastai?",
    ["Cukrini diabetą", "Kepenų cirozę", "Nemiga", "Vėžį"],
    "CUKRINI DIABETĄ"
  ),
  new Question(
    "Kokio vitamino gausu apelsinuose?",
    ["Vitamino E", "Vitamino A", "Vitamino C", "Vitamino B"],
    "VITAMINO C"
  ),
  new Question(
    "Kokiais dalykais yra turtingi arbūzai?",
    ["Vitaminais", "Mineralais", "Antioksidantais", "Visi teisingi"],
    "VISI TEISINGI"
  ),
];
