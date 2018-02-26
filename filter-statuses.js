module.exports = (whitelist, blacklist) => {
    return variants => {
        if (whitelist && whitelist.length) {
            return variants.filter(variant => whitelist.includes(variant.status));
        }

        if (blacklist && blacklist.length) {
            return variants.filter(variant => !blacklist.includes(variant.status));
        }

        return variants;
    }
};
