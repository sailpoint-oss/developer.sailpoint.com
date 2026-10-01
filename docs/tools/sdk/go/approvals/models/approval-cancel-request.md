# ApprovalCancelRequest

# ApprovalCancelRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **string** | Optional comment associated with the cancel request. | [optional] 

## Methods

### NewApprovalCancelRequest

`func NewApprovalCancelRequest() *ApprovalCancelRequest`

NewApprovalCancelRequest instantiates a new ApprovalCancelRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalCancelRequestWithDefaults

`func NewApprovalCancelRequestWithDefaults() *ApprovalCancelRequest`

NewApprovalCancelRequestWithDefaults instantiates a new ApprovalCancelRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *ApprovalCancelRequest) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *ApprovalCancelRequest) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *ApprovalCancelRequest) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *ApprovalCancelRequest) HasComment() bool`

HasComment returns a boolean if a field has been set.


