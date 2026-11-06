# MachineAccountSubtypeConfigDtoMachineAccountCreate

# MachineAccountSubtypeConfigDtoMachineAccountCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountCreateEnabled** | Pointer to **bool** | Specifies if the creation of machine accounts is allowed for this subtype. | [optional] [default to false]
**ApprovalRequired** | Pointer to **bool** | Specifies if approval is required for machine account creation requests for this subtype. | [optional] [default to false]
**FormId** | Pointer to **string** | Id of the form linked to subtype. | [optional] 
**EntitlementId** | Pointer to **string** | Id of the system created entitlement entitlement upon enabling account creation for this subtype. | [optional] 
**PasswordSetting** | Pointer to **string** | This is required before enabling the account creation to true. Default value will be null. | [optional] 
**PasswordAttribute** | Pointer to **string** | Name of the account attribute from the source's schema or new custom attribute to use when password settings is enabled. | [optional] 
**ApprovalConfig** | Pointer to [**MachineSubtypeApprovalConfig**](machine-subtype-approval-config) |  | [optional] 

## Methods

### NewMachineAccountSubtypeConfigDtoMachineAccountCreate

`func NewMachineAccountSubtypeConfigDtoMachineAccountCreate() *MachineAccountSubtypeConfigDtoMachineAccountCreate`

NewMachineAccountSubtypeConfigDtoMachineAccountCreate instantiates a new MachineAccountSubtypeConfigDtoMachineAccountCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineAccountSubtypeConfigDtoMachineAccountCreateWithDefaults

`func NewMachineAccountSubtypeConfigDtoMachineAccountCreateWithDefaults() *MachineAccountSubtypeConfigDtoMachineAccountCreate`

NewMachineAccountSubtypeConfigDtoMachineAccountCreateWithDefaults instantiates a new MachineAccountSubtypeConfigDtoMachineAccountCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountCreateEnabled

`func (o *MachineAccountSubtypeConfigDtoMachineAccountCreate) GetAccountCreateEnabled() bool`

GetAccountCreateEnabled returns the AccountCreateEnabled field if non-nil, zero value otherwise.

### GetAccountCreateEnabledOk

`func (o *MachineAccountSubtypeConfigDtoMachineAccountCreate) GetAccountCreateEnabledOk() (*bool, bool)`

GetAccountCreateEnabledOk returns a tuple with the AccountCreateEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountCreateEnabled

`func (o *MachineAccountSubtypeConfigDtoMachineAccountCreate) SetAccountCreateEnabled(v bool)`

SetAccountCreateEnabled sets AccountCreateEnabled field to given value.

### HasAccountCreateEnabled

`func (o *MachineAccountSubtypeConfigDtoMachineAccountCreate) HasAccountCreateEnabled() bool`

HasAccountCreateEnabled returns a boolean if a field has been set.

### GetApprovalRequired

`func (o *MachineAccountSubtypeConfigDtoMachineAccountCreate) GetApprovalRequired() bool`

GetApprovalRequired returns the ApprovalRequired field if non-nil, zero value otherwise.

### GetApprovalRequiredOk

`func (o *MachineAccountSubtypeConfigDtoMachineAccountCreate) GetApprovalRequiredOk() (*bool, bool)`

GetApprovalRequiredOk returns a tuple with the ApprovalRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalRequired

`func (o *MachineAccountSubtypeConfigDtoMachineAccountCreate) SetApprovalRequired(v bool)`

SetApprovalRequired sets ApprovalRequired field to given value.

### HasApprovalRequired

`func (o *MachineAccountSubtypeConfigDtoMachineAccountCreate) HasApprovalRequired() bool`

HasApprovalRequired returns a boolean if a field has been set.

### GetFormId

`func (o *MachineAccountSubtypeConfigDtoMachineAccountCreate) GetFormId() string`

GetFormId returns the FormId field if non-nil, zero value otherwise.

### GetFormIdOk

`func (o *MachineAccountSubtypeConfigDtoMachineAccountCreate) GetFormIdOk() (*string, bool)`

GetFormIdOk returns a tuple with the FormId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormId

`func (o *MachineAccountSubtypeConfigDtoMachineAccountCreate) SetFormId(v string)`

SetFormId sets FormId field to given value.

### HasFormId

`func (o *MachineAccountSubtypeConfigDtoMachineAccountCreate) HasFormId() bool`

HasFormId returns a boolean if a field has been set.

### GetEntitlementId

`func (o *MachineAccountSubtypeConfigDtoMachineAccountCreate) GetEntitlementId() string`

GetEntitlementId returns the EntitlementId field if non-nil, zero value otherwise.

### GetEntitlementIdOk

`func (o *MachineAccountSubtypeConfigDtoMachineAccountCreate) GetEntitlementIdOk() (*string, bool)`

GetEntitlementIdOk returns a tuple with the EntitlementId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementId

`func (o *MachineAccountSubtypeConfigDtoMachineAccountCreate) SetEntitlementId(v string)`

SetEntitlementId sets EntitlementId field to given value.

### HasEntitlementId

`func (o *MachineAccountSubtypeConfigDtoMachineAccountCreate) HasEntitlementId() bool`

HasEntitlementId returns a boolean if a field has been set.

### GetPasswordSetting

`func (o *MachineAccountSubtypeConfigDtoMachineAccountCreate) GetPasswordSetting() string`

GetPasswordSetting returns the PasswordSetting field if non-nil, zero value otherwise.

### GetPasswordSettingOk

`func (o *MachineAccountSubtypeConfigDtoMachineAccountCreate) GetPasswordSettingOk() (*string, bool)`

GetPasswordSettingOk returns a tuple with the PasswordSetting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPasswordSetting

`func (o *MachineAccountSubtypeConfigDtoMachineAccountCreate) SetPasswordSetting(v string)`

SetPasswordSetting sets PasswordSetting field to given value.

### HasPasswordSetting

`func (o *MachineAccountSubtypeConfigDtoMachineAccountCreate) HasPasswordSetting() bool`

HasPasswordSetting returns a boolean if a field has been set.

### GetPasswordAttribute

`func (o *MachineAccountSubtypeConfigDtoMachineAccountCreate) GetPasswordAttribute() string`

GetPasswordAttribute returns the PasswordAttribute field if non-nil, zero value otherwise.

### GetPasswordAttributeOk

`func (o *MachineAccountSubtypeConfigDtoMachineAccountCreate) GetPasswordAttributeOk() (*string, bool)`

GetPasswordAttributeOk returns a tuple with the PasswordAttribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPasswordAttribute

`func (o *MachineAccountSubtypeConfigDtoMachineAccountCreate) SetPasswordAttribute(v string)`

SetPasswordAttribute sets PasswordAttribute field to given value.

### HasPasswordAttribute

`func (o *MachineAccountSubtypeConfigDtoMachineAccountCreate) HasPasswordAttribute() bool`

HasPasswordAttribute returns a boolean if a field has been set.

### GetApprovalConfig

`func (o *MachineAccountSubtypeConfigDtoMachineAccountCreate) GetApprovalConfig() MachineSubtypeApprovalConfig`

GetApprovalConfig returns the ApprovalConfig field if non-nil, zero value otherwise.

### GetApprovalConfigOk

`func (o *MachineAccountSubtypeConfigDtoMachineAccountCreate) GetApprovalConfigOk() (*MachineSubtypeApprovalConfig, bool)`

GetApprovalConfigOk returns a tuple with the ApprovalConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalConfig

`func (o *MachineAccountSubtypeConfigDtoMachineAccountCreate) SetApprovalConfig(v MachineSubtypeApprovalConfig)`

SetApprovalConfig sets ApprovalConfig field to given value.

### HasApprovalConfig

`func (o *MachineAccountSubtypeConfigDtoMachineAccountCreate) HasApprovalConfig() bool`

HasApprovalConfig returns a boolean if a field has been set.


