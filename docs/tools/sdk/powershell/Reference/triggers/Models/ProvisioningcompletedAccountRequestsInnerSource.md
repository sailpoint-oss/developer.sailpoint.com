---
id: provisioningcompleted-account-requests-inner-source
title: ProvisioningcompletedAccountRequestsInnerSource
pagination_label: ProvisioningcompletedAccountRequestsInnerSource
sidebar_label: ProvisioningcompletedAccountRequestsInnerSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProvisioningcompletedAccountRequestsInnerSource', 'ProvisioningcompletedAccountRequestsInnerSource'] 
slug: /tools/sdk/powershell/triggers/models/provisioningcompleted-account-requests-inner-source
tags: ['SDK', 'Software Development Kit', 'ProvisioningcompletedAccountRequestsInnerSource', 'ProvisioningcompletedAccountRequestsInnerSource']
---


# ProvisioningcompletedAccountRequestsInnerSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the object to which this reference applies | [required]
**Type** |  **Enum** [  "SOURCE" ] | The type of object that is referenced | [required]
**Name** | **String** | Human-readable display name of the object to which this reference applies | [required]

## Examples

- Prepare the resource
```powershell
$ProvisioningcompletedAccountRequestsInnerSource = Initialize-ProvisioningcompletedAccountRequestsInnerSource  -Id 4e4d982dddff4267ab12f0f1e72b5a6d `
 -Type SOURCE `
 -Name Corporate Active Directory
```

- Convert the resource to JSON
```powershell
$ProvisioningcompletedAccountRequestsInnerSource | ConvertTo-JSON
```


[[Back to top]](#) 

