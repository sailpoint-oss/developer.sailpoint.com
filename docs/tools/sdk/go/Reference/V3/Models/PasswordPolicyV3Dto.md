---
id: password-policy-v3-dto
title: PasswordPolicyV3Dto
pagination_label: PasswordPolicyV3Dto
sidebar_label: PasswordPolicyV3Dto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PasswordPolicyV3Dto', 'PasswordPolicyV3Dto'] 
slug: /tools/sdk/go/v3/models/password-policy-v3-dto
tags: ['SDK', 'Software Development Kit', 'PasswordPolicyV3Dto', 'PasswordPolicyV3Dto']
---

# PasswordPolicyV3Dto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The password policy Id. | [optional] 
**Description** | Pointer to **NullableString** | Description for current password policy. | [optional] 
**Name** | Pointer to **string** | The name of the password policy. | [optional] 
**DateCreated** | Pointer to **SailPointTime** | Date the Password Policy was created. | [optional] 
**LastUpdated** | Pointer to **NullableTime** | Date the Password Policy was updated. | [optional] 
**FirstExpirationReminder** | Pointer to **int64** | The number of days before expiration remaninder. | [optional] 
**AccountIdMinWordLength** | Pointer to **int64** | The minimun length of account Id. By default is equals to -1. | [optional] 
**AccountNameMinWordLength** | Pointer to **int64** | The minimun length of account name. By default is equals to -1. | [optional] 
**MinAlpha** | Pointer to **int64** | Maximum alpha. By default is equals to 0. | [optional] 
**MinCharacterTypes** | Pointer to **int64** | MinCharacterTypes. By default is equals to -1. | [optional] 
**MaxLength** | Pointer to **int64** | Maximum length of the password. | [optional] 
**MinLength** | Pointer to **int64** | Minimum length of the password. By default is equals to 0. | [optional] 
**MaxRepeatedChars** | Pointer to **int64** | Maximum repetition of the same character in the password. By default is equals to -1. | [optional] 
**MinLower** | Pointer to **int64** | Minimum amount of lower case character in the password. By default is equals to 0. | [optional] 
**MinNumeric** | Pointer to **int64** | Minimum amount of numeric characters in the password. By default is equals to 0. | [optional] 
**MinSpecial** | Pointer to **int64** | Minimum amount of special symbols in the password. By default is equals to 0. | [optional] 
**MinUpper** | Pointer to **int64** | Minimum amount of upper case symbols in the password. By default is equals to 0. | [optional] 
**PasswordExpiration** | Pointer to **int64** | Number of days before current password expires. By default is equals to 90. | [optional] 
**DefaultPolicy** | Pointer to **bool** | Defines whether this policy is default or not. Default policy is created automatically when an org is setup. This field is false by default. | [optional] [default to false]
**EnablePasswdExpiration** | Pointer to **bool** | Defines whether this policy is enabled to expire or not. This field is false by default. | [optional] [default to false]
**RequireStrongAuthn** | Pointer to **bool** | Defines whether this policy require strong Auth or not. This field is false by default. | [optional] [default to false]
**RequireStrongAuthOffNetwork** | Pointer to **bool** | Defines whether this policy require strong Auth of network or not. This field is false by default. | [optional] [default to false]
**RequireStrongAuthUntrustedGeographies** | Pointer to **bool** | Defines whether this policy require strong Auth for untrusted geographies. This field is false by default. | [optional] [default to false]
**UseAccountAttributes** | Pointer to **bool** | Defines whether this policy uses account attributes or not. This field is false by default. | [optional] [default to false]
**UseDictionary** | Pointer to **bool** | Defines whether this policy uses dictionary or not. This field is false by default. | [optional] [default to false]
**UseIdentityAttributes** | Pointer to **bool** | Defines whether this policy uses identity attributes or not. This field is false by default. | [optional] [default to false]
**ValidateAgainstAccountId** | Pointer to **bool** | Defines whether this policy validate against account id or not. This field is false by default. | [optional] [default to false]
**ValidateAgainstAccountName** | Pointer to **bool** | Defines whether this policy validate against account name or not. This field is false by default. | [optional] [default to false]
**Created** | Pointer to **NullableString** |  | [optional] 
**Modified** | Pointer to **NullableString** |  | [optional] 
**SourceIds** | Pointer to **[]string** | List of sources IDs managed by this password policy. | [optional] 

## Methods

### NewPasswordPolicyV3Dto

`func NewPasswordPolicyV3Dto() *PasswordPolicyV3Dto`

NewPasswordPolicyV3Dto instantiates a new PasswordPolicyV3Dto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPasswordPolicyV3DtoWithDefaults

`func NewPasswordPolicyV3DtoWithDefaults() *PasswordPolicyV3Dto`

NewPasswordPolicyV3DtoWithDefaults instantiates a new PasswordPolicyV3Dto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *PasswordPolicyV3Dto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PasswordPolicyV3Dto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PasswordPolicyV3Dto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *PasswordPolicyV3Dto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetDescription

`func (o *PasswordPolicyV3Dto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PasswordPolicyV3Dto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PasswordPolicyV3Dto) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *PasswordPolicyV3Dto) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *PasswordPolicyV3Dto) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *PasswordPolicyV3Dto) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetName

`func (o *PasswordPolicyV3Dto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PasswordPolicyV3Dto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PasswordPolicyV3Dto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PasswordPolicyV3Dto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDateCreated

`func (o *PasswordPolicyV3Dto) GetDateCreated() SailPointTime`

GetDateCreated returns the DateCreated field if non-nil, zero value otherwise.

### GetDateCreatedOk

`func (o *PasswordPolicyV3Dto) GetDateCreatedOk() (*SailPointTime, bool)`

GetDateCreatedOk returns a tuple with the DateCreated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateCreated

`func (o *PasswordPolicyV3Dto) SetDateCreated(v SailPointTime)`

SetDateCreated sets DateCreated field to given value.

### HasDateCreated

`func (o *PasswordPolicyV3Dto) HasDateCreated() bool`

HasDateCreated returns a boolean if a field has been set.

### GetLastUpdated

`func (o *PasswordPolicyV3Dto) GetLastUpdated() SailPointTime`

GetLastUpdated returns the LastUpdated field if non-nil, zero value otherwise.

### GetLastUpdatedOk

`func (o *PasswordPolicyV3Dto) GetLastUpdatedOk() (*SailPointTime, bool)`

GetLastUpdatedOk returns a tuple with the LastUpdated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdated

`func (o *PasswordPolicyV3Dto) SetLastUpdated(v SailPointTime)`

SetLastUpdated sets LastUpdated field to given value.

### HasLastUpdated

`func (o *PasswordPolicyV3Dto) HasLastUpdated() bool`

HasLastUpdated returns a boolean if a field has been set.

### SetLastUpdatedNil

`func (o *PasswordPolicyV3Dto) SetLastUpdatedNil(b bool)`

 SetLastUpdatedNil sets the value for LastUpdated to be an explicit nil

### UnsetLastUpdated
`func (o *PasswordPolicyV3Dto) UnsetLastUpdated()`

UnsetLastUpdated ensures that no value is present for LastUpdated, not even an explicit nil
### GetFirstExpirationReminder

`func (o *PasswordPolicyV3Dto) GetFirstExpirationReminder() int64`

GetFirstExpirationReminder returns the FirstExpirationReminder field if non-nil, zero value otherwise.

### GetFirstExpirationReminderOk

`func (o *PasswordPolicyV3Dto) GetFirstExpirationReminderOk() (*int64, bool)`

GetFirstExpirationReminderOk returns a tuple with the FirstExpirationReminder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstExpirationReminder

`func (o *PasswordPolicyV3Dto) SetFirstExpirationReminder(v int64)`

SetFirstExpirationReminder sets FirstExpirationReminder field to given value.

### HasFirstExpirationReminder

`func (o *PasswordPolicyV3Dto) HasFirstExpirationReminder() bool`

HasFirstExpirationReminder returns a boolean if a field has been set.

### GetAccountIdMinWordLength

`func (o *PasswordPolicyV3Dto) GetAccountIdMinWordLength() int64`

GetAccountIdMinWordLength returns the AccountIdMinWordLength field if non-nil, zero value otherwise.

### GetAccountIdMinWordLengthOk

`func (o *PasswordPolicyV3Dto) GetAccountIdMinWordLengthOk() (*int64, bool)`

GetAccountIdMinWordLengthOk returns a tuple with the AccountIdMinWordLength field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountIdMinWordLength

`func (o *PasswordPolicyV3Dto) SetAccountIdMinWordLength(v int64)`

SetAccountIdMinWordLength sets AccountIdMinWordLength field to given value.

### HasAccountIdMinWordLength

`func (o *PasswordPolicyV3Dto) HasAccountIdMinWordLength() bool`

HasAccountIdMinWordLength returns a boolean if a field has been set.

### GetAccountNameMinWordLength

`func (o *PasswordPolicyV3Dto) GetAccountNameMinWordLength() int64`

GetAccountNameMinWordLength returns the AccountNameMinWordLength field if non-nil, zero value otherwise.

### GetAccountNameMinWordLengthOk

`func (o *PasswordPolicyV3Dto) GetAccountNameMinWordLengthOk() (*int64, bool)`

GetAccountNameMinWordLengthOk returns a tuple with the AccountNameMinWordLength field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNameMinWordLength

`func (o *PasswordPolicyV3Dto) SetAccountNameMinWordLength(v int64)`

SetAccountNameMinWordLength sets AccountNameMinWordLength field to given value.

### HasAccountNameMinWordLength

`func (o *PasswordPolicyV3Dto) HasAccountNameMinWordLength() bool`

HasAccountNameMinWordLength returns a boolean if a field has been set.

### GetMinAlpha

`func (o *PasswordPolicyV3Dto) GetMinAlpha() int64`

GetMinAlpha returns the MinAlpha field if non-nil, zero value otherwise.

### GetMinAlphaOk

`func (o *PasswordPolicyV3Dto) GetMinAlphaOk() (*int64, bool)`

GetMinAlphaOk returns a tuple with the MinAlpha field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinAlpha

`func (o *PasswordPolicyV3Dto) SetMinAlpha(v int64)`

SetMinAlpha sets MinAlpha field to given value.

### HasMinAlpha

`func (o *PasswordPolicyV3Dto) HasMinAlpha() bool`

HasMinAlpha returns a boolean if a field has been set.

### GetMinCharacterTypes

`func (o *PasswordPolicyV3Dto) GetMinCharacterTypes() int64`

GetMinCharacterTypes returns the MinCharacterTypes field if non-nil, zero value otherwise.

### GetMinCharacterTypesOk

`func (o *PasswordPolicyV3Dto) GetMinCharacterTypesOk() (*int64, bool)`

GetMinCharacterTypesOk returns a tuple with the MinCharacterTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinCharacterTypes

`func (o *PasswordPolicyV3Dto) SetMinCharacterTypes(v int64)`

SetMinCharacterTypes sets MinCharacterTypes field to given value.

### HasMinCharacterTypes

`func (o *PasswordPolicyV3Dto) HasMinCharacterTypes() bool`

HasMinCharacterTypes returns a boolean if a field has been set.

### GetMaxLength

`func (o *PasswordPolicyV3Dto) GetMaxLength() int64`

GetMaxLength returns the MaxLength field if non-nil, zero value otherwise.

### GetMaxLengthOk

`func (o *PasswordPolicyV3Dto) GetMaxLengthOk() (*int64, bool)`

GetMaxLengthOk returns a tuple with the MaxLength field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxLength

`func (o *PasswordPolicyV3Dto) SetMaxLength(v int64)`

SetMaxLength sets MaxLength field to given value.

### HasMaxLength

`func (o *PasswordPolicyV3Dto) HasMaxLength() bool`

HasMaxLength returns a boolean if a field has been set.

### GetMinLength

`func (o *PasswordPolicyV3Dto) GetMinLength() int64`

GetMinLength returns the MinLength field if non-nil, zero value otherwise.

### GetMinLengthOk

`func (o *PasswordPolicyV3Dto) GetMinLengthOk() (*int64, bool)`

GetMinLengthOk returns a tuple with the MinLength field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinLength

`func (o *PasswordPolicyV3Dto) SetMinLength(v int64)`

SetMinLength sets MinLength field to given value.

### HasMinLength

`func (o *PasswordPolicyV3Dto) HasMinLength() bool`

HasMinLength returns a boolean if a field has been set.

### GetMaxRepeatedChars

`func (o *PasswordPolicyV3Dto) GetMaxRepeatedChars() int64`

GetMaxRepeatedChars returns the MaxRepeatedChars field if non-nil, zero value otherwise.

### GetMaxRepeatedCharsOk

`func (o *PasswordPolicyV3Dto) GetMaxRepeatedCharsOk() (*int64, bool)`

GetMaxRepeatedCharsOk returns a tuple with the MaxRepeatedChars field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxRepeatedChars

`func (o *PasswordPolicyV3Dto) SetMaxRepeatedChars(v int64)`

SetMaxRepeatedChars sets MaxRepeatedChars field to given value.

### HasMaxRepeatedChars

`func (o *PasswordPolicyV3Dto) HasMaxRepeatedChars() bool`

HasMaxRepeatedChars returns a boolean if a field has been set.

### GetMinLower

`func (o *PasswordPolicyV3Dto) GetMinLower() int64`

GetMinLower returns the MinLower field if non-nil, zero value otherwise.

### GetMinLowerOk

`func (o *PasswordPolicyV3Dto) GetMinLowerOk() (*int64, bool)`

GetMinLowerOk returns a tuple with the MinLower field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinLower

`func (o *PasswordPolicyV3Dto) SetMinLower(v int64)`

SetMinLower sets MinLower field to given value.

### HasMinLower

`func (o *PasswordPolicyV3Dto) HasMinLower() bool`

HasMinLower returns a boolean if a field has been set.

### GetMinNumeric

`func (o *PasswordPolicyV3Dto) GetMinNumeric() int64`

GetMinNumeric returns the MinNumeric field if non-nil, zero value otherwise.

### GetMinNumericOk

`func (o *PasswordPolicyV3Dto) GetMinNumericOk() (*int64, bool)`

GetMinNumericOk returns a tuple with the MinNumeric field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinNumeric

`func (o *PasswordPolicyV3Dto) SetMinNumeric(v int64)`

SetMinNumeric sets MinNumeric field to given value.

### HasMinNumeric

`func (o *PasswordPolicyV3Dto) HasMinNumeric() bool`

HasMinNumeric returns a boolean if a field has been set.

### GetMinSpecial

`func (o *PasswordPolicyV3Dto) GetMinSpecial() int64`

GetMinSpecial returns the MinSpecial field if non-nil, zero value otherwise.

### GetMinSpecialOk

`func (o *PasswordPolicyV3Dto) GetMinSpecialOk() (*int64, bool)`

GetMinSpecialOk returns a tuple with the MinSpecial field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinSpecial

`func (o *PasswordPolicyV3Dto) SetMinSpecial(v int64)`

SetMinSpecial sets MinSpecial field to given value.

### HasMinSpecial

`func (o *PasswordPolicyV3Dto) HasMinSpecial() bool`

HasMinSpecial returns a boolean if a field has been set.

### GetMinUpper

`func (o *PasswordPolicyV3Dto) GetMinUpper() int64`

GetMinUpper returns the MinUpper field if non-nil, zero value otherwise.

### GetMinUpperOk

`func (o *PasswordPolicyV3Dto) GetMinUpperOk() (*int64, bool)`

GetMinUpperOk returns a tuple with the MinUpper field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinUpper

`func (o *PasswordPolicyV3Dto) SetMinUpper(v int64)`

SetMinUpper sets MinUpper field to given value.

### HasMinUpper

`func (o *PasswordPolicyV3Dto) HasMinUpper() bool`

HasMinUpper returns a boolean if a field has been set.

### GetPasswordExpiration

`func (o *PasswordPolicyV3Dto) GetPasswordExpiration() int64`

GetPasswordExpiration returns the PasswordExpiration field if non-nil, zero value otherwise.

### GetPasswordExpirationOk

`func (o *PasswordPolicyV3Dto) GetPasswordExpirationOk() (*int64, bool)`

GetPasswordExpirationOk returns a tuple with the PasswordExpiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPasswordExpiration

`func (o *PasswordPolicyV3Dto) SetPasswordExpiration(v int64)`

SetPasswordExpiration sets PasswordExpiration field to given value.

### HasPasswordExpiration

`func (o *PasswordPolicyV3Dto) HasPasswordExpiration() bool`

HasPasswordExpiration returns a boolean if a field has been set.

### GetDefaultPolicy

`func (o *PasswordPolicyV3Dto) GetDefaultPolicy() bool`

GetDefaultPolicy returns the DefaultPolicy field if non-nil, zero value otherwise.

### GetDefaultPolicyOk

`func (o *PasswordPolicyV3Dto) GetDefaultPolicyOk() (*bool, bool)`

GetDefaultPolicyOk returns a tuple with the DefaultPolicy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultPolicy

`func (o *PasswordPolicyV3Dto) SetDefaultPolicy(v bool)`

SetDefaultPolicy sets DefaultPolicy field to given value.

### HasDefaultPolicy

`func (o *PasswordPolicyV3Dto) HasDefaultPolicy() bool`

HasDefaultPolicy returns a boolean if a field has been set.

### GetEnablePasswdExpiration

`func (o *PasswordPolicyV3Dto) GetEnablePasswdExpiration() bool`

GetEnablePasswdExpiration returns the EnablePasswdExpiration field if non-nil, zero value otherwise.

### GetEnablePasswdExpirationOk

`func (o *PasswordPolicyV3Dto) GetEnablePasswdExpirationOk() (*bool, bool)`

GetEnablePasswdExpirationOk returns a tuple with the EnablePasswdExpiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnablePasswdExpiration

`func (o *PasswordPolicyV3Dto) SetEnablePasswdExpiration(v bool)`

SetEnablePasswdExpiration sets EnablePasswdExpiration field to given value.

### HasEnablePasswdExpiration

`func (o *PasswordPolicyV3Dto) HasEnablePasswdExpiration() bool`

HasEnablePasswdExpiration returns a boolean if a field has been set.

### GetRequireStrongAuthn

`func (o *PasswordPolicyV3Dto) GetRequireStrongAuthn() bool`

GetRequireStrongAuthn returns the RequireStrongAuthn field if non-nil, zero value otherwise.

### GetRequireStrongAuthnOk

`func (o *PasswordPolicyV3Dto) GetRequireStrongAuthnOk() (*bool, bool)`

GetRequireStrongAuthnOk returns a tuple with the RequireStrongAuthn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequireStrongAuthn

`func (o *PasswordPolicyV3Dto) SetRequireStrongAuthn(v bool)`

SetRequireStrongAuthn sets RequireStrongAuthn field to given value.

### HasRequireStrongAuthn

`func (o *PasswordPolicyV3Dto) HasRequireStrongAuthn() bool`

HasRequireStrongAuthn returns a boolean if a field has been set.

### GetRequireStrongAuthOffNetwork

`func (o *PasswordPolicyV3Dto) GetRequireStrongAuthOffNetwork() bool`

GetRequireStrongAuthOffNetwork returns the RequireStrongAuthOffNetwork field if non-nil, zero value otherwise.

### GetRequireStrongAuthOffNetworkOk

`func (o *PasswordPolicyV3Dto) GetRequireStrongAuthOffNetworkOk() (*bool, bool)`

GetRequireStrongAuthOffNetworkOk returns a tuple with the RequireStrongAuthOffNetwork field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequireStrongAuthOffNetwork

`func (o *PasswordPolicyV3Dto) SetRequireStrongAuthOffNetwork(v bool)`

SetRequireStrongAuthOffNetwork sets RequireStrongAuthOffNetwork field to given value.

### HasRequireStrongAuthOffNetwork

`func (o *PasswordPolicyV3Dto) HasRequireStrongAuthOffNetwork() bool`

HasRequireStrongAuthOffNetwork returns a boolean if a field has been set.

### GetRequireStrongAuthUntrustedGeographies

`func (o *PasswordPolicyV3Dto) GetRequireStrongAuthUntrustedGeographies() bool`

GetRequireStrongAuthUntrustedGeographies returns the RequireStrongAuthUntrustedGeographies field if non-nil, zero value otherwise.

### GetRequireStrongAuthUntrustedGeographiesOk

`func (o *PasswordPolicyV3Dto) GetRequireStrongAuthUntrustedGeographiesOk() (*bool, bool)`

GetRequireStrongAuthUntrustedGeographiesOk returns a tuple with the RequireStrongAuthUntrustedGeographies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequireStrongAuthUntrustedGeographies

`func (o *PasswordPolicyV3Dto) SetRequireStrongAuthUntrustedGeographies(v bool)`

SetRequireStrongAuthUntrustedGeographies sets RequireStrongAuthUntrustedGeographies field to given value.

### HasRequireStrongAuthUntrustedGeographies

`func (o *PasswordPolicyV3Dto) HasRequireStrongAuthUntrustedGeographies() bool`

HasRequireStrongAuthUntrustedGeographies returns a boolean if a field has been set.

### GetUseAccountAttributes

`func (o *PasswordPolicyV3Dto) GetUseAccountAttributes() bool`

GetUseAccountAttributes returns the UseAccountAttributes field if non-nil, zero value otherwise.

### GetUseAccountAttributesOk

`func (o *PasswordPolicyV3Dto) GetUseAccountAttributesOk() (*bool, bool)`

GetUseAccountAttributesOk returns a tuple with the UseAccountAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseAccountAttributes

`func (o *PasswordPolicyV3Dto) SetUseAccountAttributes(v bool)`

SetUseAccountAttributes sets UseAccountAttributes field to given value.

### HasUseAccountAttributes

`func (o *PasswordPolicyV3Dto) HasUseAccountAttributes() bool`

HasUseAccountAttributes returns a boolean if a field has been set.

### GetUseDictionary

`func (o *PasswordPolicyV3Dto) GetUseDictionary() bool`

GetUseDictionary returns the UseDictionary field if non-nil, zero value otherwise.

### GetUseDictionaryOk

`func (o *PasswordPolicyV3Dto) GetUseDictionaryOk() (*bool, bool)`

GetUseDictionaryOk returns a tuple with the UseDictionary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseDictionary

`func (o *PasswordPolicyV3Dto) SetUseDictionary(v bool)`

SetUseDictionary sets UseDictionary field to given value.

### HasUseDictionary

`func (o *PasswordPolicyV3Dto) HasUseDictionary() bool`

HasUseDictionary returns a boolean if a field has been set.

### GetUseIdentityAttributes

`func (o *PasswordPolicyV3Dto) GetUseIdentityAttributes() bool`

GetUseIdentityAttributes returns the UseIdentityAttributes field if non-nil, zero value otherwise.

### GetUseIdentityAttributesOk

`func (o *PasswordPolicyV3Dto) GetUseIdentityAttributesOk() (*bool, bool)`

GetUseIdentityAttributesOk returns a tuple with the UseIdentityAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseIdentityAttributes

`func (o *PasswordPolicyV3Dto) SetUseIdentityAttributes(v bool)`

SetUseIdentityAttributes sets UseIdentityAttributes field to given value.

### HasUseIdentityAttributes

`func (o *PasswordPolicyV3Dto) HasUseIdentityAttributes() bool`

HasUseIdentityAttributes returns a boolean if a field has been set.

### GetValidateAgainstAccountId

`func (o *PasswordPolicyV3Dto) GetValidateAgainstAccountId() bool`

GetValidateAgainstAccountId returns the ValidateAgainstAccountId field if non-nil, zero value otherwise.

### GetValidateAgainstAccountIdOk

`func (o *PasswordPolicyV3Dto) GetValidateAgainstAccountIdOk() (*bool, bool)`

GetValidateAgainstAccountIdOk returns a tuple with the ValidateAgainstAccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidateAgainstAccountId

`func (o *PasswordPolicyV3Dto) SetValidateAgainstAccountId(v bool)`

SetValidateAgainstAccountId sets ValidateAgainstAccountId field to given value.

### HasValidateAgainstAccountId

`func (o *PasswordPolicyV3Dto) HasValidateAgainstAccountId() bool`

HasValidateAgainstAccountId returns a boolean if a field has been set.

### GetValidateAgainstAccountName

`func (o *PasswordPolicyV3Dto) GetValidateAgainstAccountName() bool`

GetValidateAgainstAccountName returns the ValidateAgainstAccountName field if non-nil, zero value otherwise.

### GetValidateAgainstAccountNameOk

`func (o *PasswordPolicyV3Dto) GetValidateAgainstAccountNameOk() (*bool, bool)`

GetValidateAgainstAccountNameOk returns a tuple with the ValidateAgainstAccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidateAgainstAccountName

`func (o *PasswordPolicyV3Dto) SetValidateAgainstAccountName(v bool)`

SetValidateAgainstAccountName sets ValidateAgainstAccountName field to given value.

### HasValidateAgainstAccountName

`func (o *PasswordPolicyV3Dto) HasValidateAgainstAccountName() bool`

HasValidateAgainstAccountName returns a boolean if a field has been set.

### GetCreated

`func (o *PasswordPolicyV3Dto) GetCreated() string`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *PasswordPolicyV3Dto) GetCreatedOk() (*string, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *PasswordPolicyV3Dto) SetCreated(v string)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *PasswordPolicyV3Dto) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *PasswordPolicyV3Dto) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *PasswordPolicyV3Dto) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetModified

`func (o *PasswordPolicyV3Dto) GetModified() string`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *PasswordPolicyV3Dto) GetModifiedOk() (*string, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *PasswordPolicyV3Dto) SetModified(v string)`

SetModified sets Modified field to given value.

### HasModified

`func (o *PasswordPolicyV3Dto) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *PasswordPolicyV3Dto) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *PasswordPolicyV3Dto) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetSourceIds

`func (o *PasswordPolicyV3Dto) GetSourceIds() []string`

GetSourceIds returns the SourceIds field if non-nil, zero value otherwise.

### GetSourceIdsOk

`func (o *PasswordPolicyV3Dto) GetSourceIdsOk() (*[]string, bool)`

GetSourceIdsOk returns a tuple with the SourceIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceIds

`func (o *PasswordPolicyV3Dto) SetSourceIds(v []string)`

SetSourceIds sets SourceIds field to given value.

### HasSourceIds

`func (o *PasswordPolicyV3Dto) HasSourceIds() bool`

HasSourceIds returns a boolean if a field has been set.


