"use strict";

import gulp from "gulp";
const lighthouseTask = require("./gulp/tasks/lighthouse");
//const siteUnavailableTask = require("./gulp/tasks/site_unavailable");

const requireDir = require("require-dir"),
    paths = {
        views: {
            src: ["./src/views/pages/**/*.pug",],
            dist: "../dist",
            pagelist: "./src/index.yaml",
            icons: "./src/icons",
            iconsPng: "./src/icons/png",
            iconsSvgMono: "./src/icons/svg-mono",
            iconsSvgColor: "./src/icons/svg-colors",
            iconsSvgAside: "./src/icons/svg-aside",
            iconsFont: "./src/icons",
            sassGen: "./src/styles/generated",
            watch: ["./src/blocks/**/*.pug", "./src/views/**/*.pug"],
            root: "./",
        },
        styles: {
            src: "./src/styles/**/*.{scss,sass}",
            dist: "../dist/styles/",
            watch: ["./src/blocks/**/*.{scss,sass}", "./src/styles/**/*.{scss,sass}"],
        },
        scripts: {
            src: "./src/js/global.js",
            dist: "../dist/js/",
            watch: ["./src/blocks/**/*.js", "./src/js/**/*.js"],
        },
        images: {
            src: [
                "./src/images/**/*.{jpg,jpeg,png,gif,tiff,svg,webp}",
                "!./src/images/favicon/*.{jpg,jpeg,png,gif,tiff,webp}",
            ],
            dist: "../dist/images/",
            watch: "./src/images/**/*.{jpg,jpeg,png,gif,svg,webp}",
        },
        webp: {
            src: [
                "./src/images/**/*.{jpg,jpeg,png,tiff}",
                "!./src/images/favicon/*.{jpg,jpeg,png,gif}",
            ],
            dist: "../dist/images/",
            watch: [
                "./src/images/**/*.{jpg,jpeg,png,tiff}",
                "!./src/images/favicon.{jpg,jpeg,png,gif}",
            ],
        },
        sprites: {
            src: "./src/images/svg/*.svg",
            dist: "../dist/images/sprites/",
            watch: "./src/images/svg/*.svg",
        },
        fonts: {
            src: "./src/fonts/**/*.{woff,woff2}",
            dist: "../dist/fonts/",
            watch: "./src/fonts/**/*.{woff,woff2}",
        },
        json: {
            src: "./src/dictionary/*.json",
            dist: "../dist/dictionary/",
            watch: "./src/dictionary/*.json",
        },
        pdf: {
            src: "./src/userfiles/*.pdf",
            dist: "../dist/userfiles/",
            watch: "./src/userfiles/*.pdf",
        },
        php: {
            src: "./src/*.php",
            dist: "../dist/",
            watch: "./src/*.php",
        },
        videos: {
            src: "./src/videos/**/*.mp4",
            dist: "../dist/videos/",
            watch: "./src/videos/**/*.mp4",
        },
        favicons: {
            src: "./src/images/favicon/*.{jpg,jpeg,png,gif,tiff}",
            dist: "../dist/images/favicons/",
        },
        gzip: {
            src: "./src/.htaccess",
            dist: "../dist/",
        },
    };

export const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV != "production";

requireDir("./gulp/tasks/", {
    recurse: true,
});

export { paths };

export const development = gulp.series(
    "clean",
    gulp.parallel([
        "views",
        "styles",
        "scripts",
        "images",
        // "webp",
        "sprite:png",
        "sprite:svg",
        "fonts",
        "json",
        "pdf",
        "php",
        "videos",
        "favicons",
        "list-pages",
    ]),
    gulp.parallel("serve")
);

export const prod = gulp.series(
    "clean",
    gulp.series([
        "views",
        "styles",
        "scripts",
        "images",
        // "webp",
        "sprite:png",
        "sprite:svg",
        "fonts",
        "json",
        "pdf",
        "php",
        "videos",
        "favicons",
        "gzip",
        "list-pages",
    ])
);

//export const site_unavailable = gulp.series(siteUnavailableTask);
export const lighthouse = gulp.series(lighthouseTask);

export default development;
