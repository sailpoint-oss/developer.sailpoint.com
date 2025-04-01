---
id: v2025-orphan-identities-report-arguments
title: OrphanIdentitiesReportArguments
pagination_label: OrphanIdentitiesReportArguments
sidebar_label: OrphanIdentitiesReportArguments
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'OrphanIdentitiesReportArguments', 'V2025OrphanIdentitiesReportArguments'] 
slug: /tools/sdk/powershell/v2025/models/orphan-identities-report-arguments
tags: ['SDK', 'Software Development Kit', 'OrphanIdentitiesReportArguments', 'V2025OrphanIdentitiesReportArguments']
---


# OrphanIdentitiesReportArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SelectedFormats** | **[]String** | Output report file formats. These are formats for calling GET endpoint as query parameter 'fileFormat'.  In case report won't have this argument there will be ['CSV', 'PDF'] as default. | [optional] 

## Examples

- Prepare the resource
```powershell
$OrphanIdentitiesReportArguments = Initialize-PSSailpoint.V2025OrphanIdentitiesReportArguments  -SelectedFormats [CSV]
```

- Convert the resource to JSON
```powershell
$OrphanIdentitiesReportArguments | ConvertTo-JSON
```


[[Back to top]](#) 

