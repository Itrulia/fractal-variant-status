const filterStatuses = require("./filter-statuses");
const defaults = require("./defaults");
const {compose} = require("ramda");
const {yellow, bold, grey} = require("chalk")

const logWarning = compose(
    console.log,
    yellow
);

const logWarningTitle = compose(
    logWarning,
    bold
);

const logSaturated = compose(
    console.log,
    grey
);

module.exports = function variantStatusParser(opts = {}) {
    const config = {
        ...defaults,
        ...opts
    };

    const filter = filterStatuses(config.whitelist, config.blacklist);

    return {
        name: "variant-status-parser",
        transform: "components",
        handler(components, state, app) {
            const errors = [];

            const comps = components.map(component => {
                component.variants = component.variants.map(variant => {
                    const variantStatus = variant.getConfig("status") ?
                        variant.getConfig("status") :
                        config.defaultStatus;

                    const status = config.statuses.find(s => s.id === variantStatus);

                    if (!status) {
                        errors.push({
                            status: variantStatus,
                            variant: variant.id,
                            component: component.src.stem
                        });
                    }

                    variant.status = status;

                    return variant;
                });

                component.variants = filter(component.variants);

                return component;
            });

            if (errors.length) {
                logSaturated("\n\n-------\n");

                logWarningTitle(`There have been ${errors.length} errors filtering your variants: \n`);

                errors.forEach(error => logWarning((`'${error.status}' was used in '${error.component} - ${error.variant}' but never defined in the '@itrulia/fractal-component-status' config!`)));

                logSaturated("\n-------\n");
            }

            return comps;
        }
    }
}