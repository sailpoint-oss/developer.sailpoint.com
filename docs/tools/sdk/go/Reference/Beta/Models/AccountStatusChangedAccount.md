---
id: beta-account-status-changed-account
title: AccountStatusChangedAccount
pagination_label: AccountStatusChangedAccount
sidebar_label: AccountStatusChangedAccount
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountStatusChangedAccount', 'BetaAccountStatusChangedAccount'] 
slug: /tools/sdk/go/beta/models/account-status-changed-account
tags: ['SDK', 'Software Development Kit', 'AccountStatusChangedAccount', 'BetaAccountStatusChangedAccount']
---

# AccountStatusChangedAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | the ID of the account in the database | [optional] 
**NativeIdentity** | Pointer to **string** | the native identifier of the account | [optional] 
**DisplayName** | Pointer to **string** | the display name of the account | [optional] 
**SourceId** | Pointer to **string** | the ID of the source for this account | [optional] 
**SourceName** | Pointer to **string** | the name of the source for this account | [optional] 
**EntitlementCount** | Pointer to **int32** | the number of entitlements on this account | [optional] 
**AccessType** | Pointer to **string** | this value is always \&quot;account\&quot; | [optional] 

## Methods

### NewAccountStatusChangedAccount

`func NewAccountStatusChangedAccount() *AccountStatusChangedAccount`

NewAccountStatusChangedAccount instantiates a new AccountStatusChangedAccount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountStatusChangedAccountWithDefaults

`func NewAccountStatusChangedAccountWithDefaults() *AccountStatusChangedAccount`

NewAccountStatusChangedAccountWithDefaults instantiates a new AccountStatusChangedAccount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccountStatusChangedAccount) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountStatusChangedAccount) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountStatusChangedAccount) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccountStatusChangedAccount) HasId() bool`

HasId returns a boolean if a field has been set.

### GetNativeIdentity

`func (o *AccountStatusChangedAccount) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *AccountStatusChangedAccount) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *AccountStatusChangedAccount) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *AccountStatusChangedAccount) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### GetDisplayName

`func (o *AccountStatusChangedAccount) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *AccountStatusChangedAccount) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *AccountStatusChangedAccount) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *AccountStatusChangedAccount) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetSourceId

`func (o *AccountStatusChangedAccount) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *AccountStatusChangedAccount) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *AccountStatusChangedAccount) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *AccountStatusChangedAccount) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetSourceName

`func (o *AccountStatusChangedAccount) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *AccountStatusChangedAccount) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *AccountStatusChangedAccount) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *AccountStatusChangedAccount) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetEntitlementCount

`func (o *AccountStatusChangedAccount) GetEntitlementCount() int32`

GetEntitlementCount returns the EntitlementCount field if non-nil, zero value otherwise.

### GetEntitlementCountOk

`func (o *AccountStatusChangedAccount) GetEntitlementCountOk() (*int32, bool)`

GetEntitlementCountOk returns a tuple with the EntitlementCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementCount

`func (o *AccountStatusChangedAccount) SetEntitlementCount(v int32)`

SetEntitlementCount sets EntitlementCount field to given value.

### HasEntitlementCount

`func (o *AccountStatusChangedAccount) HasEntitlementCount() bool`

HasEntitlementCount returns a boolean if a field has been set.

### GetAccessType

`func (o *AccountStatusChangedAccount) GetAccessType() string`

GetAccessType returns the AccessType field if non-nil, zero value otherwise.

### GetAccessTypeOk

`func (o *AccountStatusChangedAccount) GetAccessTypeOk() (*string, bool)`

GetAccessTypeOk returns a tuple with the AccessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessType

`func (o *AccountStatusChangedAccount) SetAccessType(v string)`

SetAccessType sets AccessType field to given value.

### HasAccessType

`func (o *AccountStatusChangedAccount) HasAccessType() bool`

HasAccessType returns a boolean if a field has been set.


