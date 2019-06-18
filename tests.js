// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// describe("add", function (){
//     it('should be a defined function', function () {
//         expect(typeof add).toBe("function");
//     });
//     it('should return 5 a number when adding 3 and 2.', function () {
//         expect(add(3,2)).toBe(5)
//     });
//     it('should return false when adding two strings.', function () {
//         expect(add("black", "bird")).toBe(false)
//     });
// });

describe("sayHello", function () {
    it('should be a defined function', function () {
        expect( typeof sayHello).toBe("function");
    });
    it('should return a sting when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, Jane!"', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!"', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
    it('should return "Hello, World!"', function () {
        expect(sayHello()).toBe("Hello, World!")
    });
    it('should return "Hello, World!"', function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return "Hello, World!"', function () {
        expect(sayHello(false)).toBe("Hello, World!")
    });
});
describe("isFive", function () {
    it('should be a defined function', function () {
        expect( typeof isFive).toBe("function");
    });
    it('should be a boolean', function () {
        expect(typeof(isFive())).toBe("boolean");
    });
    it('should return true whe passed 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true whe passed "5"', function () {
        expect(isFive("5")).toBe(true);
    });
});
describe("isEven", function () {
    it('should be a defined function', function () {
        expect( typeof isEven).toBe("function");
    });
    it('should returns true when passed 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should returns true when passed -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should returns false when passed 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should returns false when passed "banana', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should returns false when passed Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should returns false when passed true', function () {
        expect(isEven(true)).toBe(false);
    });
    it('should returns false when passed false', function () {
        expect(isEven(false)).toBe(false);
    });
});
describe("isVowel", function () {
    it('should be a defined function', function () {
        expect( typeof isVowel).toBe("function");
    });
    it('should returns true when passed "a"', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should returns false when passed "y"', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should returns false when passed "4"', function () {
        expect(isVowel("4")).toBe(false);
    });
    it('should returns false when passed "banana"', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should returns false when nothing is passed.', function () {
        expect(isVowel()).toBe(false);
    });
});


describe("add", function () {
    it('should be a defined function', function () {
        expect( typeof add).toBe("function");
    });
    it('should return -12 when passed -3 and -9', function () {
        expect( add(-3,-9)).toBe(-12);
    });
    it('should return 11 when passed "5" and 6', function () {
        expect( add("5", 6)).toBe(11);
    });
    it('should return 6 when passed "-4" and "-10"', function () {
        expect( add("-4","10")).toBe(6);
    });
    it('should return 5 when passed 2 and 3', function () {
        expect( add(2,3)).toBe(5);
    });
    it('should return NaN when passed "banana" and "split"', function () {
        expect( typeof add("banana","split")).toBe("number");
    });
    it('should return NaN when passed nothing', function () {
        expect( typeof add()).toBe("number");
    });
    it('should return NaN when passed "apples"', function () {
        expect( typeof add(2,"apples")).toBe("number");
    });

});