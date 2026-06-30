---
id: forwardapprovaldto
title: Forwardapprovaldto
pagination_label: Forwardapprovaldto
sidebar_label: Forwardapprovaldto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Forwardapprovaldto', 'Forwardapprovaldto'] 
slug: /tools/sdk/powershell/accessrequestapprovals/models/forwardapprovaldto
tags: ['SDK', 'Software Development Kit', 'Forwardapprovaldto', 'Forwardapprovaldto']
---


# Forwardapprovaldto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NewOwnerId** | **String** | The Id of the new owner | [required]
**Comment** | **String** | The comment provided by the forwarder | [required]

## Examples

- Prepare the resource
```powershell
$Forwardapprovaldto = Initialize-Forwardapprovaldto  -NewOwnerId 2c91808568c529c60168cca6f90c1314 `
 -Comment 2c91808568c529c60168cca6f90c1313
```

- Convert the resource to JSON
```powershell
$Forwardapprovaldto | ConvertTo-JSON
```


[[Back to top]](#) 

