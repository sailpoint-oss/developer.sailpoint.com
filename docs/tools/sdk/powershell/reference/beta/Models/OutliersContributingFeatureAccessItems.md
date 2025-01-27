---
id: beta-outliers-contributing-feature-access-items
title: OutliersContributingFeatureAccessItems
pagination_label: OutliersContributingFeatureAccessItems
sidebar_label: OutliersContributingFeatureAccessItems
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'OutliersContributingFeatureAccessItems'] 
slug: /tools/sdk/powershell/beta/models/outliers-contributing-feature-access-items
tags: ['SDK', 'Software Development Kit', 'OutliersContributingFeatureAccessItems']
---


# OutliersContributingFeatureAccessItems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The ID of the access item | [optional] 
**DisplayName** |  Pointer to **String** | the display name of the access item | [optional] 
**Description** |  Pointer to **String** | Description of the access item. | [optional] 
**AccessType** |  Pointer to  **Enum** [  "ENTITLEMENT",    "ACCESS_PROFILE",    "ROLE" ] | The type of the access item. | [optional] 
**SourceName** |  Pointer to **String** | the associated source name if it exists | [optional] 
**ExtremelyRare** |  Pointer to **Boolean** | rarest access | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$OutliersContributingFeatureAccessItems = Initialize-PSSailpoint.BetaOutliersContributingFeatureAccessItems  -Id 2c938083633d259901633d2623ec0375 `
 -DisplayName Applied Research Access `
 -Description Access to research information, lab results, and schematics `
 -AccessType ENTITLEMENT `
 -SourceName appName `
 -ExtremelyRare true
```

- Convert the resource to JSON
```powershell
$OutliersContributingFeatureAccessItems | ConvertTo-JSON
```


[[Back to top]](#) 

