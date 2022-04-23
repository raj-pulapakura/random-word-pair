# Random Word Pair

Hey there, this is a simple project that pairs random words (infinitely). You could use this for anything really (generating Youtube Channel names etc.)

## How to Use

After cloning the project or downloading it, run the following command to start the process:

`npm start`

If you decide to edit the typescript, you can rebuild the javascript by running the following command:

`npm build`

P.S. If you are editing the typescript, you might want to first run `npm` which will automatically download the node types.

## What will happen

As soon as you run `npm start` an infinite list of word pairs will be printed out from the console. The first word of each pair is a random word from `bank/list1.txt` and the second word is a random word from `bank/list2.txt`.

Warning: this will keep going infinitely until you stop it ;)
