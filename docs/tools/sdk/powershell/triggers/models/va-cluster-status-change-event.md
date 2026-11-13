# VAClusterStatusChangeEvent

# VAClusterStatusChangeEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Created** | **System.DateTime** | The date and time the status change occurred. | [required]
**Type** |  **Enum** [  "SOURCE",    "CLUSTER" ] | The type of the object that initiated this event. | [required]
**Application** | [**VAClusterStatusChangeEventApplication**](va-cluster-status-change-event-application) |  | [required]
**HealthCheckResult** | [**VAClusterStatusChangeEventHealthCheckResult**](va-cluster-status-change-event-health-check-result) |  | [required]
**PreviousHealthCheckResult** | [**VAClusterStatusChangeEventPreviousHealthCheckResult**](va-cluster-status-change-event-previous-health-check-result) |  | [required]

## Examples

- Prepare the resource
```powershell
$VAClusterStatusChangeEvent = Initialize-VAClusterStatusChangeEvent  -Created 2020-06-29T22:01:50.474Z `
 -Type CLUSTER `
 -Application null `
 -HealthCheckResult null `
 -PreviousHealthCheckResult null
```

- Convert the resource to JSON
```powershell
$VAClusterStatusChangeEvent | ConvertTo-JSON
```


[[Back to top]](#) 

