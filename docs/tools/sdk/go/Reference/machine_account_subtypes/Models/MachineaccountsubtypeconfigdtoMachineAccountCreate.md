---
id: v1-machineaccountsubtypeconfigdto-machine-account-create
title: MachineaccountsubtypeconfigdtoMachineAccountCreate
pagination_label: MachineaccountsubtypeconfigdtoMachineAccountCreate
sidebar_label: MachineaccountsubtypeconfigdtoMachineAccountCreate
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineaccountsubtypeconfigdtoMachineAccountCreate', 'V1MachineaccountsubtypeconfigdtoMachineAccountCreate'] 
slug: /tools/sdk/go/machineaccountsubtypes/models/machineaccountsubtypeconfigdto-machine-account-create
tags: ['SDK', 'Software Development Kit', 'MachineaccountsubtypeconfigdtoMachineAccountCreate', 'V1MachineaccountsubtypeconfigdtoMachineAccountCreate']
---

# MachineaccountsubtypeconfigdtoMachineAccountCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountCreateEnabled** | Pointer to **bool** | Specifies if the creation of machine accounts is allowed for this subtype. | [optional] [default to false]
**ApprovalRequired** | Pointer to **bool** | Specifies if approval is required for machine account creation requests for this subtype. | [optional] [default to false]
**FormId** | Pointer to **string** | Id of the form linked to subtype. | [optional] 
**EntitlementId** | Pointer to **string** | Id of the system created entitlement entitlement upon enabling account creation for this subtype. | [optional] 
**PasswordSetting** | Pointer to **string** | This is required before enabling the account creation to true. Default value will be null. | [optional] 
**PasswordAttribute** | Pointer to **string** | Name of the account attribute from the source's schema or new custom attribute to use when password settings is enabled. | [optional] 
**ApprovalConfig** | Pointer to [**Machinesubtypeapprovalconfig**](machinesubtypeapprovalconfig) |  | [optional] 

## Methods

### NewMachineaccountsubtypeconfigdtoMachineAccountCreate

`func NewMachineaccountsubtypeconfigdtoMachineAccountCreate() *MachineaccountsubtypeconfigdtoMachineAccountCreate`

NewMachineaccountsubtypeconfigdtoMachineAccountCreate instantiates a new MachineaccountsubtypeconfigdtoMachineAccountCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineaccountsubtypeconfigdtoMachineAccountCreateWithDefaults

`func NewMachineaccountsubtypeconfigdtoMachineAccountCreateWithDefaults() *MachineaccountsubtypeconfigdtoMachineAccountCreate`

NewMachineaccountsubtypeconfigdtoMachineAccountCreateWithDefaults instantiates a new MachineaccountsubtypeconfigdtoMachineAccountCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountCreateEnabled

`func (o *MachineaccountsubtypeconfigdtoMachineAccountCreate) GetAccountCreateEnabled() bool`

GetAccountCreateEnabled returns the AccountCreateEnabled field if non-nil, zero value otherwise.

### GetAccountCreateEnabledOk

`func (o *MachineaccountsubtypeconfigdtoMachineAccountCreate) GetAccountCreateEnabledOk() (*bool, bool)`

GetAccountCreateEnabledOk returns a tuple with the AccountCreateEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountCreateEnabled

`func (o *MachineaccountsubtypeconfigdtoMachineAccountCreate) SetAccountCreateEnabled(v bool)`

SetAccountCreateEnabled sets AccountCreateEnabled field to given value.

### HasAccountCreateEnabled

`func (o *MachineaccountsubtypeconfigdtoMachineAccountCreate) HasAccountCreateEnabled() bool`

HasAccountCreateEnabled returns a boolean if a field has been set.

### GetApprovalRequired

`func (o *MachineaccountsubtypeconfigdtoMachineAccountCreate) GetApprovalRequired() bool`

GetApprovalRequired returns the ApprovalRequired field if non-nil, zero value otherwise.

### GetApprovalRequiredOk

`func (o *MachineaccountsubtypeconfigdtoMachineAccountCreate) GetApprovalRequiredOk() (*bool, bool)`

GetApprovalRequiredOk returns a tuple with the ApprovalRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalRequired

`func (o *MachineaccountsubtypeconfigdtoMachineAccountCreate) SetApprovalRequired(v bool)`

SetApprovalRequired sets ApprovalRequired field to given value.

### HasApprovalRequired

`func (o *MachineaccountsubtypeconfigdtoMachineAccountCreate) HasApprovalRequired() bool`

HasApprovalRequired returns a boolean if a field has been set.

### GetFormId

`func (o *MachineaccountsubtypeconfigdtoMachineAccountCreate) GetFormId() string`

GetFormId returns the FormId field if non-nil, zero value otherwise.

### GetFormIdOk

`func (o *MachineaccountsubtypeconfigdtoMachineAccountCreate) GetFormIdOk() (*string, bool)`

GetFormIdOk returns a tuple with the FormId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormId

`func (o *MachineaccountsubtypeconfigdtoMachineAccountCreate) SetFormId(v string)`

SetFormId sets FormId field to given value.

### HasFormId

`func (o *MachineaccountsubtypeconfigdtoMachineAccountCreate) HasFormId() bool`

HasFormId returns a boolean if a field has been set.

### GetEntitlementId

`func (o *MachineaccountsubtypeconfigdtoMachineAccountCreate) GetEntitlementId() string`

GetEntitlementId returns the EntitlementId field if non-nil, zero value otherwise.

### GetEntitlementIdOk

`func (o *MachineaccountsubtypeconfigdtoMachineAccountCreate) GetEntitlementIdOk() (*string, bool)`

GetEntitlementIdOk returns a tuple with the EntitlementId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementId

`func (o *MachineaccountsubtypeconfigdtoMachineAccountCreate) SetEntitlementId(v string)`

SetEntitlementId sets EntitlementId field to given value.

### HasEntitlementId

`func (o *MachineaccountsubtypeconfigdtoMachineAccountCreate) HasEntitlementId() bool`

HasEntitlementId returns a boolean if a field has been set.

### GetPasswordSetting

`func (o *MachineaccountsubtypeconfigdtoMachineAccountCreate) GetPasswordSetting() string`

GetPasswordSetting returns the PasswordSetting field if non-nil, zero value otherwise.

### GetPasswordSettingOk

`func (o *MachineaccountsubtypeconfigdtoMachineAccountCreate) GetPasswordSettingOk() (*string, bool)`

GetPasswordSettingOk returns a tuple with the PasswordSetting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPasswordSetting

`func (o *MachineaccountsubtypeconfigdtoMachineAccountCreate) SetPasswordSetting(v string)`

SetPasswordSetting sets PasswordSetting field to given value.

### HasPasswordSetting

`func (o *MachineaccountsubtypeconfigdtoMachineAccountCreate) HasPasswordSetting() bool`

HasPasswordSetting returns a boolean if a field has been set.

### GetPasswordAttribute

`func (o *MachineaccountsubtypeconfigdtoMachineAccountCreate) GetPasswordAttribute() string`

GetPasswordAttribute returns the PasswordAttribute field if non-nil, zero value otherwise.

### GetPasswordAttributeOk

`func (o *MachineaccountsubtypeconfigdtoMachineAccountCreate) GetPasswordAttributeOk() (*string, bool)`

GetPasswordAttributeOk returns a tuple with the PasswordAttribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPasswordAttribute

`func (o *MachineaccountsubtypeconfigdtoMachineAccountCreate) SetPasswordAttribute(v string)`

SetPasswordAttribute sets PasswordAttribute field to given value.

### HasPasswordAttribute

`func (o *MachineaccountsubtypeconfigdtoMachineAccountCreate) HasPasswordAttribute() bool`

HasPasswordAttribute returns a boolean if a field has been set.

### GetApprovalConfig

`func (o *MachineaccountsubtypeconfigdtoMachineAccountCreate) GetApprovalConfig() Machinesubtypeapprovalconfig`

GetApprovalConfig returns the ApprovalConfig field if non-nil, zero value otherwise.

### GetApprovalConfigOk

`func (o *MachineaccountsubtypeconfigdtoMachineAccountCreate) GetApprovalConfigOk() (*Machinesubtypeapprovalconfig, bool)`

GetApprovalConfigOk returns a tuple with the ApprovalConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalConfig

`func (o *MachineaccountsubtypeconfigdtoMachineAccountCreate) SetApprovalConfig(v Machinesubtypeapprovalconfig)`

SetApprovalConfig sets ApprovalConfig field to given value.

### HasApprovalConfig

`func (o *MachineaccountsubtypeconfigdtoMachineAccountCreate) HasApprovalConfig() bool`

HasApprovalConfig returns a boolean if a field has been set.


