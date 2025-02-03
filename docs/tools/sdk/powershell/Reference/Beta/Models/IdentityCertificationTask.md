---
id: beta-identity-certification-task
title: IdentityCertificationTask
pagination_label: IdentityCertificationTask
sidebar_label: IdentityCertificationTask
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityCertificationTask', 'BetaIdentityCertificationTask'] 
slug: /tools/sdk/powershell/beta/models/identity-certification-task
tags: ['SDK', 'Software Development Kit', 'IdentityCertificationTask', 'BetaIdentityCertificationTask']
---


# IdentityCertificationTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The task id | [optional] 
**CertificationId** | **String** | The certification id | [optional] 
**Type** |  **Enum** [  "REASSIGN" ] |  | [optional] 
**Status** |  **Enum** [  "QUEUED",    "IN_PROGRESS",    "SUCCESS",    "ERROR" ] |  | [optional] 
**Errors** | **[]String** | Any errors executing the task (Optional). | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityCertificationTask = Initialize-PSSailpoint.BetaIdentityCertificationTask  -Id abcd-ef12-3456 `
 -CertificationId ef38f94347e94562b5bb8424a56397d8 `
 -Type null `
 -Status null `
 -Errors []
```

- Convert the resource to JSON
```powershell
$IdentityCertificationTask | ConvertTo-JSON
```


[[Back to top]](#) 

