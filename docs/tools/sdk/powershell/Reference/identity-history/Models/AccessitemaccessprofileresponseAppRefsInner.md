---
id: accessitemaccessprofileresponse-app-refs-inner
title: AccessitemaccessprofileresponseAppRefsInner
pagination_label: AccessitemaccessprofileresponseAppRefsInner
sidebar_label: AccessitemaccessprofileresponseAppRefsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessitemaccessprofileresponseAppRefsInner', 'AccessitemaccessprofileresponseAppRefsInner'] 
slug: /tools/sdk/powershell/identityhistory/models/accessitemaccessprofileresponse-app-refs-inner
tags: ['SDK', 'Software Development Kit', 'AccessitemaccessprofileresponseAppRefsInner', 'AccessitemaccessprofileresponseAppRefsInner']
---


# AccessitemaccessprofileresponseAppRefsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CloudAppId** | **String** | the cloud app id associated with the access profile | [optional] 
**CloudAppName** | **String** | the cloud app name associated with the access profile | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessitemaccessprofileresponseAppRefsInner = Initialize-AccessitemaccessprofileresponseAppRefsInner  -CloudAppId 8c190e6787aa4ed9a90bd9d5344523fb `
 -CloudAppName Sample App
```

- Convert the resource to JSON
```powershell
$AccessitemaccessprofileresponseAppRefsInner | ConvertTo-JSON
```


[[Back to top]](#) 

