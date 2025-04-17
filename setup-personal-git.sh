#!/bin/bash
# Script to set up Git configuration for personal repositories

# Set local Git config to personal details
git config --local user.name "Terence Smith"
git config --local user.email "terencesmith1@gmail.com"

# Ensure remote origin uses SSH
REMOTE_URL=$(git remote get-url origin 2>/dev/null)

if [[ $REMOTE_URL == https://github.com/* ]]; then
  # Convert HTTPS to SSH URL
  REPO_PATH=$(echo $REMOTE_URL | sed 's|https://github.com/||')
  git remote set-url origin git@github.com:$REPO_PATH
  echo "Remote URL changed to use SSH: git@github.com:$REPO_PATH"
fi

# Verify configuration
echo "=== Local Git Configuration ==="
git config --local --list | grep -E "user|email"
echo ""
echo "=== Remote URL ==="
git remote -v

echo ""
echo "This repository is now configured for your personal GitHub account."
echo "New commits will use your personal identity."