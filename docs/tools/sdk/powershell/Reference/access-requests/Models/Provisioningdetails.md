---
id: provisioningdetails
title: Provisioningdetails
pagination_label: Provisioningdetails
sidebar_label: Provisioningdetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Provisioningdetails', 'Provisioningdetails'] 
slug: /tools/sdk/powershell/accessrequests/models/provisioningdetails
tags: ['SDK', 'Software Development Kit', 'Provisioningdetails', 'Provisioningdetails']
---


# Provisioningdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OrderedSubPhaseReferences** | **String** | Ordered CSV of sub phase references to objects that contain more information about provisioning. For example, this can contain ""manualWorkItemDetails"" which indicate that there is further information in that object for this phase. | [optional] 

## Examples

- Prepare the resource
```powershell
$Provisioningdetails = Initialize-Provisioningdetails  -OrderedSubPhaseReferences manualWorkItemDetails
```

- Convert the resource to JSON
```powershell
$Provisioningdetails | ConvertTo-JSON
```


[[Back to top]](#) 

