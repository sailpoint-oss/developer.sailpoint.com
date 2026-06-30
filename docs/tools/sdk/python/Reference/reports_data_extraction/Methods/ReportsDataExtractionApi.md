---
id: reports-data-extraction
title: Reports_Data_Extraction
pagination_label: Reports_Data_Extraction
sidebar_label: Reports_Data_Extraction
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Reports_Data_Extraction', 'Reports_Data_Extraction'] 
slug: /tools/sdk/python/reports-data-extraction/methods/reports-data-extraction
tags: ['SDK', 'Software Development Kit', 'Reports_Data_Extraction', 'Reports_Data_Extraction']
---

# sailpoint.reports_data_extraction.ReportsDataExtractionApi
  Use this API to implement reports lifecycle managing and monitoring.
With this functionality in place, users can run reports, view their results, and cancel reports in progress. 
This can be potentially helpful for auditing purposes. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel-report-v1**](#cancel-report-v1) | **POST** `/reports/v1/{id}/cancel` | Cancel report
[**get-report-result-v1**](#get-report-result-v1) | **GET** `/reports/v1/{taskResultId}/result` | Get report result
[**get-report-v1**](#get-report-v1) | **GET** `/reports/v1/{taskResultId}` | Get report file
[**start-report-v1**](#start-report-v1) | **POST** `/reports/v1/run` | Run report


## cancel-report-v1
Cancel report
Cancels a running report.

[API Spec](https://developer.sailpoint.com/docs/api/v1/cancel-report-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the running Report to cancel

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReportResultV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReportResultV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.reports_data_extraction.api.reports_data_extraction_api import ReportsDataExtractionApi
from sailpoint.reports_data_extraction.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'a1ed223247144cc29d23c632624b4767' # str | ID of the running Report to cancel # str | ID of the running Report to cancel

    try:
        # Cancel report
        
        ReportsDataExtractionApi(api_client).cancel_report_v1(id=id)
        # Below is a request that includes all optional parameters
        # ReportsDataExtractionApi(api_client).cancel_report_v1(id)
    except Exception as e:
        print("Exception when calling ReportsDataExtractionApi->cancel_report_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-report-result-v1
Get report result
Get the report results for a report that was run or is running. Returns empty report result in case there are no active task definitions with used in payload task definition name.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-report-result-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | task_result_id | **str** | True  | Unique identifier of the task result which handled report
  Query | completed | **bool** |   (optional) (default to False) | state of task result to apply ordering when results are fetching from the DB

### Return type
[**Reportresults**](../models/reportresults)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Details about report that was run or is running. | Reportresults |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReportResultV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReportResultV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.reports_data_extraction.api.reports_data_extraction_api import ReportsDataExtractionApi
from sailpoint.reports_data_extraction.api_client import ApiClient
from sailpoint.reports_data_extraction.models.reportresults import Reportresults
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    task_result_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Unique identifier of the task result which handled report # str | Unique identifier of the task result which handled report
    completed = False # bool | state of task result to apply ordering when results are fetching from the DB (optional) (default to False) # bool | state of task result to apply ordering when results are fetching from the DB (optional) (default to False)

    try:
        # Get report result
        
        results = ReportsDataExtractionApi(api_client).get_report_result_v1(task_result_id=task_result_id)
        # Below is a request that includes all optional parameters
        # results = ReportsDataExtractionApi(api_client).get_report_result_v1(task_result_id, completed)
        print("The response of ReportsDataExtractionApi->get_report_result_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ReportsDataExtractionApi->get_report_result_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-report-v1
Get report file
Gets a report in file format.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-report-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | task_result_id | **str** | True  | Unique identifier of the task result which handled report
  Query | file_format | **str** | True  | Output format of the requested report file
  Query | name | **str** |   (optional) | preferred Report file name, by default will be used report name from task result.
  Query | auditable | **bool** |   (optional) (default to False) | Enables auditing for current report download. Will create an audit event and sent it to the REPORT cloud-audit kafka topic.  Event will be created if there is any result present by requested taskResultId.

### Return type
**bytearray**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Report file in selected format. CSV by default. | bytearray |  * Content-disposition - The requested report's filename  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReportResultV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReportResultV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/csv, application/pdf, application/json

### Example

```python
from sailpoint.reports_data_extraction.api.reports_data_extraction_api import ReportsDataExtractionApi
from sailpoint.reports_data_extraction.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    task_result_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Unique identifier of the task result which handled report # str | Unique identifier of the task result which handled report
    file_format = 'csv' # str | Output format of the requested report file # str | Output format of the requested report file
    name = 'Identities Details Report' # str | preferred Report file name, by default will be used report name from task result. (optional) # str | preferred Report file name, by default will be used report name from task result. (optional)
    auditable = False # bool | Enables auditing for current report download. Will create an audit event and sent it to the REPORT cloud-audit kafka topic.  Event will be created if there is any result present by requested taskResultId. (optional) (default to False) # bool | Enables auditing for current report download. Will create an audit event and sent it to the REPORT cloud-audit kafka topic.  Event will be created if there is any result present by requested taskResultId. (optional) (default to False)

    try:
        # Get report file
        
        results = ReportsDataExtractionApi(api_client).get_report_v1(task_result_id=task_result_id, file_format=file_format)
        # Below is a request that includes all optional parameters
        # results = ReportsDataExtractionApi(api_client).get_report_v1(task_result_id, file_format, name, auditable)
        print("The response of ReportsDataExtractionApi->get_report_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ReportsDataExtractionApi->get_report_v1: %s\n" % e)
```



[[Back to top]](#) 

## start-report-v1
Run report
Use this API to run a report according to report input details. If non-concurrent task is already running then it returns, otherwise new task creates and returns.

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-report-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | reportdetails | [**Reportdetails**](../models/reportdetails) | True  | 

### Return type
[**Taskresultdetails**](../models/taskresultdetails)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Details about running report task. | Taskresultdetails |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReportResultV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReportResultV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.reports_data_extraction.api.reports_data_extraction_api import ReportsDataExtractionApi
from sailpoint.reports_data_extraction.api_client import ApiClient
from sailpoint.reports_data_extraction.models.reportdetails import Reportdetails
from sailpoint.reports_data_extraction.models.taskresultdetails import Taskresultdetails
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    reportdetails = '''sailpoint.reports_data_extraction.Reportdetails()''' # Reportdetails | 

    try:
        # Run report
        new_reportdetails = Reportdetails.from_json(reportdetails)
        results = ReportsDataExtractionApi(api_client).start_report_v1(reportdetails=new_reportdetails)
        # Below is a request that includes all optional parameters
        # results = ReportsDataExtractionApi(api_client).start_report_v1(new_reportdetails)
        print("The response of ReportsDataExtractionApi->start_report_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ReportsDataExtractionApi->start_report_v1: %s\n" % e)
```



[[Back to top]](#) 



