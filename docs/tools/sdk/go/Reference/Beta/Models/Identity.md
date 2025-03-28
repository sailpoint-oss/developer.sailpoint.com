---
id: beta-identity
title: Identity
pagination_label: Identity
sidebar_label: Identity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identity', 'BetaIdentity'] 
slug: /tools/sdk/go/beta/models/identity
tags: ['SDK', 'Software Development Kit', 'Identity', 'BetaIdentity']
---

# Identity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the identity | [optional] [readonly] 
**Name** | **string** | The identity&#39;s name is equivalent to its Display Name attribute. | 
**Created** | Pointer to **time.Time** | Creation date of the identity | [optional] [readonly] 
**Modified** | Pointer to **time.Time** | Last modification date of the identity | [optional] [readonly] 
**Alias** | Pointer to **string** | The identity&#39;s alternate unique identifier is equivalent to its Account Name on the authoritative source account schema. | [optional] 
**EmailAddress** | Pointer to **NullableString** | The email address of the identity | [optional] 
**ProcessingState** | Pointer to **NullableString** | The processing state of the identity | [optional] 
**IdentityStatus** | Pointer to **string** | The identity&#39;s status in the system | [optional] 
**ManagerRef** | Pointer to [**NullableIdentityManagerRef**](identity-manager-ref) |  | [optional] 
**IsManager** | Pointer to **bool** | Whether this identity is a manager of another identity | [optional] [default to false]
**LastRefresh** | Pointer to **time.Time** | The last time the identity was refreshed by the system | [optional] 
**Attributes** | Pointer to **map[string]interface{}** | A map with the identity attributes for the identity | [optional] 
**LifecycleState** | Pointer to [**IdentityLifecycleState**](identity-lifecycle-state) |  | [optional] 

## Methods

### NewIdentity

`func NewIdentity(name string, ) *Identity`

NewIdentity instantiates a new Identity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityWithDefaults

`func NewIdentityWithDefaults() *Identity`

NewIdentityWithDefaults instantiates a new Identity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Identity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Identity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Identity) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Identity) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Identity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Identity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Identity) SetName(v string)`

SetName sets Name field to given value.


### GetCreated

`func (o *Identity) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Identity) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Identity) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Identity) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Identity) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Identity) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Identity) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Identity) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetAlias

`func (o *Identity) GetAlias() string`

GetAlias returns the Alias field if non-nil, zero value otherwise.

### GetAliasOk

`func (o *Identity) GetAliasOk() (*string, bool)`

GetAliasOk returns a tuple with the Alias field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlias

`func (o *Identity) SetAlias(v string)`

SetAlias sets Alias field to given value.

### HasAlias

`func (o *Identity) HasAlias() bool`

HasAlias returns a boolean if a field has been set.

### GetEmailAddress

`func (o *Identity) GetEmailAddress() string`

GetEmailAddress returns the EmailAddress field if non-nil, zero value otherwise.

### GetEmailAddressOk

`func (o *Identity) GetEmailAddressOk() (*string, bool)`

GetEmailAddressOk returns a tuple with the EmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailAddress

`func (o *Identity) SetEmailAddress(v string)`

SetEmailAddress sets EmailAddress field to given value.

### HasEmailAddress

`func (o *Identity) HasEmailAddress() bool`

HasEmailAddress returns a boolean if a field has been set.

### SetEmailAddressNil

`func (o *Identity) SetEmailAddressNil(b bool)`

 SetEmailAddressNil sets the value for EmailAddress to be an explicit nil

### UnsetEmailAddress
`func (o *Identity) UnsetEmailAddress()`

UnsetEmailAddress ensures that no value is present for EmailAddress, not even an explicit nil
### GetProcessingState

`func (o *Identity) GetProcessingState() string`

GetProcessingState returns the ProcessingState field if non-nil, zero value otherwise.

### GetProcessingStateOk

`func (o *Identity) GetProcessingStateOk() (*string, bool)`

GetProcessingStateOk returns a tuple with the ProcessingState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessingState

`func (o *Identity) SetProcessingState(v string)`

SetProcessingState sets ProcessingState field to given value.

### HasProcessingState

`func (o *Identity) HasProcessingState() bool`

HasProcessingState returns a boolean if a field has been set.

### SetProcessingStateNil

`func (o *Identity) SetProcessingStateNil(b bool)`

 SetProcessingStateNil sets the value for ProcessingState to be an explicit nil

### UnsetProcessingState
`func (o *Identity) UnsetProcessingState()`

UnsetProcessingState ensures that no value is present for ProcessingState, not even an explicit nil
### GetIdentityStatus

`func (o *Identity) GetIdentityStatus() string`

GetIdentityStatus returns the IdentityStatus field if non-nil, zero value otherwise.

### GetIdentityStatusOk

`func (o *Identity) GetIdentityStatusOk() (*string, bool)`

GetIdentityStatusOk returns a tuple with the IdentityStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityStatus

`func (o *Identity) SetIdentityStatus(v string)`

SetIdentityStatus sets IdentityStatus field to given value.

### HasIdentityStatus

`func (o *Identity) HasIdentityStatus() bool`

HasIdentityStatus returns a boolean if a field has been set.

### GetManagerRef

`func (o *Identity) GetManagerRef() IdentityManagerRef`

GetManagerRef returns the ManagerRef field if non-nil, zero value otherwise.

### GetManagerRefOk

`func (o *Identity) GetManagerRefOk() (*IdentityManagerRef, bool)`

GetManagerRefOk returns a tuple with the ManagerRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagerRef

`func (o *Identity) SetManagerRef(v IdentityManagerRef)`

SetManagerRef sets ManagerRef field to given value.

### HasManagerRef

`func (o *Identity) HasManagerRef() bool`

HasManagerRef returns a boolean if a field has been set.

### SetManagerRefNil

`func (o *Identity) SetManagerRefNil(b bool)`

 SetManagerRefNil sets the value for ManagerRef to be an explicit nil

### UnsetManagerRef
`func (o *Identity) UnsetManagerRef()`

UnsetManagerRef ensures that no value is present for ManagerRef, not even an explicit nil
### GetIsManager

`func (o *Identity) GetIsManager() bool`

GetIsManager returns the IsManager field if non-nil, zero value otherwise.

### GetIsManagerOk

`func (o *Identity) GetIsManagerOk() (*bool, bool)`

GetIsManagerOk returns a tuple with the IsManager field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsManager

`func (o *Identity) SetIsManager(v bool)`

SetIsManager sets IsManager field to given value.

### HasIsManager

`func (o *Identity) HasIsManager() bool`

HasIsManager returns a boolean if a field has been set.

### GetLastRefresh

`func (o *Identity) GetLastRefresh() time.Time`

GetLastRefresh returns the LastRefresh field if non-nil, zero value otherwise.

### GetLastRefreshOk

`func (o *Identity) GetLastRefreshOk() (*time.Time, bool)`

GetLastRefreshOk returns a tuple with the LastRefresh field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastRefresh

`func (o *Identity) SetLastRefresh(v time.Time)`

SetLastRefresh sets LastRefresh field to given value.

### HasLastRefresh

`func (o *Identity) HasLastRefresh() bool`

HasLastRefresh returns a boolean if a field has been set.

### GetAttributes

`func (o *Identity) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Identity) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Identity) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Identity) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetLifecycleState

`func (o *Identity) GetLifecycleState() IdentityLifecycleState`

GetLifecycleState returns the LifecycleState field if non-nil, zero value otherwise.

### GetLifecycleStateOk

`func (o *Identity) GetLifecycleStateOk() (*IdentityLifecycleState, bool)`

GetLifecycleStateOk returns a tuple with the LifecycleState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLifecycleState

`func (o *Identity) SetLifecycleState(v IdentityLifecycleState)`

SetLifecycleState sets LifecycleState field to given value.

### HasLifecycleState

`func (o *Identity) HasLifecycleState() bool`

HasLifecycleState returns a boolean if a field has been set.


