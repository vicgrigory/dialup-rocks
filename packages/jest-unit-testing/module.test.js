import mut from './module.js';

//sum
test('Sum test: completed successfully', () => {
    const expected = 30;
    const got = mut.sum(12, 18);
    expect(got).toBe(expected);
});

//div
test('Div test: simple', () => {
    const expected = 5;
    const got = mut.div(20, 4);
    expect(got).toBe(expected);
});
test('Div test: remainder', () => {
    const expected = 3.25;
    const got = mut.div(13, 4);
    expect(got).toBe(expected);
});
test('Div test: divide by zero', () => {
    const got = mut.div(1, 0);
    expect(got).toBe(Infinity);
});

//containsNumbers
test('ContainsNumbers: one number', () => {
    const got = mut.containsNumbers('4');
    expect(got).toBeTruthy();
});
test('ContainsNumbers: one letter', () => {
    const got = mut.containsNumbers('e');
    expect(got).toBeFalsy();
});
test('ContainsNumbers: many numbers and letters', () => {
    const got = mut.containsNumbers('fbwf7efrugbwe90');
    expect(got).toBeTruthy();
});
test('ContainsNumbers: many letters', () => {
    const got = mut.containsNumbers('fbrewvjwbvewinvweiabvkbwal');
    expect(got).toBeFalsy();
});
test('ContainsNumbers: empty', () => {
    const got = mut.containsNumbers('');
    expect(got).toBeFalsy();
});