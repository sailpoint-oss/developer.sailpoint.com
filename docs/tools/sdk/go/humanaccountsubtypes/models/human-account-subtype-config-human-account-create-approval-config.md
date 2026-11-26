# HumanAccountSubtypeConfigHumanAccountCreateApprovalConfig

# HumanAccountSubtypeConfigHumanAccountCreateApprovalConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Approvers** | Pointer to **string** | Comma-separated approver types, for example `manager, sourceOwner`. Approval requests are assigned in the order the approvers are listed. | [optional] 
**Comments** | Pointer to **string** | Comment configuration for the approval request. | [optional] 

## Methods

### NewHumanAccountSubtypeConfigHumanAccountCreateApprovalConfig

`func NewHumanAccountSubtypeConfigHumanAccountCreateApprovalConfig() *HumanAccountSubtypeConfigHumanAccountCreateApprovalConfig`

NewHumanAccountSubtypeConfigHumanAccountCreateApprovalConfig instantiates a new HumanAccountSubtypeConfigHumanAccountCreateApprovalConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHumanAccountSubtypeConfigHumanAccountCreateApprovalConfigWithDefaults

`func NewHumanAccountSubtypeConfigHumanAccountCreateApprovalConfigWithDefaults() *HumanAccountSubtypeConfigHumanAccountCreateApprovalConfig`

NewHumanAccountSubtypeConfigHumanAccountCreateApprovalConfigWithDefaults instantiates a new HumanAccountSubtypeConfigHumanAccountCreateApprovalConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovers

`func (o *HumanAccountSubtypeConfigHumanAccountCreateApprovalConfig) GetApprovers() string`

GetApprovers returns the Approvers field if non-nil, zero value otherwise.

### GetApproversOk

`func (o *HumanAccountSubtypeConfigHumanAccountCreateApprovalConfig) GetApproversOk() (*string, bool)`

GetApproversOk returns a tuple with the Approvers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovers

`func (o *HumanAccountSubtypeConfigHumanAccountCreateApprovalConfig) SetApprovers(v string)`

SetApprovers sets Approvers field to given value.

### HasApprovers

`func (o *HumanAccountSubtypeConfigHumanAccountCreateApprovalConfig) HasApprovers() bool`

HasApprovers returns a boolean if a field has been set.

### GetComments

`func (o *HumanAccountSubtypeConfigHumanAccountCreateApprovalConfig) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *HumanAccountSubtypeConfigHumanAccountCreateApprovalConfig) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *HumanAccountSubtypeConfigHumanAccountCreateApprovalConfig) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *HumanAccountSubtypeConfigHumanAccountCreateApprovalConfig) HasComments() bool`

HasComments returns a boolean if a field has been set.


