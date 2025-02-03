---
id: beta-identity-compare-response
title: IdentityCompareResponse
pagination_label: IdentityCompareResponse
sidebar_label: IdentityCompareResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityCompareResponse', 'BetaIdentityCompareResponse'] 
slug: /tools/sdk/powershell/beta/models/identity-compare-response
tags: ['SDK', 'Software Development Kit', 'IdentityCompareResponse', 'BetaIdentityCompareResponse']
---


# IdentityCompareResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessItemDiff** | [**map[string]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on completion of the violation check. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityCompareResponse = Initialize-PSSailpoint.BetaIdentityCompareResponse  -AccessItemDiff null
```

- Convert the resource to JSON
```powershell
$IdentityCompareResponse | ConvertTo-JSON
```


[[Back to top]](#) 

