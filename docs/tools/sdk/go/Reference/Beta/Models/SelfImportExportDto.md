---
id: beta-self-import-export-dto
title: SelfImportExportDto
pagination_label: SelfImportExportDto
sidebar_label: SelfImportExportDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SelfImportExportDto', 'BetaSelfImportExportDto'] 
slug: /tools/sdk/go/beta/models/self-import-export-dto
tags: ['SDK', 'Software Development Kit', 'SelfImportExportDto', 'BetaSelfImportExportDto']
---

# SelfImportExportDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Imported/exported object&#39;s DTO type. Import is currently only possible with the CONNECTOR_RULE, IDENTITY_OBJECT_CONFIG, IDENTITY_PROFILE, RULE, SOURCE, TRANSFORM, and TRIGGER_SUBSCRIPTION object types. | [optional] 
**Id** | Pointer to **string** | Imported/exported object&#39;s ID. | [optional] 
**Name** | Pointer to **string** | Imported/exported object&#39;s display name. | [optional] 

## Methods

### NewSelfImportExportDto

`func NewSelfImportExportDto() *SelfImportExportDto`

NewSelfImportExportDto instantiates a new SelfImportExportDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSelfImportExportDtoWithDefaults

`func NewSelfImportExportDtoWithDefaults() *SelfImportExportDto`

NewSelfImportExportDtoWithDefaults instantiates a new SelfImportExportDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SelfImportExportDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SelfImportExportDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SelfImportExportDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SelfImportExportDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *SelfImportExportDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SelfImportExportDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SelfImportExportDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SelfImportExportDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *SelfImportExportDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SelfImportExportDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SelfImportExportDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SelfImportExportDto) HasName() bool`

HasName returns a boolean if a field has been set.


