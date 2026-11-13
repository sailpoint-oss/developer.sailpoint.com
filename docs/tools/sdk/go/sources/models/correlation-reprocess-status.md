# CorrelationReprocessStatus

# CorrelationReprocessStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | Pointer to **string** | ID of the source the run applies to. | [optional] 
**ResourceId** | Pointer to **string** | ID of the source resource the run applies to. | [optional] 
**Type** | Pointer to **string** | Kind of correlation the run reprocesses. | [optional] 
**Status** | Pointer to **string** | Status of the run. `STARTED` means the run is planning or processing. `COMPLETED` means every object was evaluated. `COMPLETED_WITH_ERRORS` means the run finished but part of the work could not be processed. `FAILED` means the run could not be planned. `ABORTED_AGGREGATION_STARTED` means the run stopped because an aggregation started on the same resource. | [optional] 
**Total** | Pointer to **NullableInt64** | Number of objects in scope for the run. `null` until planning finishes; after that it does not change, so you can compute progress as `processed` divided by `total`. | [optional] 
**Processed** | Pointer to **int64** | Number of objects evaluated so far. | [optional] 
**Updated** | Pointer to **int64** | Number of evaluated objects whose owner changed. | [optional] 
**Errored** | Pointer to **int64** | Number of objects that could not be processed. Individual errors do not fail the run. | [optional] 
**StartedAt** | Pointer to **SailPointTime** | Date and time when the run was accepted. | [optional] 
**FinishedAt** | Pointer to **NullableTime** | Date and time when the run reached a final status. `null` while the run is in progress. | [optional] 
**StartedBy** | Pointer to [**NullableCorrelationReprocessStatusStartedBy**](correlation-reprocess-status-started-by) |  | [optional] 

## Methods

### NewCorrelationReprocessStatus

`func NewCorrelationReprocessStatus() *CorrelationReprocessStatus`

NewCorrelationReprocessStatus instantiates a new CorrelationReprocessStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCorrelationReprocessStatusWithDefaults

`func NewCorrelationReprocessStatusWithDefaults() *CorrelationReprocessStatus`

NewCorrelationReprocessStatusWithDefaults instantiates a new CorrelationReprocessStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceId

`func (o *CorrelationReprocessStatus) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *CorrelationReprocessStatus) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *CorrelationReprocessStatus) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *CorrelationReprocessStatus) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetResourceId

`func (o *CorrelationReprocessStatus) GetResourceId() string`

GetResourceId returns the ResourceId field if non-nil, zero value otherwise.

### GetResourceIdOk

`func (o *CorrelationReprocessStatus) GetResourceIdOk() (*string, bool)`

GetResourceIdOk returns a tuple with the ResourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceId

`func (o *CorrelationReprocessStatus) SetResourceId(v string)`

SetResourceId sets ResourceId field to given value.

### HasResourceId

`func (o *CorrelationReprocessStatus) HasResourceId() bool`

HasResourceId returns a boolean if a field has been set.

### GetType

`func (o *CorrelationReprocessStatus) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CorrelationReprocessStatus) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CorrelationReprocessStatus) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CorrelationReprocessStatus) HasType() bool`

HasType returns a boolean if a field has been set.

### GetStatus

`func (o *CorrelationReprocessStatus) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CorrelationReprocessStatus) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CorrelationReprocessStatus) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *CorrelationReprocessStatus) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTotal

`func (o *CorrelationReprocessStatus) GetTotal() int64`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *CorrelationReprocessStatus) GetTotalOk() (*int64, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *CorrelationReprocessStatus) SetTotal(v int64)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *CorrelationReprocessStatus) HasTotal() bool`

HasTotal returns a boolean if a field has been set.

### SetTotalNil

`func (o *CorrelationReprocessStatus) SetTotalNil(b bool)`

 SetTotalNil sets the value for Total to be an explicit nil

### UnsetTotal
`func (o *CorrelationReprocessStatus) UnsetTotal()`

UnsetTotal ensures that no value is present for Total, not even an explicit nil
### GetProcessed

`func (o *CorrelationReprocessStatus) GetProcessed() int64`

GetProcessed returns the Processed field if non-nil, zero value otherwise.

### GetProcessedOk

`func (o *CorrelationReprocessStatus) GetProcessedOk() (*int64, bool)`

GetProcessedOk returns a tuple with the Processed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessed

`func (o *CorrelationReprocessStatus) SetProcessed(v int64)`

SetProcessed sets Processed field to given value.

### HasProcessed

`func (o *CorrelationReprocessStatus) HasProcessed() bool`

HasProcessed returns a boolean if a field has been set.

### GetUpdated

`func (o *CorrelationReprocessStatus) GetUpdated() int64`

GetUpdated returns the Updated field if non-nil, zero value otherwise.

### GetUpdatedOk

`func (o *CorrelationReprocessStatus) GetUpdatedOk() (*int64, bool)`

GetUpdatedOk returns a tuple with the Updated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdated

`func (o *CorrelationReprocessStatus) SetUpdated(v int64)`

SetUpdated sets Updated field to given value.

### HasUpdated

`func (o *CorrelationReprocessStatus) HasUpdated() bool`

HasUpdated returns a boolean if a field has been set.

### GetErrored

`func (o *CorrelationReprocessStatus) GetErrored() int64`

GetErrored returns the Errored field if non-nil, zero value otherwise.

### GetErroredOk

`func (o *CorrelationReprocessStatus) GetErroredOk() (*int64, bool)`

GetErroredOk returns a tuple with the Errored field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrored

`func (o *CorrelationReprocessStatus) SetErrored(v int64)`

SetErrored sets Errored field to given value.

### HasErrored

`func (o *CorrelationReprocessStatus) HasErrored() bool`

HasErrored returns a boolean if a field has been set.

### GetStartedAt

`func (o *CorrelationReprocessStatus) GetStartedAt() SailPointTime`

GetStartedAt returns the StartedAt field if non-nil, zero value otherwise.

### GetStartedAtOk

`func (o *CorrelationReprocessStatus) GetStartedAtOk() (*SailPointTime, bool)`

GetStartedAtOk returns a tuple with the StartedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartedAt

`func (o *CorrelationReprocessStatus) SetStartedAt(v SailPointTime)`

SetStartedAt sets StartedAt field to given value.

### HasStartedAt

`func (o *CorrelationReprocessStatus) HasStartedAt() bool`

HasStartedAt returns a boolean if a field has been set.

### GetFinishedAt

`func (o *CorrelationReprocessStatus) GetFinishedAt() SailPointTime`

GetFinishedAt returns the FinishedAt field if non-nil, zero value otherwise.

### GetFinishedAtOk

`func (o *CorrelationReprocessStatus) GetFinishedAtOk() (*SailPointTime, bool)`

GetFinishedAtOk returns a tuple with the FinishedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFinishedAt

`func (o *CorrelationReprocessStatus) SetFinishedAt(v SailPointTime)`

SetFinishedAt sets FinishedAt field to given value.

### HasFinishedAt

`func (o *CorrelationReprocessStatus) HasFinishedAt() bool`

HasFinishedAt returns a boolean if a field has been set.

### SetFinishedAtNil

`func (o *CorrelationReprocessStatus) SetFinishedAtNil(b bool)`

 SetFinishedAtNil sets the value for FinishedAt to be an explicit nil

### UnsetFinishedAt
`func (o *CorrelationReprocessStatus) UnsetFinishedAt()`

UnsetFinishedAt ensures that no value is present for FinishedAt, not even an explicit nil
### GetStartedBy

`func (o *CorrelationReprocessStatus) GetStartedBy() CorrelationReprocessStatusStartedBy`

GetStartedBy returns the StartedBy field if non-nil, zero value otherwise.

### GetStartedByOk

`func (o *CorrelationReprocessStatus) GetStartedByOk() (*CorrelationReprocessStatusStartedBy, bool)`

GetStartedByOk returns a tuple with the StartedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartedBy

`func (o *CorrelationReprocessStatus) SetStartedBy(v CorrelationReprocessStatusStartedBy)`

SetStartedBy sets StartedBy field to given value.

### HasStartedBy

`func (o *CorrelationReprocessStatus) HasStartedBy() bool`

HasStartedBy returns a boolean if a field has been set.

### SetStartedByNil

`func (o *CorrelationReprocessStatus) SetStartedByNil(b bool)`

 SetStartedByNil sets the value for StartedBy to be an explicit nil

### UnsetStartedBy
`func (o *CorrelationReprocessStatus) UnsetStartedBy()`

UnsetStartedBy ensures that no value is present for StartedBy, not even an explicit nil

