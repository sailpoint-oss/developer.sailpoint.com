---
id: identitypreviewresponse
title: Identitypreviewresponse
pagination_label: Identitypreviewresponse
sidebar_label: Identitypreviewresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identitypreviewresponse', 'Identitypreviewresponse'] 
slug: /tools/sdk/powershell/identityprofiles/models/identitypreviewresponse
tags: ['SDK', 'Software Development Kit', 'Identitypreviewresponse', 'Identitypreviewresponse']
---


# Identitypreviewresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | [**IdentitypreviewresponseIdentity**](identitypreviewresponse-identity) |  | [optional] 
**PreviewAttributes** | [**[]Identityattributepreview**](identityattributepreview) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Identitypreviewresponse = Initialize-Identitypreviewresponse  -Identity null `
 -PreviewAttributes null
```

- Convert the resource to JSON
```powershell
$Identitypreviewresponse | ConvertTo-JSON
```


[[Back to top]](#) 

