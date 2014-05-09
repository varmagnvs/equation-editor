var setupKeyboardEvents = function(symbolSizeConfig) {
    var MathJax_MathItalic = [
        'q',
        'w',
        'e',
        'r',
        't',
        'y',
        'u',
        'i',
        'o',
        'p',
        'a',
        's',
        'd',
        'f',
        'g',
        'h',
        'j',
        'k',
        'l',
        'z',
        'x',
        'c',
        'v',
        'b',
        'n',
        'm',
        'Q',
        'W',
        'E',
        'R',
        'T',
        'Y',
        'U',
        'I',
        'O',
        'P',
        'A',
        'S',
        'D',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        'Z',
        'X',
        'C',
        'V',
        'B',
        'N',
        'M'
    ];
    var MathJax_Main = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0',
        '!',
        '$',
        '%',
        '.'
    ];

    var operatorCharacters = [
        '*',
        '-',
        '=',
        '+',
        '/',
        '<',
        '>'
    ];
    var bracketCharacters = [
        '(',
        ')',
        '[',
        ']',
        '{',
        '}',
        '|'
    ];

    Mousetrap.bind(MathJax_MathItalic, function(e, character) {
        var symbolWrapper = new eqEd.SymbolWrapper(character, "MathJax_MathItalic", symbolSizeConfig) 
        insertWrapper(symbolWrapper);
        addBlink();
    });

    Mousetrap.bind(MathJax_Main, function(e, character) {
        var symbolWrapper = new eqEd.SymbolWrapper(character, "MathJax_Main", symbolSizeConfig) 
        insertWrapper(symbolWrapper);
        addBlink();
    });

    Mousetrap.bind(operatorCharacters, function(e, character) { 

    });

    Mousetrap.bind(bracketCharacters, function(e, character) { 

    });

    // copy
    Mousetrap.bind('ctrl+c', function(e) {

    });

    // cut
    Mousetrap.bind('ctrl+x', function(e) {

    });

    // paste
    Mousetrap.bind('ctrl+v', function(e) {

    });

    // undo
    Mousetrap.bind('ctrl+z', function(e) {

    });

    // redo
    Mousetrap.bind(['ctrl+y', 'ctrl+shift+z'], function(e) {

    });

    Mousetrap.bind('backspace', function(e) {
        var cursor = $('.cursor');
        if (cursor.length > 0) {
            var container = cursor.parent().data('eqObject');
            if (highlightStartIndex !== 0 && highlightStartIndex !== null) {
                if (container.wrappers[highlightStartIndex - 1].childContainers.length > 0) {
                    container.wrappers[highlightStartIndex - 1].domObj.value.addClass('highlighted');
                    var endIndex = highlightStartIndex
                    highlightStartIndex = highlightStartIndex - 1;
                    updateHighlightFormatting(container, endIndex);
                    removeCursor();
                } else {
                    removeCursor();
                    highlightStartIndex = highlightStartIndex - 1;
                    container.removeWrappers(highlightStartIndex);
                    container.updateAll();
                    addCursorAtIndex(container, highlightStartIndex);
                }
                
            }
        }
    });

    Mousetrap.bind('del', function(e) {
        var cursor = $('.cursor');
        if (cursor.length > 0) {
            var container = cursor.parent().data('eqObject');
            if (highlightStartIndex !== container.wrappers.length && highlightStartIndex !== null) {
                if (container.wrappers[highlightStartIndex].childContainers.length > 0) {
                    container.wrappers[highlightStartIndex].domObj.value.addClass('highlighted');
                    var endIndex = highlightStartIndex + 1;
                    updateHighlightFormatting(container, endIndex);
                    removeCursor();
                } else {
                    removeCursor();
                    container.removeWrappers(highlightStartIndex);
                    container.updateAll();
                    addCursorAtIndex(container, highlightStartIndex);
                }
                
            }
        }
    });
};