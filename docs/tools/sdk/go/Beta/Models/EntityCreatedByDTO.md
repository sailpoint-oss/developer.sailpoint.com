---
id: entity-created-by-dto
title: EntityCreatedByDTO
pagination_label: EntityCreatedByDTO
sidebar_label: EntityCreatedByDTO
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'EntityCreatedByDTO'] 
slug: /tools/sdk/go/beta/models/entity-created-by-dto
tags: ['SDK', 'Software Development Kit', 'EntityCreatedByDTO']
---

# EntityCreatedByDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **string** | ID of the creator | [optional] 
**DisplayName** |  Pointer to **string** | The display name of the creator | [optional] 

## Methods

### NewEntityCreatedByDTO

`func NewEntityCreatedByDTO() *EntityCreatedByDTO`

NewEntityCreatedByDTO instantiates a new EntityCreatedByDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntityCreatedByDTOWithDefaults

`func NewEntityCreatedByDTOWithDefaults() *EntityCreatedByDTO`

NewEntityCreatedByDTOWithDefaults instantiates a new EntityCreatedByDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *EntityCreatedByDTO) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *EntityCreatedByDTO) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *EntityCreatedByDTO) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *EntityCreatedByDTO) HasId() bool`

HasId returns a boolean if a field has been set.

### GetDisplayName

`func (o *EntityCreatedByDTO) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *EntityCreatedByDTO) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *EntityCreatedByDTO) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *EntityCreatedByDTO) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.


[[Back to top]](#) 


