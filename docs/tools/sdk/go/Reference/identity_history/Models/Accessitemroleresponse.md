---
id: v1-accessitemroleresponse
title: Accessitemroleresponse
pagination_label: Accessitemroleresponse
sidebar_label: Accessitemroleresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessitemroleresponse', 'V1Accessitemroleresponse'] 
slug: /tools/sdk/go/identityhistory/models/accessitemroleresponse
tags: ['SDK', 'Software Development Kit', 'Accessitemroleresponse', 'V1Accessitemroleresponse']
---

# Accessitemroleresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | the access item id | [optional] 
**AccessType** | Pointer to **string** | the access item type. role in this case | [optional] 
**DisplayName** | Pointer to **string** | the role display name | [optional] 
**SourceName** | Pointer to **NullableString** | the associated source name if it exists | [optional] 
**Description** | Pointer to **string** | the description for the role | [optional] 
**StartDate** | Pointer to **NullableString** | the date the access profile will be assigned to the specified identity, in case requested with a future start date | [optional] 
**RemoveDate** | Pointer to **string** | the date the role is no longer assigned to the specified identity | [optional] 
**Revocable** | **bool** | indicates whether the role is revocable | 

## Methods

### NewAccessitemroleresponse

`func NewAccessitemroleresponse(revocable bool, ) *Accessitemroleresponse`

NewAccessitemroleresponse instantiates a new Accessitemroleresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessitemroleresponseWithDefaults

`func NewAccessitemroleresponseWithDefaults() *Accessitemroleresponse`

NewAccessitemroleresponseWithDefaults instantiates a new Accessitemroleresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Accessitemroleresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Accessitemroleresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Accessitemroleresponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Accessitemroleresponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAccessType

`func (o *Accessitemroleresponse) GetAccessType() string`

GetAccessType returns the AccessType field if non-nil, zero value otherwise.

### GetAccessTypeOk

`func (o *Accessitemroleresponse) GetAccessTypeOk() (*string, bool)`

GetAccessTypeOk returns a tuple with the AccessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessType

`func (o *Accessitemroleresponse) SetAccessType(v string)`

SetAccessType sets AccessType field to given value.

### HasAccessType

`func (o *Accessitemroleresponse) HasAccessType() bool`

HasAccessType returns a boolean if a field has been set.

### GetDisplayName

`func (o *Accessitemroleresponse) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Accessitemroleresponse) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Accessitemroleresponse) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *Accessitemroleresponse) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetSourceName

`func (o *Accessitemroleresponse) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *Accessitemroleresponse) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *Accessitemroleresponse) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *Accessitemroleresponse) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### SetSourceNameNil

`func (o *Accessitemroleresponse) SetSourceNameNil(b bool)`

 SetSourceNameNil sets the value for SourceName to be an explicit nil

### UnsetSourceName
`func (o *Accessitemroleresponse) UnsetSourceName()`

UnsetSourceName ensures that no value is present for SourceName, not even an explicit nil
### GetDescription

`func (o *Accessitemroleresponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Accessitemroleresponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Accessitemroleresponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Accessitemroleresponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetStartDate

`func (o *Accessitemroleresponse) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *Accessitemroleresponse) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *Accessitemroleresponse) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *Accessitemroleresponse) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### SetStartDateNil

`func (o *Accessitemroleresponse) SetStartDateNil(b bool)`

 SetStartDateNil sets the value for StartDate to be an explicit nil

### UnsetStartDate
`func (o *Accessitemroleresponse) UnsetStartDate()`

UnsetStartDate ensures that no value is present for StartDate, not even an explicit nil
### GetRemoveDate

`func (o *Accessitemroleresponse) GetRemoveDate() string`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *Accessitemroleresponse) GetRemoveDateOk() (*string, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *Accessitemroleresponse) SetRemoveDate(v string)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *Accessitemroleresponse) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### GetRevocable

`func (o *Accessitemroleresponse) GetRevocable() bool`

GetRevocable returns the Revocable field if non-nil, zero value otherwise.

### GetRevocableOk

`func (o *Accessitemroleresponse) GetRevocableOk() (*bool, bool)`

GetRevocableOk returns a tuple with the Revocable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocable

`func (o *Accessitemroleresponse) SetRevocable(v bool)`

SetRevocable sets Revocable field to given value.



