---
id: v2026-intel-access-account-wire
title: IntelAccessAccountWire
pagination_label: IntelAccessAccountWire
sidebar_label: IntelAccessAccountWire
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IntelAccessAccountWire', 'V2026IntelAccessAccountWire'] 
slug: /tools/sdk/go/v2026/models/intel-access-account-wire
tags: ['SDK', 'Software Development Kit', 'IntelAccessAccountWire', 'V2026IntelAccessAccountWire']
---

# IntelAccessAccountWire

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Unique account identifier in Identity Security Cloud. | 
**Name** | **string** | Account name or login value on the correlated source. | 
**Source** | Pointer to [**IntelAccessSourceWire**](intel-access-source-wire) | Source metadata for the account as returned by List Accounts wire format. | [optional] 
**Disabled** | **bool** | True when the account is administratively disabled on the source. | 
**Locked** | **bool** | True when the account is locked from interactive sign-in on the source. | 
**Uncorrelated** | **bool** | True when the account is not correlated to an authoritative identity. | 
**Authoritative** | **bool** | True when the account is treated as authoritative for attribute synchronization. | 
**SystemAccount** | **bool** | True when the account represents a non-interactive or system principal. | 
**IsMachine** | **bool** | True when the account belongs to a machine or service identity. | 
**HasEntitlements** | **bool** | True when the account currently has one or more entitlements assigned. | 
**ManuallyCorrelated** | **bool** | True when an administrator manually correlated the account to an identity. | 
**ConnectionType** | **string** | Connector connection type identifier for the backing source system. | 
**NativeIdentity** | Pointer to **NullableString** | Native identifier string on the source directory or application. | [optional] 
**Created** | **SailPointTime** | Timestamp when the account record was created in Identity Security Cloud. | 
**Modified** | **SailPointTime** | Timestamp when the account record was last modified in Identity Security Cloud. | 

## Methods

### NewIntelAccessAccountWire

`func NewIntelAccessAccountWire(id string, name string, disabled bool, locked bool, uncorrelated bool, authoritative bool, systemAccount bool, isMachine bool, hasEntitlements bool, manuallyCorrelated bool, connectionType string, created SailPointTime, modified SailPointTime, ) *IntelAccessAccountWire`

NewIntelAccessAccountWire instantiates a new IntelAccessAccountWire object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelAccessAccountWireWithDefaults

`func NewIntelAccessAccountWireWithDefaults() *IntelAccessAccountWire`

NewIntelAccessAccountWireWithDefaults instantiates a new IntelAccessAccountWire object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *IntelAccessAccountWire) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IntelAccessAccountWire) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IntelAccessAccountWire) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *IntelAccessAccountWire) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IntelAccessAccountWire) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IntelAccessAccountWire) SetName(v string)`

SetName sets Name field to given value.


### GetSource

`func (o *IntelAccessAccountWire) GetSource() IntelAccessSourceWire`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *IntelAccessAccountWire) GetSourceOk() (*IntelAccessSourceWire, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *IntelAccessAccountWire) SetSource(v IntelAccessSourceWire)`

SetSource sets Source field to given value.

### HasSource

`func (o *IntelAccessAccountWire) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetDisabled

`func (o *IntelAccessAccountWire) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *IntelAccessAccountWire) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *IntelAccessAccountWire) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.


### GetLocked

`func (o *IntelAccessAccountWire) GetLocked() bool`

GetLocked returns the Locked field if non-nil, zero value otherwise.

### GetLockedOk

`func (o *IntelAccessAccountWire) GetLockedOk() (*bool, bool)`

GetLockedOk returns a tuple with the Locked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocked

`func (o *IntelAccessAccountWire) SetLocked(v bool)`

SetLocked sets Locked field to given value.


### GetUncorrelated

`func (o *IntelAccessAccountWire) GetUncorrelated() bool`

GetUncorrelated returns the Uncorrelated field if non-nil, zero value otherwise.

### GetUncorrelatedOk

`func (o *IntelAccessAccountWire) GetUncorrelatedOk() (*bool, bool)`

GetUncorrelatedOk returns a tuple with the Uncorrelated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUncorrelated

`func (o *IntelAccessAccountWire) SetUncorrelated(v bool)`

SetUncorrelated sets Uncorrelated field to given value.


### GetAuthoritative

`func (o *IntelAccessAccountWire) GetAuthoritative() bool`

GetAuthoritative returns the Authoritative field if non-nil, zero value otherwise.

### GetAuthoritativeOk

`func (o *IntelAccessAccountWire) GetAuthoritativeOk() (*bool, bool)`

GetAuthoritativeOk returns a tuple with the Authoritative field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthoritative

`func (o *IntelAccessAccountWire) SetAuthoritative(v bool)`

SetAuthoritative sets Authoritative field to given value.


### GetSystemAccount

`func (o *IntelAccessAccountWire) GetSystemAccount() bool`

GetSystemAccount returns the SystemAccount field if non-nil, zero value otherwise.

### GetSystemAccountOk

`func (o *IntelAccessAccountWire) GetSystemAccountOk() (*bool, bool)`

GetSystemAccountOk returns a tuple with the SystemAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemAccount

`func (o *IntelAccessAccountWire) SetSystemAccount(v bool)`

SetSystemAccount sets SystemAccount field to given value.


### GetIsMachine

`func (o *IntelAccessAccountWire) GetIsMachine() bool`

GetIsMachine returns the IsMachine field if non-nil, zero value otherwise.

### GetIsMachineOk

`func (o *IntelAccessAccountWire) GetIsMachineOk() (*bool, bool)`

GetIsMachineOk returns a tuple with the IsMachine field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsMachine

`func (o *IntelAccessAccountWire) SetIsMachine(v bool)`

SetIsMachine sets IsMachine field to given value.


### GetHasEntitlements

`func (o *IntelAccessAccountWire) GetHasEntitlements() bool`

GetHasEntitlements returns the HasEntitlements field if non-nil, zero value otherwise.

### GetHasEntitlementsOk

`func (o *IntelAccessAccountWire) GetHasEntitlementsOk() (*bool, bool)`

GetHasEntitlementsOk returns a tuple with the HasEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasEntitlements

`func (o *IntelAccessAccountWire) SetHasEntitlements(v bool)`

SetHasEntitlements sets HasEntitlements field to given value.


### GetManuallyCorrelated

`func (o *IntelAccessAccountWire) GetManuallyCorrelated() bool`

GetManuallyCorrelated returns the ManuallyCorrelated field if non-nil, zero value otherwise.

### GetManuallyCorrelatedOk

`func (o *IntelAccessAccountWire) GetManuallyCorrelatedOk() (*bool, bool)`

GetManuallyCorrelatedOk returns a tuple with the ManuallyCorrelated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyCorrelated

`func (o *IntelAccessAccountWire) SetManuallyCorrelated(v bool)`

SetManuallyCorrelated sets ManuallyCorrelated field to given value.


### GetConnectionType

`func (o *IntelAccessAccountWire) GetConnectionType() string`

GetConnectionType returns the ConnectionType field if non-nil, zero value otherwise.

### GetConnectionTypeOk

`func (o *IntelAccessAccountWire) GetConnectionTypeOk() (*string, bool)`

GetConnectionTypeOk returns a tuple with the ConnectionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionType

`func (o *IntelAccessAccountWire) SetConnectionType(v string)`

SetConnectionType sets ConnectionType field to given value.


### GetNativeIdentity

`func (o *IntelAccessAccountWire) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *IntelAccessAccountWire) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *IntelAccessAccountWire) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *IntelAccessAccountWire) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### SetNativeIdentityNil

`func (o *IntelAccessAccountWire) SetNativeIdentityNil(b bool)`

 SetNativeIdentityNil sets the value for NativeIdentity to be an explicit nil

### UnsetNativeIdentity
`func (o *IntelAccessAccountWire) UnsetNativeIdentity()`

UnsetNativeIdentity ensures that no value is present for NativeIdentity, not even an explicit nil
### GetCreated

`func (o *IntelAccessAccountWire) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *IntelAccessAccountWire) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *IntelAccessAccountWire) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetModified

`func (o *IntelAccessAccountWire) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *IntelAccessAccountWire) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *IntelAccessAccountWire) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.



