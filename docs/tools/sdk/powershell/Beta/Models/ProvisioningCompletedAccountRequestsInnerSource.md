---
id: provisioning-completed-account-requests-inner-source
title: ProvisioningCompletedAccountRequestsInnerSource
pagination_label: ProvisioningCompletedAccountRequestsInnerSource
sidebar_label: ProvisioningCompletedAccountRequestsInnerSource
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ProvisioningCompletedAccountRequestsInnerSource'] 
slug: /tools/sdk/powershell/beta/models/provisioning-completed-account-requests-inner-source
tags: ['SDK', 'Software Development Kit', 'ProvisioningCompletedAccountRequestsInnerSource']
---


# ProvisioningCompletedAccountRequestsInnerSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | ID of the object to which this reference applies | 
**Type** |   **Enum** [  "SOURCE" ] | The type of object that is referenced | 
**Name** |  **String** | Human-readable display name of the object to which this reference applies | 

## Examples

- Prepare the resource
```powershell
$ProvisioningCompletedAccountRequestsInnerSource = Initialize-PSSailpointBetaProvisioningCompletedAccountRequestsInnerSource  -Id 4e4d982dddff4267ab12f0f1e72b5a6d `
 -Type SOURCE `
 -Name Corporate Active Directory
```

- Convert the resource to JSON
```powershell
$ProvisioningCompletedAccountRequestsInnerSource | ConvertTo-JSON
```


[[Back to top]](#) 

