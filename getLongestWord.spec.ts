import { describe, it, expect } from "@jest/globals";

import { getLongestWord } from "./getLongestWord";

describe('getLongestWord tests', () => {
    it(`should return 'worlds' when getLongestWord('hello worlds')`, () => {
        // Arrange
        const input = 'hello worlds';
        const expected = 'worlds';

        // Act
        const actual = getLongestWord(input);

        // Assert
        expect(actual).toBe(expected);
    });

    it(`should error when getLongestWord is given an empty string`, () => {
        // Arrange
        const input = ' ';
        const expected = '';

        // Act
        const actual = getLongestWord(input);

        // Assert
        expect(actual).toBe(expected);
    });

    it(`should error when getLongestWord is given a string with multiple spaces`, () => {
        // Arrange
        const input = '  ';
        const expected = '';

        // Act
        const actual = getLongestWord(input);

        // Assert
        expect(actual).toBe(expected);
    });

    it(`should get the largest group of special characters when getLongestWord is given a sentence with only special characters`, () => {
        // Arrange
        const input = '!@ #$% ^&*()-';
        const expected = '^&*()-';

        // Act
        const actual = getLongestWord(input);

        // Assert
        expect(actual).toBe(expected);
    });

    it(`should return the longest word when getLongestWord is given a sentence with three words`, () => {
        // Arrange
        const input = 'test driven development';
        const expected = 'development';

        // Act
        const actual = getLongestWord(input);

        // Assert
        expect(actual).toBe(expected);
    });
});