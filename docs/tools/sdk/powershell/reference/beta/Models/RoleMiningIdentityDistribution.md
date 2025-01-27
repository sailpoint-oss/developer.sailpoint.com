---
id: beta-role-mining-identity-distribution
title: RoleMiningIdentityDistribution
pagination_label: RoleMiningIdentityDistribution
sidebar_label: RoleMiningIdentityDistribution
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningIdentityDistribution'] 
slug: /tools/sdk/powershell/beta/models/role-mining-identity-distribution
tags: ['SDK', 'Software Development Kit', 'RoleMiningIdentityDistribution']
---


# RoleMiningIdentityDistribution

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeName** |  Pointer to **String** | Id of the potential role | [optional] 
**Distribution** |  Pointer to **[]System.Collections.Hashtable** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningIdentityDistribution = Initialize-PSSailpoint.BetaRoleMiningIdentityDistribution  -AttributeName department `
 -Distribution [{attributeValue&#x3D;NM Tier 3, count&#x3D;6}]
```

- Convert the resource to JSON
```powershell
$RoleMiningIdentityDistribution | ConvertTo-JSON
```


[[Back to top]](#) 

