# AccountDeleteConfigDto

# AccountDeleteConfigDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalRequired** | Pointer to **bool** | Specifies if an account deletion request requires approval. | [optional] [default to false]
**ApprovalConfig** | Pointer to [**ApprovalConfig**](approval-config) |  | [optional] 

## Methods

### NewAccountDeleteConfigDto

`func NewAccountDeleteConfigDto() *AccountDeleteConfigDto`

NewAccountDeleteConfigDto instantiates a new AccountDeleteConfigDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountDeleteConfigDtoWithDefaults

`func NewAccountDeleteConfigDtoWithDefaults() *AccountDeleteConfigDto`

NewAccountDeleteConfigDtoWithDefaults instantiates a new AccountDeleteConfigDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalRequired

`func (o *AccountDeleteConfigDto) GetApprovalRequired() bool`

GetApprovalRequired returns the ApprovalRequired field if non-nil, zero value otherwise.

### GetApprovalRequiredOk

`func (o *AccountDeleteConfigDto) GetApprovalRequiredOk() (*bool, bool)`

GetApprovalRequiredOk returns a tuple with the ApprovalRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalRequired

`func (o *AccountDeleteConfigDto) SetApprovalRequired(v bool)`

SetApprovalRequired sets ApprovalRequired field to given value.

### HasApprovalRequired

`func (o *AccountDeleteConfigDto) HasApprovalRequired() bool`

HasApprovalRequired returns a boolean if a field has been set.

### GetApprovalConfig

`func (o *AccountDeleteConfigDto) GetApprovalConfig() ApprovalConfig`

GetApprovalConfig returns the ApprovalConfig field if non-nil, zero value otherwise.

### GetApprovalConfigOk

`func (o *AccountDeleteConfigDto) GetApprovalConfigOk() (*ApprovalConfig, bool)`

GetApprovalConfigOk returns a tuple with the ApprovalConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalConfig

`func (o *AccountDeleteConfigDto) SetApprovalConfig(v ApprovalConfig)`

SetApprovalConfig sets ApprovalConfig field to given value.

### HasApprovalConfig

`func (o *AccountDeleteConfigDto) HasApprovalConfig() bool`

HasApprovalConfig returns a boolean if a field has been set.


