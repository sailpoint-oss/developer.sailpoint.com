---
id: v2026-source-subtype-with-source
title: SourceSubtypeWithSource
pagination_label: SourceSubtypeWithSource
sidebar_label: SourceSubtypeWithSource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceSubtypeWithSource', 'V2026SourceSubtypeWithSource'] 
slug: /tools/sdk/go/v2026/models/source-subtype-with-source
tags: ['SDK', 'Software Development Kit', 'SourceSubtypeWithSource', 'V2026SourceSubtypeWithSource']
---

# SourceSubtypeWithSource

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
**Source** | Pointer to [**SourceSubtypeWithSourceSource**](source-subtype-with-source-source) |  | [optional] 
**SystemManaged** | Pointer to **bool** | Indicates if the subtype is managed by the system. | [optional] [default to false]

## Methods

### NewSourceSubtypeWithSource

`func NewSourceSubtypeWithSource() *SourceSubtypeWithSource`

NewSourceSubtypeWithSource instantiates a new SourceSubtypeWithSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceSubtypeWithSourceWithDefaults

`func NewSourceSubtypeWithSourceWithDefaults() *SourceSubtypeWithSource`

NewSourceSubtypeWithSourceWithDefaults instantiates a new SourceSubtypeWithSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SourceSubtypeWithSource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceSubtypeWithSource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceSubtypeWithSource) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SourceSubtypeWithSource) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSourceId

`func (o *SourceSubtypeWithSource) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *SourceSubtypeWithSource) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *SourceSubtypeWithSource) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *SourceSubtypeWithSource) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetTechnicalName

`func (o *SourceSubtypeWithSource) GetTechnicalName() string`

GetTechnicalName returns the TechnicalName field if non-nil, zero value otherwise.

### GetTechnicalNameOk

`func (o *SourceSubtypeWithSource) GetTechnicalNameOk() (*string, bool)`

GetTechnicalNameOk returns a tuple with the TechnicalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTechnicalName

`func (o *SourceSubtypeWithSource) SetTechnicalName(v string)`

SetTechnicalName sets TechnicalName field to given value.

### HasTechnicalName

`func (o *SourceSubtypeWithSource) HasTechnicalName() bool`

HasTechnicalName returns a boolean if a field has been set.

### GetDisplayName

`func (o *SourceSubtypeWithSource) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *SourceSubtypeWithSource) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *SourceSubtypeWithSource) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *SourceSubtypeWithSource) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDescription

`func (o *SourceSubtypeWithSource) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SourceSubtypeWithSource) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SourceSubtypeWithSource) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *SourceSubtypeWithSource) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetCreated

`func (o *SourceSubtypeWithSource) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SourceSubtypeWithSource) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SourceSubtypeWithSource) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *SourceSubtypeWithSource) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *SourceSubtypeWithSource) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *SourceSubtypeWithSource) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *SourceSubtypeWithSource) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *SourceSubtypeWithSource) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetType

`func (o *SourceSubtypeWithSource) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceSubtypeWithSource) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceSubtypeWithSource) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SourceSubtypeWithSource) HasType() bool`

HasType returns a boolean if a field has been set.

### GetSource

`func (o *SourceSubtypeWithSource) GetSource() SourceSubtypeWithSourceSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *SourceSubtypeWithSource) GetSourceOk() (*SourceSubtypeWithSourceSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *SourceSubtypeWithSource) SetSource(v SourceSubtypeWithSourceSource)`

SetSource sets Source field to given value.

### HasSource

`func (o *SourceSubtypeWithSource) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetSystemManaged

`func (o *SourceSubtypeWithSource) GetSystemManaged() bool`

GetSystemManaged returns the SystemManaged field if non-nil, zero value otherwise.

### GetSystemManagedOk

`func (o *SourceSubtypeWithSource) GetSystemManagedOk() (*bool, bool)`

GetSystemManagedOk returns a tuple with the SystemManaged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemManaged

`func (o *SourceSubtypeWithSource) SetSystemManaged(v bool)`

SetSystemManaged sets SystemManaged field to given value.

### HasSystemManaged

`func (o *SourceSubtypeWithSource) HasSystemManaged() bool`

HasSystemManaged returns a boolean if a field has been set.


