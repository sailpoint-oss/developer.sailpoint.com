---
id: import-uploaded-backup-request
title: ImportUploadedBackupRequest
pagination_label: ImportUploadedBackupRequest
sidebar_label: ImportUploadedBackupRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ImportUploadedBackupRequest'] 
slug: /tools/sdk/powershell/v3/models/import-uploaded-backup-request
tags: ['SDK', 'Software Development Kit', 'ImportUploadedBackupRequest']
---


# ImportUploadedBackupRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarData** |  **System.IO.FileInfo** | JSON file containing the objects to be imported. | 
**Name** |  **String** | Name that will be assigned to the uploaded file. | 

## Examples

- Prepare the resource
```powershell
$ImportUploadedBackupRequest = Initialize-ImportUploadedBackupRequest  -VarData null `
 -Name null
```

- Convert the resource to JSON
```powershell
$ImportUploadedBackupRequest | ConvertTo-JSON
```


[[Back to top]](#) 

