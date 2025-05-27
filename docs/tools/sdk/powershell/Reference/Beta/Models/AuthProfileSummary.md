---
id: beta-auth-profile-summary
title: AuthProfileSummary
pagination_label: AuthProfileSummary
sidebar_label: AuthProfileSummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AuthProfileSummary', 'BetaAuthProfileSummary'] 
slug: /tools/sdk/powershell/beta/models/auth-profile-summary
tags: ['SDK', 'Software Development Kit', 'AuthProfileSummary', 'BetaAuthProfileSummary']
---


# AuthProfileSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Tenant** | **String** | Tenant name. | [optional] 
**Id** | **String** | Identity ID. | [optional] 

## Examples

- Prepare the resource
```powershell
$AuthProfileSummary = Initialize-BetaAuthProfileSummary  -Tenant test-tenant `
 -Id 2c91808458ae7a4f0158b1bbf8af0628
```

- Convert the resource to JSON
```powershell
$AuthProfileSummary | ConvertTo-JSON
```


[[Back to top]](#) 

