---
id: v2025-role-mining-identity-distribution
title: RoleMiningIdentityDistribution
pagination_label: RoleMiningIdentityDistribution
sidebar_label: RoleMiningIdentityDistribution
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningIdentityDistribution', 'V2025RoleMiningIdentityDistribution'] 
slug: /tools/sdk/powershell/v2025/models/role-mining-identity-distribution
tags: ['SDK', 'Software Development Kit', 'RoleMiningIdentityDistribution', 'V2025RoleMiningIdentityDistribution']
---


# RoleMiningIdentityDistribution

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeName** | **String** | Id of the potential role | [optional] 
**Distribution** | [**[]System.Collections.Hashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningIdentityDistribution = Initialize-PSSailpoint.V2025RoleMiningIdentityDistribution  -AttributeName department `
 -Distribution [{attributeValue=NM Tier 3, count=6}]
```

- Convert the resource to JSON
```powershell
$RoleMiningIdentityDistribution | ConvertTo-JSON
```


[[Back to top]](#) 

