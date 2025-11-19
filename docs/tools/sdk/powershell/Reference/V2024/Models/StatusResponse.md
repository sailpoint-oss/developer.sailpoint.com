---
id: v2024-status-response
title: StatusResponse
pagination_label: StatusResponse
sidebar_label: StatusResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'StatusResponse', 'V2024StatusResponse'] 
slug: /tools/sdk/powershell/v2024/models/status-response
tags: ['SDK', 'Software Development Kit', 'StatusResponse', 'V2024StatusResponse']
---


# StatusResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the source | [optional] [readonly] 
**Name** | **String** | Name of the source | [optional] [readonly] 
**Status** |  **Enum** [  "SUCCESS",    "FAILURE" ] | The status of the health check. | [optional] [readonly] 
**ElapsedMillis** | **Int32** | The number of milliseconds spent on the entire request. | [optional] [readonly] 
**Details** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The document contains the results of the health check. The schema of this document depends on the type of source used.  | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$StatusResponse = Initialize-V2024StatusResponse  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name ODS-AD-Test [source-999999] `
 -Status SUCCESS `
 -ElapsedMillis 1000 `
 -Details {useTLSForIQService=false, IQService={TLS Port=0, .NET CLR Version=4.0.30319.42000, SecondaryServiceStatus=Running, Port=5050, Host=AUTOMATION-AD, Name=IQService, IQServiceStatus=Running, SecondaryService=IQService-Instance1-Secondary, Version=IQService Sep-2020, secondaryPort=5051, OS Architecture=AMD64, Operating System=Microsoft Windows Server 2012 R2 Standard, highestDotNetVersion=4.8 or later, Build Time=09/22/2020 06:34 AM -0500}, IQServiceClientAuthEnabled=false, requestProcessedOn=1/19/2021 1:47:14 PM}
```

- Convert the resource to JSON
```powershell
$StatusResponse | ConvertTo-JSON
```


[[Back to top]](#) 

