Element.prototype.toggleClasses = function (c1, c2 = c1) {
    if (c1 !== c2) {
        if (this.classList.contains(c1)) {
            this.classList.remove(c1)
            this.classList.add(c2)
        } else if (this.classList.contains(c2)) {
            this.classList.remove(c2)
            this.classList.add(c1)
        }
    } else {
        if (this.classList.contains(c1)) {
            this.classList.remove(c1)
        } else {
            this.classList.add(c1)
        }
    }

}

