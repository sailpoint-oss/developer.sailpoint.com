---
id: v2025-outliers-contributing-feature-access-items
title: OutliersContributingFeatureAccessItems
pagination_label: OutliersContributingFeatureAccessItems
sidebar_label: OutliersContributingFeatureAccessItems
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'OutliersContributingFeatureAccessItems', 'V2025OutliersContributingFeatureAccessItems'] 
slug: /tools/sdk/powershell/v2025/models/outliers-contributing-feature-access-items
tags: ['SDK', 'Software Development Kit', 'OutliersContributingFeatureAccessItems', 'V2025OutliersContributingFeatureAccessItems']
---


# OutliersContributingFeatureAccessItems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of the access item | [optional] 
**DisplayName** | **String** | the display name of the access item | [optional] 
**Description** | **String** | Description of the access item. | [optional] 
**AccessType** |  **Enum** [  "ENTITLEMENT",    "ACCESS_PROFILE",    "ROLE" ] | The type of the access item. | [optional] 
**SourceName** | **String** | the associated source name if it exists | [optional] 
**ExtremelyRare** | **Boolean** | rarest access | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$OutliersContributingFeatureAccessItems = Initialize-V2025OutliersContributingFeatureAccessItems  -Id 2c938083633d259901633d2623ec0375 `
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

