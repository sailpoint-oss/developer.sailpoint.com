---
id: beta-provisioning-details
title: ProvisioningDetails
pagination_label: ProvisioningDetails
sidebar_label: ProvisioningDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProvisioningDetails', 'BetaProvisioningDetails'] 
slug: /tools/sdk/powershell/beta/models/provisioning-details
tags: ['SDK', 'Software Development Kit', 'ProvisioningDetails', 'BetaProvisioningDetails']
---


# ProvisioningDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OrderedSubPhaseReferences** | **String** | Ordered CSV of sub phase references to objects that contain more information about provisioning. For example, this can contain ""manualWorkItemDetails"" which indicate that there is further information in that object for this phase. | [optional] 

## Examples

- Prepare the resource
```powershell
$ProvisioningDetails = Initialize-BetaProvisioningDetails  -OrderedSubPhaseReferences manualWorkItemDetails
```

- Convert the resource to JSON
```powershell
$ProvisioningDetails | ConvertTo-JSON
```


[[Back to top]](#) 

