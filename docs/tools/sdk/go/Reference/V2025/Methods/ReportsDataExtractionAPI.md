---
id: v2025-reports-data-extraction
title: ReportsDataExtraction
pagination_label: ReportsDataExtraction
sidebar_label: ReportsDataExtraction
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ReportsDataExtraction', 'V2025ReportsDataExtraction'] 
slug: /tools/sdk/go/v2025/methods/reports-data-extraction
tags: ['SDK', 'Software Development Kit', 'ReportsDataExtraction', 'V2025ReportsDataExtraction']
---

# ReportsDataExtractionAPI
  Use this API to implement reports lifecycle managing and monitoring.
With this functionality in place, users can run reports, view their results, and cancel reports in progress. 
This can be potentially helpful for auditing purposes. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel-report**](#cancel-report) | **Post** `/reports/{id}/cancel` | Cancel report
[**get-report**](#get-report) | **Get** `/reports/{taskResultId}` | Get report file
[**get-report-result**](#get-report-result) | **Get** `/reports/{taskResultId}/result` | Get report result
[**start-report**](#start-report) | **Post** `/reports/run` | Run report


## cancel-report
Cancel report
Cancels a running report.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/cancel-report)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the running Report to cancel | 

### Other Parameters

Other parameters are passed through a pointer to a apiCancelReportRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `a1ed223247144cc29d23c632624b4767` // string | ID of the running Report to cancel # string | ID of the running Report to cancel

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.ReportsDataExtractionAPI.CancelReport(context.Background(), id).Execute()
	  //r, err := apiClient.V2025.ReportsDataExtractionAPI.CancelReport(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ReportsDataExtractionAPI.CancelReport``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-report
Get report file
Gets a report in file format.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-report)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**taskResultId** | **string** | Unique identifier of the task result which handled report | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReportRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fileFormat** | **string** | Output format of the requested report file | 
 **name** | **string** | preferred Report file name, by default will be used report name from task result. | 
 **auditable** | **bool** | Enables auditing for current report download. Will create an audit event and sent it to the REPORT cloud-audit kafka topic.  Event will be created if there is any result present by requested taskResultId. | [default to false]

### Return type

[***os.File**](https://pkg.go.dev/os)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/csv, application/pdf, application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    taskResultId := `ef38f94347e94562b5bb8424a56397d8` // string | Unique identifier of the task result which handled report # string | Unique identifier of the task result which handled report
    fileFormat := `csv` // string | Output format of the requested report file # string | Output format of the requested report file
    name := `Identities Details Report` // string | preferred Report file name, by default will be used report name from task result. (optional) # string | preferred Report file name, by default will be used report name from task result. (optional)
    auditable := true // bool | Enables auditing for current report download. Will create an audit event and sent it to the REPORT cloud-audit kafka topic.  Event will be created if there is any result present by requested taskResultId. (optional) (default to false) # bool | Enables auditing for current report download. Will create an audit event and sent it to the REPORT cloud-audit kafka topic.  Event will be created if there is any result present by requested taskResultId. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.ReportsDataExtractionAPI.GetReport(context.Background(), taskResultId).FileFormat(fileFormat).Execute()
	  //resp, r, err := apiClient.V2025.ReportsDataExtractionAPI.GetReport(context.Background(), taskResultId).FileFormat(fileFormat).Name(name).Auditable(auditable).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ReportsDataExtractionAPI.GetReport``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReport`: *os.File
    fmt.Fprintf(os.Stdout, "Response from `ReportsDataExtractionAPI.GetReport`: %v\n", resp)
}
```

[[Back to top]](#)

## get-report-result
Get report result
Get the report results for a report that was run or is running. Returns empty report result in case there are no active task definitions with used in payload task definition name.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-report-result)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**taskResultId** | **string** | Unique identifier of the task result which handled report | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReportResultRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **completed** | **bool** | state of task result to apply ordering when results are fetching from the DB | [default to false]

### Return type

[**ReportResults**](../models/report-results)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    taskResultId := `ef38f94347e94562b5bb8424a56397d8` // string | Unique identifier of the task result which handled report # string | Unique identifier of the task result which handled report
    completed := true // bool | state of task result to apply ordering when results are fetching from the DB (optional) (default to false) # bool | state of task result to apply ordering when results are fetching from the DB (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.ReportsDataExtractionAPI.GetReportResult(context.Background(), taskResultId).Execute()
	  //resp, r, err := apiClient.V2025.ReportsDataExtractionAPI.GetReportResult(context.Background(), taskResultId).Completed(completed).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ReportsDataExtractionAPI.GetReportResult``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReportResult`: ReportResults
    fmt.Fprintf(os.Stdout, "Response from `ReportsDataExtractionAPI.GetReportResult`: %v\n", resp)
}
```

[[Back to top]](#)

## start-report
Run report
Use this API to run a report according to report input details. If non-concurrent task is already running then it returns, otherwise new task creates and returns.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/start-report)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartReportRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportDetails** | [**ReportDetails**](../models/report-details) |  | 

### Return type

[**TaskResultDetails**](../models/task-result-details)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    reportdetails := []byte(`{
          "reportType" : "ACCOUNTS",
          "arguments" : {
            "application" : "2c9180897e7742b2017e781782f705b9",
            "sourceName" : "Active Directory"
          }
        }`) // ReportDetails | 

    var reportDetails v2025.ReportDetails
    if err := json.Unmarshal(reportdetails, &reportDetails); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.ReportsDataExtractionAPI.StartReport(context.Background()).ReportDetails(reportDetails).Execute()
	  //resp, r, err := apiClient.V2025.ReportsDataExtractionAPI.StartReport(context.Background()).ReportDetails(reportDetails).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ReportsDataExtractionAPI.StartReport``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartReport`: TaskResultDetails
    fmt.Fprintf(os.Stdout, "Response from `ReportsDataExtractionAPI.StartReport`: %v\n", resp)
}
```

[[Back to top]](#)

