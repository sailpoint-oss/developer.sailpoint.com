# GenericRequestApprovalConfig

# GenericRequestApprovalConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Stable identifier for this scope. Use this value on PATCH. Created on first GET if the scope was never configured. | 
**TargetType** | **GenericRequestTargetType** |  | 
**TargetId** | **string** | Connector resource id for RESOURCE (for example aws:bedrock-agent-alias-version). Derived tenant id for GLOBAL. Not patchable. | 
**ApprovalConfig** | [**map[string]BaseGenericConfig**](base-generic-config) | Map keyed by action name. RESOURCE and GLOBAL emit ACTIVATE and DEACTIVATE. DELETE_AT_SOURCE is not returned and cannot be patched. | 

## Methods

### NewGenericRequestApprovalConfig

`func NewGenericRequestApprovalConfig(id string, targetType GenericRequestTargetType, targetId string, approvalConfig map[string]BaseGenericConfig, ) *GenericRequestApprovalConfig`

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


### GetTargetType

`func (o *GenericRequestApprovalConfig) GetTargetType() GenericRequestTargetType`

GetTargetType returns the TargetType field if non-nil, zero value otherwise.

### GetTargetTypeOk

`func (o *GenericRequestApprovalConfig) GetTargetTypeOk() (*GenericRequestTargetType, bool)`

GetTargetTypeOk returns a tuple with the TargetType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetType

`func (o *GenericRequestApprovalConfig) SetTargetType(v GenericRequestTargetType)`

SetTargetType sets TargetType field to given value.


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


### GetApprovalConfig

`func (o *GenericRequestApprovalConfig) GetApprovalConfig() map[string]BaseGenericConfig`

GetApprovalConfig returns the ApprovalConfig field if non-nil, zero value otherwise.

### GetApprovalConfigOk

`func (o *GenericRequestApprovalConfig) GetApprovalConfigOk() (*map[string]BaseGenericConfig, bool)`

GetApprovalConfigOk returns a tuple with the ApprovalConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalConfig

`func (o *GenericRequestApprovalConfig) SetApprovalConfig(v map[string]BaseGenericConfig)`

SetApprovalConfig sets ApprovalConfig field to given value.



