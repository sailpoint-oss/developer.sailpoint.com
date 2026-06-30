---
id: accessrequestresponse
title: Accessrequestresponse
pagination_label: Accessrequestresponse
sidebar_label: Accessrequestresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessrequestresponse', 'Accessrequestresponse'] 
slug: /tools/sdk/powershell/accessrequests/models/accessrequestresponse
tags: ['SDK', 'Software Development Kit', 'Accessrequestresponse', 'Accessrequestresponse']
---


# Accessrequestresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NewRequests** | [**[]Accessrequesttracking**](accessrequesttracking) | A list of new access request tracking data mapped to the values requested. | [optional] 
**ExistingRequests** | [**[]Accessrequesttracking**](accessrequesttracking) | A list of existing access request tracking data mapped to the values requested.  This indicates access has already been requested for this item. | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessrequestresponse = Initialize-Accessrequestresponse  -NewRequests [{"requestedFor":"899fd612ecfc4cf3bf48f14d0afdef89","requestedItemsDetails":[{"type":"ENTITLEMENT","id":"779c6fd7171540bba1184e5946112c28"}],"attributesHash":-1928438224,"accessRequestIds":["5d3118c518a44ec7805450d53479ccdb"]}] `
 -ExistingRequests [{"requestedFor":"899fd612ecfc4cf3bf48f14d0afdef89","requestedItemsDetails":[{"type":"ROLE","id":"779c6fd7171540bbc1184e5946112c28"}],"attributesHash":2843118224,"accessRequestIds":["5d3118c518a44ec7805450d53479ccdc"]}]
```

- Convert the resource to JSON
```powershell
$Accessrequestresponse | ConvertTo-JSON
```


[[Back to top]](#) 

