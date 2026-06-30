---
id: v1-templatebulkdeletedto
title: Templatebulkdeletedto
pagination_label: Templatebulkdeletedto
sidebar_label: Templatebulkdeletedto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Templatebulkdeletedto', 'V1Templatebulkdeletedto'] 
slug: /tools/sdk/go/notifications/models/templatebulkdeletedto
tags: ['SDK', 'Software Development Kit', 'Templatebulkdeletedto', 'V1Templatebulkdeletedto']
---

# Templatebulkdeletedto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **string** | The template key to delete | 
**Medium** | Pointer to **string** | The notification medium (EMAIL, SLACK, or TEAMS) | [optional] 
**Locale** | Pointer to **string** | The locale for the message text, a BCP 47 language tag. | [optional] 

## Methods

### NewTemplatebulkdeletedto

`func NewTemplatebulkdeletedto(key string, ) *Templatebulkdeletedto`

NewTemplatebulkdeletedto instantiates a new Templatebulkdeletedto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplatebulkdeletedtoWithDefaults

`func NewTemplatebulkdeletedtoWithDefaults() *Templatebulkdeletedto`

NewTemplatebulkdeletedtoWithDefaults instantiates a new Templatebulkdeletedto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *Templatebulkdeletedto) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *Templatebulkdeletedto) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *Templatebulkdeletedto) SetKey(v string)`

SetKey sets Key field to given value.


### GetMedium

`func (o *Templatebulkdeletedto) GetMedium() string`

GetMedium returns the Medium field if non-nil, zero value otherwise.

### GetMediumOk

`func (o *Templatebulkdeletedto) GetMediumOk() (*string, bool)`

GetMediumOk returns a tuple with the Medium field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMedium

`func (o *Templatebulkdeletedto) SetMedium(v string)`

SetMedium sets Medium field to given value.

### HasMedium

`func (o *Templatebulkdeletedto) HasMedium() bool`

HasMedium returns a boolean if a field has been set.

### GetLocale

`func (o *Templatebulkdeletedto) GetLocale() string`

GetLocale returns the Locale field if non-nil, zero value otherwise.

### GetLocaleOk

`func (o *Templatebulkdeletedto) GetLocaleOk() (*string, bool)`

GetLocaleOk returns a tuple with the Locale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocale

`func (o *Templatebulkdeletedto) SetLocale(v string)`

SetLocale sets Locale field to given value.

### HasLocale

`func (o *Templatebulkdeletedto) HasLocale() bool`

HasLocale returns a boolean if a field has been set.


