---
id: jitaccessoperationrequest
title: Jitaccessoperationrequest
pagination_label: Jitaccessoperationrequest
sidebar_label: Jitaccessoperationrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Jitaccessoperationrequest', 'Jitaccessoperationrequest'] 
slug: /tools/sdk/powershell/jitaccess/models/jitaccessoperationrequest
tags: ['SDK', 'Software Development Kit', 'Jitaccessoperationrequest', 'Jitaccessoperationrequest']
---


# Jitaccessoperationrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** |  **Enum** [  "replace" ] | Operation type. Defaults to `replace` if omitted. | [optional] [default to "replace"]
**Path** |  **Enum** [  "/entitlementIds",    "/maxActivationPeriodMins",    "/maxActivationPeriodExtensionMins",    "/defaultMaxActivationPeriodMins",    "/defaultMaxActivationPeriodExtensionMins",    "/notificationRecipients",    "/notificationTemplate",    "/applyToFutureAssignments" ] | Path to replace. Only the following JSON Pointer-style paths are supported.  | [required]
**Value** | [**JitaccessoperationrequestValue**](jitaccessoperationrequest-value) |  | [required]

## Examples

- Prepare the resource
```powershell
$Jitaccessoperationrequest = Initialize-Jitaccessoperationrequest  -Op replace `
 -Path /maxActivationPeriodMins `
 -Value null
```

- Convert the resource to JSON
```powershell
$Jitaccessoperationrequest | ConvertTo-JSON
```


[[Back to top]](#) 

