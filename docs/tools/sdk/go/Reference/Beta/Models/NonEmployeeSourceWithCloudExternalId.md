---
id: beta-non-employee-source-with-cloud-external-id
title: NonEmployeeSourceWithCloudExternalId
pagination_label: NonEmployeeSourceWithCloudExternalId
sidebar_label: NonEmployeeSourceWithCloudExternalId
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'NonEmployeeSourceWithCloudExternalId', 'BetaNonEmployeeSourceWithCloudExternalId'] 
slug: /tools/sdk/go/beta/models/non-employee-source-with-cloud-external-id
tags: ['SDK', 'Software Development Kit', 'NonEmployeeSourceWithCloudExternalId', 'BetaNonEmployeeSourceWithCloudExternalId']
---

# NonEmployeeSourceWithCloudExternalId

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Non-Employee source id. | [optional] 
**SourceId** | Pointer to **string** | Source Id associated with this non-employee source. | [optional] 
**Name** | Pointer to **string** | Source name associated with this non-employee source. | [optional] 
**Description** | Pointer to **string** | Source description associated with this non-employee source. | [optional] 
**Approvers** | Pointer to [**[]IdentityReferenceWithId**](identity-reference-with-id) | List of approvers | [optional] 
**AccountManagers** | Pointer to [**[]IdentityReferenceWithId**](identity-reference-with-id) | List of account managers | [optional] 
**Modified** | Pointer to **time.Time** | When the request was last modified. | [optional] 
**Created** | Pointer to **time.Time** | When the request was created. | [optional] 
**NonEmployeeCount** | Pointer to **NullableInt32** | The number of non-employee records on all sources that *requested-for* user manages. | [optional] 
**CloudExternalId** | Pointer to **string** | Legacy ID used for sources from the V1 API. This attribute will be removed from a future version of the API and will not be considered a breaking change. No clients should rely on this ID always being present. | [optional] 

## Methods

### NewNonEmployeeSourceWithCloudExternalId

`func NewNonEmployeeSourceWithCloudExternalId() *NonEmployeeSourceWithCloudExternalId`

NewNonEmployeeSourceWithCloudExternalId instantiates a new NonEmployeeSourceWithCloudExternalId object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonEmployeeSourceWithCloudExternalIdWithDefaults

`func NewNonEmployeeSourceWithCloudExternalIdWithDefaults() *NonEmployeeSourceWithCloudExternalId`

NewNonEmployeeSourceWithCloudExternalIdWithDefaults instantiates a new NonEmployeeSourceWithCloudExternalId object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *NonEmployeeSourceWithCloudExternalId) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *NonEmployeeSourceWithCloudExternalId) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *NonEmployeeSourceWithCloudExternalId) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *NonEmployeeSourceWithCloudExternalId) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSourceId

`func (o *NonEmployeeSourceWithCloudExternalId) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *NonEmployeeSourceWithCloudExternalId) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *NonEmployeeSourceWithCloudExternalId) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *NonEmployeeSourceWithCloudExternalId) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetName

`func (o *NonEmployeeSourceWithCloudExternalId) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *NonEmployeeSourceWithCloudExternalId) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *NonEmployeeSourceWithCloudExternalId) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *NonEmployeeSourceWithCloudExternalId) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *NonEmployeeSourceWithCloudExternalId) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *NonEmployeeSourceWithCloudExternalId) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *NonEmployeeSourceWithCloudExternalId) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *NonEmployeeSourceWithCloudExternalId) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetApprovers

`func (o *NonEmployeeSourceWithCloudExternalId) GetApprovers() []IdentityReferenceWithId`

GetApprovers returns the Approvers field if non-nil, zero value otherwise.

### GetApproversOk

`func (o *NonEmployeeSourceWithCloudExternalId) GetApproversOk() (*[]IdentityReferenceWithId, bool)`

GetApproversOk returns a tuple with the Approvers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovers

`func (o *NonEmployeeSourceWithCloudExternalId) SetApprovers(v []IdentityReferenceWithId)`

SetApprovers sets Approvers field to given value.

### HasApprovers

`func (o *NonEmployeeSourceWithCloudExternalId) HasApprovers() bool`

HasApprovers returns a boolean if a field has been set.

### GetAccountManagers

`func (o *NonEmployeeSourceWithCloudExternalId) GetAccountManagers() []IdentityReferenceWithId`

GetAccountManagers returns the AccountManagers field if non-nil, zero value otherwise.

### GetAccountManagersOk

`func (o *NonEmployeeSourceWithCloudExternalId) GetAccountManagersOk() (*[]IdentityReferenceWithId, bool)`

GetAccountManagersOk returns a tuple with the AccountManagers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountManagers

`func (o *NonEmployeeSourceWithCloudExternalId) SetAccountManagers(v []IdentityReferenceWithId)`

SetAccountManagers sets AccountManagers field to given value.

### HasAccountManagers

`func (o *NonEmployeeSourceWithCloudExternalId) HasAccountManagers() bool`

HasAccountManagers returns a boolean if a field has been set.

### GetModified

`func (o *NonEmployeeSourceWithCloudExternalId) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *NonEmployeeSourceWithCloudExternalId) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *NonEmployeeSourceWithCloudExternalId) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *NonEmployeeSourceWithCloudExternalId) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetCreated

`func (o *NonEmployeeSourceWithCloudExternalId) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *NonEmployeeSourceWithCloudExternalId) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *NonEmployeeSourceWithCloudExternalId) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *NonEmployeeSourceWithCloudExternalId) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetNonEmployeeCount

`func (o *NonEmployeeSourceWithCloudExternalId) GetNonEmployeeCount() int32`

GetNonEmployeeCount returns the NonEmployeeCount field if non-nil, zero value otherwise.

### GetNonEmployeeCountOk

`func (o *NonEmployeeSourceWithCloudExternalId) GetNonEmployeeCountOk() (*int32, bool)`

GetNonEmployeeCountOk returns a tuple with the NonEmployeeCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonEmployeeCount

`func (o *NonEmployeeSourceWithCloudExternalId) SetNonEmployeeCount(v int32)`

SetNonEmployeeCount sets NonEmployeeCount field to given value.

### HasNonEmployeeCount

`func (o *NonEmployeeSourceWithCloudExternalId) HasNonEmployeeCount() bool`

HasNonEmployeeCount returns a boolean if a field has been set.

### SetNonEmployeeCountNil

`func (o *NonEmployeeSourceWithCloudExternalId) SetNonEmployeeCountNil(b bool)`

 SetNonEmployeeCountNil sets the value for NonEmployeeCount to be an explicit nil

### UnsetNonEmployeeCount
`func (o *NonEmployeeSourceWithCloudExternalId) UnsetNonEmployeeCount()`

UnsetNonEmployeeCount ensures that no value is present for NonEmployeeCount, not even an explicit nil
### GetCloudExternalId

`func (o *NonEmployeeSourceWithCloudExternalId) GetCloudExternalId() string`

GetCloudExternalId returns the CloudExternalId field if non-nil, zero value otherwise.

### GetCloudExternalIdOk

`func (o *NonEmployeeSourceWithCloudExternalId) GetCloudExternalIdOk() (*string, bool)`

GetCloudExternalIdOk returns a tuple with the CloudExternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudExternalId

`func (o *NonEmployeeSourceWithCloudExternalId) SetCloudExternalId(v string)`

SetCloudExternalId sets CloudExternalId field to given value.

### HasCloudExternalId

`func (o *NonEmployeeSourceWithCloudExternalId) HasCloudExternalId() bool`

HasCloudExternalId returns a boolean if a field has been set.


