---
id: v2025-provisioning-completed-account-requests-inner-source
title: ProvisioningCompletedAccountRequestsInnerSource
pagination_label: ProvisioningCompletedAccountRequestsInnerSource
sidebar_label: ProvisioningCompletedAccountRequestsInnerSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProvisioningCompletedAccountRequestsInnerSource', 'V2025ProvisioningCompletedAccountRequestsInnerSource'] 
slug: /tools/sdk/powershell/v2025/models/provisioning-completed-account-requests-inner-source
tags: ['SDK', 'Software Development Kit', 'ProvisioningCompletedAccountRequestsInnerSource', 'V2025ProvisioningCompletedAccountRequestsInnerSource']
---


# ProvisioningCompletedAccountRequestsInnerSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the object to which this reference applies | [required]
**Type** |  **Enum** [  "SOURCE" ] | The type of object that is referenced | [required]
**Name** | **String** | Human-readable display name of the object to which this reference applies | [required]

## Examples

- Prepare the resource
```powershell
$ProvisioningCompletedAccountRequestsInnerSource = Initialize-V2025ProvisioningCompletedAccountRequestsInnerSource  -Id 4e4d982dddff4267ab12f0f1e72b5a6d `
 -Type SOURCE `
 -Name Corporate Active Directory
```

- Convert the resource to JSON
```powershell
$ProvisioningCompletedAccountRequestsInnerSource | ConvertTo-JSON
```


[[Back to top]](#) 

