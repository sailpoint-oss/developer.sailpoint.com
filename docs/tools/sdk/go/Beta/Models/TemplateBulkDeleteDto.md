---
id: template-bulk-delete-dto
title: TemplateBulkDeleteDto
pagination_label: TemplateBulkDeleteDto
sidebar_label: TemplateBulkDeleteDto
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'TemplateBulkDeleteDto'] 
slug: /tools/sdk/go/beta/models/template-bulk-delete-dto
tags: ['SDK', 'Software Development Kit', 'TemplateBulkDeleteDto']
---

# TemplateBulkDeleteDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** |  **string** |  | 
**Medium** |  Pointer to **string** |  | [optional] 
**Locale** |  Pointer to **string** | The locale for the message text, a BCP 47 language tag. | [optional] 

## Methods

### NewTemplateBulkDeleteDto

`func NewTemplateBulkDeleteDto(key string, ) *TemplateBulkDeleteDto`

NewTemplateBulkDeleteDto instantiates a new TemplateBulkDeleteDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateBulkDeleteDtoWithDefaults

`func NewTemplateBulkDeleteDtoWithDefaults() *TemplateBulkDeleteDto`

NewTemplateBulkDeleteDtoWithDefaults instantiates a new TemplateBulkDeleteDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *TemplateBulkDeleteDto) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *TemplateBulkDeleteDto) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *TemplateBulkDeleteDto) SetKey(v string)`

SetKey sets Key field to given value.


### GetMedium

`func (o *TemplateBulkDeleteDto) GetMedium() string`

GetMedium returns the Medium field if non-nil, zero value otherwise.

### GetMediumOk

`func (o *TemplateBulkDeleteDto) GetMediumOk() (*string, bool)`

GetMediumOk returns a tuple with the Medium field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMedium

`func (o *TemplateBulkDeleteDto) SetMedium(v string)`

SetMedium sets Medium field to given value.

### HasMedium

`func (o *TemplateBulkDeleteDto) HasMedium() bool`

HasMedium returns a boolean if a field has been set.

### GetLocale

`func (o *TemplateBulkDeleteDto) GetLocale() string`

GetLocale returns the Locale field if non-nil, zero value otherwise.

### GetLocaleOk

`func (o *TemplateBulkDeleteDto) GetLocaleOk() (*string, bool)`

GetLocaleOk returns a tuple with the Locale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocale

`func (o *TemplateBulkDeleteDto) SetLocale(v string)`

SetLocale sets Locale field to given value.

### HasLocale

`func (o *TemplateBulkDeleteDto) HasLocale() bool`

HasLocale returns a boolean if a field has been set.


[[Back to top]](#) 


