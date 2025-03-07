const path = require("path");

const root = path.join(__dirname, "../assets/dist");
const src = path.join(root, "src");

module.exports = {
    root,
    src,
    buildPath: path.join(root, "/assets/dist"),
    lighthouse: {
        reportPath: path.join(root, "reports"),
        PORT: 8080,
        chromeLauncherPort: 9222,
        config: {
            extends: "lighthouse:default",
        },
        flags: {
            // available options - https://github.com/GoogleChrome/lighthouse/#cli-options
            chromeFlags: ["--show-paint-rects"],
            output: "html"
        }
    },
};
