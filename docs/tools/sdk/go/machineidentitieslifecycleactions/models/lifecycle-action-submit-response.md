# LifecycleActionSubmitResponse

# LifecycleActionSubmitResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | **string** | Unique identifier for the created lifecycle request. | 
**Status** | **string** | Initial lifecycle request status. | 
**Action** | **Lifecycleaction** |  | 
**TargetId** | **string** | Internal machine identity UUID for the lifecycle target. | 
**ResourceId** | Pointer to **string** | Connector resource id for the lifecycle target, when present. | [optional] 
**CreatedAt** | **SailPointTime** | Time when the lifecycle request was created (ISO-8601). | 

## Methods

### NewLifecycleActionSubmitResponse

`func NewLifecycleActionSubmitResponse(requestId string, status string, action Lifecycleaction, targetId string, createdAt SailPointTime, ) *LifecycleActionSubmitResponse`

NewLifecycleActionSubmitResponse instantiates a new LifecycleActionSubmitResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLifecycleActionSubmitResponseWithDefaults

`func NewLifecycleActionSubmitResponseWithDefaults() *LifecycleActionSubmitResponse`

NewLifecycleActionSubmitResponseWithDefaults instantiates a new LifecycleActionSubmitResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestId

`func (o *LifecycleActionSubmitResponse) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *LifecycleActionSubmitResponse) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *LifecycleActionSubmitResponse) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.


### GetStatus

`func (o *LifecycleActionSubmitResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *LifecycleActionSubmitResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *LifecycleActionSubmitResponse) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetAction

`func (o *LifecycleActionSubmitResponse) GetAction() Lifecycleaction`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *LifecycleActionSubmitResponse) GetActionOk() (*Lifecycleaction, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *LifecycleActionSubmitResponse) SetAction(v Lifecycleaction)`

SetAction sets Action field to given value.


### GetTargetId

`func (o *LifecycleActionSubmitResponse) GetTargetId() string`

GetTargetId returns the TargetId field if non-nil, zero value otherwise.

### GetTargetIdOk

`func (o *LifecycleActionSubmitResponse) GetTargetIdOk() (*string, bool)`

GetTargetIdOk returns a tuple with the TargetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetId

`func (o *LifecycleActionSubmitResponse) SetTargetId(v string)`

SetTargetId sets TargetId field to given value.


### GetResourceId

`func (o *LifecycleActionSubmitResponse) GetResourceId() string`

GetResourceId returns the ResourceId field if non-nil, zero value otherwise.

### GetResourceIdOk

`func (o *LifecycleActionSubmitResponse) GetResourceIdOk() (*string, bool)`

GetResourceIdOk returns a tuple with the ResourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceId

`func (o *LifecycleActionSubmitResponse) SetResourceId(v string)`

SetResourceId sets ResourceId field to given value.

### HasResourceId

`func (o *LifecycleActionSubmitResponse) HasResourceId() bool`

HasResourceId returns a boolean if a field has been set.

### GetCreatedAt

`func (o *LifecycleActionSubmitResponse) GetCreatedAt() SailPointTime`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *LifecycleActionSubmitResponse) GetCreatedAtOk() (*SailPointTime, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *LifecycleActionSubmitResponse) SetCreatedAt(v SailPointTime)`

SetCreatedAt sets CreatedAt field to given value.



