# CancelLifecycleActionResponse

# CancelLifecycleActionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | **string** | Lifecycle request identifier. | 
**Status** | **string** | Updated lifecycle request status after cancel acceptance. | 
**Action** | **Lifecycleaction** |  | 
**TargetId** | **string** | Internal machine identity UUID for the lifecycle target. | 
**ResourceId** | Pointer to **string** | Connector resource id for the lifecycle target, when present. | [optional] 

## Methods

### NewCancelLifecycleActionResponse

`func NewCancelLifecycleActionResponse(requestId string, status string, action Lifecycleaction, targetId string, ) *CancelLifecycleActionResponse`

NewCancelLifecycleActionResponse instantiates a new CancelLifecycleActionResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCancelLifecycleActionResponseWithDefaults

`func NewCancelLifecycleActionResponseWithDefaults() *CancelLifecycleActionResponse`

NewCancelLifecycleActionResponseWithDefaults instantiates a new CancelLifecycleActionResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestId

`func (o *CancelLifecycleActionResponse) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *CancelLifecycleActionResponse) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *CancelLifecycleActionResponse) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.


### GetStatus

`func (o *CancelLifecycleActionResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CancelLifecycleActionResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CancelLifecycleActionResponse) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetAction

`func (o *CancelLifecycleActionResponse) GetAction() Lifecycleaction`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *CancelLifecycleActionResponse) GetActionOk() (*Lifecycleaction, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *CancelLifecycleActionResponse) SetAction(v Lifecycleaction)`

SetAction sets Action field to given value.


### GetTargetId

`func (o *CancelLifecycleActionResponse) GetTargetId() string`

GetTargetId returns the TargetId field if non-nil, zero value otherwise.

### GetTargetIdOk

`func (o *CancelLifecycleActionResponse) GetTargetIdOk() (*string, bool)`

GetTargetIdOk returns a tuple with the TargetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetId

`func (o *CancelLifecycleActionResponse) SetTargetId(v string)`

SetTargetId sets TargetId field to given value.


### GetResourceId

`func (o *CancelLifecycleActionResponse) GetResourceId() string`

GetResourceId returns the ResourceId field if non-nil, zero value otherwise.

### GetResourceIdOk

`func (o *CancelLifecycleActionResponse) GetResourceIdOk() (*string, bool)`

GetResourceIdOk returns a tuple with the ResourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceId

`func (o *CancelLifecycleActionResponse) SetResourceId(v string)`

SetResourceId sets ResourceId field to given value.

### HasResourceId

`func (o *CancelLifecycleActionResponse) HasResourceId() bool`

HasResourceId returns a boolean if a field has been set.


