# NumberFlow Memory Issue Repro

A reproduction case for a memory issue with NumberFlow.

## Steps to Reproduce

1. Wait for the CodeSandbox to launch the container. Then, open the preview at port `5173`.

   (Or, if running this locally: `npm install`, and then `npm run server` and `npm run dev`. Open http://localhost:5173.)

2. Open the preview in a new separate tab. Open the DevTools in a separate window.

3. Background the tab for 5-10 minutes.
4. Observe the JS heap size in DevTools while the tab is backgrounded
