const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const currentYear = new Date().getFullYear(); // Get current year
        const age = (person.yearOfDeath || currentYear) - person.yearOfBirth; // Handle people still alive
        const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
        
        return age > oldestAge ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;