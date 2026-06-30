---
id: identitysnapshotsummaryresponse
title: Identitysnapshotsummaryresponse
pagination_label: Identitysnapshotsummaryresponse
sidebar_label: Identitysnapshotsummaryresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identitysnapshotsummaryresponse', 'Identitysnapshotsummaryresponse'] 
slug: /tools/sdk/powershell/identityhistory/models/identitysnapshotsummaryresponse
tags: ['SDK', 'Software Development Kit', 'Identitysnapshotsummaryresponse', 'Identitysnapshotsummaryresponse']
---


# Identitysnapshotsummaryresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Snapshot** | **String** | the date when the identity record was created | [optional] 

## Examples

- Prepare the resource
```powershell
$Identitysnapshotsummaryresponse = Initialize-Identitysnapshotsummaryresponse  -Snapshot 2007-03-01T13:00:00.000Z
```

- Convert the resource to JSON
```powershell
$Identitysnapshotsummaryresponse | ConvertTo-JSON
```


[[Back to top]](#) 

