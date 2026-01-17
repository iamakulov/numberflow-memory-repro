# NumberFlow Memory Issue Repro

A reproduction case for a memory issue with NumberFlow.

## Steps to Reproduce

1. Run the websocket server: `npm run server`
2. Run the app: `npm install` then `npm run dev`
3. Open the page. Open the DevTools in a separate window.
4. Background the tab for 5-10 minutes.
5. Observe the JS heap size in DevTools while the tab is backgrounded
