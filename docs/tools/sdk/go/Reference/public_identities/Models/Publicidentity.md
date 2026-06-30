---
id: v1-publicidentity
title: Publicidentity
pagination_label: Publicidentity
sidebar_label: Publicidentity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Publicidentity', 'V1Publicidentity'] 
slug: /tools/sdk/go/publicidentities/models/publicidentity
tags: ['SDK', 'Software Development Kit', 'Publicidentity', 'V1Publicidentity']
---

# Publicidentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Identity id | [optional] 
**Name** | Pointer to **string** | Human-readable display name of identity. | [optional] 
**Alias** | Pointer to **string** | Alternate unique identifier for the identity. | [optional] 
**Email** | Pointer to **NullableString** | Email address of identity. | [optional] 
**Status** | Pointer to **NullableString** | The lifecycle status for the identity | [optional] 
**IdentityState** | Pointer to **NullableString** | The current state of the identity, which determines how Identity Security Cloud interacts with the identity. An identity that is Active will be included identity picklists in Request Center, identity processing, and more. Identities that are Inactive will be excluded from these features.  | [optional] 
**Manager** | Pointer to [**NullableIdentityreference**](identityreference) |  | [optional] 
**Attributes** | Pointer to [**[]PublicidentityAttributesInner**](publicidentity-attributes-inner) | The public identity attributes of the identity | [optional] 

## Methods

### NewPublicidentity

`func NewPublicidentity() *Publicidentity`

NewPublicidentity instantiates a new Publicidentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPublicidentityWithDefaults

`func NewPublicidentityWithDefaults() *Publicidentity`

NewPublicidentityWithDefaults instantiates a new Publicidentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Publicidentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Publicidentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Publicidentity) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Publicidentity) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Publicidentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Publicidentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Publicidentity) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Publicidentity) HasName() bool`

HasName returns a boolean if a field has been set.

### GetAlias

`func (o *Publicidentity) GetAlias() string`

GetAlias returns the Alias field if non-nil, zero value otherwise.

### GetAliasOk

`func (o *Publicidentity) GetAliasOk() (*string, bool)`

GetAliasOk returns a tuple with the Alias field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlias

`func (o *Publicidentity) SetAlias(v string)`

SetAlias sets Alias field to given value.

### HasAlias

`func (o *Publicidentity) HasAlias() bool`

HasAlias returns a boolean if a field has been set.

### GetEmail

`func (o *Publicidentity) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *Publicidentity) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *Publicidentity) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *Publicidentity) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### SetEmailNil

`func (o *Publicidentity) SetEmailNil(b bool)`

 SetEmailNil sets the value for Email to be an explicit nil

### UnsetEmail
`func (o *Publicidentity) UnsetEmail()`

UnsetEmail ensures that no value is present for Email, not even an explicit nil
### GetStatus

`func (o *Publicidentity) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Publicidentity) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Publicidentity) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Publicidentity) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### SetStatusNil

`func (o *Publicidentity) SetStatusNil(b bool)`

 SetStatusNil sets the value for Status to be an explicit nil

### UnsetStatus
`func (o *Publicidentity) UnsetStatus()`

UnsetStatus ensures that no value is present for Status, not even an explicit nil
### GetIdentityState

`func (o *Publicidentity) GetIdentityState() string`

GetIdentityState returns the IdentityState field if non-nil, zero value otherwise.

### GetIdentityStateOk

`func (o *Publicidentity) GetIdentityStateOk() (*string, bool)`

GetIdentityStateOk returns a tuple with the IdentityState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityState

`func (o *Publicidentity) SetIdentityState(v string)`

SetIdentityState sets IdentityState field to given value.

### HasIdentityState

`func (o *Publicidentity) HasIdentityState() bool`

HasIdentityState returns a boolean if a field has been set.

### SetIdentityStateNil

`func (o *Publicidentity) SetIdentityStateNil(b bool)`

 SetIdentityStateNil sets the value for IdentityState to be an explicit nil

### UnsetIdentityState
`func (o *Publicidentity) UnsetIdentityState()`

UnsetIdentityState ensures that no value is present for IdentityState, not even an explicit nil
### GetManager

`func (o *Publicidentity) GetManager() Identityreference`

GetManager returns the Manager field if non-nil, zero value otherwise.

### GetManagerOk

`func (o *Publicidentity) GetManagerOk() (*Identityreference, bool)`

GetManagerOk returns a tuple with the Manager field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManager

`func (o *Publicidentity) SetManager(v Identityreference)`

SetManager sets Manager field to given value.

### HasManager

`func (o *Publicidentity) HasManager() bool`

HasManager returns a boolean if a field has been set.

### SetManagerNil

`func (o *Publicidentity) SetManagerNil(b bool)`

 SetManagerNil sets the value for Manager to be an explicit nil

### UnsetManager
`func (o *Publicidentity) UnsetManager()`

UnsetManager ensures that no value is present for Manager, not even an explicit nil
### GetAttributes

`func (o *Publicidentity) GetAttributes() []PublicidentityAttributesInner`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Publicidentity) GetAttributesOk() (*[]PublicidentityAttributesInner, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Publicidentity) SetAttributes(v []PublicidentityAttributesInner)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Publicidentity) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.


