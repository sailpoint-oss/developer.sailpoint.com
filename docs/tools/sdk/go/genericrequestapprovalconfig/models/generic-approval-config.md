# GenericApprovalConfig

# GenericApprovalConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scheme** | **string** | Discriminator. Must be APPROVAL for a serial approver chain. | 
**Approvers** | **string** | Comma-separated approver tokens.  Allowed tokens for RESOURCE ACTIVATE and DEACTIVATE: sourceOwner, manager, machineIdentityPrimaryOwner, machineIdentitySecondaryOwners, machineIdentityAllOwners, workgroup:[workgroupId], identity:[identityId].  Role tokens (sourceOwner, manager, and the machineIdentity* tokens) may appear at most once and must not include an id suffix. workgroup: and identity: may repeat when each id is unique.  Approval request assignment follows the order of tokens in this string. | 
**Comments** | **string** | Comment requirement for the approval request. Use REJECTION (not REJECT) when comments are required only on deny. | 

## Methods

### NewGenericApprovalConfig

`func NewGenericApprovalConfig(scheme string, approvers string, comments string, ) *GenericApprovalConfig`

NewGenericApprovalConfig instantiates a new GenericApprovalConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGenericApprovalConfigWithDefaults

`func NewGenericApprovalConfigWithDefaults() *GenericApprovalConfig`

NewGenericApprovalConfigWithDefaults instantiates a new GenericApprovalConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetScheme

`func (o *GenericApprovalConfig) GetScheme() string`

GetScheme returns the Scheme field if non-nil, zero value otherwise.

### GetSchemeOk

`func (o *GenericApprovalConfig) GetSchemeOk() (*string, bool)`

GetSchemeOk returns a tuple with the Scheme field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheme

`func (o *GenericApprovalConfig) SetScheme(v string)`

SetScheme sets Scheme field to given value.


### GetApprovers

`func (o *GenericApprovalConfig) GetApprovers() string`

GetApprovers returns the Approvers field if non-nil, zero value otherwise.

### GetApproversOk

`func (o *GenericApprovalConfig) GetApproversOk() (*string, bool)`

GetApproversOk returns a tuple with the Approvers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovers

`func (o *GenericApprovalConfig) SetApprovers(v string)`

SetApprovers sets Approvers field to given value.


### GetComments

`func (o *GenericApprovalConfig) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *GenericApprovalConfig) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *GenericApprovalConfig) SetComments(v string)`

SetComments sets Comments field to given value.



