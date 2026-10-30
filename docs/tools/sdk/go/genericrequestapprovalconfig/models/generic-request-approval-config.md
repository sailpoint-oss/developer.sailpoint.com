# GenericRequestApprovalConfig

# GenericRequestApprovalConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The approval configuration ID. Use it with the update API. | [optional] 
**TargetType** | Pointer to **string** | The kind of scope. | [optional] 
**TargetId** | Pointer to **string** | The scope target: the source resource ID for RESOURCE, the subtype ID for SUBTYPE, the source ID for SOURCE, and the tenant ID for GLOBAL. | [optional] 
**ApprovalConfig** | Pointer to [**map[string]GenericRequestApprovalActionConfig**](generic-request-approval-action-config) | The approval setting for each action, keyed by action name (ACTIVATE, DEACTIVATE, CREATE, or DELETE, depending on the target type). An empty object means the action inherits the organization-level approval configuration. | [optional] 

## Methods

### NewGenericRequestApprovalConfig

`func NewGenericRequestApprovalConfig() *GenericRequestApprovalConfig`

NewGenericRequestApprovalConfig instantiates a new GenericRequestApprovalConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGenericRequestApprovalConfigWithDefaults

`func NewGenericRequestApprovalConfigWithDefaults() *GenericRequestApprovalConfig`

NewGenericRequestApprovalConfigWithDefaults instantiates a new GenericRequestApprovalConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *GenericRequestApprovalConfig) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GenericRequestApprovalConfig) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GenericRequestApprovalConfig) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *GenericRequestApprovalConfig) HasId() bool`

HasId returns a boolean if a field has been set.

### GetTargetType

`func (o *GenericRequestApprovalConfig) GetTargetType() string`

GetTargetType returns the TargetType field if non-nil, zero value otherwise.

### GetTargetTypeOk

`func (o *GenericRequestApprovalConfig) GetTargetTypeOk() (*string, bool)`

GetTargetTypeOk returns a tuple with the TargetType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetType

`func (o *GenericRequestApprovalConfig) SetTargetType(v string)`

SetTargetType sets TargetType field to given value.

### HasTargetType

`func (o *GenericRequestApprovalConfig) HasTargetType() bool`

HasTargetType returns a boolean if a field has been set.

### GetTargetId

`func (o *GenericRequestApprovalConfig) GetTargetId() string`

GetTargetId returns the TargetId field if non-nil, zero value otherwise.

### GetTargetIdOk

`func (o *GenericRequestApprovalConfig) GetTargetIdOk() (*string, bool)`

GetTargetIdOk returns a tuple with the TargetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetId

`func (o *GenericRequestApprovalConfig) SetTargetId(v string)`

SetTargetId sets TargetId field to given value.

### HasTargetId

`func (o *GenericRequestApprovalConfig) HasTargetId() bool`

HasTargetId returns a boolean if a field has been set.

### GetApprovalConfig

`func (o *GenericRequestApprovalConfig) GetApprovalConfig() map[string]GenericRequestApprovalActionConfig`

GetApprovalConfig returns the ApprovalConfig field if non-nil, zero value otherwise.

### GetApprovalConfigOk

`func (o *GenericRequestApprovalConfig) GetApprovalConfigOk() (*map[string]GenericRequestApprovalActionConfig, bool)`

GetApprovalConfigOk returns a tuple with the ApprovalConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalConfig

`func (o *GenericRequestApprovalConfig) SetApprovalConfig(v map[string]GenericRequestApprovalActionConfig)`

SetApprovalConfig sets ApprovalConfig field to given value.

### HasApprovalConfig

`func (o *GenericRequestApprovalConfig) HasApprovalConfig() bool`

HasApprovalConfig returns a boolean if a field has been set.


