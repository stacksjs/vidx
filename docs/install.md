# Install

Installing `vidx` is easy. Simply pull it in via your package manager of choice, or download the binary directly.

## Package Managers

Choose your package manager of choice:

::: code-group

```sh [npm]
npm install --save-dev @stacksjs/vidx
# npm i -d @stacksjs/vidx

# or, install globally via
npm i -g @stacksjs/vidx
```

```sh [bun]
bun install --dev @stacksjs/vidx
# bun add --dev @stacksjs/vidx
# bun i -d @stacksjs/vidx

# or, install globally via
bun add --global @stacksjs/vidx
```

```sh [pnpm]
pnpm add --save-dev @stacksjs/vidx
# pnpm i -d @stacksjs/vidx

# or, install globally via
pnpm add --global @stacksjs/vidx
```

```sh [yarn]
yarn add --dev @stacksjs/vidx
# yarn i -d @stacksjs/vidx

# or, install globally via
yarn global add @stacksjs/vidx
```

```sh [brew]
brew install vidx # coming soon
```

```sh [pkgx]
pkgx vidx # coming soon
```

:::

Read more about how to use it in the Usage section of the documentation.

## Binaries

Choose the binary that matches your platform and architecture:

::: code-group

```sh [macOS (arm64)]
# Download the binary
curl -L https://github.com/stacksjs/vidx/releases/download/v0.9.1/vidx-darwin-arm64 -o vidx

# Make it executable
chmod +x vidx

# Move it to your PATH
mv vidx /usr/local/bin/vidx
```

```sh [macOS (x64)]
# Download the binary
curl -L https://github.com/stacksjs/vidx/releases/download/v0.9.1/vidx-darwin-x64 -o vidx

# Make it executable
chmod +x vidx

# Move it to your PATH
mv vidx /usr/local/bin/vidx
```

```sh [Linux (arm64)]
# Download the binary
curl -L https://github.com/stacksjs/vidx/releases/download/v0.9.1/vidx-linux-arm64 -o vidx

# Make it executable
chmod +x vidx

# Move it to your PATH
mv vidx /usr/local/bin/vidx
```

```sh [Linux (x64)]
# Download the binary
curl -L https://github.com/stacksjs/vidx/releases/download/v0.9.1/vidx-linux-x64 -o vidx

# Make it executable
chmod +x vidx

# Move it to your PATH
mv vidx /usr/local/bin/vidx
```

```sh [Windows (x64)]
# Download the binary
curl -L https://github.com/stacksjs/vidx/releases/download/v0.9.1/vidx-windows-x64.exe -o vidx.exe

# Move it to your PATH (adjust the path as needed)
move vidx.exe C:\Windows\System32\vidx.exe
```

::: tip
You can also find the `vidx` binaries in GitHub [releases](https://github.com/stacksjs/vidx/releases).
:::
