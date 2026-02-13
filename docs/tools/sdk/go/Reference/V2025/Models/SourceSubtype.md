---
id: v2025-source-subtype
title: SourceSubtype
pagination_label: SourceSubtype
sidebar_label: SourceSubtype
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceSubtype', 'V2025SourceSubtype'] 
slug: /tools/sdk/go/v2025/models/source-subtype
tags: ['SDK', 'Software Development Kit', 'SourceSubtype', 'V2025SourceSubtype']
---

# SourceSubtype

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Unique identifier for the subtype. | [optional] 
**SourceId** | Pointer to **string** | The ID of the source. | [optional] [readonly] 
**TechnicalName** | **string** | Technical name of the subtype. | 
**DisplayName** | **string** | Display name of the subtype. | 
**Description** | **string** | Description of the subtype. | 
**Created** | Pointer to **SailPointTime** | Creation timestamp. | [optional] 
**Modified** | Pointer to **SailPointTime** | Last modified timestamp. | [optional] 
**Type** | Pointer to **string** | Type of the subtype. Either MACHINE OR null. | [optional] 

## Methods

### NewSourceSubtype

`func NewSourceSubtype(technicalName string, displayName string, description string, ) *SourceSubtype`

NewSourceSubtype instantiates a new SourceSubtype object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceSubtypeWithDefaults

`func NewSourceSubtypeWithDefaults() *SourceSubtype`

NewSourceSubtypeWithDefaults instantiates a new SourceSubtype object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SourceSubtype) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceSubtype) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceSubtype) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SourceSubtype) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSourceId

`func (o *SourceSubtype) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *SourceSubtype) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *SourceSubtype) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *SourceSubtype) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetTechnicalName

`func (o *SourceSubtype) GetTechnicalName() string`

GetTechnicalName returns the TechnicalName field if non-nil, zero value otherwise.

### GetTechnicalNameOk

`func (o *SourceSubtype) GetTechnicalNameOk() (*string, bool)`

GetTechnicalNameOk returns a tuple with the TechnicalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTechnicalName

`func (o *SourceSubtype) SetTechnicalName(v string)`

SetTechnicalName sets TechnicalName field to given value.


### GetDisplayName

`func (o *SourceSubtype) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *SourceSubtype) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *SourceSubtype) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.


### GetDescription

`func (o *SourceSubtype) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SourceSubtype) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SourceSubtype) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetCreated

`func (o *SourceSubtype) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SourceSubtype) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SourceSubtype) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *SourceSubtype) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *SourceSubtype) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *SourceSubtype) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *SourceSubtype) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *SourceSubtype) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetType

`func (o *SourceSubtype) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceSubtype) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceSubtype) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SourceSubtype) HasType() bool`

HasType returns a boolean if a field has been set.


