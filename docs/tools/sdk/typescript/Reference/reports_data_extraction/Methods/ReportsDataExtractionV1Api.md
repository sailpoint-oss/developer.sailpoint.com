---
id: v1-reports-data-extraction
title: ReportsDataExtraction
pagination_label: ReportsDataExtraction
sidebar_label: ReportsDataExtraction
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ReportsDataExtraction', 'v1ReportsDataExtraction']
slug: /tools/sdk/typescript/reports_data_extraction/methods/reports-data-extraction
tags: ['SDK', 'Software Development Kit', 'ReportsDataExtraction', 'v1ReportsDataExtraction']
---

# ReportsDataExtractionV1Api
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the running Report to cancel |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ReportsDataExtractionV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ReportsDataExtractionV1Api(configuration);
const id: string = a1ed223247144cc29d23c632624b4767; // ID of the running Report to cancel
const result = await apiInstance.cancelReportV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-report-result-v1
Get report result
Get the report results for a report that was run or is running. Returns empty report result in case there are no active task definitions with used in payload task definition name.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-report-result-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**taskResultId** | `string` | Unique identifier of the task result which handled report |  [default to undefined]
**completed** | `boolean` | state of task result to apply ordering when results are fetching from the DB | [optional] [default to false]

### Return type

`ReportresultsV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ReportsDataExtractionV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ReportsDataExtractionV1Api(configuration);
const taskResultId: string = ef38f94347e94562b5bb8424a56397d8; // Unique identifier of the task result which handled report
const completed: boolean = true; // state of task result to apply ordering when results are fetching from the DB (optional)
const result = await apiInstance.getReportResultV1({ taskResultId: taskResultId });
console.log(result);
```

[[Back to top]](#)

## get-report-v1
Get report file
Gets a report in file format.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-report-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**taskResultId** | `string` | Unique identifier of the task result which handled report |  [default to undefined]
**fileFormat** | `'csv' | 'pdf'` | Output format of the requested report file |  [default to undefined]
**name** | `string` | preferred Report file name, by default will be used report name from task result. | [optional] [default to undefined]
**auditable** | `boolean` | Enables auditing for current report download. Will create an audit event and sent it to the REPORT cloud-audit kafka topic.  Event will be created if there is any result present by requested taskResultId. | [optional] [default to false]

### Return type

`File`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/csv, application/pdf, application/json

### Example

```typescript
import { ReportsDataExtractionV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ReportsDataExtractionV1Api(configuration);
const taskResultId: string = ef38f94347e94562b5bb8424a56397d8; // Unique identifier of the task result which handled report
const fileFormat: string = csv; // Output format of the requested report file
const name: string = Identities Details Report; // preferred Report file name, by default will be used report name from task result. (optional)
const auditable: boolean = true; // Enables auditing for current report download. Will create an audit event and sent it to the REPORT cloud-audit kafka topic.  Event will be created if there is any result present by requested taskResultId. (optional)
const result = await apiInstance.getReportV1({ taskResultId: taskResultId, fileFormat: fileFormat });
console.log(result);
```

[[Back to top]](#)

## start-report-v1
Run report
Use this API to run a report according to report input details. If non-concurrent task is already running then it returns, otherwise new task creates and returns.

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-report-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**reportdetailsV1** | `ReportdetailsV1` |  | 

### Return type

`TaskresultdetailsV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ReportsDataExtractionV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ReportsDataExtractionV1Api(configuration);
const reportdetailsV1: ReportdetailsV1 = ; // 
const result = await apiInstance.startReportV1({ reportdetailsV1: reportdetailsV1 });
console.log(result);
```

[[Back to top]](#)

