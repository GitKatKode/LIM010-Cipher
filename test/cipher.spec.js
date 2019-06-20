describe('cipher', () => {

    it('debería ser un objeto', () => {
        assert.equal(typeof cipher, 'object');
    });

    describe('cipher.encode', () => {

        it('debería ser una función', () => {
            assert.equal(typeof cipher.encode, 'function');
        });

        it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
            assert.equal(cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'HIJKLMNOPQRSTUVWXYZABCDEFG');
        });

        it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
            assert.equal(cipher.encode(33, 'abcdefghijklmnopqrstuvwxyz'), 'hijklmnopqrstuvwxyzabcdefg');
        });

        it('debería retornar "456" para "123" con offset 33', () => {
            assert.equal(cipher.encode(33, '123'), '456');
        });

        it('debería retornar ")*+," para "()*+" con offset 33', () => {
            assert.equal(cipher.encode(33, '()*+'), ')*+,');
        });

        it('debería retornar "]_`" para "<>?" con offset 33', () => {
            assert.equal(cipher.decode(33, '<>?'), ']_`');
        });

        it('debería retornar "ò~ý" para "ÑáÜ" con offset 33', () => {
            assert.equal(cipher.decode(33, 'ÑáÜ'), 'ò~ý');
        });
    });

    describe('cipher.decode', () => {

        it('debería ser una función', () => {
            assert.equal(typeof cipher.decode, 'function');
        });

        it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
            assert.equal(cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG'), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        });

        it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "ijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
            assert.equal(cipher.decode(33, 'hijklmnopqrstuvwxyzabcdefg'), 'abcdefghijklmnopqrstuvwxyz');
        });

        it('debería retornar "123" para "456" con offset 33', () => {
            assert.equal(cipher.decode(33, '456'), '123');
        });

        it('debería retornar "()*+" para ")*+," con offset 33', () => {
            assert.equal(cipher.decode(33, ')*+,'), '()*+)');
        });

        it('debería retornar "<>?" para "]_`" con offset 33', () => {
            assert.equal(cipher.decode(33, ']_`'), '<>?');
        });

        it('debería retornar "ÑáÜ" para "ò~ý" con offset 33', () => {
            assert.equal(cipher.decode(33, 'ò~ý'), 'ÑáÜ');
        });
    });

});