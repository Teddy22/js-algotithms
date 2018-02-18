function mergeSort(list, comparator) {
    if (list.length > 1) {
        var firstHalf = list.slice(0, list.length / 2);
        var secondHalf = list.slice(list.length / 2);

        comparator = comparator || defaultComparator;

        mergeSort(firstHalf);
        mergeSort(secondHalf);
        merge(firstHalf, secondHalf, list, comparator);
    }
}


function merge(first, second, list, comparator) {
    var i = 0,
        j = 0,
        k = 0;

    while (i < first.length && j < second.length) {
        if (comparator(first[i], second[j]) < 0)
            list[k] = first[i++];
        else
            list[k] = second[j++];

        k++;
    }

    while (i < first.length)
        list[k++] = first[i++];

    while (j < second.length)
        list[k++] = second[j++];
}


function defaultComparator(value1, value2) {
    if (value1 < value2) return -1;
    else if (value1 > value2) return 1;
    else return 0;
}


module.exports = mergeSort;