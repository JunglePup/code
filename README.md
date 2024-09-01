# Jungle Pup
This editor theme is inspired by two puppies visiting the jungle.

![screenshot of VS code with Jungle Pup theme](https://user-images.githubusercontent.com/8452750/162604541-f4c93bb9-b116-42ac-ae61-d687e73e332e.jpg)

# Installation
* [Install it from the Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=keller00.junglepup)
* [Install it from the Open VSX Registry](https://open-vsx.org/extension/keller00/junglepup)
* Install it manually by cloning this repo with: `git clone https://github.com/keller00/JunglePup.git ~/.vscode/extensions`

# Development
1. Clone this repository and open it in VSCode
2. Go to "Run and Debug" and run "Preview window", which will be your preview for your changes.
3. Either edit the file in `themes` folder for them to take effect immediately in the preview windows. This is useful for prototyping, but make sure to change the build ts files before submitting any PRs, these can be found in the `src` folder.
4. (Optional) Run the build form your terminal with: `npm run build`.

# Customization

As an example assume that we want to change the the remote window background to JunglePup Dense's pink accent color.
The remote window background is visible in the lower left corner of the screenshot above.
Just insert the following into your `settings.json`:

```json
    "workbench.colorCustomizations": {
        "statusBarItem.remoteBackground": "#D15B8F"
    }
```

# Release
Start on `main` branch.
1. The release process is automated with `npm run release`.
2. Push bump commit and new tag with `git push --follow-tags origin main`.
3. Create a new release [here](https://github.com/keller00/JunglePup/releases/new), just make sure to pick the newly created tag.

# Gratitude

* [catppuccin.com](https://catppuccin.com/) for inspiring this theme
* [coolors.co](https://coolors.co/) for making choosing colors easier
