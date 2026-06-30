---
id: requesteditemstatus-provisioning-details
title: RequesteditemstatusProvisioningDetails
pagination_label: RequesteditemstatusProvisioningDetails
sidebar_label: RequesteditemstatusProvisioningDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequesteditemstatusProvisioningDetails', 'RequesteditemstatusProvisioningDetails'] 
slug: /tools/sdk/powershell/accessrequests/models/requesteditemstatus-provisioning-details
tags: ['SDK', 'Software Development Kit', 'RequesteditemstatusProvisioningDetails', 'RequesteditemstatusProvisioningDetails']
---


# RequesteditemstatusProvisioningDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OrderedSubPhaseReferences** | **String** | Ordered CSV of sub phase references to objects that contain more information about provisioning. For example, this can contain ""manualWorkItemDetails"" which indicate that there is further information in that object for this phase. | [optional] 

## Examples

- Prepare the resource
```powershell
$RequesteditemstatusProvisioningDetails = Initialize-RequesteditemstatusProvisioningDetails  -OrderedSubPhaseReferences manualWorkItemDetails
```

- Convert the resource to JSON
```powershell
$RequesteditemstatusProvisioningDetails | ConvertTo-JSON
```


[[Back to top]](#) 

