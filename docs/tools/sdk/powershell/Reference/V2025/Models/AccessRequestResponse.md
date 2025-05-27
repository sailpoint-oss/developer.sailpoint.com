---
id: v2025-access-request-response
title: AccessRequestResponse
pagination_label: AccessRequestResponse
sidebar_label: AccessRequestResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestResponse', 'V2025AccessRequestResponse'] 
slug: /tools/sdk/powershell/v2025/models/access-request-response
tags: ['SDK', 'Software Development Kit', 'AccessRequestResponse', 'V2025AccessRequestResponse']
---


# AccessRequestResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NewRequests** | [**[]AccessRequestTracking**](access-request-tracking) | A list of new access request tracking data mapped to the values requested. | [optional] 
**ExistingRequests** | [**[]AccessRequestTracking**](access-request-tracking) | A list of existing access request tracking data mapped to the values requested.  This indicates access has already been requested for this item. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestResponse = Initialize-V2025AccessRequestResponse  -NewRequests [{requestedFor=899fd612ecfc4cf3bf48f14d0afdef89, requestedItemsDetails=[{type=ENTITLEMENT, id=779c6fd7171540bba1184e5946112c28}], attributesHash=-1928438224, accessRequestIds=[5d3118c518a44ec7805450d53479ccdb]}] `
 -ExistingRequests [{requestedFor=899fd612ecfc4cf3bf48f14d0afdef89, requestedItemsDetails=[{type=ROLE, id=779c6fd7171540bbc1184e5946112c28}], attributesHash=2843118224, accessRequestIds=[5d3118c518a44ec7805450d53479ccdc]}]
```

- Convert the resource to JSON
```powershell
$AccessRequestResponse | ConvertTo-JSON
```


[[Back to top]](#) 

