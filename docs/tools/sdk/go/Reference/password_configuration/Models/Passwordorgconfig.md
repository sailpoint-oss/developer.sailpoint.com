---
id: v1-passwordorgconfig
title: Passwordorgconfig
pagination_label: Passwordorgconfig
sidebar_label: Passwordorgconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Passwordorgconfig', 'V1Passwordorgconfig'] 
slug: /tools/sdk/go/passwordconfiguration/models/passwordorgconfig
tags: ['SDK', 'Software Development Kit', 'Passwordorgconfig', 'V1Passwordorgconfig']
---

# Passwordorgconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomInstructionsEnabled** | Pointer to **bool** | Indicator whether custom password instructions feature is enabled. The default value is false. | [optional] [default to false]
**DigitTokenEnabled** | Pointer to **bool** | Indicator whether \"digit token\" feature is enabled. The default value is false. | [optional] [default to false]
**DigitTokenDurationMinutes** | Pointer to **int32** | The duration of \"digit token\" in minutes. The default value is 5. | [optional] [default to 5]
**DigitTokenLength** | Pointer to **int32** | The length of \"digit token\". The default value is 6. | [optional] [default to 6]

## Methods

### NewPasswordorgconfig

`func NewPasswordorgconfig() *Passwordorgconfig`

NewPasswordorgconfig instantiates a new Passwordorgconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPasswordorgconfigWithDefaults

`func NewPasswordorgconfigWithDefaults() *Passwordorgconfig`

NewPasswordorgconfigWithDefaults instantiates a new Passwordorgconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomInstructionsEnabled

`func (o *Passwordorgconfig) GetCustomInstructionsEnabled() bool`

GetCustomInstructionsEnabled returns the CustomInstructionsEnabled field if non-nil, zero value otherwise.

### GetCustomInstructionsEnabledOk

`func (o *Passwordorgconfig) GetCustomInstructionsEnabledOk() (*bool, bool)`

GetCustomInstructionsEnabledOk returns a tuple with the CustomInstructionsEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomInstructionsEnabled

`func (o *Passwordorgconfig) SetCustomInstructionsEnabled(v bool)`

SetCustomInstructionsEnabled sets CustomInstructionsEnabled field to given value.

### HasCustomInstructionsEnabled

`func (o *Passwordorgconfig) HasCustomInstructionsEnabled() bool`

HasCustomInstructionsEnabled returns a boolean if a field has been set.

### GetDigitTokenEnabled

`func (o *Passwordorgconfig) GetDigitTokenEnabled() bool`

GetDigitTokenEnabled returns the DigitTokenEnabled field if non-nil, zero value otherwise.

### GetDigitTokenEnabledOk

`func (o *Passwordorgconfig) GetDigitTokenEnabledOk() (*bool, bool)`

GetDigitTokenEnabledOk returns a tuple with the DigitTokenEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDigitTokenEnabled

`func (o *Passwordorgconfig) SetDigitTokenEnabled(v bool)`

SetDigitTokenEnabled sets DigitTokenEnabled field to given value.

### HasDigitTokenEnabled

`func (o *Passwordorgconfig) HasDigitTokenEnabled() bool`

HasDigitTokenEnabled returns a boolean if a field has been set.

### GetDigitTokenDurationMinutes

`func (o *Passwordorgconfig) GetDigitTokenDurationMinutes() int32`

GetDigitTokenDurationMinutes returns the DigitTokenDurationMinutes field if non-nil, zero value otherwise.

### GetDigitTokenDurationMinutesOk

`func (o *Passwordorgconfig) GetDigitTokenDurationMinutesOk() (*int32, bool)`

GetDigitTokenDurationMinutesOk returns a tuple with the DigitTokenDurationMinutes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDigitTokenDurationMinutes

`func (o *Passwordorgconfig) SetDigitTokenDurationMinutes(v int32)`

SetDigitTokenDurationMinutes sets DigitTokenDurationMinutes field to given value.

### HasDigitTokenDurationMinutes

`func (o *Passwordorgconfig) HasDigitTokenDurationMinutes() bool`

HasDigitTokenDurationMinutes returns a boolean if a field has been set.

### GetDigitTokenLength

`func (o *Passwordorgconfig) GetDigitTokenLength() int32`

GetDigitTokenLength returns the DigitTokenLength field if non-nil, zero value otherwise.

### GetDigitTokenLengthOk

`func (o *Passwordorgconfig) GetDigitTokenLengthOk() (*int32, bool)`

GetDigitTokenLengthOk returns a tuple with the DigitTokenLength field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDigitTokenLength

`func (o *Passwordorgconfig) SetDigitTokenLength(v int32)`

SetDigitTokenLength sets DigitTokenLength field to given value.

### HasDigitTokenLength

`func (o *Passwordorgconfig) HasDigitTokenLength() bool`

HasDigitTokenLength returns a boolean if a field has been set.


