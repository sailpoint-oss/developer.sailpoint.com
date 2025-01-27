---
id: beta-access-request-response
title: AccessRequestResponse
pagination_label: AccessRequestResponse
sidebar_label: AccessRequestResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestResponse'] 
slug: /tools/sdk/powershell/beta/models/access-request-response
tags: ['SDK', 'Software Development Kit', 'AccessRequestResponse']
---


# AccessRequestResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NewRequests** |  Pointer to [**[]AccessRequestTracking**](access-request-tracking) | A list of new access request tracking data mapped to the values requested. | [optional] 
**ExistingRequests** |  Pointer to [**[]AccessRequestTracking**](access-request-tracking) | A list of existing access request tracking data mapped to the values requested.  This indicates access has already been requested for this item. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestResponse = Initialize-PSSailpoint.BetaAccessRequestResponse  -NewRequests [{requestedFor&#x3D;899fd612ecfc4cf3bf48f14d0afdef89, requestedItemsDetails&#x3D;[{type&#x3D;ENTITLEMENT, id&#x3D;779c6fd7171540bba1184e5946112c28}], attributesHash&#x3D;-1928438224, accessRequestIds&#x3D;[5d3118c518a44ec7805450d53479ccdb]}] `
 -ExistingRequests [{requestedFor&#x3D;899fd612ecfc4cf3bf48f14d0afdef89, requestedItemsDetails&#x3D;[{type&#x3D;ROLE, id&#x3D;779c6fd7171540bbc1184e5946112c28}], attributesHash&#x3D;2843118224, accessRequestIds&#x3D;[5d3118c518a44ec7805450d53479ccdc]}]
```

- Convert the resource to JSON
```powershell
$AccessRequestResponse | ConvertTo-JSON
```


[[Back to top]](#) 

