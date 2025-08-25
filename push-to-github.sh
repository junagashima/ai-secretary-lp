#!/bin/bash

echo "GitHubへのプッシュスクリプト"
echo "============================="
echo ""
echo "このスクリプトを実行する前に、以下を確認してください："
echo "1. GitHubでリポジトリ 'ai-secretary-lp' を作成済み"
echo "2. GitHubユーザー名を知っている"
echo ""
read -p "GitHubユーザー名を入力してください: " GITHUB_USERNAME

# リモートが既に存在するか確認
if git remote | grep -q "origin"; then
    echo "既存のoriginを削除します..."
    git remote remove origin
fi

# 新しいリモートを追加
echo "GitHubリポジトリを追加しています..."
git remote add origin https://github.com/$GITHUB_USERNAME/ai-secretary-lp.git

# mainブランチに変更
git branch -M main

# ファイルを追加
git add .
git commit -m "Add github setup script" --allow-empty

# GitHubにプッシュ
echo ""
echo "GitHubにプッシュしています..."
echo "GitHubのユーザー名とパスワード（またはトークン）を求められます"
git push -u origin main

echo ""
echo "✅ 完了！"
echo "Netlifyに戻って、Branch to deployに 'main' が表示されるはずです"