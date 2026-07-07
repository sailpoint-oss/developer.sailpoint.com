---
id: v1-passwordpolicyv3dto
title: Passwordpolicyv3dto
pagination_label: Passwordpolicyv3dto
sidebar_label: Passwordpolicyv3dto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Passwordpolicyv3dto', 'V1Passwordpolicyv3dto'] 
slug: /tools/sdk/go/passwordpolicies/models/passwordpolicyv3dto
tags: ['SDK', 'Software Development Kit', 'Passwordpolicyv3dto', 'V1Passwordpolicyv3dto']
---

# Passwordpolicyv3dto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The password policy Id. | [optional] 
**Description** | Pointer to **NullableString** | Description for current password policy. | [optional] 
**Name** | Pointer to **string** | The name of the password policy. | [optional] 
**DateCreated** | Pointer to **int64** | Date the Password Policy was created. | [optional] 
**LastUpdated** | Pointer to **NullableInt64** | Date the Password Policy was updated. | [optional] 
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

### NewPasswordpolicyv3dto

`func NewPasswordpolicyv3dto() *Passwordpolicyv3dto`

NewPasswordpolicyv3dto instantiates a new Passwordpolicyv3dto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPasswordpolicyv3dtoWithDefaults

`func NewPasswordpolicyv3dtoWithDefaults() *Passwordpolicyv3dto`

NewPasswordpolicyv3dtoWithDefaults instantiates a new Passwordpolicyv3dto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Passwordpolicyv3dto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Passwordpolicyv3dto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Passwordpolicyv3dto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Passwordpolicyv3dto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetDescription

`func (o *Passwordpolicyv3dto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Passwordpolicyv3dto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Passwordpolicyv3dto) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Passwordpolicyv3dto) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Passwordpolicyv3dto) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Passwordpolicyv3dto) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetName

`func (o *Passwordpolicyv3dto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Passwordpolicyv3dto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Passwordpolicyv3dto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Passwordpolicyv3dto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDateCreated

`func (o *Passwordpolicyv3dto) GetDateCreated() int64`

GetDateCreated returns the DateCreated field if non-nil, zero value otherwise.

### GetDateCreatedOk

`func (o *Passwordpolicyv3dto) GetDateCreatedOk() (*int64, bool)`

GetDateCreatedOk returns a tuple with the DateCreated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateCreated

`func (o *Passwordpolicyv3dto) SetDateCreated(v int64)`

SetDateCreated sets DateCreated field to given value.

### HasDateCreated

`func (o *Passwordpolicyv3dto) HasDateCreated() bool`

HasDateCreated returns a boolean if a field has been set.

### GetLastUpdated

`func (o *Passwordpolicyv3dto) GetLastUpdated() int64`

GetLastUpdated returns the LastUpdated field if non-nil, zero value otherwise.

### GetLastUpdatedOk

`func (o *Passwordpolicyv3dto) GetLastUpdatedOk() (*int64, bool)`

GetLastUpdatedOk returns a tuple with the LastUpdated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdated

`func (o *Passwordpolicyv3dto) SetLastUpdated(v int64)`

SetLastUpdated sets LastUpdated field to given value.

### HasLastUpdated

`func (o *Passwordpolicyv3dto) HasLastUpdated() bool`

HasLastUpdated returns a boolean if a field has been set.

### SetLastUpdatedNil

`func (o *Passwordpolicyv3dto) SetLastUpdatedNil(b bool)`

 SetLastUpdatedNil sets the value for LastUpdated to be an explicit nil

### UnsetLastUpdated
`func (o *Passwordpolicyv3dto) UnsetLastUpdated()`

UnsetLastUpdated ensures that no value is present for LastUpdated, not even an explicit nil
### GetFirstExpirationReminder

`func (o *Passwordpolicyv3dto) GetFirstExpirationReminder() int64`

GetFirstExpirationReminder returns the FirstExpirationReminder field if non-nil, zero value otherwise.

### GetFirstExpirationReminderOk

`func (o *Passwordpolicyv3dto) GetFirstExpirationReminderOk() (*int64, bool)`

GetFirstExpirationReminderOk returns a tuple with the FirstExpirationReminder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstExpirationReminder

`func (o *Passwordpolicyv3dto) SetFirstExpirationReminder(v int64)`

SetFirstExpirationReminder sets FirstExpirationReminder field to given value.

### HasFirstExpirationReminder

`func (o *Passwordpolicyv3dto) HasFirstExpirationReminder() bool`

HasFirstExpirationReminder returns a boolean if a field has been set.

### GetAccountIdMinWordLength

`func (o *Passwordpolicyv3dto) GetAccountIdMinWordLength() int64`

GetAccountIdMinWordLength returns the AccountIdMinWordLength field if non-nil, zero value otherwise.

### GetAccountIdMinWordLengthOk

`func (o *Passwordpolicyv3dto) GetAccountIdMinWordLengthOk() (*int64, bool)`

GetAccountIdMinWordLengthOk returns a tuple with the AccountIdMinWordLength field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountIdMinWordLength

`func (o *Passwordpolicyv3dto) SetAccountIdMinWordLength(v int64)`

SetAccountIdMinWordLength sets AccountIdMinWordLength field to given value.

### HasAccountIdMinWordLength

`func (o *Passwordpolicyv3dto) HasAccountIdMinWordLength() bool`

HasAccountIdMinWordLength returns a boolean if a field has been set.

### GetAccountNameMinWordLength

`func (o *Passwordpolicyv3dto) GetAccountNameMinWordLength() int64`

GetAccountNameMinWordLength returns the AccountNameMinWordLength field if non-nil, zero value otherwise.

### GetAccountNameMinWordLengthOk

`func (o *Passwordpolicyv3dto) GetAccountNameMinWordLengthOk() (*int64, bool)`

GetAccountNameMinWordLengthOk returns a tuple with the AccountNameMinWordLength field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNameMinWordLength

`func (o *Passwordpolicyv3dto) SetAccountNameMinWordLength(v int64)`

SetAccountNameMinWordLength sets AccountNameMinWordLength field to given value.

### HasAccountNameMinWordLength

`func (o *Passwordpolicyv3dto) HasAccountNameMinWordLength() bool`

HasAccountNameMinWordLength returns a boolean if a field has been set.

### GetMinAlpha

`func (o *Passwordpolicyv3dto) GetMinAlpha() int64`

GetMinAlpha returns the MinAlpha field if non-nil, zero value otherwise.

### GetMinAlphaOk

`func (o *Passwordpolicyv3dto) GetMinAlphaOk() (*int64, bool)`

GetMinAlphaOk returns a tuple with the MinAlpha field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinAlpha

`func (o *Passwordpolicyv3dto) SetMinAlpha(v int64)`

SetMinAlpha sets MinAlpha field to given value.

### HasMinAlpha

`func (o *Passwordpolicyv3dto) HasMinAlpha() bool`

HasMinAlpha returns a boolean if a field has been set.

### GetMinCharacterTypes

`func (o *Passwordpolicyv3dto) GetMinCharacterTypes() int64`

GetMinCharacterTypes returns the MinCharacterTypes field if non-nil, zero value otherwise.

### GetMinCharacterTypesOk

`func (o *Passwordpolicyv3dto) GetMinCharacterTypesOk() (*int64, bool)`

GetMinCharacterTypesOk returns a tuple with the MinCharacterTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinCharacterTypes

`func (o *Passwordpolicyv3dto) SetMinCharacterTypes(v int64)`

SetMinCharacterTypes sets MinCharacterTypes field to given value.

### HasMinCharacterTypes

`func (o *Passwordpolicyv3dto) HasMinCharacterTypes() bool`

HasMinCharacterTypes returns a boolean if a field has been set.

### GetMaxLength

`func (o *Passwordpolicyv3dto) GetMaxLength() int64`

GetMaxLength returns the MaxLength field if non-nil, zero value otherwise.

### GetMaxLengthOk

`func (o *Passwordpolicyv3dto) GetMaxLengthOk() (*int64, bool)`

GetMaxLengthOk returns a tuple with the MaxLength field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxLength

`func (o *Passwordpolicyv3dto) SetMaxLength(v int64)`

SetMaxLength sets MaxLength field to given value.

### HasMaxLength

`func (o *Passwordpolicyv3dto) HasMaxLength() bool`

HasMaxLength returns a boolean if a field has been set.

### GetMinLength

`func (o *Passwordpolicyv3dto) GetMinLength() int64`

GetMinLength returns the MinLength field if non-nil, zero value otherwise.

### GetMinLengthOk

`func (o *Passwordpolicyv3dto) GetMinLengthOk() (*int64, bool)`

GetMinLengthOk returns a tuple with the MinLength field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinLength

`func (o *Passwordpolicyv3dto) SetMinLength(v int64)`

SetMinLength sets MinLength field to given value.

### HasMinLength

`func (o *Passwordpolicyv3dto) HasMinLength() bool`

HasMinLength returns a boolean if a field has been set.

### GetMaxRepeatedChars

`func (o *Passwordpolicyv3dto) GetMaxRepeatedChars() int64`

GetMaxRepeatedChars returns the MaxRepeatedChars field if non-nil, zero value otherwise.

### GetMaxRepeatedCharsOk

`func (o *Passwordpolicyv3dto) GetMaxRepeatedCharsOk() (*int64, bool)`

GetMaxRepeatedCharsOk returns a tuple with the MaxRepeatedChars field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxRepeatedChars

`func (o *Passwordpolicyv3dto) SetMaxRepeatedChars(v int64)`

SetMaxRepeatedChars sets MaxRepeatedChars field to given value.

### HasMaxRepeatedChars

`func (o *Passwordpolicyv3dto) HasMaxRepeatedChars() bool`

HasMaxRepeatedChars returns a boolean if a field has been set.

### GetMinLower

`func (o *Passwordpolicyv3dto) GetMinLower() int64`

GetMinLower returns the MinLower field if non-nil, zero value otherwise.

### GetMinLowerOk

`func (o *Passwordpolicyv3dto) GetMinLowerOk() (*int64, bool)`

GetMinLowerOk returns a tuple with the MinLower field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinLower

`func (o *Passwordpolicyv3dto) SetMinLower(v int64)`

SetMinLower sets MinLower field to given value.

### HasMinLower

`func (o *Passwordpolicyv3dto) HasMinLower() bool`

HasMinLower returns a boolean if a field has been set.

### GetMinNumeric

`func (o *Passwordpolicyv3dto) GetMinNumeric() int64`

GetMinNumeric returns the MinNumeric field if non-nil, zero value otherwise.

### GetMinNumericOk

`func (o *Passwordpolicyv3dto) GetMinNumericOk() (*int64, bool)`

GetMinNumericOk returns a tuple with the MinNumeric field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinNumeric

`func (o *Passwordpolicyv3dto) SetMinNumeric(v int64)`

SetMinNumeric sets MinNumeric field to given value.

### HasMinNumeric

`func (o *Passwordpolicyv3dto) HasMinNumeric() bool`

HasMinNumeric returns a boolean if a field has been set.

### GetMinSpecial

`func (o *Passwordpolicyv3dto) GetMinSpecial() int64`

GetMinSpecial returns the MinSpecial field if non-nil, zero value otherwise.

### GetMinSpecialOk

`func (o *Passwordpolicyv3dto) GetMinSpecialOk() (*int64, bool)`

GetMinSpecialOk returns a tuple with the MinSpecial field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinSpecial

`func (o *Passwordpolicyv3dto) SetMinSpecial(v int64)`

SetMinSpecial sets MinSpecial field to given value.

### HasMinSpecial

`func (o *Passwordpolicyv3dto) HasMinSpecial() bool`

HasMinSpecial returns a boolean if a field has been set.

### GetMinUpper

`func (o *Passwordpolicyv3dto) GetMinUpper() int64`

GetMinUpper returns the MinUpper field if non-nil, zero value otherwise.

### GetMinUpperOk

`func (o *Passwordpolicyv3dto) GetMinUpperOk() (*int64, bool)`

GetMinUpperOk returns a tuple with the MinUpper field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinUpper

`func (o *Passwordpolicyv3dto) SetMinUpper(v int64)`

SetMinUpper sets MinUpper field to given value.

### HasMinUpper

`func (o *Passwordpolicyv3dto) HasMinUpper() bool`

HasMinUpper returns a boolean if a field has been set.

### GetPasswordExpiration

`func (o *Passwordpolicyv3dto) GetPasswordExpiration() int64`

GetPasswordExpiration returns the PasswordExpiration field if non-nil, zero value otherwise.

### GetPasswordExpirationOk

`func (o *Passwordpolicyv3dto) GetPasswordExpirationOk() (*int64, bool)`

GetPasswordExpirationOk returns a tuple with the PasswordExpiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPasswordExpiration

`func (o *Passwordpolicyv3dto) SetPasswordExpiration(v int64)`

SetPasswordExpiration sets PasswordExpiration field to given value.

### HasPasswordExpiration

`func (o *Passwordpolicyv3dto) HasPasswordExpiration() bool`

HasPasswordExpiration returns a boolean if a field has been set.

### GetDefaultPolicy

`func (o *Passwordpolicyv3dto) GetDefaultPolicy() bool`

GetDefaultPolicy returns the DefaultPolicy field if non-nil, zero value otherwise.

### GetDefaultPolicyOk

`func (o *Passwordpolicyv3dto) GetDefaultPolicyOk() (*bool, bool)`

GetDefaultPolicyOk returns a tuple with the DefaultPolicy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultPolicy

`func (o *Passwordpolicyv3dto) SetDefaultPolicy(v bool)`

SetDefaultPolicy sets DefaultPolicy field to given value.

### HasDefaultPolicy

`func (o *Passwordpolicyv3dto) HasDefaultPolicy() bool`

HasDefaultPolicy returns a boolean if a field has been set.

### GetEnablePasswdExpiration

`func (o *Passwordpolicyv3dto) GetEnablePasswdExpiration() bool`

GetEnablePasswdExpiration returns the EnablePasswdExpiration field if non-nil, zero value otherwise.

### GetEnablePasswdExpirationOk

`func (o *Passwordpolicyv3dto) GetEnablePasswdExpirationOk() (*bool, bool)`

GetEnablePasswdExpirationOk returns a tuple with the EnablePasswdExpiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnablePasswdExpiration

`func (o *Passwordpolicyv3dto) SetEnablePasswdExpiration(v bool)`

SetEnablePasswdExpiration sets EnablePasswdExpiration field to given value.

### HasEnablePasswdExpiration

`func (o *Passwordpolicyv3dto) HasEnablePasswdExpiration() bool`

HasEnablePasswdExpiration returns a boolean if a field has been set.

### GetRequireStrongAuthn

`func (o *Passwordpolicyv3dto) GetRequireStrongAuthn() bool`

GetRequireStrongAuthn returns the RequireStrongAuthn field if non-nil, zero value otherwise.

### GetRequireStrongAuthnOk

`func (o *Passwordpolicyv3dto) GetRequireStrongAuthnOk() (*bool, bool)`

GetRequireStrongAuthnOk returns a tuple with the RequireStrongAuthn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequireStrongAuthn

`func (o *Passwordpolicyv3dto) SetRequireStrongAuthn(v bool)`

SetRequireStrongAuthn sets RequireStrongAuthn field to given value.

### HasRequireStrongAuthn

`func (o *Passwordpolicyv3dto) HasRequireStrongAuthn() bool`

HasRequireStrongAuthn returns a boolean if a field has been set.

### GetRequireStrongAuthOffNetwork

`func (o *Passwordpolicyv3dto) GetRequireStrongAuthOffNetwork() bool`

GetRequireStrongAuthOffNetwork returns the RequireStrongAuthOffNetwork field if non-nil, zero value otherwise.

### GetRequireStrongAuthOffNetworkOk

`func (o *Passwordpolicyv3dto) GetRequireStrongAuthOffNetworkOk() (*bool, bool)`

GetRequireStrongAuthOffNetworkOk returns a tuple with the RequireStrongAuthOffNetwork field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequireStrongAuthOffNetwork

`func (o *Passwordpolicyv3dto) SetRequireStrongAuthOffNetwork(v bool)`

SetRequireStrongAuthOffNetwork sets RequireStrongAuthOffNetwork field to given value.

### HasRequireStrongAuthOffNetwork

`func (o *Passwordpolicyv3dto) HasRequireStrongAuthOffNetwork() bool`

HasRequireStrongAuthOffNetwork returns a boolean if a field has been set.

### GetRequireStrongAuthUntrustedGeographies

`func (o *Passwordpolicyv3dto) GetRequireStrongAuthUntrustedGeographies() bool`

GetRequireStrongAuthUntrustedGeographies returns the RequireStrongAuthUntrustedGeographies field if non-nil, zero value otherwise.

### GetRequireStrongAuthUntrustedGeographiesOk

`func (o *Passwordpolicyv3dto) GetRequireStrongAuthUntrustedGeographiesOk() (*bool, bool)`

GetRequireStrongAuthUntrustedGeographiesOk returns a tuple with the RequireStrongAuthUntrustedGeographies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequireStrongAuthUntrustedGeographies

`func (o *Passwordpolicyv3dto) SetRequireStrongAuthUntrustedGeographies(v bool)`

SetRequireStrongAuthUntrustedGeographies sets RequireStrongAuthUntrustedGeographies field to given value.

### HasRequireStrongAuthUntrustedGeographies

`func (o *Passwordpolicyv3dto) HasRequireStrongAuthUntrustedGeographies() bool`

HasRequireStrongAuthUntrustedGeographies returns a boolean if a field has been set.

### GetUseAccountAttributes

`func (o *Passwordpolicyv3dto) GetUseAccountAttributes() bool`

GetUseAccountAttributes returns the UseAccountAttributes field if non-nil, zero value otherwise.

### GetUseAccountAttributesOk

`func (o *Passwordpolicyv3dto) GetUseAccountAttributesOk() (*bool, bool)`

GetUseAccountAttributesOk returns a tuple with the UseAccountAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseAccountAttributes

`func (o *Passwordpolicyv3dto) SetUseAccountAttributes(v bool)`

SetUseAccountAttributes sets UseAccountAttributes field to given value.

### HasUseAccountAttributes

`func (o *Passwordpolicyv3dto) HasUseAccountAttributes() bool`

HasUseAccountAttributes returns a boolean if a field has been set.

### GetUseDictionary

`func (o *Passwordpolicyv3dto) GetUseDictionary() bool`

GetUseDictionary returns the UseDictionary field if non-nil, zero value otherwise.

### GetUseDictionaryOk

`func (o *Passwordpolicyv3dto) GetUseDictionaryOk() (*bool, bool)`

GetUseDictionaryOk returns a tuple with the UseDictionary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseDictionary

`func (o *Passwordpolicyv3dto) SetUseDictionary(v bool)`

SetUseDictionary sets UseDictionary field to given value.

### HasUseDictionary

`func (o *Passwordpolicyv3dto) HasUseDictionary() bool`

HasUseDictionary returns a boolean if a field has been set.

### GetUseIdentityAttributes

`func (o *Passwordpolicyv3dto) GetUseIdentityAttributes() bool`

GetUseIdentityAttributes returns the UseIdentityAttributes field if non-nil, zero value otherwise.

### GetUseIdentityAttributesOk

`func (o *Passwordpolicyv3dto) GetUseIdentityAttributesOk() (*bool, bool)`

GetUseIdentityAttributesOk returns a tuple with the UseIdentityAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseIdentityAttributes

`func (o *Passwordpolicyv3dto) SetUseIdentityAttributes(v bool)`

SetUseIdentityAttributes sets UseIdentityAttributes field to given value.

### HasUseIdentityAttributes

`func (o *Passwordpolicyv3dto) HasUseIdentityAttributes() bool`

HasUseIdentityAttributes returns a boolean if a field has been set.

### GetValidateAgainstAccountId

`func (o *Passwordpolicyv3dto) GetValidateAgainstAccountId() bool`

GetValidateAgainstAccountId returns the ValidateAgainstAccountId field if non-nil, zero value otherwise.

### GetValidateAgainstAccountIdOk

`func (o *Passwordpolicyv3dto) GetValidateAgainstAccountIdOk() (*bool, bool)`

GetValidateAgainstAccountIdOk returns a tuple with the ValidateAgainstAccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidateAgainstAccountId

`func (o *Passwordpolicyv3dto) SetValidateAgainstAccountId(v bool)`

SetValidateAgainstAccountId sets ValidateAgainstAccountId field to given value.

### HasValidateAgainstAccountId

`func (o *Passwordpolicyv3dto) HasValidateAgainstAccountId() bool`

HasValidateAgainstAccountId returns a boolean if a field has been set.

### GetValidateAgainstAccountName

`func (o *Passwordpolicyv3dto) GetValidateAgainstAccountName() bool`

GetValidateAgainstAccountName returns the ValidateAgainstAccountName field if non-nil, zero value otherwise.

### GetValidateAgainstAccountNameOk

`func (o *Passwordpolicyv3dto) GetValidateAgainstAccountNameOk() (*bool, bool)`

GetValidateAgainstAccountNameOk returns a tuple with the ValidateAgainstAccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidateAgainstAccountName

`func (o *Passwordpolicyv3dto) SetValidateAgainstAccountName(v bool)`

SetValidateAgainstAccountName sets ValidateAgainstAccountName field to given value.

### HasValidateAgainstAccountName

`func (o *Passwordpolicyv3dto) HasValidateAgainstAccountName() bool`

HasValidateAgainstAccountName returns a boolean if a field has been set.

### GetCreated

`func (o *Passwordpolicyv3dto) GetCreated() string`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Passwordpolicyv3dto) GetCreatedOk() (*string, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Passwordpolicyv3dto) SetCreated(v string)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Passwordpolicyv3dto) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *Passwordpolicyv3dto) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *Passwordpolicyv3dto) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetModified

`func (o *Passwordpolicyv3dto) GetModified() string`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Passwordpolicyv3dto) GetModifiedOk() (*string, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Passwordpolicyv3dto) SetModified(v string)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Passwordpolicyv3dto) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *Passwordpolicyv3dto) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *Passwordpolicyv3dto) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetSourceIds

`func (o *Passwordpolicyv3dto) GetSourceIds() []string`

GetSourceIds returns the SourceIds field if non-nil, zero value otherwise.

### GetSourceIdsOk

`func (o *Passwordpolicyv3dto) GetSourceIdsOk() (*[]string, bool)`

GetSourceIdsOk returns a tuple with the SourceIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceIds

`func (o *Passwordpolicyv3dto) SetSourceIds(v []string)`

SetSourceIds sets SourceIds field to given value.

### HasSourceIds

`func (o *Passwordpolicyv3dto) HasSourceIds() bool`

HasSourceIds returns a boolean if a field has been set.


