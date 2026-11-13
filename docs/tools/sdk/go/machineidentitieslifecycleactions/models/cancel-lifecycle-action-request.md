# CancelLifecycleActionRequest

# CancelLifecycleActionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **string** | Optional cancel comment appended to the lifecycle request comment thread. | [optional] 

## Methods

### NewCancelLifecycleActionRequest

`func NewCancelLifecycleActionRequest() *CancelLifecycleActionRequest`

NewCancelLifecycleActionRequest instantiates a new CancelLifecycleActionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCancelLifecycleActionRequestWithDefaults

`func NewCancelLifecycleActionRequestWithDefaults() *CancelLifecycleActionRequest`

NewCancelLifecycleActionRequestWithDefaults instantiates a new CancelLifecycleActionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *CancelLifecycleActionRequest) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *CancelLifecycleActionRequest) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *CancelLifecycleActionRequest) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *CancelLifecycleActionRequest) HasComment() bool`

HasComment returns a boolean if a field has been set.


