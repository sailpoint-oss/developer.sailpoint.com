# HumanAccountSubtypeConfigHumanAccountCreate

# HumanAccountSubtypeConfigHumanAccountCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountCreateEnabled** | Pointer to **bool** | Specifies if creation of human accounts is allowed for this subtype. | [optional] [default to false]
**ApprovalRequired** | Pointer to **bool** | Specifies if approval is required for human account creation requests for this subtype. | [optional] [default to false]
**ApprovalConfig** | Pointer to [**HumanAccountSubtypeConfigHumanAccountCreateApprovalConfig**](human-account-subtype-config-human-account-create-approval-config) |  | [optional] 
**FormId** | Pointer to **NullableString** | ID of the form linked to the subtype. | [optional] 

## Methods

### NewHumanAccountSubtypeConfigHumanAccountCreate

`func NewHumanAccountSubtypeConfigHumanAccountCreate() *HumanAccountSubtypeConfigHumanAccountCreate`

NewHumanAccountSubtypeConfigHumanAccountCreate instantiates a new HumanAccountSubtypeConfigHumanAccountCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHumanAccountSubtypeConfigHumanAccountCreateWithDefaults

`func NewHumanAccountSubtypeConfigHumanAccountCreateWithDefaults() *HumanAccountSubtypeConfigHumanAccountCreate`

NewHumanAccountSubtypeConfigHumanAccountCreateWithDefaults instantiates a new HumanAccountSubtypeConfigHumanAccountCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountCreateEnabled

`func (o *HumanAccountSubtypeConfigHumanAccountCreate) GetAccountCreateEnabled() bool`

GetAccountCreateEnabled returns the AccountCreateEnabled field if non-nil, zero value otherwise.

### GetAccountCreateEnabledOk

`func (o *HumanAccountSubtypeConfigHumanAccountCreate) GetAccountCreateEnabledOk() (*bool, bool)`

GetAccountCreateEnabledOk returns a tuple with the AccountCreateEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountCreateEnabled

`func (o *HumanAccountSubtypeConfigHumanAccountCreate) SetAccountCreateEnabled(v bool)`

SetAccountCreateEnabled sets AccountCreateEnabled field to given value.

### HasAccountCreateEnabled

`func (o *HumanAccountSubtypeConfigHumanAccountCreate) HasAccountCreateEnabled() bool`

HasAccountCreateEnabled returns a boolean if a field has been set.

### GetApprovalRequired

`func (o *HumanAccountSubtypeConfigHumanAccountCreate) GetApprovalRequired() bool`

GetApprovalRequired returns the ApprovalRequired field if non-nil, zero value otherwise.

### GetApprovalRequiredOk

`func (o *HumanAccountSubtypeConfigHumanAccountCreate) GetApprovalRequiredOk() (*bool, bool)`

GetApprovalRequiredOk returns a tuple with the ApprovalRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalRequired

`func (o *HumanAccountSubtypeConfigHumanAccountCreate) SetApprovalRequired(v bool)`

SetApprovalRequired sets ApprovalRequired field to given value.

### HasApprovalRequired

`func (o *HumanAccountSubtypeConfigHumanAccountCreate) HasApprovalRequired() bool`

HasApprovalRequired returns a boolean if a field has been set.

### GetApprovalConfig

`func (o *HumanAccountSubtypeConfigHumanAccountCreate) GetApprovalConfig() HumanAccountSubtypeConfigHumanAccountCreateApprovalConfig`

GetApprovalConfig returns the ApprovalConfig field if non-nil, zero value otherwise.

### GetApprovalConfigOk

`func (o *HumanAccountSubtypeConfigHumanAccountCreate) GetApprovalConfigOk() (*HumanAccountSubtypeConfigHumanAccountCreateApprovalConfig, bool)`

GetApprovalConfigOk returns a tuple with the ApprovalConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalConfig

`func (o *HumanAccountSubtypeConfigHumanAccountCreate) SetApprovalConfig(v HumanAccountSubtypeConfigHumanAccountCreateApprovalConfig)`

SetApprovalConfig sets ApprovalConfig field to given value.

### HasApprovalConfig

`func (o *HumanAccountSubtypeConfigHumanAccountCreate) HasApprovalConfig() bool`

HasApprovalConfig returns a boolean if a field has been set.

### GetFormId

`func (o *HumanAccountSubtypeConfigHumanAccountCreate) GetFormId() string`

GetFormId returns the FormId field if non-nil, zero value otherwise.

### GetFormIdOk

`func (o *HumanAccountSubtypeConfigHumanAccountCreate) GetFormIdOk() (*string, bool)`

GetFormIdOk returns a tuple with the FormId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormId

`func (o *HumanAccountSubtypeConfigHumanAccountCreate) SetFormId(v string)`

SetFormId sets FormId field to given value.

### HasFormId

`func (o *HumanAccountSubtypeConfigHumanAccountCreate) HasFormId() bool`

HasFormId returns a boolean if a field has been set.

### SetFormIdNil

`func (o *HumanAccountSubtypeConfigHumanAccountCreate) SetFormIdNil(b bool)`

 SetFormIdNil sets the value for FormId to be an explicit nil

### UnsetFormId
`func (o *HumanAccountSubtypeConfigHumanAccountCreate) UnsetFormId()`

UnsetFormId ensures that no value is present for FormId, not even an explicit nil

