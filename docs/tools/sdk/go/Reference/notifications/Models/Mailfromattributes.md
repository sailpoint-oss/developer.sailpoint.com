---
id: v1-mailfromattributes
title: Mailfromattributes
pagination_label: Mailfromattributes
sidebar_label: Mailfromattributes
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Mailfromattributes', 'V1Mailfromattributes'] 
slug: /tools/sdk/go/notifications/models/mailfromattributes
tags: ['SDK', 'Software Development Kit', 'Mailfromattributes', 'V1Mailfromattributes']
---

# Mailfromattributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | Pointer to **string** | The email identity | [optional] 
**MailFromDomain** | Pointer to **string** | The name of a domain that an email identity uses as a custom MAIL FROM domain | [optional] 
**MxRecord** | Pointer to **string** | MX record that is required in customer's DNS to allow the domain to receive bounce and complaint notifications that email providers send you | [optional] 
**TxtRecord** | Pointer to **string** | TXT record that is required in customer's DNS in order to prove that Amazon SES is authorized to send email from your domain | [optional] 
**MailFromDomainStatus** | Pointer to **string** | The current status of the MAIL FROM verification | [optional] 

## Methods

### NewMailfromattributes

`func NewMailfromattributes() *Mailfromattributes`

NewMailfromattributes instantiates a new Mailfromattributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMailfromattributesWithDefaults

`func NewMailfromattributesWithDefaults() *Mailfromattributes`

NewMailfromattributesWithDefaults instantiates a new Mailfromattributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentity

`func (o *Mailfromattributes) GetIdentity() string`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *Mailfromattributes) GetIdentityOk() (*string, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *Mailfromattributes) SetIdentity(v string)`

SetIdentity sets Identity field to given value.

### HasIdentity

`func (o *Mailfromattributes) HasIdentity() bool`

HasIdentity returns a boolean if a field has been set.

### GetMailFromDomain

`func (o *Mailfromattributes) GetMailFromDomain() string`

GetMailFromDomain returns the MailFromDomain field if non-nil, zero value otherwise.

### GetMailFromDomainOk

`func (o *Mailfromattributes) GetMailFromDomainOk() (*string, bool)`

GetMailFromDomainOk returns a tuple with the MailFromDomain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMailFromDomain

`func (o *Mailfromattributes) SetMailFromDomain(v string)`

SetMailFromDomain sets MailFromDomain field to given value.

### HasMailFromDomain

`func (o *Mailfromattributes) HasMailFromDomain() bool`

HasMailFromDomain returns a boolean if a field has been set.

### GetMxRecord

`func (o *Mailfromattributes) GetMxRecord() string`

GetMxRecord returns the MxRecord field if non-nil, zero value otherwise.

### GetMxRecordOk

`func (o *Mailfromattributes) GetMxRecordOk() (*string, bool)`

GetMxRecordOk returns a tuple with the MxRecord field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMxRecord

`func (o *Mailfromattributes) SetMxRecord(v string)`

SetMxRecord sets MxRecord field to given value.

### HasMxRecord

`func (o *Mailfromattributes) HasMxRecord() bool`

HasMxRecord returns a boolean if a field has been set.

### GetTxtRecord

`func (o *Mailfromattributes) GetTxtRecord() string`

GetTxtRecord returns the TxtRecord field if non-nil, zero value otherwise.

### GetTxtRecordOk

`func (o *Mailfromattributes) GetTxtRecordOk() (*string, bool)`

GetTxtRecordOk returns a tuple with the TxtRecord field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTxtRecord

`func (o *Mailfromattributes) SetTxtRecord(v string)`

SetTxtRecord sets TxtRecord field to given value.

### HasTxtRecord

`func (o *Mailfromattributes) HasTxtRecord() bool`

HasTxtRecord returns a boolean if a field has been set.

### GetMailFromDomainStatus

`func (o *Mailfromattributes) GetMailFromDomainStatus() string`

GetMailFromDomainStatus returns the MailFromDomainStatus field if non-nil, zero value otherwise.

### GetMailFromDomainStatusOk

`func (o *Mailfromattributes) GetMailFromDomainStatusOk() (*string, bool)`

GetMailFromDomainStatusOk returns a tuple with the MailFromDomainStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMailFromDomainStatus

`func (o *Mailfromattributes) SetMailFromDomainStatus(v string)`

SetMailFromDomainStatus sets MailFromDomainStatus field to given value.

### HasMailFromDomainStatus

`func (o *Mailfromattributes) HasMailFromDomainStatus() bool`

HasMailFromDomainStatus returns a boolean if a field has been set.


