---
id: accessrequested
title: Accessrequested
pagination_label: Accessrequested
sidebar_label: Accessrequested
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessrequested', 'Accessrequested'] 
slug: /tools/sdk/powershell/identityhistory/models/accessrequested
tags: ['SDK', 'Software Development Kit', 'Accessrequested', 'Accessrequested']
---


# Accessrequested

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequest** | [**Accessrequestresponse2**](accessrequestresponse2) |  | [required]
**IdentityId** | **String** | the identity id | [optional] 
**EventType** | **String** | the event type | [optional] 
**DateTime** | **String** | the date of event | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessrequested = Initialize-Accessrequested  -AccessRequest null `
 -IdentityId 8a80828f643d484f01643e14202e206f `
 -EventType AccessRequested `
 -DateTime 2019-03-08T22:37:33.901Z
```

- Convert the resource to JSON
```powershell
$Accessrequested | ConvertTo-JSON
```


[[Back to top]](#) 

