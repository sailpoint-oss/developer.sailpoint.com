---
id: v2025-email-status-dto
title: EmailStatusDto
pagination_label: EmailStatusDto
sidebar_label: EmailStatusDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EmailStatusDto', 'V2025EmailStatusDto'] 
slug: /tools/sdk/go/v2025/models/email-status-dto
tags: ['SDK', 'Software Development Kit', 'EmailStatusDto', 'V2025EmailStatusDto']
---

# EmailStatusDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **NullableString** |  | [optional] 
**Email** | Pointer to **string** |  | [optional] 
**IsVerifiedByDomain** | Pointer to **bool** |  | [optional] 
**VerificationStatus** | Pointer to **string** |  | [optional] 

## Methods

### NewEmailStatusDto

`func NewEmailStatusDto() *EmailStatusDto`

NewEmailStatusDto instantiates a new EmailStatusDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEmailStatusDtoWithDefaults

`func NewEmailStatusDtoWithDefaults() *EmailStatusDto`

NewEmailStatusDtoWithDefaults instantiates a new EmailStatusDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *EmailStatusDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *EmailStatusDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *EmailStatusDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *EmailStatusDto) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *EmailStatusDto) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *EmailStatusDto) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetEmail

`func (o *EmailStatusDto) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *EmailStatusDto) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *EmailStatusDto) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *EmailStatusDto) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetIsVerifiedByDomain

`func (o *EmailStatusDto) GetIsVerifiedByDomain() bool`

GetIsVerifiedByDomain returns the IsVerifiedByDomain field if non-nil, zero value otherwise.

### GetIsVerifiedByDomainOk

`func (o *EmailStatusDto) GetIsVerifiedByDomainOk() (*bool, bool)`

GetIsVerifiedByDomainOk returns a tuple with the IsVerifiedByDomain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsVerifiedByDomain

`func (o *EmailStatusDto) SetIsVerifiedByDomain(v bool)`

SetIsVerifiedByDomain sets IsVerifiedByDomain field to given value.

### HasIsVerifiedByDomain

`func (o *EmailStatusDto) HasIsVerifiedByDomain() bool`

HasIsVerifiedByDomain returns a boolean if a field has been set.

### GetVerificationStatus

`func (o *EmailStatusDto) GetVerificationStatus() string`

GetVerificationStatus returns the VerificationStatus field if non-nil, zero value otherwise.

### GetVerificationStatusOk

`func (o *EmailStatusDto) GetVerificationStatusOk() (*string, bool)`

GetVerificationStatusOk returns a tuple with the VerificationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVerificationStatus

`func (o *EmailStatusDto) SetVerificationStatus(v string)`

SetVerificationStatus sets VerificationStatus field to given value.

### HasVerificationStatus

`func (o *EmailStatusDto) HasVerificationStatus() bool`

HasVerificationStatus returns a boolean if a field has been set.


