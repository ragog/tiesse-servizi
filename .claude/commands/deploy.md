Deploy the current changes to production.

Steps:
1. Run `git status` and `git diff` to see what changed
2. If there's nothing to commit, check if there are unpushed commits with `git log origin/main..HEAD`
3. Stage all changes with `git add -A` (excluding .env which is gitignored)
4. Write a clear, concise commit message in English describing what changed
5. Commit and push to main
6. Query the Netlify API to confirm the deploy completed successfully:
   - Source the .env file to get NETLIFY_API_KEY
   - Poll `https://api.netlify.com/api/v1/sites/cac1e71e-2bbc-433a-840b-ded355d2105f/deploys?per_page=1` until state is "ready" or "error"
   - Report success or failure clearly to the user
