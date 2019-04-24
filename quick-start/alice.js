// Import jk standard library for the file writing function.
import * as std from '@jkcfg/std';

// Define a developer.
const alice = {
    name: 'Alice',
    beverage: 'Club-Mate',
    monitors: 2,
    languages: [
        'python',
        'haskell',
        'c++',
        '68k assembly', // Alice is cool like that!
    ],
};

// Write the developer description as YAML.
std.write(alice, `developers/${alice.name.toLowerCase()}.yaml`);
