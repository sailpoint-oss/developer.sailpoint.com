---
id: mail-from-attributes-dto
title: MailFromAttributesDto
pagination_label: MailFromAttributesDto
sidebar_label: MailFromAttributesDto
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'MailFromAttributesDto'] 
slug: /tools/sdk/go/beta/models/mail-from-attributes-dto
tags: ['SDK', 'Software Development Kit', 'MailFromAttributesDto']
---

# MailFromAttributesDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** |  Pointer to **string** | The identity or domain address | [optional] 
**MailFromDomain** |  Pointer to **string** | The new MAIL FROM domain of the identity. Must be a subdomain of the identity. | [optional] 

## Methods

### NewMailFromAttributesDto

`func NewMailFromAttributesDto() *MailFromAttributesDto`

NewMailFromAttributesDto instantiates a new MailFromAttributesDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMailFromAttributesDtoWithDefaults

`func NewMailFromAttributesDtoWithDefaults() *MailFromAttributesDto`

NewMailFromAttributesDtoWithDefaults instantiates a new MailFromAttributesDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentity

`func (o *MailFromAttributesDto) GetIdentity() string`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *MailFromAttributesDto) GetIdentityOk() (*string, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *MailFromAttributesDto) SetIdentity(v string)`

SetIdentity sets Identity field to given value.

### HasIdentity

`func (o *MailFromAttributesDto) HasIdentity() bool`

HasIdentity returns a boolean if a field has been set.

### GetMailFromDomain

`func (o *MailFromAttributesDto) GetMailFromDomain() string`

GetMailFromDomain returns the MailFromDomain field if non-nil, zero value otherwise.

### GetMailFromDomainOk

`func (o *MailFromAttributesDto) GetMailFromDomainOk() (*string, bool)`

GetMailFromDomainOk returns a tuple with the MailFromDomain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMailFromDomain

`func (o *MailFromAttributesDto) SetMailFromDomain(v string)`

SetMailFromDomain sets MailFromDomain field to given value.

### HasMailFromDomain

`func (o *MailFromAttributesDto) HasMailFromDomain() bool`

HasMailFromDomain returns a boolean if a field has been set.


[[Back to top]](#) 


