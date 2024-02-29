---
id: change-password
title: Change Password
pagination_label: Change Password
sidebar_label: Change Password
keywords: ['connectivity', 'connectors', 'change password']
description: Change password for an account on the source.
slug: /connectivity/saas-connectivity/commands/change-password
tags: ['Connectivity', 'Connector Command']
---

| Input/Output |       Data Type         |
| :----------- | :--------------------:  |
| Input        | StdChangePasswordInput  |
| Output       | StdChangePasswordOutput |

### Example StdChangePasswordInput

```javascript
"identity": "john.doe",
"key": {
    "simple": {
        "id": "john.doe"
    }
},
"password": "newPassword"
```

### Example StdChangePasswordOutput

```javascript
{}
```

## Description

The change password command is triggered in ISC when a user changes their password through ISC. When this occurs, if your source has change password enabled, then you can change the user password on the source system through ISC. 

## The Provisioning Plan

The change password command sends the password change event to your connector whenever a user changes their password through the Password Manager. Handling this even is as simple as implementing a method on the source system that updates a users password

```javascript
.stdChangePassword(async (context: Context, input: StdChangePasswordInput, res: Response<StdChangePasswordOutput>) => {
    res.send(await myClient.changePassword(input.identity))
})
```

## Testing in Identity Security Cloud

In order to test in Identity Security Cloud, the source application must be configured so that it is able to accept password change requests through the Password Manager. Once this setup is complete, you can log in as a user whose identity exists in the configured application and change their password in the Password Manager. 