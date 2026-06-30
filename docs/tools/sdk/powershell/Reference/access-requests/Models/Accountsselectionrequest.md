---
id: accountsselectionrequest
title: Accountsselectionrequest
pagination_label: Accountsselectionrequest
sidebar_label: Accountsselectionrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accountsselectionrequest', 'Accountsselectionrequest'] 
slug: /tools/sdk/powershell/accessrequests/models/accountsselectionrequest
tags: ['SDK', 'Software Development Kit', 'Accountsselectionrequest', 'Accountsselectionrequest']
---


# Accountsselectionrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedFor** | **[]String** | A list of Identity IDs for whom the Access is requested. | [required]
**RequestType** | [**Accessrequesttype**](accessrequesttype) |  | [optional] 
**RequestedItems** | [**[]Accessrequestitem**](accessrequestitem) |  | [required]
**ClientMetadata** | **map[string]String** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities.   | [optional] 

## Examples

- Prepare the resource
```powershell
$Accountsselectionrequest = Initialize-Accountsselectionrequest  -RequestedFor 2c918084660f45d6016617daa9210584 `
 -RequestType null `
 -RequestedItems null `
 -ClientMetadata {"requestedAppId":"2c91808f7892918f0178b78da4a305a1","requestedAppName":"test-app"}
```

- Convert the resource to JSON
```powershell
$Accountsselectionrequest | ConvertTo-JSON
```


[[Back to top]](#) 

