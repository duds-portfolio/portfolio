# TODO

## GitHub Best Practices

- [ ] Add a project description and relevant topics in GitHub repository settings
  - Improves discoverability and context for visitors
- [ ] Set project website URL in repository settings (after deployment)
- [ ] Enable Dependabot alerts and security updates
  - Keeps dependencies secure and up to date
- [ ] Require signed commits (GPG) in branch protection rules
  - Ensures commit authenticity and integrity
- [ ] Enable branch protection for `main` (optional for solo projects)
  - Prevents accidental force-pushes or direct commits
- [ ] Regularly update dependencies (`npm update` or `pnpm update`)
- [x] Keep README.md and documentation up to date
- [ ] Back up local changes by pushing to GitHub regularly

## CI/CD Best Practices & Workflows

- [ ] Set up GitHub Actions for:
  - [ ] Automated build and test on push and pull request
  - [ ] Linting (e.g., ESLint, Stylelint)
  - [ ] Deployment workflow (e.g., to Vercel, Netlify, or GitHub Pages)
- [ ] Add status badges to README.md (build, deploy, etc.)
- [ ] Use environment variables for secrets (never commit `.env` files)
- [ ] Monitor CI/CD runs for failures and fix promptly
- [ ] Review and update workflows as project evolves

---

_This TODO is focused on solo developer best practices for a maintainable, secure, and future-proof portfolio project._ 