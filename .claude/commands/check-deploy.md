Check the current deployment status on Netlify.

Steps:
1. Source .env to get NETLIFY_API_KEY
2. Query `https://api.netlify.com/api/v1/sites/cac1e71e-2bbc-433a-840b-ded355d2105f/deploys?per_page=3`
3. Report the last 3 deploys: their state (ready/building/error), date, and commit message
4. If the latest deploy has state "error", also report the error message
