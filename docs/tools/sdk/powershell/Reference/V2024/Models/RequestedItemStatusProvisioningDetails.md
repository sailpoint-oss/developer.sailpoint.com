---
id: v2024-requested-item-status-provisioning-details
title: RequestedItemStatusProvisioningDetails
pagination_label: RequestedItemStatusProvisioningDetails
sidebar_label: RequestedItemStatusProvisioningDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequestedItemStatusProvisioningDetails', 'V2024RequestedItemStatusProvisioningDetails'] 
slug: /tools/sdk/powershell/v2024/models/requested-item-status-provisioning-details
tags: ['SDK', 'Software Development Kit', 'RequestedItemStatusProvisioningDetails', 'V2024RequestedItemStatusProvisioningDetails']
---


# RequestedItemStatusProvisioningDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OrderedSubPhaseReferences** |  Pointer to **String** | Ordered CSV of sub phase references to objects that contain more information about provisioning. For example, this can contain ""manualWorkItemDetails"" which indicate that there is further information in that object for this phase. | [optional] 

## Examples

- Prepare the resource
```powershell
$RequestedItemStatusProvisioningDetails = Initialize-PSSailpoint.V2024RequestedItemStatusProvisioningDetails  -OrderedSubPhaseReferences manualWorkItemDetails
```

- Convert the resource to JSON
```powershell
$RequestedItemStatusProvisioningDetails | ConvertTo-JSON
```


[[Back to top]](#) 

