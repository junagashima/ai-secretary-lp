#!/bin/bash

# GitHubユーザー名を設定（ここを変更してください）
GITHUB_USERNAME="your-username"
REPO_NAME="ai-secretary-lp"

echo "GitHub リポジトリ接続スクリプト"
echo "================================"
echo ""
echo "GitHubユーザー名: $GITHUB_USERNAME"
echo "リポジトリ名: $REPO_NAME"
echo ""
echo "正しい場合は Enter、違う場合は Ctrl+C で中断してください"
read

# Git設定
git config --global user.email "you@example.com"
git config --global user.name "Your Name"

# リモートリポジトリを追加
git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git

# mainブランチに変更
git branch -M main

# プッシュ
echo "GitHubにプッシュしています..."
git push -u origin main

echo ""
echo "✅ 完了！"
echo "GitHubリポジトリ: https://github.com/$GITHUB_USERNAME/$REPO_NAME"