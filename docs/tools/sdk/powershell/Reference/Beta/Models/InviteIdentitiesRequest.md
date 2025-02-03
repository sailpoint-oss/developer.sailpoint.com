---
id: beta-invite-identities-request
title: InviteIdentitiesRequest
pagination_label: InviteIdentitiesRequest
sidebar_label: InviteIdentitiesRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'InviteIdentitiesRequest', 'BetaInviteIdentitiesRequest'] 
slug: /tools/sdk/powershell/beta/models/invite-identities-request
tags: ['SDK', 'Software Development Kit', 'InviteIdentitiesRequest', 'BetaInviteIdentitiesRequest']
---


# InviteIdentitiesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]String** | The list of Identities IDs to invite - required when 'uninvited' is false | [optional] 
**Uninvited** | **Boolean** | indicator (optional) to invite all unregistered identities in the system within a limit 1000. This parameter makes sense only when 'ids' is empty. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$InviteIdentitiesRequest = Initialize-PSSailpoint.BetaInviteIdentitiesRequest  -Ids [2b568c65bc3c4c57a43bd97e3a8e55, 2c9180867769897d01776ed5f125512f] `
 -Uninvited false
```

- Convert the resource to JSON
```powershell
$InviteIdentitiesRequest | ConvertTo-JSON
```


[[Back to top]](#) 

