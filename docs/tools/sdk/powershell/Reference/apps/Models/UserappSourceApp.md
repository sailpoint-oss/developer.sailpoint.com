---
id: userapp-source-app
title: UserappSourceApp
pagination_label: UserappSourceApp
sidebar_label: UserappSourceApp
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'UserappSourceApp', 'UserappSourceApp'] 
slug: /tools/sdk/powershell/apps/models/userapp-source-app
tags: ['SDK', 'Software Development Kit', 'UserappSourceApp', 'UserappSourceApp']
---


# UserappSourceApp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the source app ID | [optional] 
**Type** | **String** | It will always be ""APPLICATION"" | [optional] 
**Name** | **String** | the source app name | [optional] 

## Examples

- Prepare the resource
```powershell
$UserappSourceApp = Initialize-UserappSourceApp  -Id edcb0951812949d085b60cd8bf35bc78 `
 -Type APPLICATION `
 -Name test-app
```

- Convert the resource to JSON
```powershell
$UserappSourceApp | ConvertTo-JSON
```


[[Back to top]](#) 

