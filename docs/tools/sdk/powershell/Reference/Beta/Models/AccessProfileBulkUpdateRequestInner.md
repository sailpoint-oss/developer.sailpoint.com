---
id: beta-access-profile-bulk-update-request-inner
title: AccessProfileBulkUpdateRequestInner
pagination_label: AccessProfileBulkUpdateRequestInner
sidebar_label: AccessProfileBulkUpdateRequestInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessProfileBulkUpdateRequestInner', 'BetaAccessProfileBulkUpdateRequestInner'] 
slug: /tools/sdk/powershell/beta/models/access-profile-bulk-update-request-inner
tags: ['SDK', 'Software Development Kit', 'AccessProfileBulkUpdateRequestInner', 'BetaAccessProfileBulkUpdateRequestInner']
---


# AccessProfileBulkUpdateRequestInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Access Profile ID. | [optional] 
**Requestable** | **Boolean** | Access Profile is requestable or not. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileBulkUpdateRequestInner = Initialize-PSSailpoint.BetaAccessProfileBulkUpdateRequestInner  -Id 464ae7bf-791e-49fd-b746-06a2e4a8 `
 -Requestable false
```

- Convert the resource to JSON
```powershell
$AccessProfileBulkUpdateRequestInner | ConvertTo-JSON
```


[[Back to top]](#) 

