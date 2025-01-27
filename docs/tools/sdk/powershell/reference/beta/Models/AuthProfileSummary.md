---
id: beta-auth-profile-summary
title: AuthProfileSummary
pagination_label: AuthProfileSummary
sidebar_label: AuthProfileSummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AuthProfileSummary'] 
slug: /tools/sdk/powershell/beta/models/auth-profile-summary
tags: ['SDK', 'Software Development Kit', 'AuthProfileSummary']
---


# AuthProfileSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Tenant** |  Pointer to **String** | Tenant name. | [optional] 
**Id** |  Pointer to **String** | Identity ID. | [optional] 

## Examples

- Prepare the resource
```powershell
$AuthProfileSummary = Initialize-PSSailpoint.BetaAuthProfileSummary  -Tenant test-tenant `
 -Id 2c91808458ae7a4f0158b1bbf8af0628
```

- Convert the resource to JSON
```powershell
$AuthProfileSummary | ConvertTo-JSON
```


[[Back to top]](#) 

