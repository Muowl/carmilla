// Carmilla — warm accents over wine.
// TextMate preview; language servers may refine token colors.
class Countess {
    private name: string;
    private centuriesLived: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.centuriesLived = age;
    }

    whisper(guest: string): string {
        return `${this.name} whispers to ${guest}`;
    }

    getEra(): string {
        if (this.centuriesLived > 5) return "Ancient";
        if (this.centuriesLived > 1) return "Immortal";
        return "Newly turned";
    }
}

const carmilla = new Countess("Mircalla Karnstein", 3);
const awake: boolean = true;
const visitor: string | null = null;
const absent = undefined;
if (awake) console.log(carmilla.getEra());
else console.error("Still resting in the coffin");
