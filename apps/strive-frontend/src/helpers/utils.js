export function getScrollHeight(elm) {
    var savedValue = elm.value;
    elm.value = '';
    elm._baseScrollHeight = elm.scrollHeight;
    elm.value = savedValue;
}
