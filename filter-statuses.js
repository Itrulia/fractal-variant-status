module.exports = (whitelist, blacklist) => {
    return variants => {
        if (whitelist && whitelist.length) {
            return variants.filter(variant => whitelist.includes(component.status));
        }

        if (blacklist && blacklist.length) {
            return variants.filter(variant => !blacklist.includes(component.status));
        }

        return variants;
    }
};