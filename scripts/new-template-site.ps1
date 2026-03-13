param(
  [Parameter(Mandatory = $true)]
  [string]$Preset,

  [Parameter(Mandatory = $true)]
  [string]$Destination
)

$root = Split-Path -Parent $PSScriptRoot
$starterPath = Join-Path $root "starter"
$presetPath = Join-Path $root "vertical-presets\$Preset"

if (-not (Test-Path $starterPath)) {
  throw "Starter folder not found at $starterPath"
}

if (-not (Test-Path $presetPath)) {
  throw "Preset '$Preset' not found at $presetPath"
}

if (Test-Path $Destination) {
  $existingItems = Get-ChildItem -Force $Destination -ErrorAction SilentlyContinue
  if ($existingItems) {
    throw "Destination '$Destination' already exists and is not empty."
  }
} else {
  New-Item -ItemType Directory -Path $Destination | Out-Null
}

$excludedNames = @("node_modules", "dist", ".astro")

Get-ChildItem -Force $starterPath | Where-Object {
  $excludedNames -notcontains $_.Name
} | ForEach-Object {
  Copy-Item -Path $_.FullName -Destination $Destination -Recurse -Force
}

Get-ChildItem -Force $presetPath | ForEach-Object {
  Copy-Item -Path $_.FullName -Destination $Destination -Recurse -Force
}

Write-Output "Created new site from preset '$Preset' at '$Destination'."
