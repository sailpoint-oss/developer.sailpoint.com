---
id: email-status-dto
title: EmailStatusDto
pagination_label: EmailStatusDto
sidebar_label: EmailStatusDto
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'EmailStatusDto'] 
slug: /tools/sdk/go/beta/models/email-status-dto
tags: ['SDK', 'Software Development Kit', 'EmailStatusDto']
---

# EmailStatusDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **string** |  | [optional] 
**Email** |  Pointer to **string** |  | [optional] 
**VerificationStatus** |  Pointer to **string** |  | [optional] 

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


[[Back to top]](#) 


