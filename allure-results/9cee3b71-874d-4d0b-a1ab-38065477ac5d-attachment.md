# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_012_SND_PI_CreateFilterTest.spec.js >> TC_012_SND_PI_CreateFilterTest
- Location: tests\TC_012_SND_PI_CreateFilterTest.spec.js:10:5

# Error details

```
Error: locator.check: Target page, context or browser has been closed
Call log:
  - waiting for locator('table tbody tr').nth(1).locator('input[type=\'checkbox\']')

```

```
Error: browserContext.close: Test ended.
Browser logs:

<launching> C:\Users\tahamidul.haque\AppData\Local\ms-playwright\chromium-1217\chrome-win64\chrome.exe --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-extensions --disable-features=AvoidUnnecessaryBeforeUnloadCheckSync,BoundaryEventDispatchTracksNodeRemoval,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate,AutoDeElevate,RenderDocument,OptimizationHints --enable-features=CDPScreenshotNewSurface --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --edge-skip-compat-layer-relaunch --enable-automation --disable-infobars --disable-search-engine-choice-screen --disable-sync --enable-unsafe-swiftshader --no-sandbox --user-data-dir=C:\Users\TAHAMI~1.HAQ\AppData\Local\Temp\playwright_chromiumdev_profile-KhhtcN --remote-debugging-pipe --no-startup-window
<launched> pid=12104
[pid=12104][err] [12104:24788:0514/142854.773:ERROR:google_apis\gcm\engine\registration_request.cc:291] Registration response error message: DEPRECATED_ENDPOINT
[pid=12104][err] [12104:24788:0514/142918.052:ERROR:google_apis\gcm\engine\registration_request.cc:291] Registration response error message: DEPRECATED_ENDPOINT
[pid=12104] <gracefully close start>
```