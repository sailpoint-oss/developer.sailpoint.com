---
id: requested-item-status-provisioning-details
title: RequestedItemStatusProvisioningDetails
pagination_label: RequestedItemStatusProvisioningDetails
sidebar_label: RequestedItemStatusProvisioningDetails
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'RequestedItemStatusProvisioningDetails'] 
slug: /tools/sdk/powershell/v3/models/requested-item-status-provisioning-details
tags: ['SDK', 'Software Development Kit', 'RequestedItemStatusProvisioningDetails']
---


# RequestedItemStatusProvisioningDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OrderedSubPhaseReferences** |  Pointer to **String** | Ordered CSV of sub phase references to objects that contain more information about provisioning. For example, this can contain &quot;&quot;manualWorkItemDetails&quot;&quot; which indicate that there is further information in that object for this phase. | [optional] 

## Examples

- Prepare the resource
```powershell
$RequestedItemStatusProvisioningDetails = Initialize-RequestedItemStatusProvisioningDetails  -OrderedSubPhaseReferences manualWorkItemDetails
```

- Convert the resource to JSON
```powershell
$RequestedItemStatusProvisioningDetails | ConvertTo-JSON
```


[[Back to top]](#) 

