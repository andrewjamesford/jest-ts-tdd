import { describe, it, expect } from "@jest/globals";
import { sum } from "./sum";

describe('sum tests', () => {
    it(`should return 3 when sum(1, 2)`, () => {
        // Arrange
        const input = 1;
        const input2 = 2;
        const expected = 3;

        // Act
        const actual = sum(input, input2);

        // Assert
        expect(actual).toBe(expected);
    });
    it(`should return -3 when sum(-1, -2)`, () => {
        // Arrange
        const input = -1;
        const input2 = -2;
        const expected = -3;

        // Act
        const actual = sum(input, input2);

        // Assert
        expect(actual).toBe(expected);
    });

});