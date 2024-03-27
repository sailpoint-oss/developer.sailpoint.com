---
id: provisioning-details
title: ProvisioningDetails
pagination_label: ProvisioningDetails
sidebar_label: ProvisioningDetails
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ProvisioningDetails'] 
slug: /tools/sdk/powershell/beta/models/provisioning-details
tags: ['SDK', 'Software Development Kit', 'ProvisioningDetails']
---


# ProvisioningDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OrderedSubPhaseReferences** |  Pointer to **String** | Ordered CSV of sub phase references to objects that contain more information about provisioning. For example, this can contain &quot;&quot;manualWorkItemDetails&quot;&quot; which indicate that there is further information in that object for this phase. | [optional] 

## Examples

- Prepare the resource
```powershell
$ProvisioningDetails = Initialize-PSSailpointBetaProvisioningDetails  -OrderedSubPhaseReferences manualWorkItemDetails
```

- Convert the resource to JSON
```powershell
$ProvisioningDetails | ConvertTo-JSON
```


[[Back to top]](#) 

