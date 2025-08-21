---
id: udk-deploying
title: Deploying
pagination_label: UDK
sidebar_label: Deploying
sidebar_position: 2
sidebar_class_name: rudk
keywords: ['UI', 'development', 'kit']
description: Deploying your UI project
slug: /tools/ui-development-kit/deploying
tags: ['UI']
---

## Building the App

To build the app locally, you can simply run the command `npm run electron:build` and the app will be built for your platform. The location of the built file can be found in the `./release` folder.

### Building for different platforms

If you want to build a release that can be used on other platforms, then you can use the github workflows to accomplish this task. By forking the repository, you will also have access to the github actions in the .github/workflows directory and there is an action for macos, linux and windows that can be used to build the application. Upon a successful build, the built executable is stored in github as a resource.

### Building with customization

Inside the `app/config.json` are the default navigation menu items that will presented to a user when they run the app. You can modify these values so that the bundled application will only allow the user to access certain pre-built components. That way if you want to bundle a purpose built app that only has access to the transform builder, you can do that by modifying the `app/config.json` like this:

```json
{
    "components": {
      "enabled": [
        "transforms"
      ]
    },
    "version": "1.0.0"
  }
```

In this case the user won't even have access to the component selector to enable other components, so the app will be limited to only the transform tool. You can also adjust the custom themes for the app using the `config.json` as well, to see more on this, see [theming](./theming)

Once the app is started, the user settings will be stored in the users `appData/Roaming/sailpoint-ui-development-kit` folder and can be modified there to allow access to other components if desired.

:::info

The UI Development Kit uses the existing configuration stored in the users data directory. If there is a pre-installed instance of the app or the config.json file already exists, it will not be overwritten by the application and their current configuration will be used.

:::