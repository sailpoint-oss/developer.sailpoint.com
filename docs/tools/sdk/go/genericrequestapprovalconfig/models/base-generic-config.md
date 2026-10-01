# BaseGenericConfig

# BaseGenericConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scheme** | **string** | Discriminator. Must be WORKFLOW for adaptive platform-workflow approval. | 
**Approvers** | **string** | Comma-separated approver tokens.  Allowed tokens for RESOURCE ACTIVATE and DEACTIVATE: sourceOwner, manager, machineIdentityPrimaryOwner, machineIdentitySecondaryOwners, machineIdentityAllOwners, workgroup:[workgroupId], identity:[identityId].  Role tokens (sourceOwner, manager, and the machineIdentity* tokens) may appear at most once and must not include an id suffix. workgroup: and identity: may repeat when each id is unique.  Approval request assignment follows the order of tokens in this string. | 
**Comments** | **string** | Comment requirement for the approval request. Use REJECTION (not REJECT) when comments are required only on deny. | 
**WorkflowId** | **string** | Identifier of the platform workflow that decides the request. | 

## Methods

### NewBaseGenericConfig

`func NewBaseGenericConfig(scheme string, approvers string, comments string, workflowId string, ) *BaseGenericConfig`

NewBaseGenericConfig instantiates a new BaseGenericConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBaseGenericConfigWithDefaults

`func NewBaseGenericConfigWithDefaults() *BaseGenericConfig`

NewBaseGenericConfigWithDefaults instantiates a new BaseGenericConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetScheme

`func (o *BaseGenericConfig) GetScheme() string`

GetScheme returns the Scheme field if non-nil, zero value otherwise.

### GetSchemeOk

`func (o *BaseGenericConfig) GetSchemeOk() (*string, bool)`

GetSchemeOk returns a tuple with the Scheme field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheme

`func (o *BaseGenericConfig) SetScheme(v string)`

SetScheme sets Scheme field to given value.


### GetApprovers

`func (o *BaseGenericConfig) GetApprovers() string`

GetApprovers returns the Approvers field if non-nil, zero value otherwise.

### GetApproversOk

`func (o *BaseGenericConfig) GetApproversOk() (*string, bool)`

GetApproversOk returns a tuple with the Approvers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovers

`func (o *BaseGenericConfig) SetApprovers(v string)`

SetApprovers sets Approvers field to given value.


### GetComments

`func (o *BaseGenericConfig) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *BaseGenericConfig) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *BaseGenericConfig) SetComments(v string)`

SetComments sets Comments field to given value.


### GetWorkflowId

`func (o *BaseGenericConfig) GetWorkflowId() string`

GetWorkflowId returns the WorkflowId field if non-nil, zero value otherwise.

### GetWorkflowIdOk

`func (o *BaseGenericConfig) GetWorkflowIdOk() (*string, bool)`

GetWorkflowIdOk returns a tuple with the WorkflowId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkflowId

`func (o *BaseGenericConfig) SetWorkflowId(v string)`

SetWorkflowId sets WorkflowId field to given value.



