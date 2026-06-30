---
id: outlierscontributingfeatureaccessitems
title: Outlierscontributingfeatureaccessitems
pagination_label: Outlierscontributingfeatureaccessitems
sidebar_label: Outlierscontributingfeatureaccessitems
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Outlierscontributingfeatureaccessitems', 'Outlierscontributingfeatureaccessitems'] 
slug: /tools/sdk/powershell/iaioutliers/models/outlierscontributingfeatureaccessitems
tags: ['SDK', 'Software Development Kit', 'Outlierscontributingfeatureaccessitems', 'Outlierscontributingfeatureaccessitems']
---


# Outlierscontributingfeatureaccessitems

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
$Outlierscontributingfeatureaccessitems = Initialize-Outlierscontributingfeatureaccessitems  -Id 2c938083633d259901633d2623ec0375 `
 -DisplayName Applied Research Access `
 -Description Access to research information, lab results, and schematics `
 -AccessType ENTITLEMENT `
 -SourceName appName `
 -ExtremelyRare true
```

- Convert the resource to JSON
```powershell
$Outlierscontributingfeatureaccessitems | ConvertTo-JSON
```


[[Back to top]](#) 

