---
id: v2024-access-item-access-profile-response-app-refs-inner
title: AccessItemAccessProfileResponseAppRefsInner
pagination_label: AccessItemAccessProfileResponseAppRefsInner
sidebar_label: AccessItemAccessProfileResponseAppRefsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessItemAccessProfileResponseAppRefsInner', 'V2024AccessItemAccessProfileResponseAppRefsInner'] 
slug: /tools/sdk/powershell/v2024/models/access-item-access-profile-response-app-refs-inner
tags: ['SDK', 'Software Development Kit', 'AccessItemAccessProfileResponseAppRefsInner', 'V2024AccessItemAccessProfileResponseAppRefsInner']
---


# AccessItemAccessProfileResponseAppRefsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CloudAppId** | **String** | the cloud app id associated with the access profile | [optional] 
**CloudAppName** | **String** | the cloud app name associated with the access profile | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemAccessProfileResponseAppRefsInner = Initialize-V2024AccessItemAccessProfileResponseAppRefsInner  -CloudAppId 8c190e6787aa4ed9a90bd9d5344523fb `
 -CloudAppName Sample App
```

- Convert the resource to JSON
```powershell
$AccessItemAccessProfileResponseAppRefsInner | ConvertTo-JSON
```


[[Back to top]](#) 

