---
id: v1-domainstatusdto
title: Domainstatusdto
pagination_label: Domainstatusdto
sidebar_label: Domainstatusdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Domainstatusdto', 'V1Domainstatusdto'] 
slug: /tools/sdk/go/notifications/models/domainstatusdto
tags: ['SDK', 'Software Development Kit', 'Domainstatusdto', 'V1Domainstatusdto']
---

# Domainstatusdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | New UUID associated with domain to be verified | [optional] 
**Domain** | Pointer to **string** | A domain address | [optional] 
**DkimEnabled** | Pointer to **bool** | DKIM is enabled for this domain | [optional] [default to false]
**DkimTokens** | Pointer to **[]string** | DKIM tokens required for authentication | [optional] 
**DkimVerificationStatus** | Pointer to **string** | Status of DKIM authentication | [optional] 
**Region** | Pointer to **string** | The AWS SES region the domain is associated with | [optional] 

## Methods

### NewDomainstatusdto

`func NewDomainstatusdto() *Domainstatusdto`

NewDomainstatusdto instantiates a new Domainstatusdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDomainstatusdtoWithDefaults

`func NewDomainstatusdtoWithDefaults() *Domainstatusdto`

NewDomainstatusdtoWithDefaults instantiates a new Domainstatusdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Domainstatusdto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Domainstatusdto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Domainstatusdto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Domainstatusdto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetDomain

`func (o *Domainstatusdto) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *Domainstatusdto) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *Domainstatusdto) SetDomain(v string)`

SetDomain sets Domain field to given value.

### HasDomain

`func (o *Domainstatusdto) HasDomain() bool`

HasDomain returns a boolean if a field has been set.

### GetDkimEnabled

`func (o *Domainstatusdto) GetDkimEnabled() bool`

GetDkimEnabled returns the DkimEnabled field if non-nil, zero value otherwise.

### GetDkimEnabledOk

`func (o *Domainstatusdto) GetDkimEnabledOk() (*bool, bool)`

GetDkimEnabledOk returns a tuple with the DkimEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDkimEnabled

`func (o *Domainstatusdto) SetDkimEnabled(v bool)`

SetDkimEnabled sets DkimEnabled field to given value.

### HasDkimEnabled

`func (o *Domainstatusdto) HasDkimEnabled() bool`

HasDkimEnabled returns a boolean if a field has been set.

### GetDkimTokens

`func (o *Domainstatusdto) GetDkimTokens() []string`

GetDkimTokens returns the DkimTokens field if non-nil, zero value otherwise.

### GetDkimTokensOk

`func (o *Domainstatusdto) GetDkimTokensOk() (*[]string, bool)`

GetDkimTokensOk returns a tuple with the DkimTokens field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDkimTokens

`func (o *Domainstatusdto) SetDkimTokens(v []string)`

SetDkimTokens sets DkimTokens field to given value.

### HasDkimTokens

`func (o *Domainstatusdto) HasDkimTokens() bool`

HasDkimTokens returns a boolean if a field has been set.

### GetDkimVerificationStatus

`func (o *Domainstatusdto) GetDkimVerificationStatus() string`

GetDkimVerificationStatus returns the DkimVerificationStatus field if non-nil, zero value otherwise.

### GetDkimVerificationStatusOk

`func (o *Domainstatusdto) GetDkimVerificationStatusOk() (*string, bool)`

GetDkimVerificationStatusOk returns a tuple with the DkimVerificationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDkimVerificationStatus

`func (o *Domainstatusdto) SetDkimVerificationStatus(v string)`

SetDkimVerificationStatus sets DkimVerificationStatus field to given value.

### HasDkimVerificationStatus

`func (o *Domainstatusdto) HasDkimVerificationStatus() bool`

HasDkimVerificationStatus returns a boolean if a field has been set.

### GetRegion

`func (o *Domainstatusdto) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *Domainstatusdto) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *Domainstatusdto) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *Domainstatusdto) HasRegion() bool`

HasRegion returns a boolean if a field has been set.


