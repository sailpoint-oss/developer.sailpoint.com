---
id: completedapproval-requested-for
title: CompletedapprovalRequestedFor
pagination_label: CompletedapprovalRequestedFor
sidebar_label: CompletedapprovalRequestedFor
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CompletedapprovalRequestedFor', 'CompletedapprovalRequestedFor'] 
slug: /tools/sdk/powershell/accessrequestapprovals/models/completedapproval-requested-for
tags: ['SDK', 'Software Development Kit', 'CompletedapprovalRequestedFor', 'CompletedapprovalRequestedFor']
---


# CompletedapprovalRequestedFor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Type of the object to which this reference applies | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$CompletedapprovalRequestedFor = Initialize-CompletedapprovalRequestedFor  -Type IDENTITY `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$CompletedapprovalRequestedFor | ConvertTo-JSON
```


[[Back to top]](#) 

