---
id: beta-requested-item-status-provisioning-details
title: RequestedItemStatusProvisioningDetails
pagination_label: RequestedItemStatusProvisioningDetails
sidebar_label: RequestedItemStatusProvisioningDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequestedItemStatusProvisioningDetails', 'BetaRequestedItemStatusProvisioningDetails'] 
slug: /tools/sdk/powershell/beta/models/requested-item-status-provisioning-details
tags: ['SDK', 'Software Development Kit', 'RequestedItemStatusProvisioningDetails', 'BetaRequestedItemStatusProvisioningDetails']
---


# RequestedItemStatusProvisioningDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OrderedSubPhaseReferences** |  Pointer to **String** | Ordered CSV of sub phase references to objects that contain more information about provisioning. For example, this can contain ""manualWorkItemDetails"" which indicate that there is further information in that object for this phase. | [optional] 

## Examples

- Prepare the resource
```powershell
$RequestedItemStatusProvisioningDetails = Initialize-PSSailpoint.BetaRequestedItemStatusProvisioningDetails  -OrderedSubPhaseReferences manualWorkItemDetails
```

- Convert the resource to JSON
```powershell
$RequestedItemStatusProvisioningDetails | ConvertTo-JSON
```


[[Back to top]](#) 

