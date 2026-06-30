---
id: v1-sendtestnotificationrequestdto
title: Sendtestnotificationrequestdto
pagination_label: Sendtestnotificationrequestdto
sidebar_label: Sendtestnotificationrequestdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sendtestnotificationrequestdto', 'V1Sendtestnotificationrequestdto'] 
slug: /tools/sdk/go/notifications/models/sendtestnotificationrequestdto
tags: ['SDK', 'Software Development Kit', 'Sendtestnotificationrequestdto', 'V1Sendtestnotificationrequestdto']
---

# Sendtestnotificationrequestdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **string** | The template notification key. | [optional] 
**Medium** | Pointer to **string** | The notification medium. Has to be one of the following enum values. | [optional] 
**Locale** | Pointer to **string** | The locale for the message text. | [optional] 
**Context** | Pointer to **map[string]interface{}** | A Json object that denotes the context specific to the template. | [optional] 
**RecipientEmailList** | Pointer to **[]string** | A list of override recipient email addresses for the test notification. | [optional] 
**CarbonCopy** | Pointer to **[]string** | A list of CC email addresses for the test notification. | [optional] 
**BlindCarbonCopy** | Pointer to **[]string** | A list of BCC email addresses for the test notification. | [optional] 

## Methods

### NewSendtestnotificationrequestdto

`func NewSendtestnotificationrequestdto() *Sendtestnotificationrequestdto`

NewSendtestnotificationrequestdto instantiates a new Sendtestnotificationrequestdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSendtestnotificationrequestdtoWithDefaults

`func NewSendtestnotificationrequestdtoWithDefaults() *Sendtestnotificationrequestdto`

NewSendtestnotificationrequestdtoWithDefaults instantiates a new Sendtestnotificationrequestdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *Sendtestnotificationrequestdto) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *Sendtestnotificationrequestdto) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *Sendtestnotificationrequestdto) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *Sendtestnotificationrequestdto) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetMedium

`func (o *Sendtestnotificationrequestdto) GetMedium() string`

GetMedium returns the Medium field if non-nil, zero value otherwise.

### GetMediumOk

`func (o *Sendtestnotificationrequestdto) GetMediumOk() (*string, bool)`

GetMediumOk returns a tuple with the Medium field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMedium

`func (o *Sendtestnotificationrequestdto) SetMedium(v string)`

SetMedium sets Medium field to given value.

### HasMedium

`func (o *Sendtestnotificationrequestdto) HasMedium() bool`

HasMedium returns a boolean if a field has been set.

### GetLocale

`func (o *Sendtestnotificationrequestdto) GetLocale() string`

GetLocale returns the Locale field if non-nil, zero value otherwise.

### GetLocaleOk

`func (o *Sendtestnotificationrequestdto) GetLocaleOk() (*string, bool)`

GetLocaleOk returns a tuple with the Locale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocale

`func (o *Sendtestnotificationrequestdto) SetLocale(v string)`

SetLocale sets Locale field to given value.

### HasLocale

`func (o *Sendtestnotificationrequestdto) HasLocale() bool`

HasLocale returns a boolean if a field has been set.

### GetContext

`func (o *Sendtestnotificationrequestdto) GetContext() map[string]interface{}`

GetContext returns the Context field if non-nil, zero value otherwise.

### GetContextOk

`func (o *Sendtestnotificationrequestdto) GetContextOk() (*map[string]interface{}, bool)`

GetContextOk returns a tuple with the Context field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContext

`func (o *Sendtestnotificationrequestdto) SetContext(v map[string]interface{})`

SetContext sets Context field to given value.

### HasContext

`func (o *Sendtestnotificationrequestdto) HasContext() bool`

HasContext returns a boolean if a field has been set.

### GetRecipientEmailList

`func (o *Sendtestnotificationrequestdto) GetRecipientEmailList() []string`

GetRecipientEmailList returns the RecipientEmailList field if non-nil, zero value otherwise.

### GetRecipientEmailListOk

`func (o *Sendtestnotificationrequestdto) GetRecipientEmailListOk() (*[]string, bool)`

GetRecipientEmailListOk returns a tuple with the RecipientEmailList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipientEmailList

`func (o *Sendtestnotificationrequestdto) SetRecipientEmailList(v []string)`

SetRecipientEmailList sets RecipientEmailList field to given value.

### HasRecipientEmailList

`func (o *Sendtestnotificationrequestdto) HasRecipientEmailList() bool`

HasRecipientEmailList returns a boolean if a field has been set.

### GetCarbonCopy

`func (o *Sendtestnotificationrequestdto) GetCarbonCopy() []string`

GetCarbonCopy returns the CarbonCopy field if non-nil, zero value otherwise.

### GetCarbonCopyOk

`func (o *Sendtestnotificationrequestdto) GetCarbonCopyOk() (*[]string, bool)`

GetCarbonCopyOk returns a tuple with the CarbonCopy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCarbonCopy

`func (o *Sendtestnotificationrequestdto) SetCarbonCopy(v []string)`

SetCarbonCopy sets CarbonCopy field to given value.

### HasCarbonCopy

`func (o *Sendtestnotificationrequestdto) HasCarbonCopy() bool`

HasCarbonCopy returns a boolean if a field has been set.

### GetBlindCarbonCopy

`func (o *Sendtestnotificationrequestdto) GetBlindCarbonCopy() []string`

GetBlindCarbonCopy returns the BlindCarbonCopy field if non-nil, zero value otherwise.

### GetBlindCarbonCopyOk

`func (o *Sendtestnotificationrequestdto) GetBlindCarbonCopyOk() (*[]string, bool)`

GetBlindCarbonCopyOk returns a tuple with the BlindCarbonCopy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlindCarbonCopy

`func (o *Sendtestnotificationrequestdto) SetBlindCarbonCopy(v []string)`

SetBlindCarbonCopy sets BlindCarbonCopy field to given value.

### HasBlindCarbonCopy

`func (o *Sendtestnotificationrequestdto) HasBlindCarbonCopy() bool`

HasBlindCarbonCopy returns a boolean if a field has been set.


