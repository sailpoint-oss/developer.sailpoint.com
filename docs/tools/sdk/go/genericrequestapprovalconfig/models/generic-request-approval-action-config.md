# GenericRequestApprovalActionConfig

# GenericRequestApprovalActionConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scheme** | Pointer to **string** | How the request is approved. Omitted when the action inherits the organization-level configuration. | [optional] 
**Approvers** | Pointer to **string** | APPROVAL scheme only. A comma-separated list of approver tokens: `sourceOwner`, `manager`, `machineIdentityPrimaryOwner`, `machineIdentitySecondaryOwners`, `machineIdentityAllOwners`, `workgroup:{governanceGroupId}`, and `identity:{identityId}`. `accountOwner` is also allowed for the SUBTYPE DELETE action. | [optional] 
**Comments** | Pointer to **string** | APPROVAL scheme only. When approvers must comment: on both decisions (ALL), on approval only (APPROVAL), on rejection only (REJECTION), or never (OFF). | [optional] 
**WorkflowId** | Pointer to **string** | WORKFLOW scheme only. The ID of the workflow that approves the request. | [optional] 

## Methods

### NewGenericRequestApprovalActionConfig

`func NewGenericRequestApprovalActionConfig() *GenericRequestApprovalActionConfig`

NewGenericRequestApprovalActionConfig instantiates a new GenericRequestApprovalActionConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGenericRequestApprovalActionConfigWithDefaults

`func NewGenericRequestApprovalActionConfigWithDefaults() *GenericRequestApprovalActionConfig`

NewGenericRequestApprovalActionConfigWithDefaults instantiates a new GenericRequestApprovalActionConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetScheme

`func (o *GenericRequestApprovalActionConfig) GetScheme() string`

GetScheme returns the Scheme field if non-nil, zero value otherwise.

### GetSchemeOk

`func (o *GenericRequestApprovalActionConfig) GetSchemeOk() (*string, bool)`

GetSchemeOk returns a tuple with the Scheme field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheme

`func (o *GenericRequestApprovalActionConfig) SetScheme(v string)`

SetScheme sets Scheme field to given value.

### HasScheme

`func (o *GenericRequestApprovalActionConfig) HasScheme() bool`

HasScheme returns a boolean if a field has been set.

### GetApprovers

`func (o *GenericRequestApprovalActionConfig) GetApprovers() string`

GetApprovers returns the Approvers field if non-nil, zero value otherwise.

### GetApproversOk

`func (o *GenericRequestApprovalActionConfig) GetApproversOk() (*string, bool)`

GetApproversOk returns a tuple with the Approvers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovers

`func (o *GenericRequestApprovalActionConfig) SetApprovers(v string)`

SetApprovers sets Approvers field to given value.

### HasApprovers

`func (o *GenericRequestApprovalActionConfig) HasApprovers() bool`

HasApprovers returns a boolean if a field has been set.

### GetComments

`func (o *GenericRequestApprovalActionConfig) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *GenericRequestApprovalActionConfig) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *GenericRequestApprovalActionConfig) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *GenericRequestApprovalActionConfig) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetWorkflowId

`func (o *GenericRequestApprovalActionConfig) GetWorkflowId() string`

GetWorkflowId returns the WorkflowId field if non-nil, zero value otherwise.

### GetWorkflowIdOk

`func (o *GenericRequestApprovalActionConfig) GetWorkflowIdOk() (*string, bool)`

GetWorkflowIdOk returns a tuple with the WorkflowId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkflowId

`func (o *GenericRequestApprovalActionConfig) SetWorkflowId(v string)`

SetWorkflowId sets WorkflowId field to given value.

### HasWorkflowId

`func (o *GenericRequestApprovalActionConfig) HasWorkflowId() bool`

HasWorkflowId returns a boolean if a field has been set.


