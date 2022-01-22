var quick_sort = function(q, l, r) {
    if (l >= r) return;
    var i = l - 1, j = r + 1, x = q[l + r >> 1];
    while(i < j){
        do i++;
        while (q[i] < x)
        do j--;
        while (q[j] > x)
        if (i < j) {
            var mid = q[i];
            q[i] = q[j];
            q[j] = mid;
        }
    }
    quick_sort(q, l, j), quick_sort(q, j + 1, r);
};


//# sourceMappingURL=index.js.map