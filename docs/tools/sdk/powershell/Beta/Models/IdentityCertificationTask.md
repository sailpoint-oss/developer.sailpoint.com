---
id: identity-certification-task
title: IdentityCertificationTask
pagination_label: IdentityCertificationTask
sidebar_label: IdentityCertificationTask
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityCertificationTask'] 
slug: /tools/sdk/powershell/beta/models/identity-certification-task
tags: ['SDK', 'Software Development Kit', 'IdentityCertificationTask']
---


# IdentityCertificationTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The task id | [optional] 
**CertificationId** |  Pointer to **String** | The certification id | [optional] 
**Type** |  Pointer to  **Enum** [  "REASSIGN" ] |  | [optional] 
**Status** |  Pointer to  **Enum** [  "QUEUED",    "IN_PROGRESS",    "SUCCESS",    "ERROR" ] |  | [optional] 
**Errors** |  Pointer to **[]String** | Any errors executing the task (Optional). | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityCertificationTask = Initialize-BetaIdentityCertificationTask  -Id abcd-ef12-3456 `
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

