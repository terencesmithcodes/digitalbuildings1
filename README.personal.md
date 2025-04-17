# Personal GitHub Account Setup

This document contains instructions for managing your personal GitHub configuration for this repository.

## Current Configuration

- Repository: Digital Buildings Analytics
- GitHub Account: terencesmithcodes (personal)
- Email: terencesmith1@gmail.com
- SSH Authentication: Configured for your personal account

## Keeping Work and Personal Accounts Separate

### For This Repository

Your Git configuration for this repository is already set to use your personal email and GitHub account. This was done using repository-specific settings:

```bash
git config --local user.email "terencesmith1@gmail.com"
git config --local user.name "Terence Smith"
```

The repository is also configured to use SSH for authentication, which is connected to your personal GitHub account.

### For Future Repositories

1. **Check configuration before committing**:
   ```bash
   git config --list | grep -E "user|email"
   ```

2. **For personal projects, run**:
   ```bash
   ./setup-personal-git.sh
   ```
   This script will set up the repository with your personal email and ensure SSH is used.

3. **Verify correct account before pushing**:
   ```bash
   ssh -T git@github.com
   ```
   This should show: "Hi terencesmithcodes! You've successfully authenticated..."

## SSH Key Management

If you have multiple GitHub accounts, you might want to set up different SSH keys:

1. **Create different SSH keys** for work and personal accounts
2. **Use SSH config file** (~/.ssh/config) to manage multiple keys
3. **Use different hostnames** for different GitHub accounts

Example ~/.ssh/config:
```
# Personal GitHub
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_personal

# Work GitHub
Host github-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_work
```

Then use different remote URLs:
- Personal: `git@github.com:username/repo.git`
- Work: `git@github-work:work-org/repo.git`

## Checking Remote URL

To make sure you're pushing to the correct remote:

```bash
git remote -v
```

This should show: `git@github.com:terencesmithcodes/digitalbuildings1.git`

---

Note: Future commits will use your personal email as configured, but past commits will still show your work email. This is normal Git behavior as commit history is immutable.