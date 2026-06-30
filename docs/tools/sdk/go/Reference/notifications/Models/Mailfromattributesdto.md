---
id: v1-mailfromattributesdto
title: Mailfromattributesdto
pagination_label: Mailfromattributesdto
sidebar_label: Mailfromattributesdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Mailfromattributesdto', 'V1Mailfromattributesdto'] 
slug: /tools/sdk/go/notifications/models/mailfromattributesdto
tags: ['SDK', 'Software Development Kit', 'Mailfromattributesdto', 'V1Mailfromattributesdto']
---

# Mailfromattributesdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | Pointer to **string** | The identity or domain address | [optional] 
**MailFromDomain** | Pointer to **string** | The new MAIL FROM domain of the identity. Must be a subdomain of the identity. | [optional] 

## Methods

### NewMailfromattributesdto

`func NewMailfromattributesdto() *Mailfromattributesdto`

NewMailfromattributesdto instantiates a new Mailfromattributesdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMailfromattributesdtoWithDefaults

`func NewMailfromattributesdtoWithDefaults() *Mailfromattributesdto`

NewMailfromattributesdtoWithDefaults instantiates a new Mailfromattributesdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentity

`func (o *Mailfromattributesdto) GetIdentity() string`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *Mailfromattributesdto) GetIdentityOk() (*string, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *Mailfromattributesdto) SetIdentity(v string)`

SetIdentity sets Identity field to given value.

### HasIdentity

`func (o *Mailfromattributesdto) HasIdentity() bool`

HasIdentity returns a boolean if a field has been set.

### GetMailFromDomain

`func (o *Mailfromattributesdto) GetMailFromDomain() string`

GetMailFromDomain returns the MailFromDomain field if non-nil, zero value otherwise.

### GetMailFromDomainOk

`func (o *Mailfromattributesdto) GetMailFromDomainOk() (*string, bool)`

GetMailFromDomainOk returns a tuple with the MailFromDomain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMailFromDomain

`func (o *Mailfromattributesdto) SetMailFromDomain(v string)`

SetMailFromDomain sets MailFromDomain field to given value.

### HasMailFromDomain

`func (o *Mailfromattributesdto) HasMailFromDomain() bool`

HasMailFromDomain returns a boolean if a field has been set.


