---
id: v1-sourcesubtypewithsource
title: Sourcesubtypewithsource
pagination_label: Sourcesubtypewithsource
sidebar_label: Sourcesubtypewithsource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sourcesubtypewithsource', 'V1Sourcesubtypewithsource'] 
slug: /tools/sdk/go/machineaccountsubtypes/models/sourcesubtypewithsource
tags: ['SDK', 'Software Development Kit', 'Sourcesubtypewithsource', 'V1Sourcesubtypewithsource']
---

# Sourcesubtypewithsource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Unique identifier for the subtype. | [optional] 
**SourceId** | Pointer to **string** | The ID of the source. | [optional] [readonly] 
**TechnicalName** | Pointer to **string** | Technical name of the subtype. | [optional] 
**DisplayName** | Pointer to **string** | Display name of the subtype. | [optional] 
**Description** | Pointer to **string** | Description of the subtype. | [optional] 
**Created** | Pointer to **SailPointTime** | Creation timestamp. | [optional] 
**Modified** | Pointer to **SailPointTime** | Last modified timestamp. | [optional] 
**Type** | Pointer to **string** | Type of the subtype. Either MACHINE OR null. | [optional] 
**Source** | Pointer to [**SourcesubtypewithsourceSource**](sourcesubtypewithsource-source) |  | [optional] 
**SystemManaged** | Pointer to **bool** | Indicates if the subtype is managed by the system. | [optional] [default to false]

## Methods

### NewSourcesubtypewithsource

`func NewSourcesubtypewithsource() *Sourcesubtypewithsource`

NewSourcesubtypewithsource instantiates a new Sourcesubtypewithsource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourcesubtypewithsourceWithDefaults

`func NewSourcesubtypewithsourceWithDefaults() *Sourcesubtypewithsource`

NewSourcesubtypewithsourceWithDefaults instantiates a new Sourcesubtypewithsource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Sourcesubtypewithsource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Sourcesubtypewithsource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Sourcesubtypewithsource) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Sourcesubtypewithsource) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSourceId

`func (o *Sourcesubtypewithsource) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Sourcesubtypewithsource) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Sourcesubtypewithsource) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Sourcesubtypewithsource) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetTechnicalName

`func (o *Sourcesubtypewithsource) GetTechnicalName() string`

GetTechnicalName returns the TechnicalName field if non-nil, zero value otherwise.

### GetTechnicalNameOk

`func (o *Sourcesubtypewithsource) GetTechnicalNameOk() (*string, bool)`

GetTechnicalNameOk returns a tuple with the TechnicalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTechnicalName

`func (o *Sourcesubtypewithsource) SetTechnicalName(v string)`

SetTechnicalName sets TechnicalName field to given value.

### HasTechnicalName

`func (o *Sourcesubtypewithsource) HasTechnicalName() bool`

HasTechnicalName returns a boolean if a field has been set.

### GetDisplayName

`func (o *Sourcesubtypewithsource) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Sourcesubtypewithsource) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Sourcesubtypewithsource) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *Sourcesubtypewithsource) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDescription

`func (o *Sourcesubtypewithsource) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Sourcesubtypewithsource) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Sourcesubtypewithsource) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Sourcesubtypewithsource) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetCreated

`func (o *Sourcesubtypewithsource) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Sourcesubtypewithsource) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Sourcesubtypewithsource) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Sourcesubtypewithsource) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Sourcesubtypewithsource) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Sourcesubtypewithsource) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Sourcesubtypewithsource) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Sourcesubtypewithsource) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetType

`func (o *Sourcesubtypewithsource) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Sourcesubtypewithsource) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Sourcesubtypewithsource) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Sourcesubtypewithsource) HasType() bool`

HasType returns a boolean if a field has been set.

### GetSource

`func (o *Sourcesubtypewithsource) GetSource() SourcesubtypewithsourceSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Sourcesubtypewithsource) GetSourceOk() (*SourcesubtypewithsourceSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Sourcesubtypewithsource) SetSource(v SourcesubtypewithsourceSource)`

SetSource sets Source field to given value.

### HasSource

`func (o *Sourcesubtypewithsource) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetSystemManaged

`func (o *Sourcesubtypewithsource) GetSystemManaged() bool`

GetSystemManaged returns the SystemManaged field if non-nil, zero value otherwise.

### GetSystemManagedOk

`func (o *Sourcesubtypewithsource) GetSystemManagedOk() (*bool, bool)`

GetSystemManagedOk returns a tuple with the SystemManaged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemManaged

`func (o *Sourcesubtypewithsource) SetSystemManaged(v bool)`

SetSystemManaged sets SystemManaged field to given value.

### HasSystemManaged

`func (o *Sourcesubtypewithsource) HasSystemManaged() bool`

HasSystemManaged returns a boolean if a field has been set.


