const parseFilter = (value, filter) => value.valueOf() || filter.default;

const parseFilters = (params, filters) =>
    Object.fromEntries(
        filters.map((filter) => {
            const param = filter.name;
            const paramValue = params[param];
            return [param, parseFilter(paramValue, filter)];
        })
    );

export { parseFilters, parseFilter };
