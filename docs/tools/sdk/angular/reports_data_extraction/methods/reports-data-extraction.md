# ReportsDataExtraction

# ReportsDataExtractionService
  Use this API to implement reports lifecycle managing and monitoring.
With this functionality in place, users can run reports, view their results, and cancel reports in progress. 
This can be potentially helpful for auditing purposes. 
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel-report-v1**](#cancel-report-v1) | **POST** `/reports/v1/{id}/cancel` | Cancel report
[**get-report-result-v1**](#get-report-result-v1) | **GET** `/reports/v1/{taskResultId}/result` | Get report result
[**get-report-v1**](#get-report-v1) | **GET** `/reports/v1/{taskResultId}` | Get report file
[**start-report-v1**](#start-report-v1) | **POST** `/reports/v1/run` | Run report


## cancel-report-v1
Cancel report
Cancels a running report.

[API Spec](https://developer.sailpoint.com/docs/api/cancel-report-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CancelReportV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the running Report to cancel |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ReportsDataExtractionService } from '@sailpoint/angular-sdk/reports_data_extraction';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ReportsDataExtractionService);

  cancelReportV1(): void {
    const id: string = ; // ID of the running Report to cancel
    this.api.cancelReportV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-report-result-v1
Get report result
Get the report results for a report that was run or is running. Returns empty report result in case there are no active task definitions with used in payload task definition name.

[API Spec](https://developer.sailpoint.com/docs/api/get-report-result-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetReportResultV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**taskResultId** | `string` | Unique identifier of the task result which handled report |  [default to undefined]
**completed** | `boolean` | state of task result to apply ordering when results are fetching from the DB | [optional] [default to false]

### Return type

`Observable<ReportResults>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ReportsDataExtractionService } from '@sailpoint/angular-sdk/reports_data_extraction';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ReportsDataExtractionService);

  getReportResultV1(): void {
    const taskResultId: string = ; // Unique identifier of the task result which handled report
    const completed: boolean = ; // state of task result to apply ordering when results are fetching from the DB (optional)
    this.api.getReportResultV1({ taskResultId: taskResultId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-report-v1
Get report file
Gets a report in file format.

[API Spec](https://developer.sailpoint.com/docs/api/get-report-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetReportV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**taskResultId** | `string` | Unique identifier of the task result which handled report |  [default to undefined]
**fileFormat** | `'csv' | 'pdf'` | Output format of the requested report file |  [default to undefined]
**name** | `string` | preferred Report file name, by default will be used report name from task result. | [optional] [default to undefined]
**auditable** | `boolean` | Enables auditing for current report download. Will create an audit event and sent it to the REPORT cloud-audit kafka topic.  Event will be created if there is any result present by requested taskResultId. | [optional] [default to false]

### Return type

`Observable<Blob>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/csv, application/pdf, application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ReportsDataExtractionService } from '@sailpoint/angular-sdk/reports_data_extraction';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ReportsDataExtractionService);

  getReportV1(): void {
    const taskResultId: string = ; // Unique identifier of the task result which handled report
    const fileFormat: string = ; // Output format of the requested report file
    const name: string = ; // preferred Report file name, by default will be used report name from task result. (optional)
    const auditable: boolean = ; // Enables auditing for current report download. Will create an audit event and sent it to the REPORT cloud-audit kafka topic.  Event will be created if there is any result present by requested taskResultId. (optional)
    this.api.getReportV1({ taskResultId: taskResultId, fileFormat: fileFormat }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## start-report-v1
Run report
Use this API to run a report according to report input details. If non-concurrent task is already running then it returns, otherwise new task creates and returns.

[API Spec](https://developer.sailpoint.com/docs/api/start-report-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `StartReportV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**reportDetails** | `ReportDetails` |  | 

### Return type

`Observable<TaskResultDetails>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ReportsDataExtractionService } from '@sailpoint/angular-sdk/reports_data_extraction';
import { ReportDetails } from '@sailpoint/angular-sdk/reports_data_extraction';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ReportsDataExtractionService);

  startReportV1(): void {
    const reportDetails: ReportDetails = ; // 
    this.api.startReportV1({ reportDetails: reportDetails }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

