// add here environment variables you want to get from the `process.env` object
// this file will export only the ones defined here if they exist, or it will default them
const DEFAULT = {
    PORT: 3000,
    ENV: "development"
};

const pick = (keys, obj) => keys.reduce((res, key) => {
    if (obj[key] === undefined) return res;
    return {
        ...res,
        [key]: obj[key]
    };
}, {});

export default pick(Object.keys(DEFAULT), process.env);
