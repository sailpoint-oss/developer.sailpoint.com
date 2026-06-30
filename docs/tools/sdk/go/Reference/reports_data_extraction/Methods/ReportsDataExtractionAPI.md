---
id: v1-reports-data-extraction
title: ReportsDataExtraction
pagination_label: ReportsDataExtraction
sidebar_label: ReportsDataExtraction
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ReportsDataExtraction', 'V1ReportsDataExtraction'] 
slug: /tools/sdk/go/reportsdataextraction/methods/reports-data-extraction
tags: ['SDK', 'Software Development Kit', 'ReportsDataExtraction', 'V1ReportsDataExtraction']
---

# ReportsDataExtractionAPI
  Use this API to implement reports lifecycle managing and monitoring.
With this functionality in place, users can run reports, view their results, and cancel reports in progress. 
This can be potentially helpful for auditing purposes. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel-report-v1**](#cancel-report-v1) | **Post** `/reports/v1/{id}/cancel` | Cancel report
[**get-report-result-v1**](#get-report-result-v1) | **Get** `/reports/v1/{taskResultId}/result` | Get report result
[**get-report-v1**](#get-report-v1) | **Get** `/reports/v1/{taskResultId}` | Get report file
[**start-report-v1**](#start-report-v1) | **Post** `/reports/v1/run` | Run report


## cancel-report-v1
Cancel report
Cancels a running report.

[API Spec](https://developer.sailpoint.com/docs/api/v1/cancel-report-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the running Report to cancel | 

### Other Parameters

Other parameters are passed through a pointer to a apiCancelReportV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/reports_data_extraction"
)

func main() {
    id := `a1ed223247144cc29d23c632624b4767` // string | ID of the running Report to cancel # string | ID of the running Report to cancel

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.ReportsDataExtractionAPI.CancelReportV1(context.Background(), id).Execute()
	  //r, err := apiClient.ReportsDataExtractionAPI.CancelReportV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ReportsDataExtractionAPI.CancelReportV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-report-result-v1
Get report result
Get the report results for a report that was run or is running. Returns empty report result in case there are no active task definitions with used in payload task definition name.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-report-result-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**taskResultId** | **string** | Unique identifier of the task result which handled report | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReportResultV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **completed** | **bool** | state of task result to apply ordering when results are fetching from the DB | [default to false]

### Return type

[**Reportresults**](../models/reportresults)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/reports_data_extraction"
)

func main() {
    taskResultId := `ef38f94347e94562b5bb8424a56397d8` // string | Unique identifier of the task result which handled report # string | Unique identifier of the task result which handled report
    completed := true // bool | state of task result to apply ordering when results are fetching from the DB (optional) (default to false) # bool | state of task result to apply ordering when results are fetching from the DB (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ReportsDataExtractionAPI.GetReportResultV1(context.Background(), taskResultId).Execute()
	  //resp, r, err := apiClient.ReportsDataExtractionAPI.GetReportResultV1(context.Background(), taskResultId).Completed(completed).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ReportsDataExtractionAPI.GetReportResultV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReportResultV1`: Reportresults
    fmt.Fprintf(os.Stdout, "Response from `ReportsDataExtractionAPI.GetReportResultV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-report-v1
Get report file
Gets a report in file format.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-report-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**taskResultId** | **string** | Unique identifier of the task result which handled report | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReportV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/reports_data_extraction"
)

func main() {
    taskResultId := `ef38f94347e94562b5bb8424a56397d8` // string | Unique identifier of the task result which handled report # string | Unique identifier of the task result which handled report
    fileFormat := `csv` // string | Output format of the requested report file # string | Output format of the requested report file
    name := `Identities Details Report` // string | preferred Report file name, by default will be used report name from task result. (optional) # string | preferred Report file name, by default will be used report name from task result. (optional)
    auditable := true // bool | Enables auditing for current report download. Will create an audit event and sent it to the REPORT cloud-audit kafka topic.  Event will be created if there is any result present by requested taskResultId. (optional) (default to false) # bool | Enables auditing for current report download. Will create an audit event and sent it to the REPORT cloud-audit kafka topic.  Event will be created if there is any result present by requested taskResultId. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ReportsDataExtractionAPI.GetReportV1(context.Background(), taskResultId).FileFormat(fileFormat).Execute()
	  //resp, r, err := apiClient.ReportsDataExtractionAPI.GetReportV1(context.Background(), taskResultId).FileFormat(fileFormat).Name(name).Auditable(auditable).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ReportsDataExtractionAPI.GetReportV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReportV1`: *os.File
    fmt.Fprintf(os.Stdout, "Response from `ReportsDataExtractionAPI.GetReportV1`: %v\n", resp)
}
```

[[Back to top]](#)

## start-report-v1
Run report
Use this API to run a report according to report input details. If non-concurrent task is already running then it returns, otherwise new task creates and returns.

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-report-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartReportV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportdetails** | [**Reportdetails**](../models/reportdetails) |  | 

### Return type

[**Taskresultdetails**](../models/taskresultdetails)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/reports_data_extraction"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/reports_data_extraction"
)

func main() {
    reportdetails := []byte(``) // Reportdetails | 

    var reportdetails v1.Reportdetails
    if err := json.Unmarshal(reportdetails, &reportdetails); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ReportsDataExtractionAPI.StartReportV1(context.Background()).Reportdetails(reportdetails).Execute()
	  //resp, r, err := apiClient.ReportsDataExtractionAPI.StartReportV1(context.Background()).Reportdetails(reportdetails).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ReportsDataExtractionAPI.StartReportV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartReportV1`: Taskresultdetails
    fmt.Fprintf(os.Stdout, "Response from `ReportsDataExtractionAPI.StartReportV1`: %v\n", resp)
}
```

[[Back to top]](#)

