import mut from './module.js';

//sum
test('Sum test: completed successfully', () => {
    const expected = 30;
    const got = mut.sum(12, 18);
    expect(got).toBe(expected);
});

//div
test('Div test: completed successfully', () => {
    const expected = 5;
    const got = mut.div(20, 4);
    expect(got).toBe(expected);
});
test('', () => {
    const expected = 3.25;
    const got = mut.div(13, 4);
    expect(got).toBe(expected);
});
test('', () => {
    const got = mut.div(1, 0);
    expect(got).toBe(Infinity);
});

//containsNumbers
test('', () => {
    const got = mut.containsNumbers('4');
    expect(got).toBeTruthy();
});
test('', () => {
    const got = mut.containsNumbers('e');
    expect(got).toBeFalsy();
});
test('Contains numbers test: completed successfully', () => {
    const got = mut.containsNumbers('fbwf7efrugbwe90');
    expect(got).toBeTruthy();
});
test('', () => {
    const got = mut.containsNumbers('fbrewvjwbvewinvweiabvkbwal');
    expect(got).toBeFalsy();
});
test('', () => {
    const got = mut.containsNumbers('');
    expect(got).toBeFalsy();
});