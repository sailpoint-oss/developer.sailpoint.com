# Responseactionstatus

# Responseactionstatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | **string** | Tracking handle and correlation id for the response action. | 
**ActionType** | **string** | The action that was requested. | 
**Status** | **string** | Aggregate status across the correlated workflow execution(s): SUBMITTED (registered, no execution yet), IN_PROGRESS (any still non-terminal), COMPLETED (all terminal and at least one succeeded), or FAILED (all terminal and none succeeded).  | 
**SubmittedAt** | **SailPointTime** | When the response action was accepted. | 
**UpdatedAt** | **SailPointTime** | When the response action status last changed. | 

## Methods

### NewResponseactionstatus

`func NewResponseactionstatus(requestId string, actionType string, status string, submittedAt SailPointTime, updatedAt SailPointTime, ) *Responseactionstatus`

NewResponseactionstatus instantiates a new Responseactionstatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResponseactionstatusWithDefaults

`func NewResponseactionstatusWithDefaults() *Responseactionstatus`

NewResponseactionstatusWithDefaults instantiates a new Responseactionstatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestId

`func (o *Responseactionstatus) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *Responseactionstatus) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *Responseactionstatus) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.


### GetActionType

`func (o *Responseactionstatus) GetActionType() string`

GetActionType returns the ActionType field if non-nil, zero value otherwise.

### GetActionTypeOk

`func (o *Responseactionstatus) GetActionTypeOk() (*string, bool)`

GetActionTypeOk returns a tuple with the ActionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionType

`func (o *Responseactionstatus) SetActionType(v string)`

SetActionType sets ActionType field to given value.


### GetStatus

`func (o *Responseactionstatus) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Responseactionstatus) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Responseactionstatus) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetSubmittedAt

`func (o *Responseactionstatus) GetSubmittedAt() SailPointTime`

GetSubmittedAt returns the SubmittedAt field if non-nil, zero value otherwise.

### GetSubmittedAtOk

`func (o *Responseactionstatus) GetSubmittedAtOk() (*SailPointTime, bool)`

GetSubmittedAtOk returns a tuple with the SubmittedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubmittedAt

`func (o *Responseactionstatus) SetSubmittedAt(v SailPointTime)`

SetSubmittedAt sets SubmittedAt field to given value.


### GetUpdatedAt

`func (o *Responseactionstatus) GetUpdatedAt() SailPointTime`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *Responseactionstatus) GetUpdatedAtOk() (*SailPointTime, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *Responseactionstatus) SetUpdatedAt(v SailPointTime)`

SetUpdatedAt sets UpdatedAt field to given value.



