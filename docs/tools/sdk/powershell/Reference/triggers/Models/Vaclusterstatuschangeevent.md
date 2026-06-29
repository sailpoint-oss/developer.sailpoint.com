---
id: vaclusterstatuschangeevent
title: Vaclusterstatuschangeevent
pagination_label: Vaclusterstatuschangeevent
sidebar_label: Vaclusterstatuschangeevent
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Vaclusterstatuschangeevent', 'Vaclusterstatuschangeevent'] 
slug: /tools/sdk/powershell/triggers/models/vaclusterstatuschangeevent
tags: ['SDK', 'Software Development Kit', 'Vaclusterstatuschangeevent', 'Vaclusterstatuschangeevent']
---


# Vaclusterstatuschangeevent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Created** | **System.DateTime** | The date and time the status change occurred. | [required]
**Type** |  **Enum** [  "SOURCE",    "CLUSTER" ] | The type of the object that initiated this event. | [required]
**Application** | [**VaclusterstatuschangeeventApplication**](vaclusterstatuschangeevent-application) |  | [required]
**HealthCheckResult** | [**VaclusterstatuschangeeventHealthCheckResult**](vaclusterstatuschangeevent-health-check-result) |  | [required]
**PreviousHealthCheckResult** | [**VaclusterstatuschangeeventPreviousHealthCheckResult**](vaclusterstatuschangeevent-previous-health-check-result) |  | [required]

## Examples

- Prepare the resource
```powershell
$Vaclusterstatuschangeevent = Initialize-Vaclusterstatuschangeevent  -Created 2020-06-29T22:01:50.474Z `
 -Type CLUSTER `
 -Application null `
 -HealthCheckResult null `
 -PreviousHealthCheckResult null
```

- Convert the resource to JSON
```powershell
$Vaclusterstatuschangeevent | ConvertTo-JSON
```


[[Back to top]](#) 

