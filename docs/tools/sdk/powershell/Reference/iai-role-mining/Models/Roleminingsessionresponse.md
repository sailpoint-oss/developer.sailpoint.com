---
id: roleminingsessionresponse
title: Roleminingsessionresponse
pagination_label: Roleminingsessionresponse
sidebar_label: Roleminingsessionresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Roleminingsessionresponse', 'Roleminingsessionresponse'] 
slug: /tools/sdk/powershell/iairolemining/models/roleminingsessionresponse
tags: ['SDK', 'Software Development Kit', 'Roleminingsessionresponse', 'Roleminingsessionresponse']
---


# Roleminingsessionresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scope** | [**Roleminingsessionscope**](roleminingsessionscope) |  | [optional] 
**MinNumIdentitiesInPotentialRole** | **Int32** | Minimum number of identities in a potential role | [optional] 
**ScopingMethod** | **String** | The scoping method of the role mining session | [optional] 
**PrescribedPruneThreshold** | **Int32** | The computed (or prescribed) prune threshold for this session | [optional] 
**PruneThreshold** | **Int32** | The prune threshold to be used for this role mining session | [optional] 
**PotentialRoleCount** | **Int32** | The number of potential roles | [optional] 
**PotentialRolesReadyCount** | **Int32** | The number of potential roles which have completed processing | [optional] 
**Status** | [**Roleminingsessionstatus**](roleminingsessionstatus) |  | [optional] 
**EmailRecipientId** | **String** | The id of the user who will receive an email about the role mining session | [optional] 
**CreatedBy** | [**RoleminingsessionresponseCreatedBy**](roleminingsessionresponse-created-by) |  | [optional] 
**IdentityCount** | **Int32** | The number of identities | [optional] 
**Saved** | **Boolean** | The session's saved status | [optional] [default to $false]
**Name** | **String** | The session's saved name | [optional] 
**DataFilePath** | **String** | The data file path of the role mining session | [optional] 
**Id** | **String** | Session Id for this role mining session | [optional] 
**CreatedDate** | **System.DateTime** | The date-time when this role mining session was created. | [optional] 
**ModifiedDate** | **System.DateTime** | The date-time when this role mining session was completed. | [optional] 
**Type** | [**Roleminingroletype**](roleminingroletype) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Roleminingsessionresponse = Initialize-Roleminingsessionresponse  -Scope null `
 -MinNumIdentitiesInPotentialRole 20 `
 -ScopingMethod AUTO_RM `
 -PrescribedPruneThreshold 83 `
 -PruneThreshold 70 `
 -PotentialRoleCount 8 `
 -PotentialRolesReadyCount 4 `
 -Status null `
 -EmailRecipientId null `
 -CreatedBy null `
 -IdentityCount 39 `
 -Saved true `
 -Name Saved RM Session - 07/10 `
 -DataFilePath null `
 -Id 8c190e67-87aa-4ed9-a90b-d9d5344523fb `
 -CreatedDate null `
 -ModifiedDate null `
 -Type null
```

- Convert the resource to JSON
```powershell
$Roleminingsessionresponse | ConvertTo-JSON
```


[[Back to top]](#) 

