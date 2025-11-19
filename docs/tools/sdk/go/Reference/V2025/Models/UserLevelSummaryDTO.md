---
id: v2025-user-level-summary-dto
title: UserLevelSummaryDTO
pagination_label: UserLevelSummaryDTO
sidebar_label: UserLevelSummaryDTO
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'UserLevelSummaryDTO', 'V2025UserLevelSummaryDTO'] 
slug: /tools/sdk/go/v2025/models/user-level-summary-dto
tags: ['SDK', 'Software Development Kit', 'UserLevelSummaryDTO', 'V2025UserLevelSummaryDTO']
---

# UserLevelSummaryDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The unique identifier of the UserLevel. | [optional] 
**Name** | Pointer to **string** | The human-readable name of the UserLevel. | [optional] 
**Description** | Pointer to **NullableString** | A human-readable description of the UserLevel. | [optional] 
**LegacyGroup** | Pointer to **NullableString** | The legacy group associated with the UserLevel, used for backward compatibility for the UserLevel id. | [optional] 
**RightSets** | Pointer to [**[]RightSetDTO**](right-set-dto) | List of RightSets associated with the UserLevel. | [optional] 
**Custom** | Pointer to **bool** | Indicates whether the UserLevel is custom. | [optional] [default to true]
**AdminAssignable** | Pointer to **bool** | Indicates whether the UserLevel is admin-assignable. | [optional] [default to true]
**TranslatedName** | Pointer to **NullableString** | The translated name of the UserLevel. | [optional] 
**TranslatedGrant** | Pointer to **NullableString** | The translated grant message for the UserLevel. | [optional] 
**TranslatedRemove** | Pointer to **NullableString** | The translated remove message for the UserLevel. | [optional] 
**Owner** | Pointer to [**PublicIdentity**](public-identity) |  | [optional] 
**Status** | Pointer to **string** | The status of the UserLevel. | [optional] 
**Created** | Pointer to **SailPointTime** | The creation timestamp of the UserLevel. | [optional] 
**Modified** | Pointer to **SailPointTime** | The last modification timestamp of the UserLevel. | [optional] 
**AssociatedIdentitiesCount** | Pointer to **NullableInt32** | The count of associated identities for the UserLevel. | [optional] 

## Methods

### NewUserLevelSummaryDTO

`func NewUserLevelSummaryDTO() *UserLevelSummaryDTO`

NewUserLevelSummaryDTO instantiates a new UserLevelSummaryDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserLevelSummaryDTOWithDefaults

`func NewUserLevelSummaryDTOWithDefaults() *UserLevelSummaryDTO`

NewUserLevelSummaryDTOWithDefaults instantiates a new UserLevelSummaryDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *UserLevelSummaryDTO) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *UserLevelSummaryDTO) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *UserLevelSummaryDTO) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *UserLevelSummaryDTO) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *UserLevelSummaryDTO) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UserLevelSummaryDTO) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UserLevelSummaryDTO) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *UserLevelSummaryDTO) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *UserLevelSummaryDTO) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *UserLevelSummaryDTO) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *UserLevelSummaryDTO) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *UserLevelSummaryDTO) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *UserLevelSummaryDTO) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *UserLevelSummaryDTO) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetLegacyGroup

`func (o *UserLevelSummaryDTO) GetLegacyGroup() string`

GetLegacyGroup returns the LegacyGroup field if non-nil, zero value otherwise.

### GetLegacyGroupOk

`func (o *UserLevelSummaryDTO) GetLegacyGroupOk() (*string, bool)`

GetLegacyGroupOk returns a tuple with the LegacyGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLegacyGroup

`func (o *UserLevelSummaryDTO) SetLegacyGroup(v string)`

SetLegacyGroup sets LegacyGroup field to given value.

### HasLegacyGroup

`func (o *UserLevelSummaryDTO) HasLegacyGroup() bool`

HasLegacyGroup returns a boolean if a field has been set.

### SetLegacyGroupNil

`func (o *UserLevelSummaryDTO) SetLegacyGroupNil(b bool)`

 SetLegacyGroupNil sets the value for LegacyGroup to be an explicit nil

### UnsetLegacyGroup
`func (o *UserLevelSummaryDTO) UnsetLegacyGroup()`

UnsetLegacyGroup ensures that no value is present for LegacyGroup, not even an explicit nil
### GetRightSets

`func (o *UserLevelSummaryDTO) GetRightSets() []RightSetDTO`

GetRightSets returns the RightSets field if non-nil, zero value otherwise.

### GetRightSetsOk

`func (o *UserLevelSummaryDTO) GetRightSetsOk() (*[]RightSetDTO, bool)`

GetRightSetsOk returns a tuple with the RightSets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRightSets

`func (o *UserLevelSummaryDTO) SetRightSets(v []RightSetDTO)`

SetRightSets sets RightSets field to given value.

### HasRightSets

`func (o *UserLevelSummaryDTO) HasRightSets() bool`

HasRightSets returns a boolean if a field has been set.

### GetCustom

`func (o *UserLevelSummaryDTO) GetCustom() bool`

GetCustom returns the Custom field if non-nil, zero value otherwise.

### GetCustomOk

`func (o *UserLevelSummaryDTO) GetCustomOk() (*bool, bool)`

GetCustomOk returns a tuple with the Custom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustom

`func (o *UserLevelSummaryDTO) SetCustom(v bool)`

SetCustom sets Custom field to given value.

### HasCustom

`func (o *UserLevelSummaryDTO) HasCustom() bool`

HasCustom returns a boolean if a field has been set.

### GetAdminAssignable

`func (o *UserLevelSummaryDTO) GetAdminAssignable() bool`

GetAdminAssignable returns the AdminAssignable field if non-nil, zero value otherwise.

### GetAdminAssignableOk

`func (o *UserLevelSummaryDTO) GetAdminAssignableOk() (*bool, bool)`

GetAdminAssignableOk returns a tuple with the AdminAssignable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdminAssignable

`func (o *UserLevelSummaryDTO) SetAdminAssignable(v bool)`

SetAdminAssignable sets AdminAssignable field to given value.

### HasAdminAssignable

`func (o *UserLevelSummaryDTO) HasAdminAssignable() bool`

HasAdminAssignable returns a boolean if a field has been set.

### GetTranslatedName

`func (o *UserLevelSummaryDTO) GetTranslatedName() string`

GetTranslatedName returns the TranslatedName field if non-nil, zero value otherwise.

### GetTranslatedNameOk

`func (o *UserLevelSummaryDTO) GetTranslatedNameOk() (*string, bool)`

GetTranslatedNameOk returns a tuple with the TranslatedName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslatedName

`func (o *UserLevelSummaryDTO) SetTranslatedName(v string)`

SetTranslatedName sets TranslatedName field to given value.

### HasTranslatedName

`func (o *UserLevelSummaryDTO) HasTranslatedName() bool`

HasTranslatedName returns a boolean if a field has been set.

### SetTranslatedNameNil

`func (o *UserLevelSummaryDTO) SetTranslatedNameNil(b bool)`

 SetTranslatedNameNil sets the value for TranslatedName to be an explicit nil

### UnsetTranslatedName
`func (o *UserLevelSummaryDTO) UnsetTranslatedName()`

UnsetTranslatedName ensures that no value is present for TranslatedName, not even an explicit nil
### GetTranslatedGrant

`func (o *UserLevelSummaryDTO) GetTranslatedGrant() string`

GetTranslatedGrant returns the TranslatedGrant field if non-nil, zero value otherwise.

### GetTranslatedGrantOk

`func (o *UserLevelSummaryDTO) GetTranslatedGrantOk() (*string, bool)`

GetTranslatedGrantOk returns a tuple with the TranslatedGrant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslatedGrant

`func (o *UserLevelSummaryDTO) SetTranslatedGrant(v string)`

SetTranslatedGrant sets TranslatedGrant field to given value.

### HasTranslatedGrant

`func (o *UserLevelSummaryDTO) HasTranslatedGrant() bool`

HasTranslatedGrant returns a boolean if a field has been set.

### SetTranslatedGrantNil

`func (o *UserLevelSummaryDTO) SetTranslatedGrantNil(b bool)`

 SetTranslatedGrantNil sets the value for TranslatedGrant to be an explicit nil

### UnsetTranslatedGrant
`func (o *UserLevelSummaryDTO) UnsetTranslatedGrant()`

UnsetTranslatedGrant ensures that no value is present for TranslatedGrant, not even an explicit nil
### GetTranslatedRemove

`func (o *UserLevelSummaryDTO) GetTranslatedRemove() string`

GetTranslatedRemove returns the TranslatedRemove field if non-nil, zero value otherwise.

### GetTranslatedRemoveOk

`func (o *UserLevelSummaryDTO) GetTranslatedRemoveOk() (*string, bool)`

GetTranslatedRemoveOk returns a tuple with the TranslatedRemove field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslatedRemove

`func (o *UserLevelSummaryDTO) SetTranslatedRemove(v string)`

SetTranslatedRemove sets TranslatedRemove field to given value.

### HasTranslatedRemove

`func (o *UserLevelSummaryDTO) HasTranslatedRemove() bool`

HasTranslatedRemove returns a boolean if a field has been set.

### SetTranslatedRemoveNil

`func (o *UserLevelSummaryDTO) SetTranslatedRemoveNil(b bool)`

 SetTranslatedRemoveNil sets the value for TranslatedRemove to be an explicit nil

### UnsetTranslatedRemove
`func (o *UserLevelSummaryDTO) UnsetTranslatedRemove()`

UnsetTranslatedRemove ensures that no value is present for TranslatedRemove, not even an explicit nil
### GetOwner

`func (o *UserLevelSummaryDTO) GetOwner() PublicIdentity`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *UserLevelSummaryDTO) GetOwnerOk() (*PublicIdentity, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *UserLevelSummaryDTO) SetOwner(v PublicIdentity)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *UserLevelSummaryDTO) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetStatus

`func (o *UserLevelSummaryDTO) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *UserLevelSummaryDTO) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *UserLevelSummaryDTO) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *UserLevelSummaryDTO) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetCreated

`func (o *UserLevelSummaryDTO) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *UserLevelSummaryDTO) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *UserLevelSummaryDTO) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *UserLevelSummaryDTO) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *UserLevelSummaryDTO) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *UserLevelSummaryDTO) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *UserLevelSummaryDTO) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *UserLevelSummaryDTO) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetAssociatedIdentitiesCount

`func (o *UserLevelSummaryDTO) GetAssociatedIdentitiesCount() int32`

GetAssociatedIdentitiesCount returns the AssociatedIdentitiesCount field if non-nil, zero value otherwise.

### GetAssociatedIdentitiesCountOk

`func (o *UserLevelSummaryDTO) GetAssociatedIdentitiesCountOk() (*int32, bool)`

GetAssociatedIdentitiesCountOk returns a tuple with the AssociatedIdentitiesCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociatedIdentitiesCount

`func (o *UserLevelSummaryDTO) SetAssociatedIdentitiesCount(v int32)`

SetAssociatedIdentitiesCount sets AssociatedIdentitiesCount field to given value.

### HasAssociatedIdentitiesCount

`func (o *UserLevelSummaryDTO) HasAssociatedIdentitiesCount() bool`

HasAssociatedIdentitiesCount returns a boolean if a field has been set.

### SetAssociatedIdentitiesCountNil

`func (o *UserLevelSummaryDTO) SetAssociatedIdentitiesCountNil(b bool)`

 SetAssociatedIdentitiesCountNil sets the value for AssociatedIdentitiesCount to be an explicit nil

### UnsetAssociatedIdentitiesCount
`func (o *UserLevelSummaryDTO) UnsetAssociatedIdentitiesCount()`

UnsetAssociatedIdentitiesCount ensures that no value is present for AssociatedIdentitiesCount, not even an explicit nil

