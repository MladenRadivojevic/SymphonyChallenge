module.exports = {
    "reporters": [
        "default",
        ["./node_modules/jest-html-reporter", {
            "pageTitle": "Integration Test Report",
            "outputPath": `src/reports/Test-${Date.now()}.html`,
            "includeFailureMsg": true,
            "includeConsoleLog": true
        }]
    ]
}