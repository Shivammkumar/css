export class Student {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return ${this.firstName} ${this.lastName};
    }
}

export default {
    extractLeft: function (str) {
        const firstSpaceIndex = str.indexOf(' ');
        if (firstSpaceIndex === -1) {
            return str; 
        }
        return str.slice(0, firstSpaceIndex);
    },

    extractRight: function (str) {
        const lastSpaceIndex = str.lastIndexOf(' ');
        if (lastSpaceIndex === -1) {
            return str;
        }
        return str.slice(lastSpaceIndex + 1);
    },

    stringLengthWithoutSpaces: function (str) {
        //\s: This is a regex pattern that matches any whitespace character (such as spaces, tabs, or newlines).
g:      //g : This is a regex flag called "global," which means it will search for all occurrences of the whitespace in the entire string, not just the first one.
        return str.replace(/\s/g, '').length;
    }
};