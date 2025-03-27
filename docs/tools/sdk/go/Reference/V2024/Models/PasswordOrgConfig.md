---
id: v2024-password-org-config
title: PasswordOrgConfig
pagination_label: PasswordOrgConfig
sidebar_label: PasswordOrgConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PasswordOrgConfig', 'V2024PasswordOrgConfig'] 
slug: /tools/sdk/go/v2024/models/password-org-config
tags: ['SDK', 'Software Development Kit', 'PasswordOrgConfig', 'V2024PasswordOrgConfig']
---

# PasswordOrgConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomInstructionsEnabled** | Pointer to **bool** | Indicator whether custom password instructions feature is enabled. The default value is false. | [optional] [default to false]
**DigitTokenEnabled** | Pointer to **bool** | Indicator whether \&quot;digit token\&quot; feature is enabled. The default value is false. | [optional] [default to false]
**DigitTokenDurationMinutes** | Pointer to **int32** | The duration of \&quot;digit token\&quot; in minutes. The default value is 5. | [optional] [default to 5]
**DigitTokenLength** | Pointer to **int32** | The length of \&quot;digit token\&quot;. The default value is 6. | [optional] [default to 6]

## Methods

### NewPasswordOrgConfig

`func NewPasswordOrgConfig() *PasswordOrgConfig`

NewPasswordOrgConfig instantiates a new PasswordOrgConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPasswordOrgConfigWithDefaults

`func NewPasswordOrgConfigWithDefaults() *PasswordOrgConfig`

NewPasswordOrgConfigWithDefaults instantiates a new PasswordOrgConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomInstructionsEnabled

`func (o *PasswordOrgConfig) GetCustomInstructionsEnabled() bool`

GetCustomInstructionsEnabled returns the CustomInstructionsEnabled field if non-nil, zero value otherwise.

### GetCustomInstructionsEnabledOk

`func (o *PasswordOrgConfig) GetCustomInstructionsEnabledOk() (*bool, bool)`

GetCustomInstructionsEnabledOk returns a tuple with the CustomInstructionsEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomInstructionsEnabled

`func (o *PasswordOrgConfig) SetCustomInstructionsEnabled(v bool)`

SetCustomInstructionsEnabled sets CustomInstructionsEnabled field to given value.

### HasCustomInstructionsEnabled

`func (o *PasswordOrgConfig) HasCustomInstructionsEnabled() bool`

HasCustomInstructionsEnabled returns a boolean if a field has been set.

### GetDigitTokenEnabled

`func (o *PasswordOrgConfig) GetDigitTokenEnabled() bool`

GetDigitTokenEnabled returns the DigitTokenEnabled field if non-nil, zero value otherwise.

### GetDigitTokenEnabledOk

`func (o *PasswordOrgConfig) GetDigitTokenEnabledOk() (*bool, bool)`

GetDigitTokenEnabledOk returns a tuple with the DigitTokenEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDigitTokenEnabled

`func (o *PasswordOrgConfig) SetDigitTokenEnabled(v bool)`

SetDigitTokenEnabled sets DigitTokenEnabled field to given value.

### HasDigitTokenEnabled

`func (o *PasswordOrgConfig) HasDigitTokenEnabled() bool`

HasDigitTokenEnabled returns a boolean if a field has been set.

### GetDigitTokenDurationMinutes

`func (o *PasswordOrgConfig) GetDigitTokenDurationMinutes() int32`

GetDigitTokenDurationMinutes returns the DigitTokenDurationMinutes field if non-nil, zero value otherwise.

### GetDigitTokenDurationMinutesOk

`func (o *PasswordOrgConfig) GetDigitTokenDurationMinutesOk() (*int32, bool)`

GetDigitTokenDurationMinutesOk returns a tuple with the DigitTokenDurationMinutes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDigitTokenDurationMinutes

`func (o *PasswordOrgConfig) SetDigitTokenDurationMinutes(v int32)`

SetDigitTokenDurationMinutes sets DigitTokenDurationMinutes field to given value.

### HasDigitTokenDurationMinutes

`func (o *PasswordOrgConfig) HasDigitTokenDurationMinutes() bool`

HasDigitTokenDurationMinutes returns a boolean if a field has been set.

### GetDigitTokenLength

`func (o *PasswordOrgConfig) GetDigitTokenLength() int32`

GetDigitTokenLength returns the DigitTokenLength field if non-nil, zero value otherwise.

### GetDigitTokenLengthOk

`func (o *PasswordOrgConfig) GetDigitTokenLengthOk() (*int32, bool)`

GetDigitTokenLengthOk returns a tuple with the DigitTokenLength field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDigitTokenLength

`func (o *PasswordOrgConfig) SetDigitTokenLength(v int32)`

SetDigitTokenLength sets DigitTokenLength field to given value.

### HasDigitTokenLength

`func (o *PasswordOrgConfig) HasDigitTokenLength() bool`

HasDigitTokenLength returns a boolean if a field has been set.


