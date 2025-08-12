---
id: beta-provisioning-completed-account-requests-inner-source
title: ProvisioningCompletedAccountRequestsInnerSource
pagination_label: ProvisioningCompletedAccountRequestsInnerSource
sidebar_label: ProvisioningCompletedAccountRequestsInnerSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProvisioningCompletedAccountRequestsInnerSource', 'BetaProvisioningCompletedAccountRequestsInnerSource'] 
slug: /tools/sdk/powershell/beta/models/provisioning-completed-account-requests-inner-source
tags: ['SDK', 'Software Development Kit', 'ProvisioningCompletedAccountRequestsInnerSource', 'BetaProvisioningCompletedAccountRequestsInnerSource']
---


# ProvisioningCompletedAccountRequestsInnerSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Source ID. | [required]
**Type** |  **Enum** [  "SOURCE" ] | Source DTO type. | [required]
**Name** | **String** | Source name. | [required]

## Examples

- Prepare the resource
```powershell
$ProvisioningCompletedAccountRequestsInnerSource = Initialize-BetaProvisioningCompletedAccountRequestsInnerSource  -Id 4e4d982dddff4267ab12f0f1e72b5a6d `
 -Type SOURCE `
 -Name Corporate Active Directory
```

- Convert the resource to JSON
```powershell
$ProvisioningCompletedAccountRequestsInnerSource | ConvertTo-JSON
```


[[Back to top]](#) 

