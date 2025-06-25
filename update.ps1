# SCRIPT: One-click update and deploy to GitHub Pages
# USAGE: Run ./update.ps1 in PowerShell

# 1. Prompt for a commit message
$commitMessage = Read-Host -Prompt "Enter a commit message for this update (or press Enter for default)"

# 2. Use a default message if none is provided
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "Automated update via script"
}

Write-Host "----------------------------------------" -ForegroundColor Yellow

# 3. Add all changes to the Git staging area
Write-Host "Step 1/3: Staging all file changes..." -ForegroundColor Cyan
git add .

# 4. Commit the changes with the message
Write-Host "Step 2/3: Committing changes (Message: '$commitMessage')..." -ForegroundColor Cyan
git commit -m "$commitMessage"

# 5. Push to the GitHub remote repository
Write-Host "Step 3/3: Pushing to GitHub..." -ForegroundColor Cyan
git push

Write-Host "----------------------------------------" -ForegroundColor Yellow
Write-Host "✅ Update successful! Your site will be live in a few minutes." -ForegroundColor Green
Write-Host "   Visit it at: https://dcv-cell.github.io/einvoice-qr/" 