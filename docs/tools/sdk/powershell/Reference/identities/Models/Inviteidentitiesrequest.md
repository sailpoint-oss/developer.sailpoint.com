---
id: inviteidentitiesrequest
title: Inviteidentitiesrequest
pagination_label: Inviteidentitiesrequest
sidebar_label: Inviteidentitiesrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Inviteidentitiesrequest', 'Inviteidentitiesrequest'] 
slug: /tools/sdk/powershell/identities/models/inviteidentitiesrequest
tags: ['SDK', 'Software Development Kit', 'Inviteidentitiesrequest', 'Inviteidentitiesrequest']
---


# Inviteidentitiesrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]String** | The list of Identities IDs to invite - required when 'uninvited' is false | [optional] 
**Uninvited** | **Boolean** | indicator (optional) to invite all unregistered identities in the system within a limit 1000. This parameter makes sense only when 'ids' is empty. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Inviteidentitiesrequest = Initialize-Inviteidentitiesrequest  -Ids ["2b568c65bc3c4c57a43bd97e3a8e55","2c9180867769897d01776ed5f125512f"] `
 -Uninvited false
```

- Convert the resource to JSON
```powershell
$Inviteidentitiesrequest | ConvertTo-JSON
```


[[Back to top]](#) 

