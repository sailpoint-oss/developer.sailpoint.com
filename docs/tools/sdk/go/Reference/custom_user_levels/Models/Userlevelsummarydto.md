---
id: v1-userlevelsummarydto
title: Userlevelsummarydto
pagination_label: Userlevelsummarydto
sidebar_label: Userlevelsummarydto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Userlevelsummarydto', 'V1Userlevelsummarydto'] 
slug: /tools/sdk/go/customuserlevels/models/userlevelsummarydto
tags: ['SDK', 'Software Development Kit', 'Userlevelsummarydto', 'V1Userlevelsummarydto']
---

# Userlevelsummarydto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The unique identifier of the UserLevel. | [optional] 
**Name** | Pointer to **string** | The human-readable name of the UserLevel. | [optional] 
**Description** | Pointer to **NullableString** | A human-readable description of the UserLevel. | [optional] 
**LegacyGroup** | Pointer to **NullableString** | The legacy group associated with the UserLevel, used for backward compatibility for the UserLevel id. | [optional] 
**RightSets** | Pointer to [**[]Rightsetdto**](rightsetdto) | List of RightSets associated with the UserLevel. | [optional] 
**Custom** | Pointer to **bool** | Indicates whether the UserLevel is custom. | [optional] [default to true]
**AdminAssignable** | Pointer to **bool** | Indicates whether the UserLevel is admin-assignable. | [optional] [default to true]
**TranslatedName** | Pointer to **NullableString** | The translated name of the UserLevel. | [optional] 
**TranslatedGrant** | Pointer to **NullableString** | The translated grant message for the UserLevel. | [optional] 
**TranslatedRemove** | Pointer to **NullableString** | The translated remove message for the UserLevel. | [optional] 
**Owner** | Pointer to [**Publicidentity**](publicidentity) |  | [optional] 
**Status** | Pointer to **string** | The status of the UserLevel. | [optional] 
**Created** | Pointer to **SailPointTime** | The creation timestamp of the UserLevel. | [optional] 
**Modified** | Pointer to **SailPointTime** | The last modification timestamp of the UserLevel. | [optional] 
**AssociatedIdentitiesCount** | Pointer to **NullableInt32** | The count of associated identities for the UserLevel. | [optional] 

## Methods

### NewUserlevelsummarydto

`func NewUserlevelsummarydto() *Userlevelsummarydto`

NewUserlevelsummarydto instantiates a new Userlevelsummarydto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserlevelsummarydtoWithDefaults

`func NewUserlevelsummarydtoWithDefaults() *Userlevelsummarydto`

NewUserlevelsummarydtoWithDefaults instantiates a new Userlevelsummarydto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Userlevelsummarydto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Userlevelsummarydto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Userlevelsummarydto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Userlevelsummarydto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Userlevelsummarydto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Userlevelsummarydto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Userlevelsummarydto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Userlevelsummarydto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *Userlevelsummarydto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Userlevelsummarydto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Userlevelsummarydto) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Userlevelsummarydto) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Userlevelsummarydto) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Userlevelsummarydto) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetLegacyGroup

`func (o *Userlevelsummarydto) GetLegacyGroup() string`

GetLegacyGroup returns the LegacyGroup field if non-nil, zero value otherwise.

### GetLegacyGroupOk

`func (o *Userlevelsummarydto) GetLegacyGroupOk() (*string, bool)`

GetLegacyGroupOk returns a tuple with the LegacyGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLegacyGroup

`func (o *Userlevelsummarydto) SetLegacyGroup(v string)`

SetLegacyGroup sets LegacyGroup field to given value.

### HasLegacyGroup

`func (o *Userlevelsummarydto) HasLegacyGroup() bool`

HasLegacyGroup returns a boolean if a field has been set.

### SetLegacyGroupNil

`func (o *Userlevelsummarydto) SetLegacyGroupNil(b bool)`

 SetLegacyGroupNil sets the value for LegacyGroup to be an explicit nil

### UnsetLegacyGroup
`func (o *Userlevelsummarydto) UnsetLegacyGroup()`

UnsetLegacyGroup ensures that no value is present for LegacyGroup, not even an explicit nil
### GetRightSets

`func (o *Userlevelsummarydto) GetRightSets() []Rightsetdto`

GetRightSets returns the RightSets field if non-nil, zero value otherwise.

### GetRightSetsOk

`func (o *Userlevelsummarydto) GetRightSetsOk() (*[]Rightsetdto, bool)`

GetRightSetsOk returns a tuple with the RightSets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRightSets

`func (o *Userlevelsummarydto) SetRightSets(v []Rightsetdto)`

SetRightSets sets RightSets field to given value.

### HasRightSets

`func (o *Userlevelsummarydto) HasRightSets() bool`

HasRightSets returns a boolean if a field has been set.

### GetCustom

`func (o *Userlevelsummarydto) GetCustom() bool`

GetCustom returns the Custom field if non-nil, zero value otherwise.

### GetCustomOk

`func (o *Userlevelsummarydto) GetCustomOk() (*bool, bool)`

GetCustomOk returns a tuple with the Custom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustom

`func (o *Userlevelsummarydto) SetCustom(v bool)`

SetCustom sets Custom field to given value.

### HasCustom

`func (o *Userlevelsummarydto) HasCustom() bool`

HasCustom returns a boolean if a field has been set.

### GetAdminAssignable

`func (o *Userlevelsummarydto) GetAdminAssignable() bool`

GetAdminAssignable returns the AdminAssignable field if non-nil, zero value otherwise.

### GetAdminAssignableOk

`func (o *Userlevelsummarydto) GetAdminAssignableOk() (*bool, bool)`

GetAdminAssignableOk returns a tuple with the AdminAssignable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdminAssignable

`func (o *Userlevelsummarydto) SetAdminAssignable(v bool)`

SetAdminAssignable sets AdminAssignable field to given value.

### HasAdminAssignable

`func (o *Userlevelsummarydto) HasAdminAssignable() bool`

HasAdminAssignable returns a boolean if a field has been set.

### GetTranslatedName

`func (o *Userlevelsummarydto) GetTranslatedName() string`

GetTranslatedName returns the TranslatedName field if non-nil, zero value otherwise.

### GetTranslatedNameOk

`func (o *Userlevelsummarydto) GetTranslatedNameOk() (*string, bool)`

GetTranslatedNameOk returns a tuple with the TranslatedName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslatedName

`func (o *Userlevelsummarydto) SetTranslatedName(v string)`

SetTranslatedName sets TranslatedName field to given value.

### HasTranslatedName

`func (o *Userlevelsummarydto) HasTranslatedName() bool`

HasTranslatedName returns a boolean if a field has been set.

### SetTranslatedNameNil

`func (o *Userlevelsummarydto) SetTranslatedNameNil(b bool)`

 SetTranslatedNameNil sets the value for TranslatedName to be an explicit nil

### UnsetTranslatedName
`func (o *Userlevelsummarydto) UnsetTranslatedName()`

UnsetTranslatedName ensures that no value is present for TranslatedName, not even an explicit nil
### GetTranslatedGrant

`func (o *Userlevelsummarydto) GetTranslatedGrant() string`

GetTranslatedGrant returns the TranslatedGrant field if non-nil, zero value otherwise.

### GetTranslatedGrantOk

`func (o *Userlevelsummarydto) GetTranslatedGrantOk() (*string, bool)`

GetTranslatedGrantOk returns a tuple with the TranslatedGrant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslatedGrant

`func (o *Userlevelsummarydto) SetTranslatedGrant(v string)`

SetTranslatedGrant sets TranslatedGrant field to given value.

### HasTranslatedGrant

`func (o *Userlevelsummarydto) HasTranslatedGrant() bool`

HasTranslatedGrant returns a boolean if a field has been set.

### SetTranslatedGrantNil

`func (o *Userlevelsummarydto) SetTranslatedGrantNil(b bool)`

 SetTranslatedGrantNil sets the value for TranslatedGrant to be an explicit nil

### UnsetTranslatedGrant
`func (o *Userlevelsummarydto) UnsetTranslatedGrant()`

UnsetTranslatedGrant ensures that no value is present for TranslatedGrant, not even an explicit nil
### GetTranslatedRemove

`func (o *Userlevelsummarydto) GetTranslatedRemove() string`

GetTranslatedRemove returns the TranslatedRemove field if non-nil, zero value otherwise.

### GetTranslatedRemoveOk

`func (o *Userlevelsummarydto) GetTranslatedRemoveOk() (*string, bool)`

GetTranslatedRemoveOk returns a tuple with the TranslatedRemove field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslatedRemove

`func (o *Userlevelsummarydto) SetTranslatedRemove(v string)`

SetTranslatedRemove sets TranslatedRemove field to given value.

### HasTranslatedRemove

`func (o *Userlevelsummarydto) HasTranslatedRemove() bool`

HasTranslatedRemove returns a boolean if a field has been set.

### SetTranslatedRemoveNil

`func (o *Userlevelsummarydto) SetTranslatedRemoveNil(b bool)`

 SetTranslatedRemoveNil sets the value for TranslatedRemove to be an explicit nil

### UnsetTranslatedRemove
`func (o *Userlevelsummarydto) UnsetTranslatedRemove()`

UnsetTranslatedRemove ensures that no value is present for TranslatedRemove, not even an explicit nil
### GetOwner

`func (o *Userlevelsummarydto) GetOwner() Publicidentity`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Userlevelsummarydto) GetOwnerOk() (*Publicidentity, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Userlevelsummarydto) SetOwner(v Publicidentity)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *Userlevelsummarydto) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetStatus

`func (o *Userlevelsummarydto) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Userlevelsummarydto) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Userlevelsummarydto) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Userlevelsummarydto) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetCreated

`func (o *Userlevelsummarydto) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Userlevelsummarydto) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Userlevelsummarydto) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Userlevelsummarydto) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Userlevelsummarydto) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Userlevelsummarydto) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Userlevelsummarydto) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Userlevelsummarydto) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetAssociatedIdentitiesCount

`func (o *Userlevelsummarydto) GetAssociatedIdentitiesCount() int32`

GetAssociatedIdentitiesCount returns the AssociatedIdentitiesCount field if non-nil, zero value otherwise.

### GetAssociatedIdentitiesCountOk

`func (o *Userlevelsummarydto) GetAssociatedIdentitiesCountOk() (*int32, bool)`

GetAssociatedIdentitiesCountOk returns a tuple with the AssociatedIdentitiesCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociatedIdentitiesCount

`func (o *Userlevelsummarydto) SetAssociatedIdentitiesCount(v int32)`

SetAssociatedIdentitiesCount sets AssociatedIdentitiesCount field to given value.

### HasAssociatedIdentitiesCount

`func (o *Userlevelsummarydto) HasAssociatedIdentitiesCount() bool`

HasAssociatedIdentitiesCount returns a boolean if a field has been set.

### SetAssociatedIdentitiesCountNil

`func (o *Userlevelsummarydto) SetAssociatedIdentitiesCountNil(b bool)`

 SetAssociatedIdentitiesCountNil sets the value for AssociatedIdentitiesCount to be an explicit nil

### UnsetAssociatedIdentitiesCount
`func (o *Userlevelsummarydto) UnsetAssociatedIdentitiesCount()`

UnsetAssociatedIdentitiesCount ensures that no value is present for AssociatedIdentitiesCount, not even an explicit nil

