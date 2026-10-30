# ApprovalRejectRequest

# ApprovalRejectRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **string** | Comment associated with the reject request. | [optional] 
**OverrideApproverID** | Pointer to **string** | Optional field for ServiceNow Administrators to specify which member of a governance group to override/reject on behalf of. | [optional] 

## Methods

### NewApprovalRejectRequest

`func NewApprovalRejectRequest() *ApprovalRejectRequest`

NewApprovalRejectRequest instantiates a new ApprovalRejectRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalRejectRequestWithDefaults

`func NewApprovalRejectRequestWithDefaults() *ApprovalRejectRequest`

NewApprovalRejectRequestWithDefaults instantiates a new ApprovalRejectRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *ApprovalRejectRequest) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *ApprovalRejectRequest) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *ApprovalRejectRequest) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *ApprovalRejectRequest) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetOverrideApproverID

`func (o *ApprovalRejectRequest) GetOverrideApproverID() string`

GetOverrideApproverID returns the OverrideApproverID field if non-nil, zero value otherwise.

### GetOverrideApproverIDOk

`func (o *ApprovalRejectRequest) GetOverrideApproverIDOk() (*string, bool)`

GetOverrideApproverIDOk returns a tuple with the OverrideApproverID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideApproverID

`func (o *ApprovalRejectRequest) SetOverrideApproverID(v string)`

SetOverrideApproverID sets OverrideApproverID field to given value.

### HasOverrideApproverID

`func (o *ApprovalRejectRequest) HasOverrideApproverID() bool`

HasOverrideApproverID returns a boolean if a field has been set.


