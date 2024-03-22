---
id: non-employee-source
title: NonEmployeeSource
pagination_label: NonEmployeeSource
sidebar_label: NonEmployeeSource
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'NonEmployeeSource'] 
slug: /tools/sdk/go/beta/models/non-employee-source
tags: ['SDK', 'Software Development Kit', 'NonEmployeeSource']
---

# NonEmployeeSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **string** | Non-Employee source id. | [optional] 
**SourceId** |  Pointer to **string** | Source Id associated with this non-employee source. | [optional] 
**Name** |  Pointer to **string** | Source name associated with this non-employee source. | [optional] 
**Description** |  Pointer to **string** | Source description associated with this non-employee source. | [optional] 
**Approvers** |  Pointer to [**[]IdentityReferenceWithId**](identity-reference-with-id) | List of approvers | [optional] 
**AccountManagers** |  Pointer to [**[]IdentityReferenceWithId**](identity-reference-with-id) | List of account managers | [optional] 
**Modified** |  Pointer to **time.Time** | When the request was last modified. | [optional] 
**Created** |  Pointer to **time.Time** | When the request was created. | [optional] 
**NonEmployeeCount** |  Pointer to **NullableInt32** | The number of non-employee records on all sources that *requested-for* user manages. | [optional] 

## Methods

### NewNonEmployeeSource

`func NewNonEmployeeSource() *NonEmployeeSource`

NewNonEmployeeSource instantiates a new NonEmployeeSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonEmployeeSourceWithDefaults

`func NewNonEmployeeSourceWithDefaults() *NonEmployeeSource`

NewNonEmployeeSourceWithDefaults instantiates a new NonEmployeeSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *NonEmployeeSource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *NonEmployeeSource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *NonEmployeeSource) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *NonEmployeeSource) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSourceId

`func (o *NonEmployeeSource) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *NonEmployeeSource) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *NonEmployeeSource) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *NonEmployeeSource) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetName

`func (o *NonEmployeeSource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *NonEmployeeSource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *NonEmployeeSource) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *NonEmployeeSource) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *NonEmployeeSource) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *NonEmployeeSource) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *NonEmployeeSource) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *NonEmployeeSource) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetApprovers

`func (o *NonEmployeeSource) GetApprovers() []IdentityReferenceWithId`

GetApprovers returns the Approvers field if non-nil, zero value otherwise.

### GetApproversOk

`func (o *NonEmployeeSource) GetApproversOk() (*[]IdentityReferenceWithId, bool)`

GetApproversOk returns a tuple with the Approvers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovers

`func (o *NonEmployeeSource) SetApprovers(v []IdentityReferenceWithId)`

SetApprovers sets Approvers field to given value.

### HasApprovers

`func (o *NonEmployeeSource) HasApprovers() bool`

HasApprovers returns a boolean if a field has been set.

### GetAccountManagers

`func (o *NonEmployeeSource) GetAccountManagers() []IdentityReferenceWithId`

GetAccountManagers returns the AccountManagers field if non-nil, zero value otherwise.

### GetAccountManagersOk

`func (o *NonEmployeeSource) GetAccountManagersOk() (*[]IdentityReferenceWithId, bool)`

GetAccountManagersOk returns a tuple with the AccountManagers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountManagers

`func (o *NonEmployeeSource) SetAccountManagers(v []IdentityReferenceWithId)`

SetAccountManagers sets AccountManagers field to given value.

### HasAccountManagers

`func (o *NonEmployeeSource) HasAccountManagers() bool`

HasAccountManagers returns a boolean if a field has been set.

### GetModified

`func (o *NonEmployeeSource) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *NonEmployeeSource) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *NonEmployeeSource) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *NonEmployeeSource) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetCreated

`func (o *NonEmployeeSource) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *NonEmployeeSource) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *NonEmployeeSource) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *NonEmployeeSource) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetNonEmployeeCount

`func (o *NonEmployeeSource) GetNonEmployeeCount() int32`

GetNonEmployeeCount returns the NonEmployeeCount field if non-nil, zero value otherwise.

### GetNonEmployeeCountOk

`func (o *NonEmployeeSource) GetNonEmployeeCountOk() (*int32, bool)`

GetNonEmployeeCountOk returns a tuple with the NonEmployeeCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonEmployeeCount

`func (o *NonEmployeeSource) SetNonEmployeeCount(v int32)`

SetNonEmployeeCount sets NonEmployeeCount field to given value.

### HasNonEmployeeCount

`func (o *NonEmployeeSource) HasNonEmployeeCount() bool`

HasNonEmployeeCount returns a boolean if a field has been set.

### SetNonEmployeeCountNil

`func (o *NonEmployeeSource) SetNonEmployeeCountNil(b bool)`

 SetNonEmployeeCountNil sets the value for NonEmployeeCount to be an explicit nil

### UnsetNonEmployeeCount
`func (o *NonEmployeeSource) UnsetNonEmployeeCount()`

UnsetNonEmployeeCount ensures that no value is present for NonEmployeeCount, not even an explicit nil

[[Back to top]](#) 


