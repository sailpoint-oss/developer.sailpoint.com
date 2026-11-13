# LifecycleActionSubmitRequest

# LifecycleActionSubmitRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Action** | **Lifecycleaction** |  | 
**Comments** | Pointer to [**[]LifecycleActionSubmitComment**](lifecycle-action-submit-comment) | Optional submit-time comments. At most 10 comments are allowed per request; each comment must be non-empty and at most 1000 characters. | [optional] 

## Methods

### NewLifecycleActionSubmitRequest

`func NewLifecycleActionSubmitRequest(action Lifecycleaction, ) *LifecycleActionSubmitRequest`

NewLifecycleActionSubmitRequest instantiates a new LifecycleActionSubmitRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLifecycleActionSubmitRequestWithDefaults

`func NewLifecycleActionSubmitRequestWithDefaults() *LifecycleActionSubmitRequest`

NewLifecycleActionSubmitRequestWithDefaults instantiates a new LifecycleActionSubmitRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAction

`func (o *LifecycleActionSubmitRequest) GetAction() Lifecycleaction`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *LifecycleActionSubmitRequest) GetActionOk() (*Lifecycleaction, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *LifecycleActionSubmitRequest) SetAction(v Lifecycleaction)`

SetAction sets Action field to given value.


### GetComments

`func (o *LifecycleActionSubmitRequest) GetComments() []LifecycleActionSubmitComment`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *LifecycleActionSubmitRequest) GetCommentsOk() (*[]LifecycleActionSubmitComment, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *LifecycleActionSubmitRequest) SetComments(v []LifecycleActionSubmitComment)`

SetComments sets Comments field to given value.

### HasComments

`func (o *LifecycleActionSubmitRequest) HasComments() bool`

HasComments returns a boolean if a field has been set.


