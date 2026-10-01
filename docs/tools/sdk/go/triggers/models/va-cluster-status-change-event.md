# VAClusterStatusChangeEvent

# VAClusterStatusChangeEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Created** | **SailPointTime** | The date and time the status change occurred. | 
**Type** | **string** | The type of the object that initiated this event. | 
**Application** | [**VAClusterStatusChangeEventApplication**](va-cluster-status-change-event-application) |  | 
**HealthCheckResult** | [**VAClusterStatusChangeEventHealthCheckResult**](va-cluster-status-change-event-health-check-result) |  | 
**PreviousHealthCheckResult** | [**VAClusterStatusChangeEventPreviousHealthCheckResult**](va-cluster-status-change-event-previous-health-check-result) |  | 

## Methods

### NewVAClusterStatusChangeEvent

`func NewVAClusterStatusChangeEvent(created SailPointTime, type_ string, application VAClusterStatusChangeEventApplication, healthCheckResult VAClusterStatusChangeEventHealthCheckResult, previousHealthCheckResult VAClusterStatusChangeEventPreviousHealthCheckResult, ) *VAClusterStatusChangeEvent`

NewVAClusterStatusChangeEvent instantiates a new VAClusterStatusChangeEvent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVAClusterStatusChangeEventWithDefaults

`func NewVAClusterStatusChangeEventWithDefaults() *VAClusterStatusChangeEvent`

NewVAClusterStatusChangeEventWithDefaults instantiates a new VAClusterStatusChangeEvent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreated

`func (o *VAClusterStatusChangeEvent) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *VAClusterStatusChangeEvent) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *VAClusterStatusChangeEvent) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetType

`func (o *VAClusterStatusChangeEvent) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *VAClusterStatusChangeEvent) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *VAClusterStatusChangeEvent) SetType(v string)`

SetType sets Type field to given value.


### GetApplication

`func (o *VAClusterStatusChangeEvent) GetApplication() VAClusterStatusChangeEventApplication`

GetApplication returns the Application field if non-nil, zero value otherwise.

### GetApplicationOk

`func (o *VAClusterStatusChangeEvent) GetApplicationOk() (*VAClusterStatusChangeEventApplication, bool)`

GetApplicationOk returns a tuple with the Application field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplication

`func (o *VAClusterStatusChangeEvent) SetApplication(v VAClusterStatusChangeEventApplication)`

SetApplication sets Application field to given value.


### GetHealthCheckResult

`func (o *VAClusterStatusChangeEvent) GetHealthCheckResult() VAClusterStatusChangeEventHealthCheckResult`

GetHealthCheckResult returns the HealthCheckResult field if non-nil, zero value otherwise.

### GetHealthCheckResultOk

`func (o *VAClusterStatusChangeEvent) GetHealthCheckResultOk() (*VAClusterStatusChangeEventHealthCheckResult, bool)`

GetHealthCheckResultOk returns a tuple with the HealthCheckResult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHealthCheckResult

`func (o *VAClusterStatusChangeEvent) SetHealthCheckResult(v VAClusterStatusChangeEventHealthCheckResult)`

SetHealthCheckResult sets HealthCheckResult field to given value.


### GetPreviousHealthCheckResult

`func (o *VAClusterStatusChangeEvent) GetPreviousHealthCheckResult() VAClusterStatusChangeEventPreviousHealthCheckResult`

GetPreviousHealthCheckResult returns the PreviousHealthCheckResult field if non-nil, zero value otherwise.

### GetPreviousHealthCheckResultOk

`func (o *VAClusterStatusChangeEvent) GetPreviousHealthCheckResultOk() (*VAClusterStatusChangeEventPreviousHealthCheckResult, bool)`

GetPreviousHealthCheckResultOk returns a tuple with the PreviousHealthCheckResult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviousHealthCheckResult

`func (o *VAClusterStatusChangeEvent) SetPreviousHealthCheckResult(v VAClusterStatusChangeEventPreviousHealthCheckResult)`

SetPreviousHealthCheckResult sets PreviousHealthCheckResult field to given value.



