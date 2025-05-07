---
id: beta-role-mining-identity-distribution
title: RoleMiningIdentityDistribution
pagination_label: RoleMiningIdentityDistribution
sidebar_label: RoleMiningIdentityDistribution
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningIdentityDistribution', 'BetaRoleMiningIdentityDistribution'] 
slug: /tools/sdk/powershell/beta/models/role-mining-identity-distribution
tags: ['SDK', 'Software Development Kit', 'RoleMiningIdentityDistribution', 'BetaRoleMiningIdentityDistribution']
---


# RoleMiningIdentityDistribution

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeName** | **String** | Id of the potential role | [optional] 
**Distribution** | **[]System.Collections.Hashtable** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningIdentityDistribution = Initialize-BetaRoleMiningIdentityDistribution  -AttributeName department `
 -Distribution [{attributeValue=NM Tier 3, count=6}]
```

- Convert the resource to JSON
```powershell
$RoleMiningIdentityDistribution | ConvertTo-JSON
```


[[Back to top]](#) 

