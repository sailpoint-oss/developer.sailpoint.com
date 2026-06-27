---
id: entitlementaccessrequestconfig-max-permitted-access-duration
title: EntitlementaccessrequestconfigMaxPermittedAccessDuration
pagination_label: EntitlementaccessrequestconfigMaxPermittedAccessDuration
sidebar_label: EntitlementaccessrequestconfigMaxPermittedAccessDuration
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementaccessrequestconfigMaxPermittedAccessDuration', 'EntitlementaccessrequestconfigMaxPermittedAccessDuration'] 
slug: /tools/sdk/powershell/sources/models/entitlementaccessrequestconfig-max-permitted-access-duration
tags: ['SDK', 'Software Development Kit', 'EntitlementaccessrequestconfigMaxPermittedAccessDuration', 'EntitlementaccessrequestconfigMaxPermittedAccessDuration']
---


# EntitlementaccessrequestconfigMaxPermittedAccessDuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | **Int32** | The numeric value of the duration. | [optional] 
**TimeUnit** |  **Enum** [  "HOURS",    "DAYS",    "WEEKS",    "MONTHS" ] | The time unit for the duration. | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementaccessrequestconfigMaxPermittedAccessDuration = Initialize-EntitlementaccessrequestconfigMaxPermittedAccessDuration  -Value 5 `
 -TimeUnit DAYS
```

- Convert the resource to JSON
```powershell
$EntitlementaccessrequestconfigMaxPermittedAccessDuration | ConvertTo-JSON
```


[[Back to top]](#) 

