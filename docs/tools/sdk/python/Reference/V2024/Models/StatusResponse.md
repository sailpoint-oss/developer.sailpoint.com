---
id: v2024-status-response
title: StatusResponse
pagination_label: StatusResponse
sidebar_label: StatusResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'StatusResponse', 'V2024StatusResponse'] 
slug: /tools/sdk/python/v2024/models/status-response
tags: ['SDK', 'Software Development Kit', 'StatusResponse', 'V2024StatusResponse']
---

# StatusResponse

Response model for connection check, configuration test and ping of source connectors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the source | [optional] [readonly] 
**name** | **str** | Name of the source | [optional] [readonly] 
**status** |  **Enum** [  'SUCCESS',    'FAILURE' ] | The status of the health check. | [optional] [readonly] 
**elapsed_millis** | **int** | The number of milliseconds spent on the entire request. | [optional] [readonly] 
**details** | **object** | The document contains the results of the health check. The schema of this document depends on the type of source used.  | [optional] [readonly] 
}

## Example

```python
from sailpoint.v2024.models.status_response import StatusResponse

status_response = StatusResponse(
id='2c91808568c529c60168cca6f90c1313',
name='ODS-AD-Test [source-999999]',
status='SUCCESS',
elapsed_millis=1000,
details={useTLSForIQService=false, IQService={TLS Port=0, .NET CLR Version=4.0.30319.42000, SecondaryServiceStatus=Running, Port=5050, Host=AUTOMATION-AD, Name=IQService, IQServiceStatus=Running, SecondaryService=IQService-Instance1-Secondary, Version=IQService Sep-2020, secondaryPort=5051, OS Architecture=AMD64, Operating System=Microsoft Windows Server 2012 R2 Standard, highestDotNetVersion=4.8 or later, Build Time=09/22/2020 06:34 AM -0500}, IQServiceClientAuthEnabled=false, requestProcessedOn=1/19/2021 1:47:14 PM}
)

```
[[Back to top]](#) 

