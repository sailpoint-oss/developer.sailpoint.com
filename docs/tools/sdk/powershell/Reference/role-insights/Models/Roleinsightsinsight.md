---
id: roleinsightsinsight
title: Roleinsightsinsight
pagination_label: Roleinsightsinsight
sidebar_label: Roleinsightsinsight
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Roleinsightsinsight', 'Roleinsightsinsight'] 
slug: /tools/sdk/powershell/roleinsights/models/roleinsightsinsight
tags: ['SDK', 'Software Development Kit', 'Roleinsightsinsight', 'Roleinsightsinsight']
---


# Roleinsightsinsight

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | The number of identities in this role with the entitlement. | [optional] 
**IdentitiesWithAccess** | **Int32** | The number of identities in this role with the entitlement. | [optional] 
**IdentitiesImpacted** | **Int32** | The number of identities in this role that do not have the specified entitlement. | [optional] 
**TotalNumberOfIdentities** | **Int32** | The total number of identities. | [optional] 
**ImpactedIdentityNames** | **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Roleinsightsinsight = Initialize-Roleinsightsinsight  -Type ADD `
 -IdentitiesWithAccess 850 `
 -IdentitiesImpacted 150 `
 -TotalNumberOfIdentities 1000 `
 -ImpactedIdentityNames null
```

- Convert the resource to JSON
```powershell
$Roleinsightsinsight | ConvertTo-JSON
```


[[Back to top]](#) 

